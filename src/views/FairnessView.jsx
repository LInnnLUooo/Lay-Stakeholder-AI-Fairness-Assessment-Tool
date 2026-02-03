import * as React from 'react';
import CausalGraphTestDataset from '../featureExplorationComponents/CausalGraphTestDataset';
import CausalGraphTrainDataset from '../featureExplorationComponents/CausalGraphTrainDataset';
import FeatureImportance from '../featureExplorationComponents/FeatureImportance';
import DataDistribution from '../featureExplorationComponents/DataDistribution';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import GroupOverallFairness from '../fairnessComponents/GroupOverallFairness';
import SubgroupOverallFairness from '../fairnessComponents/SubgroupOverallFairness';
import IndividualOverallFairness from '../fairnessComponents/IndividualOverallFairness';
import GroupDemographicParity from '../fairnessComponents/GroupDemographicParity';
import GroupPredictiveEquality from '../fairnessComponents/GroupPredictiveEquality';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { styled } from '@mui/system';
const Image = styled('img')({
  width: '25px',
  height: '25px',
  verticalAlign: 'middle',
  marginRight: '6px',
});

export default function FairnessView() {
    const theme = useTheme();
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <Box display="flex" 
            flexDirection="column" 
            alignItems="center"
            height="98%"
            boxShadow="0px 4px 12px #7986cb" 
            borderRadius="8px"
            padding="6px"
            margin='6px'
            > 

            <Typography variant="h4" component="div" gutterBottom color="primary" sx={{ fontWeight: 'bold'}}>
              Feature Exploration
            </Typography>

            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} 
                aria-label="lab API tabs example"
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
                >
                    <Tab label="Causal Graph: Training Data" value="1" sx={{ fontSize: '1.25rem', fontWeight: 'bold'}}/>
                    <Tab label="Causal Graph: Test Data" value="2"
                    sx={{ fontSize: '1.3rem', fontWeight: 'bold'}} />
                    <Tab label="Feature Importance" value="3"
                    sx={{ fontSize: '1.3rem', fontWeight: 'bold'}} />
                    <Tab label="Data Distribution" value="4" sx={{ fontSize: '1.3rem', fontWeight: 'bold'}}/>
                </TabList>
                </Box>
                <TabPanel value="1">
                    <Box display="flex" justifyContent="center" 
                     flexDirection="column"
                     alignItems="center" width="100%" height="98%">
                    

                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon  color="primary"/>}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <Typography style={{ fontSize: '20pt' }} >
                        <Image src='/Red_exclaim.png' alt="Info Icon" />
                            Click here to check how to use.</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography style={{ fontSize: '20pt' }}>
                        A causal graph shows the causal relationships between features, with arrows indicating the influence of one feature on another. Each node represents a feature (e.g., Age, Job). Orange nodes indicate protected features and the dark blue node represents the user's rated credit level.
                  
                  The graph below displays the causal relationships in our training dataset. You can click on a node to highlight the causally related features. The thickness of the edges represents the weight, indicating the strength of the causal relationship. 
                  
                  It helps you understand which factors directly impact the customer's credit level and which do so indirectly through other variables. This is crucial for identifying potential sources of bias in the data used to train the AI model. 
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    
                   

                        <CausalGraphTrainDataset />
                    </Box>
                </TabPanel>
                <TabPanel value="2">
                    <Box display="flex" 
                     flexDirection="column"
                    justifyContent="center" alignItems="center" width="100%" height="98%">

                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon  color="primary"/>}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <Typography style={{ fontSize: '20pt' }} >
                        <Image src='/Red_exclaim.png' alt="Info Icon" />
                            Click here to check how to use.</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography style={{ fontSize: '20pt' }}>
                         A causal graph shows the causal relationships between features, with arrows indicating the influence of one feature on another. Each node represents a feature (e.g., Age, Job). Orange nodes indicate protected features and the dark blue node represents the AI's predicted credit level.
                        
                  The graph below displays the causal relationships in our test dataset. You can click on a node to highlight the causally related features. The thickness of the edges represents the weight, indicating the strength of the causal relationship. 
                  
                  It helps you understand which factors directly impact the customer's credit level and which do so indirectly through other variables. This is crucial for identifying potential AI model's bias when making predictions. 
                        </Typography>
                      </AccordionDetails>
                    </Accordion>

                        <CausalGraphTestDataset />
                    </Box>
                </TabPanel>
                <TabPanel value="3">
                    <Box display="flex" 
                     flexDirection="column"
                    justifyContent="center" 
                    alignItems="center" width="100%" height="98%">
                    <Typography style={{ fontSize: '20pt', width: '90%', marginTop:'15px',marginBottom: '25px'  }} > 📢The graph shows the influence of each feature on the model's predictions (probability of getting a Good Credit prediction). Higher values indicate greater influence, with red representing negative impacts and green representing positive impacts.</Typography>

                        <FeatureImportance />
                    </Box>
                </TabPanel>
                <TabPanel value="4">
                <Box display="flex" 
                     flexDirection="column"
                    justifyContent="center" 
                    alignItems="center" width="100%" height="98%">

<Typography style={{ fontSize: '20pt', width: '90%', }} >  
  <Image src='/Red_exclaim.png' alt="Info Icon" />
This shows the distribution of different values for each feature in the data used to train the AI model.

</Typography>


                  <DataDistribution/>
                  </Box>
                  </TabPanel>
            </TabContext>

           
            
                
        </Box>    
    );
}
