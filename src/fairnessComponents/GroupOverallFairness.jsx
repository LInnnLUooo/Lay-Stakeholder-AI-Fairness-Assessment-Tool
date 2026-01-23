import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import React, { useEffect,useState,useRef } from 'react';
import * as d3 from 'd3';
import Button from '@mui/material/Button';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import GroupOverallFairnessGenderChart from './GroupOverallFairnessGenderChart'
import GroupOverallFairnessForeignerChart from './GroupOverallFairnessForeignerChart'

import { useNavigate } from 'react-router-dom';
//nevigate path：
const EXPLAIN_PATH = "/explanation";
const EXPLAIN_GENDER_PATH = "/explanationGender";
const EXPLAIN_FOREIGNER_PATH = "/explanationForeigner";

// set fairness threshold
const marks = [
  {
    value: 0,
    label: '0%',
  },
  {
    value: 10,
    label: '10%',
  },
  {
    value: 20,
    label: '20%',
  },
  {
    value: 30,
    label: '30%',
  },
  {
    value: 40,
    label: '40%',
  },
  {
    value: 50,
    label: '50%',
  },
];

function valuetext(value) {
  return `${value}%`;
}

export default function GroupOverallFairness() {   
    //set Radio change event for the "box(sensitive feature)" update
    const [selectedSensitiveFeature, setSelectedSensitiveFeature] = useState("Age");

  //Set navigate of different 'pages'
    const navigate = useNavigate(); 

    // set dynamic fairness area According to the threshold
    const [rectHeight,setRectHeight] = useState(10); // null 为不设置初始值。初始化高度为0.1,即fairness的值为0.1
    const [rectLowHeight,setRectLowHeight] = useState(-10); // 初始化高度为0.1,即fairness的值为0.1

    // Scatter Plot 
    const [data] = useState([[1,-1],
      [2,-4],[3,10],[4,10],[5,-14],[6,17],[7,8],[8,-28],[9,6]])
    // const [data] = useState([-0.01,-0.08,0.2,0.2,-0.26,-0.07,-0.25,0.09,0.05])
    const xAxisNames = ["", "DP", "EO", "PE", "EOs", "OT", "CSP1", "CSP2", "CSP3", "CSP4"];
    const svgRef = useRef();
    
    useEffect(()=>{

    // step1：set up container dimensons & svg 
    const w = 430; // width
    const h = 500; //height
    const svg = d3.select(svgRef.current)
          .attr('width',"90%")
          .attr('height',h)
          .attr('viewBox', '0 0 450 500')
          .style('overflow','visible')
          .style('margin-top','20px')

     svg.selectAll('*').remove(); //每次渲染 清除其他可能存在的svg 重新渲染整个图
    // step2：set up scaling
    const xScale = d3.scaleLinear()
          .domain([0,9])
          .range([0, w])  // chart dimensions of x
     
    const yScale = d3.scaleLinear()
          .domain([-50, 50]) // x value scale
          .range([h, 0]);    // chart dimensions of y     

    // step3：set up axis           
    const xAxis = d3.axisBottom(xScale).ticks(data.length).tickFormat(d => xAxisNames[d]); //  put the x scale in the X axis
    const yAxis = d3.axisLeft(yScale).ticks(10); // ticks: number of dots in the axis
    svg.append('g').call(xAxis).attr('transform', `translate(0, ${h/2})`).style("font-size", "16px");// 将一个<g>元素添加到SVG元素中。<g>元素通常用于组合其他图形元素，例如坐标轴、标签等，以便进行位置和样式的集中管理
    svg.append('g').call(yAxis).style("font-size", "16px");;


    // step4：set up axis labelling
    svg.append('text').attr('x',w/3).attr('y',h+20)
        .text('Fairness Metrics')
        .style('font-size', '18px')
    svg.append('text').attr('y',-60).attr('x',-180)
                .attr('transform', 'rotate(-90)')
                .style('text-anchor', 'middle') // 水平居中对齐
                .style('dominant-baseline', 'middle') // 垂直居中对齐
                .style('font-size', '18px')
                .text('Fairness Results(difference between age groups)')
    // step:5 set up svg data
    // svg.selectAll().data(data).enter().append('circle')
    //                               .attr('cx',d => xScale(d[0]))
    //                               .attr('cy',d => yScale(d[1])) // d是一个二维数组
    //                               .attr('r',4)
    //                               .style("fill", "#04a643")


    // 渲染数据点
    svg.selectAll('circle').remove();
    svg.selectAll('.red-circle').remove();
    
    svg.selectAll('circle')
      .data(data.filter(d => d[1] >= rectLowHeight && d[1] <= rectHeight))
      .enter()
      .append('circle')
      .attr('cx', d => xScale(d[0]))
      .attr('cy', d => yScale(d[1]))
      .attr('r', 4)
      .style('fill', '#047731');

    svg.selectAll('.red-circle')
      .data(data.filter(d => d[1] < rectLowHeight || d[1] > rectHeight))
      .enter()
      .append('circle')
      .attr('cx', d => xScale(d[0]))
      .attr('cy', d => yScale(d[1]))
      .attr('r', 4)
      .style('fill', 'red')
      .attr('class', 'red-circle');

    // step6: add value “tooltips”
    // Add text labels above the circles
    svg.selectAll('text.datapoint-label')
    .data(data)
    .enter()
    .append('text')
    .attr('x', d => xScale(d[0]))
    .attr('y', d => yScale(d[1]) + 25)  // position the text 10 units above the circle
    .attr('class', 'datapoint-label')
    .attr('text-anchor', 'middle')  // center the text on the circle's position
    .style('font-size', '14px')
    .style('font-weight', 'bold') 
    .text(d => `${d[1]}%`); 
  
      //step 7：创建区域背景颜色
    svg.select('rect').remove(); // 太重要了 不然 从0.5滑回0的过程中 rect区域会被原来大的覆盖，看起来像没有减小一样。
    
    svg
    .insert('rect', ':first-child')
    .attr('x', 0)
    .attr('y', yScale(rectHeight))
    .attr('width',xScale(9) - xScale(0))
    .attr('height', yScale(rectLowHeight)-yScale(rectHeight))
    .attr('fill', '#baedce');
    
    console.log(rectLowHeight);
    console.log(rectHeight);

    },[data,rectLowHeight,rectHeight,selectedSensitiveFeature])
    
    
    const handleSliderChange = (event, newValue) => {
      setRectHeight(newValue);
      setRectLowHeight(-newValue); 
      
    } // 更新高度状态

    

  return (
    <Box display="flex" flexDirection="column" alignItems="center" width = {500}> 

        {/* 1 Title at the top center */}
        <Typography variant="h6" component="div" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
              Group Fairness Overview
        </Typography>

        {/* 2 Group Selector*/}
        <Box 
            display="flex"
            alignItems="left"
            flexDirection="column"
            width="90%" // 可根据需要调整
            height={180}
            border={`2px solid #42a5f5`} // 添加边框
            //boxShadow="0px 4px 12px #7986cb" // 添加阴影效果
            borderRadius="8px"
            padding="6px"
            >
                {/* 2.1Group Selector*/}
                 <Box padding="6px">
                      {/* RadioGroup */}
                      <FormControl>
                          <FormLabel id="group-selection-label" sx={{ textAlign: 'left' }}>Choose a Protected Goup According to</FormLabel>
                          <RadioGroup
                            row
                            aria-labelledby="group-selection-label"
                            defaultValue="Age"
                            name="group-selection"
                            onChange={event => setSelectedSensitiveFeature(event.target.value)}
                          >
                            <FormControlLabel value="Age" control={<Radio />} label="Age" />
                            <FormControlLabel value="Gender" control={<Radio />} label="Gender" />
                            <FormControlLabel value="Foreign Worker" control={<Radio />} label="Foreign Worker" />
                          </RadioGroup>
                        </FormControl>
                    
                  </Box>

                {/* 2.2 <Threshold>*/}
                <Box padding="6px">
                    <Typography id="linear-slider" gutterBottom>
                      Set a Threshold (Difference between Groups)
                    </Typography>
                    
                    <Slider
                      aria-label="Always visible"
                      //defaultValue={0.2}
                      value={rectHeight}
                      onChange={handleSliderChange}
                      getAriaValueText={valuetext}
                      valueLabelFormat={valuetext} //用于显示在threshold上的label
                      step={1}
                      marks={marks}
                      valueLabelDisplay="on"
                    
                      min={0} // 设置最小值
                      max={50} // 设置最大值
                      sx={{ fontSize: '6px',
                      }}
                    />
                </Box>
             </Box>       
        
        {/* 3 Group Selector*/}
        <Box 
            display="flex"
            padding="6px"
            alignItems="flex-start"  // 控制垂直方向的对齐
            justifyContent="flex-end" // 控制水平方向的对齐
            //border={`2px solid #42a5f5`}
            
        >    
                {/* 根据当前的 radio 选择值，动态地渲染相应的 SVG 组件。 */}
                {selectedSensitiveFeature === "Age" &&  <svg key="ageChart" ref={svgRef} > </svg>}
                {selectedSensitiveFeature === "Gender" && <GroupOverallFairnessGenderChart key="genderChart" rectHeight={rectHeight} rectLowHeight = {rectLowHeight}/>}
                {selectedSensitiveFeature === "Foreign Worker" && <GroupOverallFairnessForeignerChart key="genderChart" rectHeight={rectHeight} rectLowHeight = {rectLowHeight}/>}
                
          </Box>
        
        {/* 4 full metric names*/}
        <Box 
            display="flex"
            margin = "30px"
            alignItems="center"  > 
            <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon color="primary"/>}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography style={{ fontSize: '12pt', fontWeight: 'bold'}} color="primary">Fairness Metrics</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  1. DP: Demographic Parity <br/>
                  2. EO: Equal Opportunity <br/>
                  3. PE: predictive Equality <br/>
                  4. EO: Equalized Odds <br/>
                  5. OT: Outcome Test <br/>
                  6. CSP: Conditional Statistical Parity <br/>
                  CSP1 : Conditional Statistical Parity (Condition: Job) <br/>
                  CSP2 : Conditional Statistical Parity (Condition: Savings) <br/>
                  CSP3 : Conditional Statistical Parity (Condition: Employment) <br/>
                  CSP4 : Conditional Statistical Parity (Condition: Credit History) <br/>
                  </Typography>
                </AccordionDetails>
              </Accordion>        
          
        </Box>

        {/* 5 Explanation Button*/}
        <Box 
            display="flex"
            alignItems="center"  > 
            {/* <Button variant="contained" onClick={() => navigate(EXPLAIN_PATH)} size="small" >View Explanations</Button>   */}
            <Button variant="contained" 
                    size="small"
                    onClick={() => {
                    switch (selectedSensitiveFeature) {
                        case "Age":
                            navigate(EXPLAIN_PATH);
                            break;
                        case "Gender":
                            navigate(EXPLAIN_GENDER_PATH); // Assume you have this constant defined for gender explanation path
                            break;
                        case "Foreign Worker":
                            navigate(EXPLAIN_FOREIGNER_PATH); // Assume you have this constant defined for foreign worker explanation path
                            break;
                        default:
                            break;
                    }
                }}>
                    View Explanations
              </Button>
        </Box>
                    

      </Box>


    
  );
}

//gender : 
  // const [data] = useState([[1,-0.11],
  //   [2,-0.12],[3,0.02],[4,-0.12],[5,-0.17],[6,-0.31],[7,-0.11],[8,-0.19],[9,-0.13]])
 
  // const xAxisNames = ["", "DP", "EO", "PE", "EOs", "OT", "CSP1", "CSP2", "CSP3", "CSP4"];
  

