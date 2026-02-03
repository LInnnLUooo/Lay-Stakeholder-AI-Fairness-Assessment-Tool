import * as React from 'react';
import GroupDemographicParityGender from '../fairnessComponents/GroupDemographicParityGender';
import GroupEqualOpportunityGender from '../fairnessComponents/GroupEqualOpportunityGender';
import GroupPredictiveEqualityGender from '../fairnessComponents/GroupPredictiveEqualityGender';
import GroupEqualizedOddsGender from '../fairnessComponents/GroupEqualizedOddsGender';
import GroupOutcomeTestGender from '../fairnessComponents/GroupOutcomeTestGender';
import GroupConditionalStatisticalParityGender from '../fairnessComponents/GroupConditionalStatisticalParityGender';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useTheme } from '@mui/material/styles';

export default function GroupOverallFairnessExplanationGender() {
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
            Group Fairness Metrics & Results: Gender
            </Typography>

            <Box display="flex" 
            justifyContent="center" 
            padding="3px">

                <Box flex="3" padding = "12px" marginRight = "3px" borderRadius="8px" border={`2px solid ${theme.palette.primary.main}`}> 
                    <GroupDemographicParityGender />
                </Box>

                <Box flex="3" padding = "12px" marginRight = "3px" borderRadius="8px" border={`2px solid ${theme.palette.primary.main}`}>
                    <GroupEqualOpportunityGender />
                </Box>

                <Box flex="3" padding = "12px" borderRadius="8px" border={`2px solid ${theme.palette.primary.main}`}>
                    <GroupPredictiveEqualityGender />                  
                </Box>

            </Box>      
        
            <Box display="flex" 
            justifyContent="center" 
            padding="3px">

                <Box flex="3" padding = "12px" marginRight = "3px" borderRadius="8px" border={`2px solid ${theme.palette.primary.main}`}> 
                    <GroupEqualizedOddsGender />
                </Box>

                <Box flex="3" padding = "12px" marginRight = "3px" borderRadius="8px" border={`2px solid ${theme.palette.primary.main}`}>
                    <GroupOutcomeTestGender />
                </Box>

                <Box flex="3" padding = "12px" borderRadius="8px" border={`2px solid ${theme.palette.primary.main}`} flexDirection="column">
                     <GroupConditionalStatisticalParityGender />      
                </Box>

            </Box>  
        
        
        </Box>    
    );
}