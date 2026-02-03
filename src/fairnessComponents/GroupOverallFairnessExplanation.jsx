import * as React from 'react';
import GroupDemographicParity from '../fairnessComponents/GroupDemographicParity';
import GroupEqualOpportunity from '../fairnessComponents/GroupEqualOpportunity';
import GroupPredictiveEquality from '../fairnessComponents/GroupPredictiveEquality';
import GroupEqualizedOdds from '../fairnessComponents/GroupEqualizedOdds';
import GroupOutcomeTest from '../fairnessComponents/GroupOutcomeTest';
import GroupConditionalStatisticalParity from '../fairnessComponents/GroupConditionalStatisticalParity';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useTheme } from '@mui/material/styles';

export default function GroupOverallFairnessExplanation() {
    const theme = useTheme();
   
    return(
        <Box display="flex" 
            flexDirection="column" 
            alignItems="center"
            boxShadow="0px 4px 12px #7986cb" 
            borderRadius="8px"
            border={`2px solid #42a5f5`} 
            padding="3px"> 

            <Typography variant="h5" component="div" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
              Group Fairness Metrics & Results: Age 
            </Typography>

            <Box display="flex" 
            justifyContent="center" 
            padding="3px">

                <Box flex="3" padding = "12px" marginRight = "3px" borderRadius="8px" border={`2px solid ${theme.palette.primary.main}`}> 
                    <GroupDemographicParity />
                </Box>

                <Box flex="3" padding = "12px" marginRight = "3px" borderRadius="8px" border={`2px solid ${theme.palette.primary.main}`}>
                    <GroupEqualOpportunity />
                </Box>

                <Box flex="3" padding = "12px" borderRadius="8px" border={`2px solid ${theme.palette.primary.main}`}>
                    <GroupPredictiveEquality />                  
                </Box>

            </Box>      
        
            <Box display="flex" 
            justifyContent="center" 
            padding="3px">

                <Box flex="3" padding = "12px" marginRight = "3px" borderRadius="8px" border={`2px solid ${theme.palette.primary.main}`}> 
                    <GroupEqualizedOdds />
                </Box>

                <Box flex="3" padding = "12px" marginRight = "3px" borderRadius="8px" border={`2px solid ${theme.palette.primary.main}`}>
                    <GroupOutcomeTest />
                </Box>

                <Box flex="3" padding = "12px" borderRadius="8px" border={`2px solid ${theme.palette.primary.main}`} flexDirection="column">
                     <GroupConditionalStatisticalParity />      
                </Box>

            </Box>  
        
        
        </Box>    
    );
}