import * as React from 'react';
import { PieChart, pieArcLabelClasses,pieArcClasses } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const data = [
  { value: 131, label: 'Correct Predictions', p: "94%" ,color: '#81C784'  },
  { value: 9, label: 'Incorrect Predictions', p: "6%", color: '#e57373' },
];

const size = {
  width: 210,
  height: 210,
};



export default function PieArcLabel() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
        <Typography align = "center" color="black" sx={{ fontWeight: 'bold',fontSize: '15px' }}>
          Total Instances: 140</Typography>
        <PieChart
          series={[
            {
              data,
              arcLabel: (item) => `${item.p}`,
              arcLabelMinAngle: 2,
              highlightScope: { faded: 'global', highlighted: 'item' },
              faded: { innerRadius: 30, additionalRadius: -30 },    
              cx: 100,
              cy: 70,
              arcLine: {
                
                display: (item) => {
                  console.log("Checking item:", item);
                  return item.p === "4%"; 
                },
                length: 10,
                color: (item) => item.color
              }
            },
          ]}

          legend={{
            direction: "column",
            position: {
              vertical: "bottom",
              horizontal: "middle"
            }
          }}
          
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: 'black',
              fontWeight: 'bold',
              fontSize: '16px',
            },
            [`& .${pieArcClasses.faded}`]: {
              fill: 'gray',
            },
            
            "--ChartsLegend-rootOffsetX": "18px",
            "--ChartsLegend-rootOffsetY": "-60px",
           
          }}
          {...size}
        />
    </Box>
  );
}
