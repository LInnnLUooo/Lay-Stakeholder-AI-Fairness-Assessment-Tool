import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

const individualImage = '/individual.png';
const notCFindividual = [
  {
    source: individualImage,
    id: 2,
    subtitle:"Age=28"
  },
  {
    source: individualImage,
    id: 152,
    subtitle:"Age=31"
  }
]

const data = [
  { value: 198, label: 'Predictions Unchanged', p: "99%" ,color: '#81C784'  },
  { value: 2, label: 'Predictions Changed', p: "1%", color: '#e57373' },
];

const size = {
  width: 800,
  height: 150,
};

export default function IndividualFairnessAgeCounterfactualWorld ({selectedID, handleItemClick}){
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
                Of the total individuals, for <span style={{ color: '#1976D2' }}>99% (198)</span>  of them, 
                changing their <span style={{textDecoration: 'underline' }}> age from {'<'}25 to {'>='}25, or vice versa, </span>          
                does not change the predicted credit result. These adhere to  <span style={{ color: '#1976D2' }}>counterfactual fairness in the context of a counterfactual world based on age</span> .
                However, <span style={{ color: '#1976D2' }}>1% (2 individuals)</span> do not conform. When the age attribute is reversed, <span style={{ color: '#1976D2' }}>the predicted outcome changes</span>.
              </Typography>
            </Paper>
            
            <Typography variant="body2" component="div" gutterBottom color="primary" sx={{ fontWeight: 'bold',textAlign: 'left'  }}>
                  Individuals Violating Counterfactual Fairness
            </Typography>

            <ImageList sx={{ width: 500, height: 250 }}>
                {notCFindividual.map((item) => ( 
                  <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                    <img
                      src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                      srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.id}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      title={"ID = " + item.id}
                      subtitle={item.subtitle}
                      actionIcon={
                        <IconButton
                          sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                          aria-label={`info about ${item.subtitle}`}
                        >
                          <InfoIcon />
                        </IconButton>
                      }
                    />
                  </ImageListItem>
                ))}
              </ImageList>


             
              
    </Box>
  );
}