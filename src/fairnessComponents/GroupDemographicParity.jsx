import React, { useEffect,useState,useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import * as d3 from 'd3';
import TouchAppIcon from '@mui/icons-material/TouchApp';


import { useNavigate } from 'react-router-dom';
const DPIMAGE_AGE_PATH = "/explanationAge/DPimage";

export default function GroupDemographicParity() {
    const navigate = useNavigate(); 
    const [data] = useState([88,89,-1])
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
    svg.append('g').call(xAxis).attr('transform', `translate(0, ${h/3*2})`).style("font-size", "18px").selectAll("text").attr("dy", "35px");
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
        .attr('y', d => (d >= 0 ? yScale(d) - 5 : yScale(0) - 5))
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
        .attr('y', d => (d >= 0 ? yScale(d) - 5 : yScale(0) - 5))
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
                        .attr('y', d => (d >= 0 ? yScale(d) - 5 : yScale(0) - 5))
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
                        .attr('y', d => (d >= 0 ? yScale(d) - 5 : yScale(0) - 5))
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
                .attr('y', d => (d >= 0 ? yScale(d) - 5 : yScale(0) - 5))
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
                .attr('y', d => (d >= 0 ? yScale(d) - 5 : yScale(0) - 5))
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
                Demographic Parity
            </Typography>

             <Tooltip 
                title={
                    <span 
                    style={{ 
                        fontSize: '2em'
                    }}
                    >
                    The AI application is fairness if it has "equal" probability for age{"<"}25 and age{">="}25 individuals to have good predicted credit.
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
           Of the <span style={{textDecoration: 'underline' }}>age{"<"}25 group</span>, <span style={{ color: '#1976D2' }}>88%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
            <br />
            Of the <span style={{textDecoration: 'underline' }}>age{">="}25 group</span>, <span style={{ color: '#1976D2' }}>89%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
            <br />
            The difference between the age{"<"}25 and the age{">="}25 is <span style={{ color: '#1976D2' }}>-1%</span>.
        </Typography>

       
        <Box marginTop='40px'
        display="flex"
        alignItems="center"  > 
            <Button variant="contained" size="small" startIcon={<TouchAppIcon />} onClick={() => navigate(DPIMAGE_AGE_PATH)}>Check individual instances</Button>       
        </Box>
  

    </Box>
    
    
        
          
       
    
   );
}

