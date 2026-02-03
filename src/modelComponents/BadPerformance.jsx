import * as React from 'react';
import { PieChart, pieArcLabelClasses,pieArcClasses } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const data = [
  { value: 21, label: 'Correct Predictions', p: "35%", color: '#81C784'  },
  { value: 39, label: 'Incorrect Predictions', p: "65%", color: '#e57373' },
];

const size = {
  width: 210,
  height: 210,
};

export default function BadPerformance() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" >
        <Typography align = "center" color="black" sx={{ fontWeight: 'bold',fontSize: '15px' }}>
          Total Instances: 60&nbsp;</Typography> 
        <PieChart
          series={[
            {
              arcLabel: (item) => `${item.p}`,
              arcLabelMinAngle: 3,
              data,
              highlightScope: { faded: 'global', highlighted: 'item' },
              faded: { innerRadius: 30, additionalRadius: -30 },
              cx: 100,
              cy: 70
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
              margin: '30 30px'
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
