import React, { useEffect,useState,useRef } from 'react';
import * as d3 from 'd3';

 export default function SubgroupOverallFairnessGenderForeignerChart({rectHeight}) {   
    
        // Scatter Plot 
        const [data] = useState([[1,17],
            [2,13],[3,30],[4,30],[5,28],[6,25],[7,18],[8,29],[9,24]])
          const xAxisNames = ["", "DP", "EO", "PE", "EOs", "OT", "CSP1", "CSP2", "CSP3", "CSP4"];
          const svgRef = useRef();
          
          useEffect(()=>{
            
          // step1：set up container dimensons & svg 
          const w = 430; // width
          const h = 500; //height
          const svg = d3.select(svgRef.current)
                .attr('width',"90%")
                .attr('height',h)
                .attr('viewBox', '0 0 430 500')
                .style('overflow','visible')
                .style('margin-top','20px')
        svg.selectAll('*').remove(); //每次渲染 清除其他可能存在的svg 重新渲染整个图
          // step2：set up scaling
          const xScale = d3.scaleLinear()
                .domain([0, 9]) // x value scale
                .range([0, w]);   // chart dimensions of x
          const yScale = d3.scaleLinear()
                .domain([0, 50]) // x value scale
                .range([h, 0]);    // chart dimensions of y     
      
          // step3：set up axis           
          const xAxis = d3.axisBottom(xScale).ticks(data.length).tickFormat(d => xAxisNames[d]); //  put the x scale in the X axis
          const yAxis = d3.axisLeft(yScale).ticks(10); // ticks: number of dots in the axis
          svg.append('g').call(xAxis).attr('transform', `translate(0, ${h})`).style("font-size", "16px");// 将一个<g>元素添加到SVG元素中。<g>元素通常用于组合其他图形元素，例如坐标轴、标签等，以便进行位置和样式的集中管理
          svg.append('g').call(yAxis).style("font-size", "16px");
      
      
          // step4：set up axis labelling
          svg.append('text').attr('x',w/3).attr('y',h+45)
              .text('Fairness Metrics')
              .style('font-size', '18px')
          svg.append('text').attr('y',-60).attr('x',-180)
                      .attr('transform', 'rotate(-90)')
                      .style('text-anchor', 'middle') // 水平居中对齐
                      .style('dominant-baseline', 'middle') // 垂直居中对齐
                      .style('font-size', '18px')
                      .text('Fairness Results(difference between subgroups)')
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
            .data(data.filter(d => d[1] <= rectHeight)) //.data(data.filter(d => d[1] >= rectLowHeight && d[1] <= rectHeight))
            .enter()
            .append('circle')
            .attr('cx', d => xScale(d[0]))
            .attr('cy', d => yScale(d[1]))
            .attr('r', 4)
            .style('fill', '#047731');
      
          svg.selectAll('.red-circle')
            .data(data.filter(d => d[1] > rectHeight)) //.data(data.filter(d => d[1] < rectLowHeight || d[1] > rectHeight))
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
          .attr('y', d => yScale(d[1]) + 20)  // position the text 10 units above the circle
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
          .attr('height', Math.abs(yScale(0)-yScale(rectHeight)))
          .attr('fill', '#baedce');
          
          console.log(rectHeight);
      
          },[data,rectHeight])
        
         
    return (
    <svg ref={svgRef} > </svg>
    );

}
