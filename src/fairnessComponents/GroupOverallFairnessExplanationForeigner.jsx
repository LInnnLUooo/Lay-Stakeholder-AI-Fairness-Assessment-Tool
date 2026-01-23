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

            {/* 1. Header: Group Fairness Metrics & Results*/}
            <Typography variant="h5" component="div" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
              Group Fairness Metrics & Results: Foreign Worker
            </Typography>

            {/* 2. charts row 1: Demographic Parity; Equal Opportunity; Predictive Equality*/}
            <Box display="flex" 
            justifyContent="center" 
            padding="3px">

                {/* 1.1 chart: Demographic Parity */}
                <Box flex="3" padding = "12px" marginRight = "3px" borderRadius="8px" border={`2px solid ${theme.palette.primary.main}`}> 
                    <GroupDemographicParityForeigner />
                </Box>

                {/* 1.2 chart: Equal Opportunity */}
                <Box flex="3" padding = "12px" marginRight = "3px" borderRadius="8px" border={`2px solid ${theme.palette.primary.main}`}>
                    <GroupEqualOpportunityForeigner />
                </Box>

                {/* 1.3 chart:  Predictive Equality */}            
                <Box flex="3" padding = "12px" borderRadius="8px" border={`2px solid ${theme.palette.primary.main}`}>
                    <GroupPredictiveEqualityForeigner />                  
                </Box>

            </Box>      
        
            {/* 3. charts row 2: Equalized Odds; Outcome Test; Conditional Statistical Parity*/}
            <Box display="flex" 
            justifyContent="center" 
            padding="3px">

                {/* 2.1 chart: Equalized Odds */}
                <Box flex="3" padding = "12px" marginRight = "3px" borderRadius="8px" border={`2px solid ${theme.palette.primary.main}`}> 
                    <GroupEqualizedOddsForeigner />
                </Box>

                {/* 2.2 chart:  Outcome Test */}
                <Box flex="3" padding = "12px" marginRight = "3px" borderRadius="8px" border={`2px solid ${theme.palette.primary.main}`}>
                    <GroupOutcomeTestForeigner />
                </Box>

                {/* 2.3 chart:  Conditional Statistical Parity */}            
                <Box flex="3" padding = "12px" borderRadius="8px" border={`2px solid ${theme.palette.primary.main}`} flexDirection="column">
                     <GroupConditionalStatisticalParityForeigner />      
                </Box>

            </Box>  
        
        
        </Box>    
    );
}