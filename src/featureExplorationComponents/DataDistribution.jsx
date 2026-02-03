


import React from 'react';
import { Paper, Typography, LinearProgress, Box, Grid } from '@mui/material';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';


Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const data = {
  "Duration": {"13-24 Months": 42, "0-12 Months": 35, "25-36 Months": 13, "Over 36 Months": 9},
  "Credit Amount": {"0-2000 DM": 43, "2001-5000 DM": 37, "Over 5000 DM": 20},
  "Installment Rate": {"4": 46, "2": 24, "3": 16, "1": 14},
  "Present Residence": {"4": 41, "2": 31, "3": 15, "1": 13},
  "Existing Credits": {"1": 63, "2": 33, "3": 3, "4": 1},
  "Dependents": {"1": 84, "2": 16},
  "Age": {"26 and above": 81, "0-25": 19},
  "Gender": {"Male": 68, "Female": 31},
  "Checking Account": {"<200 DM": 54, "No Checking Account": 39, ">200 DM": 6},
  "Credit History": {"Paid back duly/All paid up": 58, "Other credits existing": 28, "No credits taken/Delayed": 12},
  "Purpose": {"Other Purpose": 57, "Car": 33, "Business": 9},
  "Savings": {"<500 DM /unknown": 89, "500-1000 DM": 5, ">=1000 DM": 4},
  "Employment": {">4 years": 41, "1-4 Years": 34, "Unemployed/<1 year": 23},
  "Debtors": {"None": 89, "Guarantor": 5, "Co-applicant": 4},
  "Property": {"Car/Other": 32, "Real Estate": 27, "Life Insurance": 24, "Unknown": 15},
  "Installment Plans": {"None": 81, "Bank": 13, "Stores": 4},
  "Housing": {"Own": 71, "Rent": 17, "For Free": 11},
  "Job": {"Skilled Employee": 63, "Unskilled/Unemployed": 21, "Management/Officer": 14},
  "Telephone": {"None": 58, "Yes": 41},
  "Foreign worker": {"Yes": 96, "No": 3}
};

const generatePieData = (category) => {
  const labels = Object.keys(data[category]);
  const values = Object.values(data[category]);
  return {
    labels,
    datasets: [{
      data: values,
      backgroundColor: ['#4BC0C0', '#FF6384', '#36A2EB', '#FFCE56', '#9966FF', '#FF9F40'],
      hoverBackgroundColor: ['#4BC0C0','#FF6384', '#36A2EB', '#FFCE56',  '#9966FF', '#FF9F40']
    }]
  };
};

const options = {
  plugins: {
 
    datalabels: {
      color: '#000',
      
      formatter: (value) => `${value}%`,
    },
    tooltip: {
      callbacks: {
        label: function(tooltipItem) {
          return `${tooltipItem.label}: ${tooltipItem.raw}%`;
        }
      }
    },
    legend: {
      display: true,
      position: 'top',
      align:'start'
    }
  }
};

const DataDistribution = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: 1100, margin: 'auto', padding: 2 }}>
      <Grid container spacing={2}>
        {Object.keys(data).map((key) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={key}>
            <Paper elevation={3} sx={{ margin: 1, padding: 2, height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                {key}
              </Typography>
              <Pie data={generatePieData(key)} options={options} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DataDistribution;

