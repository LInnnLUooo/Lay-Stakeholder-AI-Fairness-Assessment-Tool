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
const INDIVIDUAL_PATH = "/individualOverallFairnessExplanation";

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
    const navigate = useNavigate(); 

    const [rectHeight,setRectHeight] = useState(5);
    

    const [data] = useState([[1,99],
      [2,98.5],[3,100],[4,92]])
    const xAxisNames = ["", "CF-age", "CF-gender", "CF-foreigner", "Consistency"];
    const svgRef = useRef();
    
    useEffect(()=>{
      
    const w = 400;
    const h = 500;
    const svg = d3.select(svgRef.current)
          .attr('width',"90%")
          .attr('height',h)
          .attr('viewBox', '0 0 400 500')
          .style('overflow','visible')
          .style('margin-top','20px')
    svg.selectAll('*').remove();
    const xScale = d3.scaleLinear()
          .domain([0, 4])
          .range([0, w]);
    const yScale = d3.scaleLinear()
          .domain([50, 100])
          .range([h, 0]);

    const xAxis = d3.axisBottom(xScale).ticks(data.length).tickFormat(d => xAxisNames[d]);
    const yAxis = d3.axisLeft(yScale).ticks(5);
    svg.append('g').call(xAxis).attr('transform', `translate(0,0)`).style("font-size", "16px");
    svg.append('g').call(yAxis).style("font-size", "16px");


    svg.append('text').attr('x',w/3).attr('y',h+20)
        .text('Fairness Metrics')
        .style('font-size', '18px')
    svg.append('text').attr('y',-60).attr('x',-160)
                .attr('transform', 'rotate(-90)')
                .style('text-anchor', 'middle')
                .style('dominant-baseline', 'middle')
                .style('font-size', '18px')
                .text('Fairness Results(among overall individuals)')


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

    svg.selectAll('text.datapoint-label')
    .data(data)
    .enter()
    .append('text')
    .attr('x', d => xScale(d[0]))
    .attr('y', d => yScale(d[1]) + 40)
    .attr('class', 'datapoint-label')
    .attr('text-anchor', 'middle')
    .style('font-size', '14px')
    .style('font-weight', 'bold') 
    .text(d => `${d[1]}%`);
    
    svg.select('rect').remove();
    
    svg
    .insert('rect', ':first-child')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width',xScale(4) - xScale(0))
    .attr('height', yScale(1-rectHeight)-yScale(1))
    .attr('fill', '#baedce');
    
    console.log(rectHeight);

    },[data,rectHeight])
    

    const handleSliderChange = (event, newValue) => {
      
      setRectHeight(newValue);
      
    }

  return (

    <Box display="flex" flexDirection="column" alignItems="center" width = {500}> 

        <Typography variant="h6" component="div" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
              Individual Fairness Overview
        </Typography>

        <Box 
            display="flex"
            alignItems="left"
            flexDirection="column"
            width="90%"
            height={180}
            border={`2px solid #42a5f5`}
            borderRadius="8px"
            padding="6px"
            >
                 <Box padding="3px">
                    <Typography variant="h6" component="div" gutterBottom >
                            Similar individuals should be treated similarly.
                    </Typography>    
                </Box>

                <Box padding="3px">
                    <Typography id="linear-slider" gutterBottom>
                      Set a Threshold for Individual Fairness
                    </Typography>
                    
                    <Slider
                      aria-label="Always visible"
                      value={rectHeight}
                      onChange={handleSliderChange} 
                      getAriaValueText={valuetext}
                      valueLabelFormat={valuetext}
                      step={1}
                      marks={marks}
                      valueLabelDisplay="on"
                      min={0}
                      max={50}
                      sx={{ fontSize: '6px',
                      }}
                     
                    />
                </Box>
             </Box>       
        
        <Box 
            display="flex"
            padding="6px"
            alignItems="flex-start"
            justifyContent="flex-end"
        >    
                <svg ref={svgRef} > </svg>
          </Box>
        

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
        
        <Box 
            display="flex"
            alignItems="center"  > 
            <Button variant="contained" onClick={() => navigate(INDIVIDUAL_PATH)} size="small" >View Explanations</Button>  
        </Box>

        
    
                     

                    
                     
                       

                          
                           
                        

      </Box>


    
  );
}


