import React, { useEffect,useState,useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as d3 from 'd3';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import TouchAppIcon from '@mui/icons-material/TouchApp';

import { useNavigate } from 'react-router-dom';
const EOsIMAGE_FOREIGNER_PATH = "/explanationForeigner/EOsimage";


export default function GroupEqualizedOddsForeigner() {
    const navigate = useNavigate(); 
    const [data] = useState([-4,22,22])
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
          .domain(['Equal Opportunity','Predictive Equality','Equalized Odds'])
          .range([0, w])
          .padding(0.5)
    const yScale = d3.scaleLinear()
          .domain([-50, 100])
          .range([h, 0]);

    const xAxis = d3.axisBottom(xScale).ticks(data.length);
    const yAxis = d3.axisLeft(yScale).ticks(15);
    svg.append('g')
        .call(xAxis)
        .attr('transform', `translate(0, ${h/3*2})`)
        .style("font-size", "18px")
        .selectAll("text")  
        .style("text-anchor", "end")
        .attr("dx", "-.1em")
        .attr("dy", "2em")
        .attr("transform", "rotate(-45)");
    svg.append('g').call(yAxis);


    svg.append('text').attr('y',-40).attr('x',-120)
                .attr('transform', 'rotate(-90)')
                .style('text-anchor', 'middle')
                .style('dominant-baseline', 'middle')
                .text('Fairness Results');
   

    const EOData = data.filter((d, i) => ['Equal Opportunity', 'Predictive Equality', 'Equalized Odds'][i] === 'Equal Opportunity');
    const PEData = data.filter((d, i) => ['Equal Opportunity', 'Predictive Equality', 'Equalized Odds'][i] === 'Predictive Equality');
    const EOsData = data.filter((d, i) => ['Equal Opportunity', 'Predictive Equality', 'Equalized Odds'][i] === 'Equalized Odds');

    svg.selectAll('.EO-bar')
    .data(EOData)
    .join('g')
    .attr('class', 'EO-bar')
    .each(function (d) {
        const bar = d3.select(this);

        bar.append('rect')
        .attr('x', xScale('Equal Opportunity'))
        .attr('y', d => (d >= 0 ? yScale(d) : yScale(0)))
        .attr('width', xScale.bandwidth())
        .attr('height', d => Math.abs(yScale(0) - yScale(d)))
        .style("fill", "#8ECFC9");

        bar.append('text')
        .attr('x', xScale('Equal Opportunity') + xScale.bandwidth() / 2)
        .attr('y', d => (d >= 0 ? yScale(d) - 5 : yScale(0) -5))
        .attr('text-anchor', 'middle')
        .style('fill', 'black')
        .text(`${d}%`);
    });

    svg.selectAll('.PE-bar')
    .data(PEData)
    .join('g')
    .attr('class', 'PE-bar')
    .each(function (d) {
        const bar = d3.select(this);

        bar.append('rect')
        .attr('x', xScale('Predictive Equality'))
        .attr('y', d => (d >= 0 ? yScale(d) : yScale(0)))
        .attr('width', xScale.bandwidth())
        .attr('height', d => Math.abs(yScale(0) - yScale(d)))
        .style("fill", "#BEB8DC");

        bar.append('text')
        .attr('x', xScale('Predictive Equality') + xScale.bandwidth() / 2)
        .attr('y', d => (d >= 0 ? yScale(d) - 5 : yScale(0) -5))
        .attr('text-anchor', 'middle')
        .style('fill', 'black')
        .text(`${d}%`);
    });

    function handleMouseover(diffValue) {
        if (Math.abs(EOData) > Math.abs(PEData)) {
            svg.selectAll('.EO-bar').remove(); 
            svg.selectAll('.EO-bar')
                    .data(EOData)
                    .join('g')
                    .attr('class', 'EO-bar')
                    .each(function (d) {
                        const bar = d3.select(this);
                        bar.append('rect')
                        .attr('x', xScale('Equal Opportunity'))
                        .attr('y', d => (d >= 0 ? yScale(d) : yScale(0)))
                        .attr('width', xScale.bandwidth())
                       .attr('height', d => Math.abs(yScale(0) - yScale(d)))
                        .style("fill", "#FA7F6F");                   
    
                        bar.append('text')
                        .attr('x', xScale('Equal Opportunity') + xScale.bandwidth() / 2)
                        .attr('y', d => (d >= 0 ? yScale(d) - 5 : yScale(0) -5))
                        .attr('text-anchor', 'middle')
                        .style('fill', 'black')
                        .text(`${d}%`);
                    });
        } 
        else {
            svg.selectAll('.PE-bar').remove(); 
            svg.selectAll('.PE-bar')
                .data(PEData)
                .join('g')
                .attr('class', 'PE-bar')
                .each(function (d) {
                    const bar = d3.select(this);
                    bar.append('rect')
                    .attr('x', xScale('Predictive Equality'))
                    .attr('y', d => (d >= 0 ? yScale(d) : yScale(0)))
                    .attr('width', xScale.bandwidth())
                    .attr('height', d => Math.abs(yScale(0) - yScale(d)))
                    .style("fill", "#FA7F6F");
                    
                    bar.append('text')
                        .attr('x', xScale('Predictive Equality') + xScale.bandwidth() / 2)
                        .attr('y', d => (d >= 0 ? yScale(d) - 5 : yScale(0) -5))
                        .attr('text-anchor', 'middle')
                        .style('fill', 'black')
                        .text(`${d}%`);
                    })
        
        }}
    
    function handleMouseout(diffValue) {
        if (Math.abs(EOData) > Math.abs(PEData) ) {
            svg.selectAll('.EO-bar').remove();
            svg.selectAll('.EO-bar')
            .data(EOData)
            .join('g')
            .attr('class', 'EO-bar')
            .each(function (d) {
                const bar = d3.select(this);
        
                bar.append('rect')
                .attr('x', xScale('Equal Opportunity'))
                .attr('y', d => (d >= 0 ? yScale(d) : yScale(0)))
                .attr('width', xScale.bandwidth())
                .attr('height', d => Math.abs(yScale(0) - yScale(d)))
                .style("fill", "#8ECFC9");
        
                bar.append('text')
                .attr('x', xScale('Equal Opportunity') + xScale.bandwidth() / 2)
                .attr('y', d => (d >= 0 ? yScale(d) - 5 : yScale(0) -5))
                .attr('text-anchor', 'middle')
                .style('fill', 'black')
                .text(`${d}%`);
            });
        } 
        else {
            svg.selectAll('.PE-bar').remove();
            svg.selectAll('.PE-bar')
            .data(PEData)
            .join('g')
            .attr('class', 'PE-bar')
            .each(function (d) {
                const bar = d3.select(this);
        
                bar.append('rect')
                .attr('x', xScale('Predictive Equality'))
                .attr('y', d => (d >= 0 ? yScale(d) : yScale(0)))
                .attr('width', xScale.bandwidth())
                .attr('height', d => Math.abs(yScale(0) - yScale(d)))
                .style("fill", "#BEB8DC");
        
                bar.append('text')
                .attr('x', xScale('Predictive Equality') + xScale.bandwidth() / 2)
                .attr('y', d => (d >= 0 ? yScale(d) - 5 : yScale(0) -5))
                .attr('text-anchor', 'middle')
                .style('fill', 'black')
                .text(`${d}%`);
            });
        
    }}

    svg.selectAll('.EOs-bar')
    .data(EOsData)
    .join('rect')
    .attr('x', (d, i) => xScale('Equalized Odds'))
    .attr('y', d => (d >= 0 ? yScale(d) : yScale(0)))
    .attr('width', xScale.bandwidth())
    .attr('height', d => Math.abs(yScale(0) - yScale(d)))
    .attr('class', 'EOs-bar')
    .style("fill", "#FA7F6F")
    .on('mouseover', handleMouseover)
    .on('mouseout', handleMouseout);

    svg.selectAll('.EOs-label')
    .data(EOsData)
    .join('text')
    .attr('x', (d, i) => xScale('Equalized Odds') + xScale.bandwidth() / 2)
    .attr('y', d => (d >= 0 ? yScale(d) - 5 : yScale(0) - 5))
    .attr('class', 'EOs-label')
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
                Equalized Odds
            </Typography>
            <Tooltip 
                title={
                    <span 
                    style={{ 
                        fontSize: '2em'
                    }}
                    >
                    The AI application is fairness if Equal Opportunity and Predictive Equality meet the fairness requirement.
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
            Equalized Odds combines <span style={{textDecoration: 'underline' }}>Equal Opportunity</span> and <span style={{textDecoration: 'underline' }}>Predictive Equality</span>,.
            <br />
            The difference between foreign workers and locals is: <span style={{ color: '#1976D2' }}>22%</span>.
        </Typography>

        <Box 
            display="flex"
            alignItems="center" 
            marginTop='115px' > 
             <Button variant="contained" size="small" startIcon={<TouchAppIcon />} onClick={() => navigate(EOsIMAGE_FOREIGNER_PATH)}>Check individual instances</Button>
        </Box>
    

    </Box>
   
    
   );
}

