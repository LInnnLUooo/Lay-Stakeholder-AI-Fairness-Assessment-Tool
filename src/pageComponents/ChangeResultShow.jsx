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

export default function ChangeResultShow({ data, domain,w,h_fairnessname}) {
    // Scatter Plot 
    const svgRef = useRef();
    
    useEffect(()=>{

        console.log(h_fairnessname);
        
    // step1：set up container dimensons & svg 
    
    const h = 400; //height
    const svg = d3.select(svgRef.current)
          .attr('width',w)
          .attr('height',h)
          .style('overflow','visible')
          .style('margin-top','5px')
          .style('padding','50px')
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
        .style("font-size", "15px")// 将一个<g>元素添加到SVG元素中。<g>元素通常用于组合其他图形元素，例如坐标轴、标签等，以便进行位置和样式的集中管理
        .style("font-weight", "bold")
        .selectAll("text")  
        .style("text-anchor", "end")  //middle： bar的正下方， end用于设置rotate角度的时候
        .attr("dx", "1.5em") // 
        .attr("dy", "-430px") // Adjust as needed
        //.attr("transform", "rotate(-20)");
    svg.append('g').call(yAxis);


    // step4：set up axis labelling
    // svg.append('text').attr('x',w/3).attr('y',h+10).text('Equalized Odds'); 已经设置好位置了可以直接使用的，但是不需要，因为已经有单独的标题了。
    svg.append('text').attr('y',-40).attr('x',-120)
                .attr('transform', 'rotate(-90)')
                .style('text-anchor', 'middle') // 水平居中对齐
                .style('dominant-baseline', 'middle') // 垂直居中对齐
                .text('Fairness Results');

    //在底部添加图表名称
   // Append title to the bottom of the SVG
    svg.append("text")
    .attr("x", '6em') // Center the text
    .attr("y", '-50px') // Position at the bottom with some margin
    .attr("text-anchor", "middle") // Ensure the text is centered at the x position
    .style("font-size", "26px") // Adjust font size as needed
    .style("font-weight", "bold") // Make text bold
    .text(h_fairnessname) // The actual title text
    .style("fill", "#1976D2")
   
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



    },[data,domain,w,h_fairnessname])
     
      
    
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
