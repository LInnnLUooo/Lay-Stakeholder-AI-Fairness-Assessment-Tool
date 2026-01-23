import React, { useEffect,useState,useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as d3 from 'd3';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import TouchAppIcon from '@mui/icons-material/TouchApp';

import { useNavigate } from 'react-router-dom';
//nevigate path：
const OTIMAGE_AGE_PATH = "/explanationAge/OTimage";

export default function GroupOutcomeTest() {
    const navigate = useNavigate(); 
    // Scatter Plot 
    const [data] = useState([64,78,-14])
    const svgRef = useRef();
    
    useEffect(()=>{
        
    // step1：set up container dimensons & svg 
    const w = 400; // width
    const h = 400; //height
    const svg = d3.select(svgRef.current)
          .attr('width',w)
          .attr('height',h)
          .style('overflow','visible')
          .style('margin-top','20px')
    // step2：set up scaling
    const xScale = d3.scaleBand()
          .domain(['age<25','age>=25','difference']) // x value scale
          .range([0, w])   // chart dimensions of x
          .padding(0.5)
    const yScale = d3.scaleLinear()
          .domain([-50, 100]) // x value scale
          .range([h, 0]);    // chart dimensions of y     

    // step3：set up axis           
    const xAxis = d3.axisBottom(xScale).ticks(data.length); //  put the x scale in the X axis
    const yAxis = d3.axisLeft(yScale).ticks(15); // ticks: number of dots in the axis
    svg.append('g').call(xAxis).attr('transform', `translate(0, ${h/3*2})`).style("font-size", "18px").selectAll("text").attr("dy", "50px");// 将一个<g>元素添加到SVG元素中。<g>元素通常用于组合其他图形元素，例如坐标轴、标签等，以便进行位置和样式的集中管理
    svg.append('g').call(yAxis);


    // step4：set up axis labelling
    // svg.append('text').attr('x',w/3).attr('y',h+10).text('Outcome Test'); 已经设置好位置了可以直接使用的，但是不需要，因为已经有单独的标题了。
    svg.append('text').attr('y',-40).attr('x',-120)
                .attr('transform', 'rotate(-90)')
                .style('text-anchor', 'middle') // 水平居中对齐
                .style('dominant-baseline', 'middle') // 垂直居中对齐
                .text('Fairness Results');
    //step:5 set up svg data
    // svg.selectAll('.bar').data(data).join('rect')
    //                               .attr('x',(d, i) => xScale(['female', 'male', 'difference'][i]))
    //                               .attr('y',d => (d >= 0 ? yScale(d) : yScale(0))) // d是一个二维数组
    //                               .attr('width',xScale.bandwidth())
    //                               .attr('height',d => Math.abs(yScale(0) - yScale(d)))
    //                               .style("fill", (d, i) => {
    //                                 const xScaleValue = ['female', 'male', 'difference'][i];
    //                                 if (xScaleValue === 'female') return "#8ECFC9";
    //                                 if (xScaleValue === 'male') return "#BEB8DC";
    //                                 if (xScaleValue === 'difference') return "#FA7F6F";
    //                                 return "#c6f0c6"; // 默认颜色
    //                               })

    const youngData = data.filter((d, i) => ['age<25', 'age>=25', 'difference'][i] === 'age<25');
    const oldData = data.filter((d, i) => ['age<25', 'age>=25', 'difference'][i] === 'age>=25');
    const differenceData = data.filter((d, i) => ['age<25', 'age>=25', 'difference'][i] === 'difference');

    svg.selectAll('.young-bar')
    .data(youngData)
    .join('g') // 使用 'g' 元素包装每个 bar 和文本标签
    .attr('class', 'young-bar')
    .each(function (d) {
        const bar = d3.select(this);

        // 创建矩形 bar
        bar.append('rect')
        .attr('x', xScale('age<25'))
        .attr('y', d => (d >= 0 ? yScale(d) : yScale(0)))
        .attr('width', xScale.bandwidth())
        .attr('height', d => Math.abs(yScale(0) - yScale(d)))
        .style("fill", "#8ECFC9");

        // 添加文本标签
        bar.append('text')
        .attr('x', xScale('age<25') + xScale.bandwidth() / 2) // 文本标签居中
        .attr('y', d => (d >= 0 ? yScale(d) - 5 : yScale(0) -5)) // 根据数据项的正负调整位置
        .attr('text-anchor', 'middle') // 水平居中对齐
        .style('fill', 'black') // 文本颜色
       .text(`${Math.abs(d)}%`); // 显示数据项的值
    });

    svg.selectAll('.old-bar')
    .data(oldData)
    .join('g') // 使用 'g' 元素包装每个 bar 和文本标签
    .attr('class', 'old-bar')
    .each(function (d) {
        const bar = d3.select(this);

        // 创建矩形 bar
        bar.append('rect')
        .attr('x', xScale('age>=25'))
        .attr('y', d => (d >= 0 ? yScale(d) : yScale(0)))
        .attr('width', xScale.bandwidth())
        .attr('height', d => Math.abs(yScale(0) - yScale(d)))
        .style("fill", "#BEB8DC");

        // 添加文本标签
        bar.append('text')
        .attr('x', xScale('age>=25') + xScale.bandwidth() / 2) // 文本标签居中
        .attr('y', d => (d >= 0 ? yScale(d) - 5 : yScale(0) -5)) // 根据数据项的正负调整位置
        .attr('text-anchor', 'middle') // 水平居中对齐
        .style('fill', 'black') // 文本颜色
       .text(`${Math.abs(d)}%`); // 显示数据项的值
    });

    function handleMouseover(diffValue) {
        if (youngData > oldData) {
            svg.selectAll('.young-bar').remove(); 
            svg.selectAll('.young-bar')
                    .data(youngData)
                    .join('g') // 使用 'g' 元素包装每个 bar 和文本标签
                    .attr('class', 'young-bar')
                    .each(function (d) {
                        const bar = d3.select(this);
                        bar.append('rect')
                        .attr('x', xScale('age<25'))
                        .attr('y', d => yScale(d)) // 设置 y 坐标为 femaleData 的值
                        .attr('width', xScale.bandwidth())
                        .attr('height', d => Math.abs(yScale(d) - yScale(oldData))) 
                        .style("fill", "#FA7F6F");                   
                        bar.append('rect')
                        .attr('x', xScale('age<25'))
                        .attr('y', yScale(oldData)) // 设置 y 坐标为 differenceData 的值
                        .attr('width', xScale.bandwidth())
                        .attr('height', Math.abs(yScale(0) - yScale(oldData))) 
                        .style("fill", "#8ECFC9");
    
                        // 添加文本标签
                        bar.append('text')
                        .attr('x', xScale('age<25') + xScale.bandwidth() / 2) // 文本标签居中
                        .attr('y', d => (d >= 0 ? yScale(d) - 5 : yScale(0) -5)) // 根据数据项的正负调整位置
                        .attr('text-anchor', 'middle') // 水平居中对齐
                        .style('fill', 'black') // 文本颜色
                       .text(`${Math.abs(d)}%`); // 显示数据项的值
                    });
        } 
        else {
            svg.selectAll('.old-bar').remove(); 
            svg.selectAll('.old-bar')
                .data(oldData)
                .join('g') // 使用 'g' 元素包装每个 bar 和文本标签
                .attr('class', 'old-bar')
                .each(function (d) {
                    const bar = d3.select(this);
                    bar.append('rect')
                    .attr('x', xScale('age>=25'))
                    .attr('y', d => yScale(d)) // 设置 y 坐标为 femaleData 的值
                    .attr('width', xScale.bandwidth())
                    .attr('height', d => Math.abs(yScale(d) - yScale(youngData))) 
                    .style("fill", "#FA7F6F");
                    
                    bar.append('rect')
                    .attr('x', xScale('age>=25'))
                    .attr('y', yScale(youngData)) // 设置 y 坐标为 differenceData 的值
                    .attr('width', xScale.bandwidth())
                    .attr('height', Math.abs(yScale(0) - yScale(youngData))) 
                    .style("fill", "#BEB8DC");
                    
                    bar.append('text')
                        .attr('x', xScale('age>=25') + xScale.bandwidth() / 2) // 文本标签居中
                        .attr('y', d => (d >= 0 ? yScale(d) - 5 : yScale(0) -5)) // 根据数据项的正负调整位置
                        .attr('text-anchor', 'middle') // 水平居中对齐
                        .style('fill', 'black') // 文本颜色
                       .text(`${Math.abs(d)}%`); // 显示数据项的值
                    })
        
        }}
    
    function handleMouseout(diffValue) {
        if (youngData > oldData) {
            svg.selectAll('.young-bar').remove();
            svg.selectAll('.young-bar')
            .data(youngData)
            .join('g') // 使用 'g' 元素包装每个 bar 和文本标签
            .attr('class', 'young-bar')
            .each(function (d) {
                const bar = d3.select(this);
        
                // 创建矩形 bar
                bar.append('rect')
                .attr('x', xScale('age<25'))
                .attr('y', d => (d >= 0 ? yScale(d) : yScale(0)))
                .attr('width', xScale.bandwidth())
                .attr('height', d => Math.abs(yScale(0) - yScale(d)))
                .style("fill", "#8ECFC9");
        
                // 添加文本标签
                bar.append('text')
                .attr('x', xScale('age<25') + xScale.bandwidth() / 2) // 文本标签居中
                .attr('y', d => (d >= 0 ? yScale(d) - 5 : yScale(0) -5)) // 根据数据项的正负调整位置
                .attr('text-anchor', 'middle') // 水平居中对齐
                .style('fill', 'black') // 文本颜色
               .text(`${Math.abs(d)}%`); // 显示数据项的值
            });
        } 
        else {
            svg.selectAll('.old-bar').remove();
            svg.selectAll('.old-bar')
            .data(oldData)
            .join('g') // 使用 'g' 元素包装每个 bar 和文本标签
            .attr('class', 'old-bar')
            .each(function (d) {
                const bar = d3.select(this);
        
                // 创建矩形 bar
                bar.append('rect')
                .attr('x', xScale('age>=25'))
                .attr('y', d => (d >= 0 ? yScale(d) : yScale(0)))
                .attr('width', xScale.bandwidth())
                .attr('height', d => Math.abs(yScale(0) - yScale(d)))
                .style("fill", "#BEB8DC");
        
                // 添加文本标签
                bar.append('text')
                .attr('x', xScale('age>=25') + xScale.bandwidth() / 2) // 文本标签居中
                .attr('y', d => (d >= 0 ? yScale(d) - 5 : yScale(0) -5)) // 根据数据项的正负调整位置
                .attr('text-anchor', 'middle') // 水平居中对齐
                .style('fill', 'black') // 文本颜色
               .text(`${Math.abs(d)}%`); // 显示数据项的值
            });
        
    }}
    // 渲染 "difference" 数据
    svg.selectAll('.difference-bar')
    .data(differenceData)
    .join('rect')
    .attr('x', (d, i) => xScale('difference'))
    .attr('y', d => (d >= 0 ? yScale(d) : yScale(0)))
    .attr('width', xScale.bandwidth())
    .attr('height', d => Math.abs(yScale(0) - yScale(d)))
    .attr('class', 'difference-bar')
    .style("fill", "#FA7F6F")
    .on('mouseover', handleMouseover) // 鼠标悬浮时调用 handleMouseover 函数
    .on('mouseout', handleMouseout);
    
    // Add text labels for the difference bars
    svg.selectAll('.difference-label')
    .data(differenceData)
    .join('text')
    .attr('x', (d, i) => xScale('difference') + xScale.bandwidth() / 2) // center the text on the bar's position
    .attr('y', d => (d >= 0 ? yScale(d) - 5 : yScale(0) - 5)) // position the text above the bar or above the x-axis depending on the data's sign
    .attr('class', 'difference-label')
    .attr('text-anchor', 'middle') // center the text horizontally
    .style('fill', 'black') // set the text color
   .text(d=>`${d}%`); // display the data value

    },[data])
     
      
    
  return (
    <Box display="flex" flexDirection="column" alignItems="center" width = {500}> 
         
           {/* 1 title */}
        <Box display="flex" justifyContent="space-between" width="100%">
            <Typography 
                variant="h5" 
                component="div" 
                gutterBottom 
                color="primary" 
                sx={{ fontWeight: 'bold', flexGrow: 1, textAlign: 'center' }}
            >
                Outcome Test
            </Typography>

           <Tooltip 
                title={
                    <span 
                    style={{ 
                        fontSize: '2em'  // 调整为你需要的大小
                    }}
                    >
                    The AI application is fairness if it has "equal" probability for Age{'<'}25 Individuals Predicted as Good Credit and Age{'>='}25 Individuals Predicted as Good Credit to have Rated Good Credit.
                    </span>
                } 
                placement="left"
                >    
                <HelpIcon color="primary" />
            </Tooltip>    
        </Box>
        

        {/* 2 chart： fairness metric result */}
        <Box 
            display="flex"
            padding="6px"
            margin="12px" 
            alignItems="center"  // 控制垂直方向的对齐
            justifyContent="center" // 控制水平方向的对齐
            height="400px"
            //border={`2px solid #42a5f5`}
        >    
                <svg ref={svgRef} > </svg>
          </Box>

        {/* 3 Text Explanation */}
        <Typography variant="body2" color="text.secondary" sx={{ margin: "12px",color: "black", fontWeight: "bold"}}>
            Of <span style={{textDecoration: 'underline' }}>age{"<"}25 predicted as Good Credit</span>, <span style={{ color: '#1976D2' }}>64%</span> have <span style={{textDecoration: 'underline' }}>Rated Good Credit</span>.
            <br />
            Of <span style={{textDecoration: 'underline' }}>age{">="}25 predicted as Rated Good Credit</span>, <span style={{ color: '#1976D2' }}>78%</span> have <span style={{textDecoration: 'underline' }}>Rated Good Credit</span>.
            <br />
            The difference between females and males is: <span style={{ color: '#1976D2' }}>-14%</span>.
        </Typography>

        {/* 4 Image Button*/}
        <Box 
            display="flex"
            alignItems="center" 
            marginTop='75px' > 
             <Button variant="contained" size="small" startIcon={<TouchAppIcon />} onClick={() => navigate(OTIMAGE_AGE_PATH)}>Check individual instances</Button>
        </Box>

    </Box>
    
   );
}

