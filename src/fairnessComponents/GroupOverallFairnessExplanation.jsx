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

            {/* 1. Header: Group Fairness Metrics & Results*/}
            <Typography variant="h5" component="div" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
              Group Fairness Metrics & Results: Age 
            </Typography>

            {/* 2. charts row 1: Demographic Parity; Equal Opportunity; Predictive Equality*/}
            <Box display="flex" 
            justifyContent="center" 
            padding="3px">

                {/* 1.1 chart: Demographic Parity */}
                <Box flex="3" padding = "12px" marginRight = "3px" borderRadius="8px" border={`2px solid ${theme.palette.primary.main}`}> 
                    <GroupDemographicParity />
                </Box>

                {/* 1.2 chart: Equal Opportunity */}
                <Box flex="3" padding = "12px" marginRight = "3px" borderRadius="8px" border={`2px solid ${theme.palette.primary.main}`}>
                    <GroupEqualOpportunity />
                </Box>

                {/* 1.3 chart:  Predictive Equality */}            
                <Box flex="3" padding = "12px" borderRadius="8px" border={`2px solid ${theme.palette.primary.main}`}>
                    <GroupPredictiveEquality />                  
                </Box>

            </Box>      
        
            {/* 3. charts row 2: Equalized Odds; Outcome Test; Conditional Statistical Parity*/}
            <Box display="flex" 
            justifyContent="center" 
            padding="3px">

                {/* 2.1 chart: Equalized Odds */}
                <Box flex="3" padding = "12px" marginRight = "3px" borderRadius="8px" border={`2px solid ${theme.palette.primary.main}`}> 
                    <GroupEqualizedOdds />
                </Box>

                {/* 2.2 chart:  Outcome Test */}
                <Box flex="3" padding = "12px" marginRight = "3px" borderRadius="8px" border={`2px solid ${theme.palette.primary.main}`}>
                    <GroupOutcomeTest />
                </Box>

                {/* 2.3 chart:  Conditional Statistical Parity */}            
                <Box flex="3" padding = "12px" borderRadius="8px" border={`2px solid ${theme.palette.primary.main}`} flexDirection="column">
                     <GroupConditionalStatisticalParity />      
                </Box>

            </Box>  
        
        
        </Box>    
    );
}