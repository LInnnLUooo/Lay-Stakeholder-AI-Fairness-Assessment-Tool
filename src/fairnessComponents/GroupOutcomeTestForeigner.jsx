import React, { useEffect,useState,useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import * as d3 from 'd3';
import TouchAppIcon from '@mui/icons-material/TouchApp';

import { useNavigate } from 'react-router-dom';
const OTIMAGE_FOREIGNER_PATH = "/explanationForeigner/OTimage";

export default function GroupOutcomeTestForeigner() {
    const navigate = useNavigate(); 
    const [data] = useState([75,91,-16])
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
          .domain(['foreign worker','local','difference'])
          .range([0, w])
          .padding(0.5)
    const yScale = d3.scaleLinear()
          .domain([-50, 100])
          .range([h, 0]);

    const xAxis = d3.axisBottom(xScale).ticks(data.length);
    const yAxis = d3.axisLeft(yScale).ticks(15);
    svg.append('g').call(xAxis).attr('transform', `translate(0, ${h/3*2})`).style("font-size", "18px").selectAll("text").attr("dy", "60px");
    svg.append('g').call(yAxis);


    svg.append('text').attr('y',-40).attr('x',-120)
                .attr('transform', 'rotate(-90)')
                .style('text-anchor', 'middle')
                .style('dominant-baseline', 'middle')
                .text('Fairness Results');

    const foreignerData = data.filter((d, i) => ['foreign worker', 'local', 'difference'][i] === 'foreign worker');
    const localData = data.filter((d, i) => ['foreign worker', 'local', 'difference'][i] === 'local');
    const differenceData = data.filter((d, i) => ['foreign worker', 'local', 'difference'][i] === 'difference');

    svg.selectAll('.foreigner-bar')
    .data(foreignerData)
    .join('g')
    .attr('class', 'foreigner-bar')
    .each(function (d) {
        const bar = d3.select(this);

        bar.append('rect')
        .attr('x', xScale('foreign worker'))
        .attr('y', d => (d >= 0 ? yScale(d) : yScale(0)))
        .attr('width', xScale.bandwidth())
        .attr('height', d => Math.abs(yScale(0) - yScale(d)))
        .style("fill", "#8ECFC9");

        bar.append('text')
        .attr('x', xScale('foreign worker') + xScale.bandwidth() / 2)
        .attr('y', d => (d >= 0 ? yScale(d) - 5 : yScale(0) - 5))
        .attr('text-anchor', 'middle')
        .style('fill', 'black')
        .text(`${Math.abs(d)}%`);
    });

    svg.selectAll('.local-bar')
    .data(localData)
    .join('g')
    .attr('class', 'local-bar')
    .each(function (d) {
        const bar = d3.select(this);

        bar.append('rect')
        .attr('x', xScale('local'))
        .attr('y', d => (d >= 0 ? yScale(d) : yScale(0)))
        .attr('width', xScale.bandwidth())
        .attr('height', d => Math.abs(yScale(0) - yScale(d)))
        .style("fill", "#BEB8DC");

        bar.append('text')
        .attr('x', xScale('local') + xScale.bandwidth() / 2)
        .attr('y', d => (d >= 0 ? yScale(d) - 5 : yScale(0) - 5))
        .attr('text-anchor', 'middle')
        .style('fill', 'black')
        .text(`${Math.abs(d)}%`);
    });

    function handleMouseover(diffValue) {
        if (foreignerData > localData) {
            svg.selectAll('.foreigner-bar').remove(); 
            svg.selectAll('.foreigner-bar')
                    .data(foreignerData)
                    .join('g')
                    .attr('class', 'foreigner-bar')
                    .each(function (d) {
                        const bar = d3.select(this);
                        bar.append('rect')
                        .attr('x', xScale('foreign worker'))
                        .attr('y', d => yScale(d))
                        .attr('width', xScale.bandwidth())
                        .attr('height', d => Math.abs(yScale(d) - yScale(localData))) 
                        .style("fill", "#FA7F6F");                   
                        bar.append('rect')
                        .attr('x', xScale('foreign worker'))
                        .attr('y', yScale(localData))
                        .attr('width', xScale.bandwidth())
                        .attr('height', Math.abs(yScale(0) - yScale(localData))) 
                        .style("fill", "#8ECFC9");
    
                        bar.append('text')
                        .attr('x', xScale('foreign worker') + xScale.bandwidth() / 2)
                        .attr('y', d => (d >= 0 ? yScale(d) - 5 : yScale(0) - 5))
                        .attr('text-anchor', 'middle')
                        .style('fill', 'black')
                        .text(`${Math.abs(d)}%`);
                    });
        } 
        else {
            svg.selectAll('.local-bar').remove(); 
            svg.selectAll('.local-bar')
                .data(localData)
                .join('g')
                .attr('class', 'local-bar')
                .each(function (d) {
                    const bar = d3.select(this);
                    bar.append('rect')
                    .attr('x', xScale('local'))
                    .attr('y', d => yScale(d))
                    .attr('width', xScale.bandwidth())
                    .attr('height', d => Math.abs(yScale(d) - yScale(foreignerData))) 
                    .style("fill", "#FA7F6F");
                    
                    bar.append('rect')
                    .attr('x', xScale('local'))
                    .attr('y', yScale(foreignerData))
                    .attr('width', xScale.bandwidth())
                    .attr('height', Math.abs(yScale(0) - yScale(foreignerData))) 
                    .style("fill", "#BEB8DC");
                    
                    bar.append('text')
                        .attr('x', xScale('local') + xScale.bandwidth() / 2)
                        .attr('y', d => (d >= 0 ? yScale(d) - 5 : yScale(0) - 5))
                        .attr('text-anchor', 'middle')
                        .style('fill', 'black')
                        .text(`${Math.abs(d)}%`);
                    })
        
        }}
    
    function handleMouseout(diffValue) {
        if (foreignerData > localData) {
            svg.selectAll('.foreigner-bar').remove();
            svg.selectAll('.foreigner-bar')
            .data(foreignerData)
            .join('g')
            .attr('class', 'foreigner-bar')
            .each(function (d) {
                const bar = d3.select(this);
        
                bar.append('rect')
                .attr('x', xScale('foreign worker'))
                .attr('y', d => (d >= 0 ? yScale(d) : yScale(0)))
                .attr('width', xScale.bandwidth())
                .attr('height', d => Math.abs(yScale(0) - yScale(d)))
                .style("fill", "#8ECFC9");
        
                bar.append('text')
                .attr('x', xScale('foreign worker') + xScale.bandwidth() / 2)
                .attr('y', d => (d >= 0 ? yScale(d) - 5 : yScale(0) - 5))
                .attr('text-anchor', 'middle')
                .style('fill', 'black')
                .text(`${Math.abs(d)}%`);
            });
        } 
        else {
            svg.selectAll('.local-bar').remove();
            svg.selectAll('.local-bar')
            .data(localData)
            .join('g')
            .attr('class', 'local-bar')
            .each(function (d) {
                const bar = d3.select(this);
        
                bar.append('rect')
                .attr('x', xScale('local'))
                .attr('y', d => (d >= 0 ? yScale(d) : yScale(0)))
                .attr('width', xScale.bandwidth())
                .attr('height', d => Math.abs(yScale(0) - yScale(d)))
                .style("fill", "#BEB8DC");
        
                bar.append('text')
                .attr('x', xScale('local') + xScale.bandwidth() / 2)
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
                Outcome Test
            </Typography>

            <Tooltip 
                title={
                    <span 
                    style={{ 
                        fontSize: '2em'
                    }}
                    >
                    The AI application is fairness if it has "equal" probability for foreign workers Predicted as Good Credit and locals Predicted as Good Credit to have Rated Good Credit.
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
            Of <span style={{textDecoration: 'underline' }}>foreign workers predicted as Good Credit</span>, <span style={{ color: '#1976D2' }}>75%</span> have <span style={{textDecoration: 'underline' }}>Rated Good Credit</span>.
            <br />
            Of <span style={{textDecoration: 'underline' }}>locals predicted as Rated Good Credit</span>, <span style={{ color: '#1976D2' }}>91%</span> have <span style={{textDecoration: 'underline' }}>Rated Good Credit</span>.
            <br />
            The difference between foreign workers and locals is: <span style={{ color: '#1976D2' }}>-16%</span>.
        </Typography>

       
        <Box 
        display="flex"
        alignItems="center"
         marginTop='55px'  > 
             <Button variant="contained" size="small" startIcon={<TouchAppIcon />} onClick={() => navigate(OTIMAGE_FOREIGNER_PATH)}>Check individual instances</Button>
        </Box>
  

    </Box>
    
    
   );
}

