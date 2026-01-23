import * as React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import IndividualFairnessAgeCounterfactualWorld from "./IndividualFairnessAgeCounterfactualWorld";
import IndividualFairnessGenderCounterfactualWorld from "./IndividualFairnessGenderCounterfactualWorld";
import IndividualFairnessForeignerCounterfactualWorld from "./IndividualFairnessForeignerCounterfactualWorld";
import IndividualFairnessConsistency from "./IndividualFairnessConsistency";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import ZoomInIcon from '@mui/icons-material/ZoomIn';
import StraightenIcon from '@mui/icons-material/Straighten';

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

export default function IndividualOverallFairnessExplanation({selectedID, handleItemClick}) {
  
  // 0: tab1, counterfactual fairness; 1: tab2, consistency
  const [value, setValue] = React.useState(0); 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // in tab 1: conterfactual world selection (radio group)
  const [selectedWorld, setSelectedWorld] = useState("Age");

  return (
    <Box display="flex" 
            flexDirection="column" 
            alignItems="center"
            boxShadow="0px 4px 12px #7986cb" 
            borderRadius="8px"
            border={`2px solid #42a5f5`} 
            padding="3px"> 

            {/* 1. Header: Individual Fairness Metrics & Results*/}
            <Typography variant="h5" component="div" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
                Individual Fairness Metrics & Results
            </Typography>

            {/* 2. explanation for counterfactual fairness & consistency tabs*/}
            <Box sx={{ width: '100%' }}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                      <Tab label="Counterfactual Fairness" {...a11yProps(0)} />
                      <Tab label="Consistency" {...a11yProps(1)} />
                    </Tabs>
                  </Box>

                  {/* 2.1 explanation for counterfactual fairness*/}
                  <CustomTabPanel value={value} index={0}>
                      <Typography variant="h6" component="div" gutterBottom color="black" >
                        <ZoomInIcon /> <strong>What aspect does countefactual fairness concern?</strong> <br/>
                        Counterfactual fairness means that the AI system should make the same decision for an individual, <span style={{ color: '#1976D2' }}>  
                        regardless of certain hypothetical changes in the personal characteristics </span>. 
                        <br/>
                        In our context, <span style={{ color: '#1976D2' }}> the counterfactual worlds include: age, gender and foreign worker </span>.
                        <br/>
                        <br/>
                        <StraightenIcon /> <strong>How to measure fairness?</strong><br/> 
                        A score of <span style={{ color: '#1976D2' }}>100%</span> indicates all individuals <span style={{ color: '#1976D2' }}>obtain the same predictions</span> under the selected counterfactual world.
                        <br/>
                        The closer the value is to 100, the better the fairness of the model.
                        
                        <br/>
                      </Typography>

                      <Box display="flex" 
                          flexDirection="column" 
                          alignItems="center"
                          boxShadow="0px 4px 12px #7986cb" 
                          borderRadius="8px"
                          padding="3px"> 

                              {/* 2.1.1 radio group for selection counterfactual world*/}
                              <Box display="flex" 
                                  justifyContent="center" 
                                  padding="3px">
                                  {/* RadioGroup */}
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

                                {/* 2.1.2 explanation for each counterfatcual fairness*/}                                 
                                <Box 
                                    display="flex"
                                    padding="6px"
                                    alignItems="flex-start"  // 控制垂直方向的对齐
                                    justifyContent="flex-end" // 控制水平方向的对齐
                                    //border={`2px solid #42a5f5`}
                                >    
                                        {/* 根据当前的 radio 选择值，动态地渲染相应的 SVG 组件。 */}
                                        {selectedWorld === "Age" &&  <IndividualFairnessAgeCounterfactualWorld selectedID={selectedID} handleItemClick={handleItemClick} />}
                                        {selectedWorld === "Gender" && <IndividualFairnessGenderCounterfactualWorld selectedID={selectedID} handleItemClick={handleItemClick} />}
                                        {selectedWorld === "Foreign Worker" && <IndividualFairnessForeignerCounterfactualWorld selectedID={selectedID} handleItemClick={handleItemClick} />}
                                </Box>

                       </Box>
                    {/* Counterfactual Fairness */}
                  </CustomTabPanel>

                  {/* 2.2 explanation for consistency*/}
                  <CustomTabPanel value={value} index={1}>
                      <Typography variant="h6" component="div" gutterBottom color="black" >
                      <ZoomInIcon /> <strong>What aspect does consistency concern?</strong> <br/>
                      Consistency is a metric that evaluates <span style={{ color: '#1976D2' }}> how similarly an AI model treats simialr individuals</span>.
                      In our context, we select 5 individuals with the highest similarity, namely, <span style={{ color: '#1976D2' }}> the 5 nearest neighbors </span> for each individual.
                      We will represent the <span style={{ color: '#1976D2' }}>similarity or congruence </span>of prediction results<span style={{ color: '#1976D2' }}> between the individual and 
                      its 5 nearest neighbors</span>. 
                      <br/>
                      <br/>
                      <StraightenIcon /> <strong>How to measure fairness?</strong><br/> 
                      A score of <span style={{ color: '#1976D2' }}>100%</span> indicates predictions are <span style={{ color: '#1976D2' }}>completely similar</span>, 
                      while <span style={{ color: '#1976D2' }}>0%</span> signifies predictions are <span style={{ color: '#1976D2' }}>entirely dissimilar</span>.
                      <br/>
                        The closer the value is to 100, the better the fairness of the model.
                      </Typography>

                      <Box display="flex" 
                          flexDirection="column" 
                          alignItems="center"
                          boxShadow="0px 4px 12px #7986cb" 
                          borderRadius="8px"
                          padding="3px"> 
                          <IndividualFairnessConsistency/>
                       </Box>
                  </CustomTabPanel>

            </Box>

      </Box>
  );
}





