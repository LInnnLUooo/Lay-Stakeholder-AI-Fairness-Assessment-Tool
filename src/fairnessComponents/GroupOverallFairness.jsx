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

import GroupOverallFairnessGenderChart from './GroupOverallFairnessGenderChart'
import GroupOverallFairnessForeignerChart from './GroupOverallFairnessForeignerChart'

import { useNavigate } from 'react-router-dom';
const EXPLAIN_PATH = "/explanation";
const EXPLAIN_GENDER_PATH = "/explanationGender";
const EXPLAIN_FOREIGNER_PATH = "/explanationForeigner";

const marks = [
  {
    value: 0,
    label: '0%',
  },
  {
    value: 10,
    label: '10%',
  },
  {
    value: 20,
    label: '20%',
  },
  {
    value: 30,
    label: '30%',
  },
  {
    value: 40,
    label: '40%',
  },
  {
    value: 50,
    label: '50%',
  },
];

function valuetext(value) {
  return `${value}%`;
}

export default function GroupOverallFairness() {   
    const [selectedSensitiveFeature, setSelectedSensitiveFeature] = useState("Age");

    const navigate = useNavigate(); 

    const [rectHeight,setRectHeight] = useState(10);
    const [rectLowHeight,setRectLowHeight] = useState(-10);

    const [data] = useState([[1,-1],
      [2,-4],[3,10],[4,10],[5,-14],[6,17],[7,8],[8,-28],[9,6]])
    const xAxisNames = ["", "DP", "EO", "PE", "EOs", "OT", "CSP1", "CSP2", "CSP3", "CSP4"];
    const svgRef = useRef();
    
    useEffect(()=>{

    const w = 430;
    const h = 500;
    const svg = d3.select(svgRef.current)
          .attr('width',"90%")
          .attr('height',h)
          .attr('viewBox', '0 0 450 500')
          .style('overflow','visible')
          .style('margin-top','20px')

     svg.selectAll('*').remove();
    const xScale = d3.scaleLinear()
          .domain([0,9])
          .range([0, w])
     
    const yScale = d3.scaleLinear()
          .domain([-50, 50])
          .range([h, 0]);

    const xAxis = d3.axisBottom(xScale).ticks(data.length).tickFormat(d => xAxisNames[d]);
    const yAxis = d3.axisLeft(yScale).ticks(10);
    svg.append('g').call(xAxis).attr('transform', `translate(0, ${h/2})`).style("font-size", "16px");
    svg.append('g').call(yAxis).style("font-size", "16px");;


    svg.append('text').attr('x',w/3).attr('y',h+20)
        .text('Fairness Metrics')
        .style('font-size', '18px')
    svg.append('text').attr('y',-60).attr('x',-180)
                .attr('transform', 'rotate(-90)')
                .style('text-anchor', 'middle')
                .style('dominant-baseline', 'middle')
                .style('font-size', '18px')
                .text('Fairness Results(difference between age groups)')


    svg.selectAll('circle').remove();
    svg.selectAll('.red-circle').remove();
    
    svg.selectAll('circle')
      .data(data.filter(d => d[1] >= rectLowHeight && d[1] <= rectHeight))
      .enter()
      .append('circle')
      .attr('cx', d => xScale(d[0]))
      .attr('cy', d => yScale(d[1]))
      .attr('r', 4)
      .style('fill', '#047731');

    svg.selectAll('.red-circle')
      .data(data.filter(d => d[1] < rectLowHeight || d[1] > rectHeight))
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
    .attr('y', d => yScale(d[1]) + 25)
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
    .attr('height', yScale(rectLowHeight)-yScale(rectHeight))
    .attr('fill', '#baedce');
    
    console.log(rectLowHeight);
    console.log(rectHeight);

    },[data,rectLowHeight,rectHeight,selectedSensitiveFeature])
    
    
    const handleSliderChange = (event, newValue) => {
      setRectHeight(newValue);
      setRectLowHeight(-newValue); 
      
    }

    

  return (
    <Box display="flex" flexDirection="column" alignItems="center" width = {500}> 

        <Typography variant="h6" component="div" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
              Group Fairness Overview
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
                 <Box padding="6px">
                      <FormControl>
                          <FormLabel id="group-selection-label" sx={{ textAlign: 'left' }}>Choose a Protected Goup According to</FormLabel>
                          <RadioGroup
                            row
                            aria-labelledby="group-selection-label"
                            defaultValue="Age"
                            name="group-selection"
                            onChange={event => setSelectedSensitiveFeature(event.target.value)}
                          >
                            <FormControlLabel value="Age" control={<Radio />} label="Age" />
                            <FormControlLabel value="Gender" control={<Radio />} label="Gender" />
                            <FormControlLabel value="Foreign Worker" control={<Radio />} label="Foreign Worker" />
                          </RadioGroup>
                        </FormControl>
                    
                  </Box>

                <Box padding="6px">
                    <Typography id="linear-slider" gutterBottom>
                      Set a Threshold (Difference between Groups)
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
                {selectedSensitiveFeature === "Age" &&  <svg key="ageChart" ref={svgRef} > </svg>}
                {selectedSensitiveFeature === "Gender" && <GroupOverallFairnessGenderChart key="genderChart" rectHeight={rectHeight} rectLowHeight = {rectLowHeight}/>}
                {selectedSensitiveFeature === "Foreign Worker" && <GroupOverallFairnessForeignerChart key="genderChart" rectHeight={rectHeight} rectLowHeight = {rectLowHeight}/>}
                
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
                  1. DP: Demographic Parity <br/>
                  2. EO: Equal Opportunity <br/>
                  3. PE: predictive Equality <br/>
                  4. EO: Equalized Odds <br/>
                  5. OT: Outcome Test <br/>
                  6. CSP: Conditional Statistical Parity <br/>
                  CSP1 : Conditional Statistical Parity (Condition: Job) <br/>
                  CSP2 : Conditional Statistical Parity (Condition: Savings) <br/>
                  CSP3 : Conditional Statistical Parity (Condition: Employment) <br/>
                  CSP4 : Conditional Statistical Parity (Condition: Credit History) <br/>
                  </Typography>
                </AccordionDetails>
              </Accordion>        
          
        </Box>

        <Box 
            display="flex"
            alignItems="center"  > 
            <Button variant="contained" 
                    size="small"
                    onClick={() => {
                    switch (selectedSensitiveFeature) {
                        case "Age":
                            navigate(EXPLAIN_PATH);
                            break;
                        case "Gender":
                            navigate(EXPLAIN_GENDER_PATH);
                            break;
                        case "Foreign Worker":
                            navigate(EXPLAIN_FOREIGNER_PATH);
                            break;
                        default:
                            break;
                    }
                }}>
                    View Explanations
              </Button>
        </Box>
                    

      </Box>


    
  );
}

 
  

