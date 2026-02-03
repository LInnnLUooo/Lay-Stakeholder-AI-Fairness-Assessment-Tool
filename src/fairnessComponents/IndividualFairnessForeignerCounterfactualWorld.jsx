import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';


const data = [
  { value: 200, label: 'Predictions Unchanged', p: "100%" ,color: '#81C784'  },
];

const size = {
  width: 800,
  height: 150,
};

export default function IndividualFairnessForeignerCounterfactualWorld ({selectedID, handleItemClick}){
  const theme = useTheme();
  return (
    <Box display="flex" 
            justifyContent="center" 
            width="800px"
            flexDirection="column"
            padding="3px">

          <Typography variant="body2" component="div" gutterBottom color="primary" sx={{ fontWeight: 'bold',textAlign: 'left'  }}>
                Fairness Result
          </Typography>

          <PieChart
              series={[
                {
                  arcLabel: (item) => `${item.p}`,
                  arcLabelMinAngle: 60,
                  data,
                  highlightScope: { faded: 'global', highlighted: 'item' },
                  faded: { innerRadius: 30, additionalRadius: -30 },  
                  cx: 170,
                },
              ]}
              
              sx={{
                "--ChartsLegend-rootOffsetX": "-350px",
                "--ChartsLegend-rootOffsetY": "0px",
              }}
              {...size}
            />

            <Paper elevation={3} sx={{ width: '85%', backgroundColor: '#f5f5f5', padding: '10px', margin: '20px',borderRadius: '8px' }}>
              <Typography variant="body2" color="text.secondary" sx={{ margin: "12px",color: "black", width: '95%', fontWeight: "bold"}}>
                Of the total individuals, for <span style={{ color: '#1976D2' }}>100% (197)</span>  of them, 
                changing their <span style={{textDecoration: 'underline' }}> status from foreign worker to non-foreign worker (local), or vice versa, </span>          
                does not change the predicted credit result. These adhere to  <span style={{ color: '#1976D2' }}>counterfactual fairness in the context of a counterfactual world based on the nationality</span> .
              </Typography>
            </Paper>
    </Box>
  );
}