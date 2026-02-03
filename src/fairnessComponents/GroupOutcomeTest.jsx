import React, { useEffect,useState,useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as d3 from 'd3';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import TouchAppIcon from '@mui/icons-material/TouchApp';

import { useNavigate } from 'react-router-dom';
const OTIMAGE_AGE_PATH = "/explanationAge/OTimage";

export default function GroupOutcomeTest() {
    const navigate = useNavigate(); 
    const [data] = useState([64,78,-14])
    const svgRef = useRef();
    
    useEffect(()=>{
        
    const w = 400;
    const h = 400;
    const svg = d3.select(svgRef.current)
          .attr('width',w)
          .attr('height',h)
          .style('overflow','visible')
          .style('margin-top','20px')
    const xScale = d3.scaleBand()
          .domain(['age<25','age>=25','difference'])
          .range([0, w])
          .padding(0.5)
    const yScale = d3.scaleLinear()
          .domain([-50, 100])
          .range([h, 0]);

    const xAxis = d3.axisBottom(xScale).ticks(data.length);
    const yAxis = d3.axisLeft(yScale).ticks(15);
    svg.append('g').call(xAxis).attr('transform', `translate(0, ${h/3*2})`).style("font-size", "18px").selectAll("text").attr("dy", "50px");
    svg.append('g').call(yAxis);


    svg.append('text').attr('y',-40).attr('x',-120)
                .attr('transform', 'rotate(-90)')
                .style('text-anchor', 'middle')
                .style('dominant-baseline', 'middle')
                .text('Fairness Results');

    const youngData = data.filter((d, i) => ['age<25', 'age>=25', 'difference'][i] === 'age<25');
    const oldData = data.filter((d, i) => ['age<25', 'age>=25', 'difference'][i] === 'age>=25');
    const differenceData = data.filter((d, i) => ['age<25', 'age>=25', 'difference'][i] === 'difference');

    svg.selectAll('.young-bar')
    .data(youngData)
    .join('g')
    .attr('class', 'young-bar')
    .each(function (d) {
        const bar = d3.select(this);

        bar.append('rect')
        .attr('x', xScale('age<25'))
        .attr('y', d => (d >= 0 ? yScale(d) : yScale(0)))
        .attr('width', xScale.bandwidth())
        .attr('height', d => Math.abs(yScale(0) - yScale(d)))
        .style("fill", "#8ECFC9");

        bar.append('text')
        .attr('x', xScale('age<25') + xScale.bandwidth() / 2)
        .attr('y', d => (d >= 0 ? yScale(d) - 5 : yScale(0) -5))
        .attr('text-anchor', 'middle')
        .style('fill', 'black')
       .text(`${Math.abs(d)}%`);
    });

    svg.selectAll('.old-bar')
    .data(oldData)
    .join('g')
    .attr('class', 'old-bar')
    .each(function (d) {
        const bar = d3.select(this);

        bar.append('rect')
        .attr('x', xScale('age>=25'))
        .attr('y', d => (d >= 0 ? yScale(d) : yScale(0)))
        .attr('width', xScale.bandwidth())
        .attr('height', d => Math.abs(yScale(0) - yScale(d)))
        .style("fill", "#BEB8DC");

        bar.append('text')
        .attr('x', xScale('age>=25') + xScale.bandwidth() / 2)
        .attr('y', d => (d >= 0 ? yScale(d) - 5 : yScale(0) -5))
        .attr('text-anchor', 'middle')
        .style('fill', 'black')
       .text(`${Math.abs(d)}%`);
    });

    function handleMouseover(diffValue) {
        if (youngData > oldData) {
            svg.selectAll('.young-bar').remove(); 
            svg.selectAll('.young-bar')
                    .data(youngData)
                    .join('g')
                    .attr('class', 'young-bar')
                    .each(function (d) {
                        const bar = d3.select(this);
                        bar.append('rect')
                        .attr('x', xScale('age<25'))
                        .attr('y', d => yScale(d))
                        .attr('width', xScale.bandwidth())
                        .attr('height', d => Math.abs(yScale(d) - yScale(oldData))) 
                        .style("fill", "#FA7F6F");                   
                        bar.append('rect')
                        .attr('x', xScale('age<25'))
                        .attr('y', yScale(oldData))
                        .attr('width', xScale.bandwidth())
                        .attr('height', Math.abs(yScale(0) - yScale(oldData))) 
                        .style("fill", "#8ECFC9");
    
                        bar.append('text')
                        .attr('x', xScale('age<25') + xScale.bandwidth() / 2)
                        .attr('y', d => (d >= 0 ? yScale(d) - 5 : yScale(0) -5))
                        .attr('text-anchor', 'middle')
                        .style('fill', 'black')
                       .text(`${Math.abs(d)}%`);
                    });
        } 
        else {
            svg.selectAll('.old-bar').remove(); 
            svg.selectAll('.old-bar')
                .data(oldData)
                .join('g')
                .attr('class', 'old-bar')
                .each(function (d) {
                    const bar = d3.select(this);
                    bar.append('rect')
                    .attr('x', xScale('age>=25'))
                    .attr('y', d => yScale(d))
                    .attr('width', xScale.bandwidth())
                    .attr('height', d => Math.abs(yScale(d) - yScale(youngData))) 
                    .style("fill", "#FA7F6F");
                    
                    bar.append('rect')
                    .attr('x', xScale('age>=25'))
                    .attr('y', yScale(youngData))
                    .attr('width', xScale.bandwidth())
                    .attr('height', Math.abs(yScale(0) - yScale(youngData))) 
                    .style("fill", "#BEB8DC");
                    
                    bar.append('text')
                        .attr('x', xScale('age>=25') + xScale.bandwidth() / 2)
                        .attr('y', d => (d >= 0 ? yScale(d) - 5 : yScale(0) -5))
                        .attr('text-anchor', 'middle')
                        .style('fill', 'black')
                       .text(`${Math.abs(d)}%`);
                    })
        
        }}
    
    function handleMouseout(diffValue) {
        if (youngData > oldData) {
            svg.selectAll('.young-bar').remove();
            svg.selectAll('.young-bar')
            .data(youngData)
            .join('g')
            .attr('class', 'young-bar')
            .each(function (d) {
                const bar = d3.select(this);
        
                bar.append('rect')
                .attr('x', xScale('age<25'))
                .attr('y', d => (d >= 0 ? yScale(d) : yScale(0)))
                .attr('width', xScale.bandwidth())
                .attr('height', d => Math.abs(yScale(0) - yScale(d)))
                .style("fill", "#8ECFC9");
        
                bar.append('text')
                .attr('x', xScale('age<25') + xScale.bandwidth() / 2)
                .attr('y', d => (d >= 0 ? yScale(d) - 5 : yScale(0) -5))
                .attr('text-anchor', 'middle')
                .style('fill', 'black')
               .text(`${Math.abs(d)}%`);
            });
        } 
        else {
            svg.selectAll('.old-bar').remove();
            svg.selectAll('.old-bar')
            .data(oldData)
            .join('g')
            .attr('class', 'old-bar')
            .each(function (d) {
                const bar = d3.select(this);
        
                bar.append('rect')
                .attr('x', xScale('age>=25'))
                .attr('y', d => (d >= 0 ? yScale(d) : yScale(0)))
                .attr('width', xScale.bandwidth())
                .attr('height', d => Math.abs(yScale(0) - yScale(d)))
                .style("fill", "#BEB8DC");
        
                bar.append('text')
                .attr('x', xScale('age>=25') + xScale.bandwidth() / 2)
                .attr('y', d => (d >= 0 ? yScale(d) - 5 : yScale(0) -5))
                .attr('text-anchor', 'middle')
                .style('fill', 'black')
               .text(`${Math.abs(d)}%`);
            });
        
    }}
    svg.selectAll('.difference-bar')
    .data(differenceData)
    .join('rect')
    .attr('x', (d, i) => xScale('difference'))
    .attr('y', d => (d >= 0 ? yScale(d) : yScale(0)))
    .attr('width', xScale.bandwidth())
    .attr('height', d => Math.abs(yScale(0) - yScale(d)))
    .attr('class', 'difference-bar')
    .style("fill", "#FA7F6F")
    .on('mouseover', handleMouseover)
    .on('mouseout', handleMouseout);
    
    svg.selectAll('.difference-label')
    .data(differenceData)
    .join('text')
    .attr('x', (d, i) => xScale('difference') + xScale.bandwidth() / 2)
    .attr('y', d => (d >= 0 ? yScale(d) - 5 : yScale(0) - 5))
    .attr('class', 'difference-label')
    .attr('text-anchor', 'middle')
    .style('fill', 'black')
   .text(d=>`${d}%`);

    },[data])
     
      
    
  return (
    <Box display="flex" flexDirection="column" alignItems="center" width = {500}> 
         
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
                        fontSize: '2em'
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
        

        <Box 
            display="flex"
            padding="6px"
            margin="12px" 
            alignItems="center"
            justifyContent="center"
            height="400px"
        >    
                <svg ref={svgRef} > </svg>
          </Box>

        <Typography variant="body2" color="text.secondary" sx={{ margin: "12px",color: "black", fontWeight: "bold"}}>
            Of <span style={{textDecoration: 'underline' }}>age{"<"}25 predicted as Good Credit</span>, <span style={{ color: '#1976D2' }}>64%</span> have <span style={{textDecoration: 'underline' }}>Rated Good Credit</span>.
            <br />
            Of <span style={{textDecoration: 'underline' }}>age{">="}25 predicted as Rated Good Credit</span>, <span style={{ color: '#1976D2' }}>78%</span> have <span style={{textDecoration: 'underline' }}>Rated Good Credit</span>.
            <br />
            The difference between females and males is: <span style={{ color: '#1976D2' }}>-14%</span>.
        </Typography>

        <Box 
            display="flex"
            alignItems="center" 
            marginTop='75px' > 
             <Button variant="contained" size="small" startIcon={<TouchAppIcon />} onClick={() => navigate(OTIMAGE_AGE_PATH)}>Check individual instances</Button>
        </Box>

    </Box>
    
   );
}

