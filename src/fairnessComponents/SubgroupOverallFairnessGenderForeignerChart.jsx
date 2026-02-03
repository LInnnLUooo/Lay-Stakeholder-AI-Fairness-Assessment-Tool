import React, { useEffect,useState,useRef } from 'react';
import * as d3 from 'd3';

 export default function SubgroupOverallFairnessGenderForeignerChart({rectHeight}) {   
    
        const [data] = useState([[1,17],
            [2,13],[3,30],[4,30],[5,28],[6,25],[7,18],[8,29],[9,24]])
          const xAxisNames = ["", "DP", "EO", "PE", "EOs", "OT", "CSP1", "CSP2", "CSP3", "CSP4"];
          const svgRef = useRef();
          
          useEffect(()=>{
            
          const w = 430;
          const h = 500;
          const svg = d3.select(svgRef.current)
                .attr('width',"90%")
                .attr('height',h)
                .attr('viewBox', '0 0 430 500')
                .style('overflow','visible')
                .style('margin-top','20px')
        svg.selectAll('*').remove();
          const xScale = d3.scaleLinear()
                .domain([0, 9])
                .range([0, w]);
          const yScale = d3.scaleLinear()
                .domain([0, 50])
                .range([h, 0]);
      
          const xAxis = d3.axisBottom(xScale).ticks(data.length).tickFormat(d => xAxisNames[d]);
          const yAxis = d3.axisLeft(yScale).ticks(10);
          svg.append('g').call(xAxis).attr('transform', `translate(0, ${h})`).style("font-size", "16px");
          svg.append('g').call(yAxis).style("font-size", "16px");
      
      
          svg.append('text').attr('x',w/3).attr('y',h+45)
              .text('Fairness Metrics')
              .style('font-size', '18px')
          svg.append('text').attr('y',-60).attr('x',-180)
                      .attr('transform', 'rotate(-90)')
                      .style('text-anchor', 'middle')
                      .style('dominant-baseline', 'middle')
                      .style('font-size', '18px')
                      .text('Fairness Results(difference between subgroups)')
      
      
          svg.selectAll('circle').remove();
          svg.selectAll('.red-circle').remove();
          
          svg.selectAll('circle')  
            .data(data.filter(d => d[1] <= rectHeight))
            .enter()
            .append('circle')
            .attr('cx', d => xScale(d[0]))
            .attr('cy', d => yScale(d[1]))
            .attr('r', 4)
            .style('fill', '#047731');
      
          svg.selectAll('.red-circle')
            .data(data.filter(d => d[1] > rectHeight))
            .enter()
            .append('circle')
            .attr('cx', d => xScale(d[0]))
            .attr('cy', d => yScale(d[1]))
            .attr('r', 4)
            .style('fill', 'red')
            .attr('class', 'red-circle');
      
          svg.selectAll('text.datapoint-label')
          .data(data)
          .enter()
          .append('text')
          .attr('x', d => xScale(d[0]))
          .attr('y', d => yScale(d[1]) + 20)
          .attr('class', 'datapoint-label')
          .attr('text-anchor', 'middle')
          .style('font-size', '14px')
          .style('font-weight', 'bold') 
          .text(d => `${d[1]}%`);
          
          svg.select('rect').remove();
          
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
