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

import { useNavigate } from 'react-router-dom';
//nevigate path：
const INDIVIDUAL_PATH = "/individualOverallFairnessExplanation";

// set fairness threshold 按value从小到大，对应从左到右， label 是轴下面的下标
const marks = [
  {
    value: 0,
    label: '100%',
  },
  {
    value: 10,
    label: '90%',
  },
  {
    value: 20,
    label: '80%',
  },
  {
    value: 30,
    label: '70%',
  },
  {
    value: 40,
    label: '60%',
  },
  {
    value: 50,
    label: '50%',
  },
];

function valuetext(value) {
  return `${100 - value}%`;
}

export default function GroupOverallFairness() {
    //navigate to individual fairness explanation page
    const navigate = useNavigate(); 

    // set dynamic fairness area According to the threshold
    const [rectHeight,setRectHeight] = useState(5); // 初始化高度为10,即个人公平性的阈值为90%
    //const [rectLowHeight,setRectLowHeight] = useState(null); // 初始化高度为o.1
    

    // Scatter Plot 
    const [data] = useState([[1,99],
      [2,98.5],[3,100],[4,92]])
    const xAxisNames = ["", "CF-age", "CF-gender", "CF-foreigner", "Consistency"];
    const svgRef = useRef();
    
    useEffect(()=>{
      
    // step1：set up container dimensons & svg 
    const w = 400; // width
    const h = 500; //height
    const svg = d3.select(svgRef.current)
          .attr('width',"90%")
          .attr('height',h)
          .attr('viewBox', '0 0 400 500')
          .style('overflow','visible')
          .style('margin-top','20px')
    svg.selectAll('*').remove(); //每次渲染 清除其他可能存在的svg 重新渲染整个图
    // step2：set up scaling
    const xScale = d3.scaleLinear()
          .domain([0, 4]) // x value scale
          .range([0, w]);   // chart dimensions of x
    const yScale = d3.scaleLinear()
          .domain([50, 100]) // x value scale
          .range([h, 0]);    // chart dimensions of y     

    // step3：set up axis           
    const xAxis = d3.axisBottom(xScale).ticks(data.length).tickFormat(d => xAxisNames[d]); //  put the x scale in the X axis
    const yAxis = d3.axisLeft(yScale).ticks(5); // ticks: number of dots in the axis
    svg.append('g').call(xAxis).attr('transform', `translate(0,0)`).style("font-size", "16px");// 将一个<g>元素添加到SVG元素中。<g>元素通常用于组合其他图形元素，例如坐标轴、标签等，以便进行位置和样式的集中管理
    svg.append('g').call(yAxis).style("font-size", "16px");


    // step4：set up axis labelling
    svg.append('text').attr('x',w/3).attr('y',h+20)
        .text('Fairness Metrics')
        .style('font-size', '18px')
    svg.append('text').attr('y',-60).attr('x',-160)
                .attr('transform', 'rotate(-90)')
                .style('text-anchor', 'middle') // 水平居中对齐
                .style('dominant-baseline', 'middle') // 垂直居中对齐
                .style('font-size', '18px')
                .text('Fairness Results(among overall individuals)')


    // 渲染数据点
    svg.selectAll('circle').remove();
    svg.selectAll('.red-circle').remove();
    
    svg.selectAll('circle')
      .data(data.filter(d => d[1] >= (100-rectHeight)))
      .enter()
      .append('circle')
      .attr('cx', d => xScale(d[0]))
      .attr('cy', d => yScale(d[1]))
      .attr('r', 4)
      .style('fill', '#047731');

    svg.selectAll('.red-circle')
      .data(data.filter(d => d[1] < (100-rectHeight)))
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
    .attr('y', d => yScale(d[1]) + 40)  // position the text 10 units above the circle
    .attr('class', 'datapoint-label')
    .attr('text-anchor', 'middle')  // center the text on the circle's position
    .style('font-size', '14px')
    .style('font-weight', 'bold') 
    .text(d => `${d[1]}%`);
    
      //step 7：创建区域背景颜色
    svg.select('rect').remove(); // 太重要了 不然 从回滑的过程中 rect区域会被原来大的覆盖，看起来像没有减小一样。
    
    svg
    .insert('rect', ':first-child')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width',xScale(4) - xScale(0))
    .attr('height', yScale(1-rectHeight)-yScale(1))
    .attr('fill', '#baedce');
    
    //console.log(rectLowHeight);
    console.log(rectHeight);

    },[data,rectHeight])
    
    //slider value

    const handleSliderChange = (event, newValue) => {
      
      setRectHeight(newValue);
     // setRectLowHeight(-newValue); 
      
    } // 更新高度状态

  return (

    <Box display="flex" flexDirection="column" alignItems="center" width = {500}> 

        {/* 1 Title at the top center */}
        <Typography variant="h6" component="div" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
              Individual Fairness Overview
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
                {/* 2.1 Individual Fairness Introduction*/}
                 <Box padding="3px">
                    <Typography variant="h6" component="div" gutterBottom >
                            Similar individuals should be treated similarly.
                    </Typography>    
                </Box>

                {/* 2.2 <Threshold>*/}
                <Box padding="3px">
                    <Typography id="linear-slider" gutterBottom>
                      Set a Threshold for Individual Fairness
                    </Typography>
                    
                    <Slider
                      aria-label="Always visible"
                      //defaultValue={0.2}
                      value={rectHeight} // marks中实际设置的0-0.5value值
                      onChange={handleSliderChange} 
                      getAriaValueText={valuetext}//显示的时候需要转换为1-0.5， 字符串类型
                      valueLabelFormat={valuetext}//显示的时候需要转换,和我们的step一致起来，保存小数点后两位
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
                <svg ref={svgRef} > </svg>
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
                  1. CF: Counterfactual Fairness<br/>
                  CF-age: Counterfactual Fairness Rate of Age<br/>
                  CF-gender: Counterfactual Fairness Rate of Gender<br/>
                  CF-foreigner: Counterfactual Fairness Rate of Foreign worker<br/>
                  2. Consistency<br/>
                  </Typography>
                </AccordionDetails>
              </Accordion>        
          
        </Box>
        
        {/* 5 Explanation Button*/}
        <Box 
            display="flex"
            alignItems="center"  > 
            <Button variant="contained" onClick={() => navigate(INDIVIDUAL_PATH)} size="small" >View Explanations</Button>  
        </Box>

        
    
                     

                    
                     
                       

                          
                           
                        

      </Box>


    
  );
}


