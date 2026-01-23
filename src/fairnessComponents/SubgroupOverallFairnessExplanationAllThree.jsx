import React, { useEffect,useState,useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as d3 from 'd3';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import Paper from '@mui/material/Paper';

export default function SubgroupOverallFairnessExplanationAgeForeigner() {

    // set selected metric：default： DP
     const [metric, setMetric] = useState("Demographic Parity"); //different group fairness metrics
   
     const handleChange = (event) => {
        const selectedMetric = event.target.value;
        setMetric(selectedMetric);
    
    }

   
  return (
    <Box display="flex" flexDirection="column" alignItems="center" width = {800}> 
         
        {/* 1 title */}
        <Box display="flex" justifyContent="space-between" width="100%">
            <Typography 
                variant="h5" 
                component="div" 
                gutterBottom 
                color="primary" 
                sx={{ fontWeight: 'bold', flexGrow: 1, textAlign: 'center' }}
            >
                  Subgroup Fairness: Age & Gender & Foreign Worker
            </Typography>

               
        </Box>


         {/* 2 Select Button */}
         <Box sx={{ minWidth: 130, margin: 2 }}>
            <FormControl fullWidth style={{width: '380px'}} variant="outlined">
                <InputLabel id="metrics">Metric</InputLabel>
                <Select
                labelId="metrics"
                id="metric"
                value={metric}
                label="metrics"
                onChange={handleChange}
                >
                <MenuItem value={"Demographic Parity"}>Demographic Parity</MenuItem>
                <MenuItem value={"Equal Opportunity"}>Equal Opportunity</MenuItem>
                <MenuItem value={"Predictive Equality"}>Predictive Equality</MenuItem>
                <MenuItem value={"Equalized Odds"}>Equalized Odds</MenuItem>
                <MenuItem value={"Outcome Test"}>Outcome Test</MenuItem>
                <MenuItem value={"Conditional Statistical Parity: Job"}>Conditional Statistical Parity: Job</MenuItem>
                <MenuItem value={"Conditional Statistical Parity: Savings"}>Conditional Statistical Parity: Savings</MenuItem>
                <MenuItem value={"Conditional Statistical Parity: Employment"}>Conditional Statistical Parity: Employment</MenuItem>
                <MenuItem value={"Conditional Statistical Parity: Credit History"}>Conditional Statistical Parity: Credit History</MenuItem>
                </Select>
            </FormControl>
        </Box>

         {/* 3 Selected Metric Title */}
         <Box display="flex" justifyContent="space-between" width="100%">
                <Typography 
                    variant="body2" 
                    component="div" 
                    gutterBottom 
                    color="black" 
                    sx={{ flexGrow: 1, textAlign: 'left' }}
                >
                    {(() => {  //  ！！！No parameter needed here！
                    switch (metric) {
                        case "Demographic Parity":
                            return <span 
                            style={{ 
                                fontSize: '2em'  // 调整为你需要的大小
                            }}
                            >
                            The AI application is fairness if it has "equal" probability for <strong>different age & gender & foreign worker subgroups</strong> to have good predicted credit.
                            </span>;
                        case "Equal Opportunity":
                            return <span 
                            style={{ 
                                fontSize: '2em'  // 调整为你需要的大小
                            }}
                            >
                            The AI application is fairness if it has "equal" probability for <strong> different Rated Good Credit age & gender & foreign worker subgroups </strong> to have good predicted credit.
                            </span>;
                        case "Predictive Equality":
                            return <span 
                            style={{ 
                                fontSize: '2em'  // 调整为你需要的大小
                            }}
                            >
                            The AI application is fairness if it has "equal" probability for<strong> different Rated Bad Credit age & gender & foreign worker subgroups </strong> to have good predicted credit.
                            </span>;
                        case "Equalized Odds":
                            return <span 
                            style={{ 
                                fontSize: '2em'  // 调整为你需要的大小
                            }}
                            >
                            The AI application is fairness if Equal Opportunity and Predictive Equality meet the fairness requirement.
                            </span>;
                        case "Outcome Test":
                            return <span 
                            style={{ 
                                fontSize: '2em'  // 调整为你需要的大小
                            }}
                            >
                            The AI application is fairness if it has "equal" probability fo <strong>different Predicted as Good Credit age & gender & foreign worker subgroups</strong> to have Rated Good Credit.
                            </span>; 
                        case "Conditional Statistical Parity: Job":
                            return <span 
                            style={{ 
                                fontSize: '2em'  // 调整为你需要的大小
                            }}
                            >
                            The AI application is fairness if it has "equal" probability for <strong>different age & gender & foreign worker subgroups with sepcific job conditions</strong> to have good predicted credit.
                            </span>;
                        case "Conditional Statistical Parity: Savings":
                            return <span 
                            style={{ 
                                fontSize: '2em'  // 调整为你需要的大小
                            }}
                            >
                            The AI application is fairness if it has "equal" probability for <strong>different age & gender & foreign worker subgroups with sepcific savings conditions</strong> to have good predicted credit.
                            </span>;
                        case "Conditional Statistical Parity: Employment":
                            return <span 
                            style={{ 
                                fontSize: '2em'  // 调整为你需要的大小
                            }}
                            >
                            The AI application is fairness if it has "equal" probability for <strong>different age & gender & foreign worker subgroups with sepcific employment conditions</strong> to have good predicted credit.
                            </span>;
                        case "Conditional Statistical Parity: Credit History":
                            return <span 
                            style={{ 
                                fontSize: '2em'  // 调整为你需要的大小
                            }}
                            >
                            The AI application is fairness if it has "equal" probability for <strong>different age & gender & foreign worker subgroups with sepcific credit history conditions</strong> to have good predicted credit.
                            </span>;
                        default:
                            return <span 
                            style={{ 
                                fontSize: '2em'  // 调整为你需要的大小
                            }}
                            >
                            The AI application is fairness if it has "equal" probability for <strong>different age & gender & foreign worker subgroups</strong> to have good predicted credit.
                            </span>;
                    }
                })()} 
                </Typography>  
            </Box>

            {/* 4 chart： fairness metric result */}
            <Box 
                display="flex"
                padding="6px"
                margin="20px" 
                alignItems="center"  // 控制垂直方向的对齐
                justifyContent="center" // 控制水平方向的对齐
                //border={`2px solid #42a5f5`}
            >    
    
                    {(() => {  //  ！！！No parameter needed here！
                    switch (metric) {
                        case "Demographic Parity":
                            return (
                                <Box>
                                    <MetricChart data={[83,92,83,91,100,17]} domain={["age<25,female,foreign worker","age<25,male,foreign worker","age>=25,female,foreign worker",
                                    "age>=25,male,foreign worker","age>=25,male,local","difference"]} w={700}/>
                                </Box>
                            );
                        case "Equal Opportunity":
                            return (
                                <Box>
                                     <MetricChart data={[83,100,88,99,100,17]} domain={["age<25,female,foreign worker","age<25,male,foreign worker","age>=25,female,foreign worker",
                                    "age>=25,male,foreign worker","age>=25,male,local","difference"]} w={700}/>
                                </Box>
                            );
                        case "Predictive Equality":
                            return(
                                <Box>
                                     <MetricChart data={[83,75,73,70,100,30]} domain={["age<25,female,foreign worker","age<25,male,foreign worker","age>=25,female,foreign worker",
                                    "age>=25,male,foreign worker","age>=25,male,local","difference"]} w={700}/>
                                </Box>
                            );
                        case "Equalized Odds":
                            return(
                                <Box>
                                     <MetricEOsChart data={[17,30,30]} domain={["Equal Opportunity","Predeictive Equality","Equalized Odds"]} w={500}/>
                                </Box>
                            );
                        case "Outcome Test":
                                return(
                                    <Box>
                                        <MetricChart data={[50,75,67,79,91,41]} domain={["age<25,female,foreign worker","age<25,male,foreign worker","age>=25,female,foreign worker",
                                    "age>=25,male,foreign worker","age>=25,male,local","difference"]} w={700}/>
                                    </Box>
                                );
                        case "Conditional Statistical Parity: Job":
                            return(
                                <Box marginBottom="4rem">
                                    <MetricChart data={[78,100,89,100,75,86,79,90,94,83,100,100,25]} 
                                    domain={["age<25,female,foreign worker,skilled","age<25,female,foreign worker,unskilled/unemployed","age<25,male,foreign worker,skilled","age<25,male,foreign worker,unskilled/unemployed",
                                "age>=25,female,foreign worker,management/officer","age>=25,female,foreign worker,skilled","age>=25,female,foreign worker,unskilled/unemployed","age>=25,male,foreign worker,management/officer"
                            ,"age>=25,male,foreign worker,skilled","age>=25,male,foreign worker,unskilled/unemployed","age>=25,male,local,skilled","age>=25,male,local,unskilled/unemployed","difference"]}
                                    w={1600}/>
                                </Box>
                            );
                        case "Conditional Statistical Parity: Savings":
                            return(
                                <Box marginBottom="4rem">
                                    <MetricChart data={[80,91,82,100,90,92,100,100,20]} 
                                    domain={["age<25,female,foreign worker,<500DM/unknown","age<25,male,foreign worker,<500DM/unknown","age>=25,female,foreign worker,<500DM/unknown","age>=25,female,foreign worker,>1000DM"
                                    ,"age>=25,male,foreign worker,<500DM/unknown","age>=25,male,foreign worker,500-1000DM","age>=25,male,local,<500DM/unknown","age>=25,male,foreign worker,>1000DM","difference"]}
                                    w={1500}/>
                                </Box>
                            );
                        case "Conditional Statistical Parity: Employment":
                            return(
                                <Box marginBottom="4rem">
                                    <MetricChart data={[88,100,100,100,80,71,93,83,67,92,97,100,100,100,33]} 
                                    domain={["age<25,female,foreign worker,unemployed/<1 year","age<25,female,foreign worker,1-4 years",
                                    "age<25,male,foreign worker,unemployed/<1 year","age<25,male,foreign worker,1-4 years","age<25,male,foreign worker,>4 years",
                                    "age>=25,female,foreign worker,unemployed/<1 year","age>=25,female,foreign worker,1-4 years","age>=25,female,foreign worker,>4 years"
                                    ,"age>=25,male,foreign worker,unemployed/<1 year","age>=25,male,foreign worker,1-4 years","age>=25,male,foreign worker,>4 years"
                                    ,"age>=25,male,local,unemployed/<1 year","age>=25,male,local,1-4 years","age>=25,male,local,>4 years",            
                                    "difference"]}
                                    w={1600}/>
                                </Box>
                            );
                        case "Conditional Statistical Parity: Credit History":
                            return(
                                <Box marginBottom="4rem">
                                    <MetricChart data={[80,100,89,100,75,100,93,86,93,100,100,100,25]} 
                                    domain={["age<25,female,foreign worker,paid back duly/paid up/no credits","age<25,female,foreign worker,other credits existing",
                                    "age<25,male,foreign worker,paid back duly/paid up/no credits","age<25,male,foreign worker,other credits existing",
                                    "age>=25,female,foreign worker,paid back duly/paid up/no credits","age>=25,female,foreign worker,delayed","age>=25,female,foreign worker,other credits existing",
                                    "age>=25,male,foreign worker,paid back duly/paid up/no credits","age>=25,male,foreign worker,delayed","age>=25,male,foreign worker,other credits existing",
                                    "age>=25,male,local,paid back duly/paid up/no credits","age>=25,male,local,other credits existing",
                                    "difference"]}
                                    w={1600}/>
                                </Box>
                            );
                        default:
                            return (
                                <Box>
                                    <MetricChart data={[88,89,92,4]} domain={["age<25,foreign worker","age>=25,foreign worker","age>=25,local","difference"]} w={1400}/>
                                </Box>
                            );
                    }
                })()}  
            </Box>

            {/* 4 Text Explanation */}
            <Paper elevation={3} sx={{ width: '85%', backgroundColor: '#f5f5f5', padding: '10px', margin: '90px',borderRadius: '8px' }}>
              <Typography variant="body2" color="text.secondary" sx={{ margin: "12px",color: "black", width: '95%', fontWeight: "bold"}}>
              {(() => {  //  ！！！No parameter needed here！
                    switch (metric) {
                        case "Demographic Parity":
                            return (
                                <Box>
                                    Of <span style={{textDecoration: 'underline' }}>age{">=25"} male locals</span>, <span style={{ color: '#1976D2' }}>100%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
                                    <br />
                                    Of <span style={{textDecoration: 'underline' }}>age{"<"}25 female foreign workers, age{">=25"} female foreign workers</span>, <span style={{ color: '#1976D2' }}>83%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
                                    <br />
                                    The difference among subgroups is: <span style={{ color: '#1976D2' }}>max - min = 17%</span>
                                </Box>
                            );
                        case "Equal Opportunity":
                            return (
                                <Box>
                                    Of <span style={{textDecoration: 'underline' }}>age{"<"}25 male foreign workers, age{">=25"} male locals with Rated Good Credit</span>, <span style={{ color: '#1976D2' }}>100%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
                                    <br />
                                    Of <span style={{textDecoration: 'underline' }}>age{"<"}25 female foreign workers with Rated Good Credit</span>, <span style={{ color: '#1976D2' }}>83%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
                                    <br />
                                    The difference among subgroups is: <span style={{ color: '#1976D2' }}>max - min = 17%</span>
                                </Box>
                            );
                        case "Predictive Equality":
                            return(
                                <Box>
                                    Of <span style={{textDecoration: 'underline' }}>age{">=25"} male locals with Rated Bad Credit</span>, <span style={{ color: '#1976D2' }}>100%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
                                    <br />
                                    Of <span style={{textDecoration: 'underline' }}>age{">=25"} male foreign workers with Rated Bad Credit</span>, <span style={{ color: '#1976D2' }}>70%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
                                    <br />
                                    The difference among subgroups is: <span style={{ color: '#1976D2' }}>max - min = 30%</span>
                                </Box>
                            );
                        case "Equalized Odds":
                            return(
                                <Box>
                                    Equalized Odds combines <span style={{textDecoration: 'underline' }}>Equal Opportunity</span> and <span style={{textDecoration: 'underline' }}>Predictive Equality</span>. 
                                    <br />
                                    The difference among subgroups is: <span style={{ color: '#1976D2' }}>30%</span>
                                    
                                </Box>
                            );
                        case "Outcome Test":
                            return(
                                <Box>
                                    Of  <span style={{textDecoration: 'underline' }}>age{">=25"} male locals predicted as Good Credit</span>, <span style={{ color: '#1976D2' }}>91%</span> have Rated Good Credit. 
                                    <br />
                                    Of  <span style={{textDecoration: 'underline' }}>age{"<"}25 female foreign workers predicted as Good Credit</span>, <span style={{ color: '#1976D2' }}>50%</span> have Rated Good Credit. 
                                    <br />
                                    The difference among subgroups is: <span style={{ color: '#1976D2' }}>max - min = 41%</span> 
                                </Box>
                            );
                        case "Conditional Statistical Parity: Job":
                            return(
                                <Box >
                                    Of <span style={{textDecoration: 'underline' }}>age{"<25"} female foreign workers with unskilled/unemployed, age{"<25"} male foreign workers with unskilled/unemployed, age{">=25"} male locals with skilled jobs, age{">=25"} male locals with unskilled/unemployed</span>, <span style={{ color: '#1976D2' }}>100%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
                                    <br />
                                    Of <span style={{textDecoration: 'underline' }}>age{">=25"} female foreign workers with management/officer jobs</span>, <span style={{ color: '#1976D2' }}>75%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
                                    <br />
                                    The difference among subgroups is: <span style={{ color: '#1976D2' }}>max - min = 25%</span>
                                </Box>
                            );
                        case "Conditional Statistical Parity: Savings":
                            return(
                                <Box>
                                    Of <span style={{textDecoration: 'underline' }}>age{">=25"} female foreign workers with{' >'}1000 DM savings, age{">=25"} male locals with male foreign workers with {'<'}500DM/unknown savings,age{">=25"} male foreign workers with {'>'}1000DM savings</span>, <span style={{ color: '#1976D2' }}>100%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
                                    <br />
                                    Of <span style={{textDecoration: 'underline' }}>age{"<25"} female foreign workers with {'<'}500DM/unknown savings</span>, <span style={{ color: '#1976D2' }}>80%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
                                    <br />
                                    The difference among subgroups is: <span style={{ color: '#1976D2' }}>max - min = 20%</span>
                                </Box>
                            );
                        case "Conditional Statistical Parity: Employment":
                            return(
                                <Box>
                                    Of <span style={{textDecoration: 'underline' }}>age{"<25"} female foreign workers with 1-4 years' employment, age{"<25"} male foreign workers with umemployed/{'<'}1 year employment, age{"<25"} male foreign workers with 1-4 years' employment,age{">=25"} male locals with umemployed/{'<'}1 year employment,age{">=25"} male locals with 1-4 years' employment, age{">=25"} male locals with {'>'}4 years' employment</span>, <span style={{ color: '#1976D2' }}>100%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
                                    <br />
                                    Of <span style={{textDecoration: 'underline' }}>age{">=25"} male foreign workers with umemployed/{'<'}1 year employment</span>, <span style={{ color: '#1976D2' }}>67%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
                                    <br />
                                    The difference among subgroups is: <span style={{ color: '#1976D2' }}>max - min = 33%</span>
                                </Box>
                                );
                            case "Conditional Statistical Parity: Credit History":
                                return(
                                    <Box>
                                        Of <span style={{textDecoration: 'underline' }}>age{"<25"} female foreign workers withother credits existing, age{"<25"} male foreign workers withother credits existing,
                                        age{">=25"} female foreign workers with delayed,  age{">=25"} male foreign workers with other credits existing, age{">=25"} male locals with  paid back duly/paid up/no credits,age{">=25"} male locals with other credits existing</span>, <span style={{ color: '#1976D2' }}>100%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
                                        <br />
                                        Of <span style={{textDecoration: 'underline' }}>age{">=25"} female foreign workers with paid back duly/paid up/no credits</span>, <span style={{ color: '#1976D2' }}>75%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
                                        <br />
                                        The difference among subgroups is: <span style={{ color: '#1976D2' }}>max - min = 25%</span>
                                    </Box>
                                );
                        default:
                            return null;
                    }
                })()}   
                {/* {注意必须要有上面的括号/* the pattern (() => { ... })() defines an arrow function and immediately invokes it.  */}
                {/* This is useful in JSX when we need to execute some logic inline and return a value or a component. */} 
            
              </Typography>
            </Paper>
            
              


    </Box>
    
   );
}

function MetricChart({ data, domain,w}) {
    // Scatter Plot 
    const svgRef = useRef();
    
    useEffect(()=>{
        
    // step1：set up container dimensons & svg 
    
    const h = 400; //height
    const svg = d3.select(svgRef.current)
          .attr('width',w)
          .attr('height',h)
          .style('overflow','visible')
          .style('margin-top','20px')
    svg.selectAll("*").remove();
    
    // step2：set up scaling
    const xScale = d3.scaleBand()
          .domain(domain) // x value scale
          .range([0, w])   // chart dimensions of x
          .padding(0.5)
    const yScale = d3.scaleLinear()
          .domain([0, 100]) // x value scale
          .range([h, 0]);    // chart dimensions of y     

    // step3：set up axis           
    const xAxis = d3.axisBottom(xScale).ticks(data.length); //  put the x scale in the X axis
    const yAxis = d3.axisLeft(yScale).ticks(15); // ticks: number of dots in the axis
    svg.append('g')
        .call(xAxis)
        .attr('transform', `translate(0, ${h})`)
        .style("font-size", "18px")// 将一个<g>元素添加到SVG元素中。<g>元素通常用于组合其他图形元素，例如坐标轴、标签等，以便进行位置和样式的集中管理
        .selectAll("text")  
        .style("text-anchor", "end")  //middle： bar的正下方， end用于设置rotate角度的时候
        .attr("dx", "0em") // 
        .attr("dy", "0.7em") // Adjust as needed
        .attr("transform", "rotate(-20)");
    svg.append('g').call(yAxis);


    // step4：set up axis labelling
    // svg.append('text').attr('x',w/3).attr('y',h+10).text('Equalized Odds'); 已经设置好位置了可以直接使用的，但是不需要，因为已经有单独的标题了。
    svg.append('text').attr('y',-40).attr('x',-120)
                .attr('transform', 'rotate(-90)')
                .style('text-anchor', 'middle') // 水平居中对齐
                .style('dominant-baseline', 'middle') // 垂直居中对齐
                .text('Fairness Results');
   
    const nonDifferenceData = data.filter((d, i) => domain[i] !== 'difference');
    const differenceData = data.filter((d, i) => domain[i] === 'difference');
    
    const nonDifferenceDomain = domain.filter(d => d !== 'difference');
    
    // 绘制柱子
    svg.selectAll('.non-difference-bar')
    .data(nonDifferenceData)
    .join('rect')
    .attr('class', 'non-difference-bar')
    .attr('x', (d, i) => xScale(nonDifferenceDomain[i]))
    .attr('y', d => (d >= 0 ? yScale(d) : yScale(0)))
    .attr('width', xScale.bandwidth())
    .attr('height', d => Math.abs(yScale(0) - yScale(d)))
    .style("fill", "#8ECFC9");
    
    // 添加文本标签
    svg.selectAll('.non-difference-label')
    .data(nonDifferenceData)
    .join('text')
    .attr('class', 'non-difference-label')
    .attr('x', (d, i) => xScale(nonDifferenceDomain[i]) + xScale.bandwidth() / 2)
    .attr('y', d => (d >= 0 ? yScale(d) - 5 : yScale(0) - 5))
    .attr('text-anchor', 'middle')
    .style('fill', 'black')
    .text(d => `${d}%`);

    
    //add hover functions in the useEffect  & before using them.
    function handleMouseoverDifference() {
        const maxValue = d3.max(nonDifferenceData);
        const minValue = d3.min(nonDifferenceData);
    
        // 为最大值对应的bar设置浅蓝色
        svg.selectAll('.non-difference-bar')
        .filter(d => d === maxValue)
        .style('fill', '#4d94ff');

        // 为最小值对应的bar设置黄色
        svg.selectAll('.non-difference-bar')
            .filter(d => d === minValue)
            .style('fill', 'yellow');
    }

  
    function handleMouseoutDifference() {
        svg.selectAll('.non-difference-bar')
           .filter(d => d === d3.max(nonDifferenceData) || d === d3.min(nonDifferenceData))
           .style('fill', '#8ECFC9');  // 恢复原始颜色
    }
    
    //绘制difference bar
    svg.selectAll('.difference-bar')
    .data(differenceData)
    .join('rect')
    .attr('class', 'difference-bar')
    .attr('x', xScale('difference')) // 因为只有一个 'difference' 类别，所以直接使用这个值
    .attr('y', d => (d >= 0 ? yScale(d) : yScale(0)))
    .attr('width', xScale.bandwidth())
    .attr('height', d => Math.abs(yScale(0) - yScale(d)))
    .style("fill", "#FA7F6F") // 使用与其他柱子不同的颜色以区分
    .on('mouseover', handleMouseoverDifference)
    .on('mouseout', handleMouseoutDifference);
    

    // 添加文本标签
    svg.selectAll('.difference-label')
    .data(differenceData)
    .join('text')
    .attr('class', 'difference-label')
    .attr('x', (d, i) => xScale('difference') + xScale.bandwidth() / 2)
    .attr('y', d => (d >= 0 ? yScale(d) - 5 : yScale(0) - 5))
    .attr('text-anchor', 'middle')
    .style('fill', 'black')
    .text(d => `${d}%`)



    },[data,domain])
     
      
    
  return (
    <Box display="flex" flexDirection="column" alignItems="center" width = {500}> 
         
           {/* 1 title */}

        {/* 2 chart： fairness metric result */}
        <Box 
            display="flex"
            padding="6px"
            margin="12px" 
            alignItems="center"  // 控制垂直方向的对齐
            justifyContent="center" // 控制水平方向的对齐
            //border={`2px solid #42a5f5`}
        >    
                <svg ref={svgRef} > </svg>
          </Box>
    

    </Box>
   
    
   );
}

function MetricEOsChart({ data, domain,w}) {
    // Scatter Plot 
    const svgRef = useRef();
    
    useEffect(()=>{
        
    // step1：set up container dimensons & svg 
    
    const h = 400; //height
    const svg = d3.select(svgRef.current)
          .attr('width',w)
          .attr('height',h)
          .style('overflow','visible')
          .style('margin-top','20px')
    svg.selectAll("*").remove();
    
    // step2：set up scaling
    const xScale = d3.scaleBand()
          .domain(domain) // x value scale
          .range([0, w])   // chart dimensions of x
          .padding(0.5)
    const yScale = d3.scaleLinear()
          .domain([0, 100]) // x value scale
          .range([h, 0]);    // chart dimensions of y     

    // step3：set up axis           
    const xAxis = d3.axisBottom(xScale).ticks(data.length); //  put the x scale in the X axis
    const yAxis = d3.axisLeft(yScale).ticks(15); // ticks: number of dots in the axis
    svg.append('g')
        .call(xAxis)
        .attr('transform', `translate(0, ${h})`)
        .style("font-size", "18px")// 将一个<g>元素添加到SVG元素中。<g>元素通常用于组合其他图形元素，例如坐标轴、标签等，以便进行位置和样式的集中管理
        .selectAll("text")  
        .style("text-anchor", "end")  //middle： bar的正下方， end用于设置rotate角度的时候
        .attr("dx", "0em") // 
        .attr("dy", "0.7em") // Adjust as needed
        .attr("transform", "rotate(-20)");
    svg.append('g').call(yAxis);


    // step4：set up axis labelling
    // svg.append('text').attr('x',w/3).attr('y',h+10).text('Equalized Odds'); 已经设置好位置了可以直接使用的，但是不需要，因为已经有单独的标题了。
    svg.append('text').attr('y',-40).attr('x',-120)
                .attr('transform', 'rotate(-90)')
                .style('text-anchor', 'middle') // 水平居中对齐
                .style('dominant-baseline', 'middle') // 垂直居中对齐
                .text('Fairness Results');
   
    const nonDifferenceData = data.filter((d, i) => domain[i] !== 'Equalized Odds');
    const differenceData = data.filter((d, i) => domain[i] === 'Equalized Odds');
    
    const nonDifferenceDomain = domain.filter(d => d !== 'Equalized Odds');
    
    // 绘制柱子
    svg.selectAll('.non-difference-bar')
    .data(nonDifferenceData)
    .join('rect')
    .attr('class', 'non-difference-bar')
    .attr('x', (d, i) => xScale(nonDifferenceDomain[i]))
    .attr('y', d => (d >= 0 ? yScale(d) : yScale(0)))
    .attr('width', xScale.bandwidth())
    .attr('height', d => Math.abs(yScale(0) - yScale(d)))
    .style("fill", "#8ECFC9");
    
    // 添加文本标签
    svg.selectAll('.non-difference-label')
    .data(nonDifferenceData)
    .join('text')
    .attr('class', 'non-difference-label')
    .attr('x', (d, i) => xScale(nonDifferenceDomain[i]) + xScale.bandwidth() / 2)
    .attr('y', d => (d >= 0 ? yScale(d) - 5 : yScale(0) - 5))
    .attr('text-anchor', 'middle')
    .style('fill', 'black')
    .text(d => `${d}%`);

    
    //add hover functions in the useEffect  & before using them.
    function handleMouseoverDifference() {
        const maxValue = d3.max(nonDifferenceData);
    
        // 为最大值对应的bar设置color
        svg.selectAll('.non-difference-bar')
        .filter(d => d === maxValue)
        .style('fill', "#FA7F6F");

    }

  
    function handleMouseoutDifference() {
        svg.selectAll('.non-difference-bar')
           .filter(d => d === d3.max(nonDifferenceData))
           .style('fill', '#8ECFC9');  // 恢复原始颜色
    }
    
    //绘制difference bar
    svg.selectAll('.difference-bar')
    .data(differenceData)
    .join('rect')
    .attr('class', 'difference-bar')
    .attr('x', xScale('Equalized Odds')) // 因为只有一个 'difference' 类别，所以直接使用这个值
    .attr('y', d => (d >= 0 ? yScale(d) : yScale(0)))
    .attr('width', xScale.bandwidth())
    .attr('height', d => Math.abs(yScale(0) - yScale(d)))
    .style("fill", "#FA7F6F") // 使用与其他柱子不同的颜色以区分
    .on('mouseover', handleMouseoverDifference)
    .on('mouseout', handleMouseoutDifference);
    

    // 添加文本标签
    svg.selectAll('.difference-label')
    .data(differenceData)
    .join('text')
    .attr('class', 'difference-label')
    .attr('x', (d, i) => xScale('Equalized Odds') + xScale.bandwidth() / 2)
    .attr('y', d => (d >= 0 ? yScale(d) - 5 : yScale(0) - 5))
    .attr('text-anchor', 'middle')
    .style('fill', 'black')
    .text(d => `${d}%`)

    },[data,domain])
     
      
    
  return (
    <Box display="flex" flexDirection="column" alignItems="center" width = {500}> 
         
           {/* 1 title */}

        {/* 2 chart： fairness metric result */}
        <Box 
            display="flex"
            padding="6px"
            margin="12px" 
            alignItems="center"  // 控制垂直方向的对齐
            justifyContent="center" // 控制水平方向的对齐
            //border={`2px solid #42a5f5`}
        >    
                <svg ref={svgRef} > </svg>
          </Box>
    

    </Box>
   
    
   );
}