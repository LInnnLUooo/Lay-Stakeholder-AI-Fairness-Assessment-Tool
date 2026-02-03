import * as React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import AgeCounterfactualWorld from "./AgeCounterfactualWorld";
import GenderCounterfactualWorld from "./GenderCounterfactualWorld";
import ForeignerCounterfactualWorld from "./ForeignerCounterfactualWorld";
import ConsistencyMetric from "./ConsistencyMetric";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import InputLabel from '@mui/material/InputLabel';

import ZoomInIcon from '@mui/icons-material/ZoomIn';
import StraightenIcon from '@mui/icons-material/Straighten';
import { styled } from '@mui/system';
const Image = styled('img')({
  width: '25px',
  height: '25px',
  verticalAlign: 'middle',
  marginRight: '6px',
});

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function IndividualFairnessMetricsOverall() {

  const features = [
    'Duration', 'Credit Amount', 'Installment Rate', 'Residence Length', 
    'Existing Credits', 'Dependents', 'Checking Account', 'Credit History',
    'Purpose', 'Savings', 'Employment', 'Debtors', 'Property', 
    'Installment Plans', 'Housing', 'Job', 'Telephone'
  ];

  const [selectedFeature, setSelectedFeature] = React.useState('');

  const handleChange_CF = (event) => {
    setSelectedFeature(event.target.value);
  };
  
  const [value, setValue] = React.useState(0); 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [selectedWorld, setSelectedWorld] = useState("Age");

  return (
    <Box display="flex" 
            flexDirection="column" 
            alignItems="center"
            boxShadow="0px 4px 12px #7986cb" 
            borderRadius="8px"
            border={`2px solid #42a5f5`} 
            padding="3px"> 

            <Typography variant="h5" component="div" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
                Individual Fairness Metrics & Results
            </Typography>

            <Box sx={{ width: '100%' }}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                      <Tab label="Counterfactual Fairness" {...a11yProps(0)} />
                      <Tab label="Consistency" {...a11yProps(1)} />
                    </Tabs>
                  </Box>

                  <CustomTabPanel value={value} index={0}>
                      <Typography variant="h6" component="div" gutterBottom color="black" >
                      <strong>I choose Counterfactual Fairness because:</strong>
                      <br/>
                      <strong>I believe this definition best aligns with my ideal definition of fairness: I hope that for each individual, 
                      when I change the value of a specific feature (e.g., changing their Age, Gender or Foreign Worker status), the AI model should always give them the same prediction result.
                     </strong>
                        <br/>
                        
                      <br/>
                        
                        
                        
                        The closer the value is to 100%, the better the fairness of the model.
                        
                        <br/>
                      </Typography>

                      <Box display="flex" 
                          flexDirection="column" 
                          alignItems="center"
                          boxShadow="0px 4px 12px #7986cb" 
                          borderRadius="8px"
                         
                          padding="3px"> 

                              <Box display="flex" 
                                  justifyContent="center" 
                                  padding="3px">
                                  <FormControl>
                                            <FormLabel id="world-selection-label" sx={{ textAlign: 'left' }}>Choose a Counterfactual World You are Interested in</FormLabel>
                                            <RadioGroup
                                              row
                                              aria-labelledby="world-selection-label"
                                              defaultValue="Age"
                                              name="world-selection"
                                              onChange={event => setSelectedWorld(event.target.value)}
                                            >
                                              <FormControlLabel value="Age" control={<Radio />} label="Age" />
                                              <FormControlLabel value="Gender" control={<Radio />} label="Gender" />
                                              <FormControlLabel value="Foreign Worker" control={<Radio />} label="Foreign Worker" />
                                            </RadioGroup>
                                          </FormControl>
                                </Box>

                                <Box 
                                    display="flex"
                                    justifyContent="center"
                                    padding="6px"
                      
                                >    
                                        {selectedWorld === "Age" &&  <AgeCounterfactualWorld  />}
                                        {selectedWorld === "Gender" && <GenderCounterfactualWorld  />}
                                        {selectedWorld === "Foreign Worker" && <ForeignerCounterfactualWorld />}
                                </Box>

                               

                       </Box>
                      
                       <Box  sx={{ display: 'flex'}}>
                       <Typography variant="h6" component="div" gutterBottom color="black" >
                        <br/>
                       <Image src='/Red_exclaim.png' alt="Info Icon" /> <strong>Counterfactual fairness is not limited to the three features mentioned above; you can also apply this definition to any feature of interest:&nbsp; &nbsp;</strong>  
                      </Typography>

                      <FormControl sx={{ minWidth: 200, marginTop: 2 }}>
                    <InputLabel id="feature-select-label">Feature</InputLabel>
                    <Select
                      labelId="feature-select-label"
                      value={selectedFeature}
                      onChange={handleChange_CF}
                      label="Feature"
                    >
                      {features.map((feature) => (
                        <MenuItem key={feature} value={feature}>
                          {feature}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  </Box>
                 
                  </CustomTabPanel>

                  <CustomTabPanel value={value} index={1}>
                      <Typography variant="h6" component="div" gutterBottom color="black" >
                      <strong>I choose Consistency because:</strong>
                      <br/>
                      <strong>I believe this definition best aligns with my ideal definition of fairness: I hope that each individual should get the similar AI prediction result as those similar to them.
                       </strong>
                       <br/>



                       We select the <span style={{ color: '#1976D2' }}>5 most similar customers</span> for each person, i.e., their neighbors. If this person and their five neighbors all receive the same AI prediction result, it is considered fair for that person.
                      
                      We will represent the <span style={{ color: '#1976D2' }}>similarity </span>of AI's predictions<span style={{ color: '#1976D2' }}> between the individual and 
                      its 5 nearest neighbors</span>. 
                      <br/>
                      <br/>
                      
                      A score of <span style={{ color: '#1976D2' }}>100%</span> indicates predictions are <span style={{ color: '#1976D2' }}>completely similar</span>, 
                      while <span style={{ color: '#1976D2' }}>0%</span> signifies predictions are <span style={{ color: '#1976D2' }}>entirely dissimilar</span>.
                      <br/>
                        The closer the value is to 100%, the better the fairness of the model.
                      </Typography>

                      <Box display="flex" 
                          flexDirection="column" 
                          alignItems="center"
                          boxShadow="0px 4px 12px #7986cb" 
                          borderRadius="8px"
                          padding="3px"> 
                          <ConsistencyMetric/>
                       </Box>
                  </CustomTabPanel>

            </Box>

      </Box>
  );
}





