import * as React from 'react';
import GroupDemographicParityForeigner from '../fairnessComponents/GroupDemographicParityForeigner';
import GroupEqualOpportunityForeigner from '../fairnessComponents/GroupEqualOpportunityForeigner';
import GroupPredictiveEqualityForeigner from '../fairnessComponents/GroupPredictiveEqualityForeigner';
import GroupEqualizedOddsForeigner from '../fairnessComponents/GroupEqualizedOddsForeigner';
import GroupOutcomeTestForeigner from '../fairnessComponents/GroupOutcomeTestForeigner';
import GroupConditionalStatisticalParityForeigner from '../fairnessComponents/GroupConditionalStatisticalParityForeigner';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useTheme } from '@mui/material/styles';

export default function GroupOverallFairnessExplanationForeigner() {
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
              Group Fairness Metrics & Results: Foreign Worker
            </Typography>

            <Box display="flex" 
            justifyContent="center" 
            padding="3px">

                <Box flex="3" padding = "12px" marginRight = "3px" borderRadius="8px" border={`2px solid ${theme.palette.primary.main}`}> 
                    <GroupDemographicParityForeigner />
                </Box>

                <Box flex="3" padding = "12px" marginRight = "3px" borderRadius="8px" border={`2px solid ${theme.palette.primary.main}`}>
                    <GroupEqualOpportunityForeigner />
                </Box>

                <Box flex="3" padding = "12px" borderRadius="8px" border={`2px solid ${theme.palette.primary.main}`}>
                    <GroupPredictiveEqualityForeigner />                  
                </Box>

            </Box>      
        
            <Box display="flex" 
            justifyContent="center" 
            padding="3px">

                <Box flex="3" padding = "12px" marginRight = "3px" borderRadius="8px" border={`2px solid ${theme.palette.primary.main}`}> 
                    <GroupEqualizedOddsForeigner />
                </Box>

                <Box flex="3" padding = "12px" marginRight = "3px" borderRadius="8px" border={`2px solid ${theme.palette.primary.main}`}>
                    <GroupOutcomeTestForeigner />
                </Box>

                <Box flex="3" padding = "12px" borderRadius="8px" border={`2px solid ${theme.palette.primary.main}`} flexDirection="column">
                     <GroupConditionalStatisticalParityForeigner />      
                </Box>

            </Box>  
        
        
        </Box>    
    );
}