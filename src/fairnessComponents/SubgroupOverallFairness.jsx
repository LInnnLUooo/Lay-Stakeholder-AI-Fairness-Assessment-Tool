import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';

import React, { useEffect,useState,useRef } from 'react';
import * as d3 from 'd3';
import Button from '@mui/material/Button';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import SubgroupOverallFairnessAgeForeignerChart from './SubgroupOverallFairnessAgeForeignerChart';
import SubgroupOverallFairnessGenderForeignerChart from './SubgroupOverallFairnessGenderForeignerChart';
import SubgroupOverallFairnessAllThreeChart from './SubgroupOverallFairnessAllThreeChart';

import { useNavigate } from 'react-router-dom';
const SUBGROUP_EXPLAIN_PATH = "/subgroupOverallFairnessExplanation";
const SUBGROUP_EXPLAIN_AGEFOREIGNER_PATH = "/subgroupOverallFairnessExplanationAgeForeigner";
const SUBGROUP_EXPLAIN_GENDERFOREIGNER_PATH = "/subgroupOverallFairnessExplanationGenderForeigner";
const SUBGROUP_EXPLAIN_ALLTHREE_PATH = "/subgroupOverallFairnessExplanationAllThree";

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

export default function SubgroupOverallFairness() {
    const navigate = useNavigate(); 
  
    const [selectedGroups, setSelectedGroups] = useState({
      Age: true,
      Gender: true,
      ForeignWorker: false,
      });

    const handleCheckboxChange = (event) => {
      setSelectedGroups({
          ...selectedGroups,
          [event.target.value]: event.target.checked,
      });
    };
    
    const renderSVG = () => {
      const { Age, Gender, ForeignWorker } = selectedGroups;
      
      if (Age && Gender && ForeignWorker) return <SubgroupOverallFairnessAllThreeChart rectHeight={rectHeight} />;
      if (Age && Gender) return <svg ref={svgRef} />;
      if (Age && ForeignWorker) return <SubgroupOverallFairnessAgeForeignerChart rectHeight={rectHeight} />;
      if (Gender && ForeignWorker) return <SubgroupOverallFairnessGenderForeignerChart rectHeight={rectHeight} />;
      if ((Age || Gender || ForeignWorker) || (!Age && !Gender && !ForeignWorker)) {
        return (
          <Paper elevation={3} sx={{ width: '85%', backgroundColor: '#f5f5f5', padding: '10px', margin: '20px',borderRadius: '8px' }}>
            <Typography 
                variant="h6" 
                component="div" 
                gutterBottom 
                color="red" 
                sx={{ fontWeight: 'bold' }}
            >
                ! Please select at least two group features you are interested in.
            </Typography>
          </Paper>
        );
      }
    };

    const [rectHeight,setRectHeight] = useState(20);
    

    const [data] = useState([[1,12],
      [2,17],[3,14],[4,17],[5,30],[6,40],[7,20],[8,29],[9,28]])
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

    },[data,rectHeight,selectedGroups])
    
    
    const handleSliderChange = (event, newValue) => {
      setRectHeight(newValue);
      
    }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" width = {500}> 

        <Typography variant="h6" component="div" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
              Subgroup Fairness Overview
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
                          <FormLabel id="group-selection-label" sx={{ textAlign: 'left' }}>Choose Protected Subgroups According to</FormLabel>
                          <FormGroup
                            row
                            aria-labelledby="group-selection-label"
                            name="group-selection"
                          >
                            <FormControlLabel value="Age" control={<Checkbox checked={selectedGroups.Age} onChange={handleCheckboxChange} />}  label="Age" />
                            <FormControlLabel value="Gender" control={<Checkbox checked={selectedGroups.Gender} onChange={handleCheckboxChange} />} label="Gender" />
                            <FormControlLabel value="ForeignWorker" control={<Checkbox checked={selectedGroups.ForeignWorker} onChange={handleCheckboxChange} />}  label="Foreign Worker" />
                          </FormGroup>
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
                {renderSVG()}
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
                      const { Age, Gender, ForeignWorker } = selectedGroups;
      
                      if (Age && Gender && !ForeignWorker) {navigate(SUBGROUP_EXPLAIN_PATH);};
                      if (Age && ForeignWorker && !Gender) {navigate(SUBGROUP_EXPLAIN_AGEFOREIGNER_PATH);};
                      if (Gender && ForeignWorker && !Age) {navigate(SUBGROUP_EXPLAIN_GENDERFOREIGNER_PATH);};
                      if (Age && Gender && ForeignWorker) {navigate(SUBGROUP_EXPLAIN_ALLTHREE_PATH);};

                  }}
                    >
              View Explanations
              </Button>  
        </Box>

        
    
                     

                    
                     
                       

                          
                           
                        

      </Box>


    
  );
}


