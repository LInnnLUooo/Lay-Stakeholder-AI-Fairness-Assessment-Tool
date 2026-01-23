import React, { useRef, useEffect } from 'react';
import { Chart, BarController, BarElement, LinearScale, CategoryScale } from 'chart.js';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ChartDataLabels, BarController, BarElement, LinearScale, CategoryScale);

const FeatureImportance = () => {
    const theme = useTheme();
    const chartRef = useRef(null);
    let myChart = null;

    useEffect(() => {
        if (myChart) {
            myChart.destroy();
        }

        const labels = [
            "Checking Account", "Credit History", "Savings", "Installment Plans", "Employment", 
            "Housing", "Gender", "Debtors", "Age", "Telephone", "Foreign Worker", "Residence Length", 
            "Job", "Purpose", "Dependents", "Other Credits Existing", "Credit Amount", "Property", 
            "Duration", "Installment Rate"
        ];

        const data = {
            labels: labels,
            datasets: [{
                axis: 'y',
                label: 'Feature Weights',
                data: [
                    0.37, 0.21, 0.18, 0.15, 0.12, 0.09, 0.08, 0.08, 0.06, 0.05, 0.03, 0.01, 
                    0.01, 0.01, 0, -0.03, -0.08, -0.1, -0.17, -0.18
                ],
                backgroundColor: (context) => {
                    const value = context.raw;
                    return value >= 0 ? 'rgba(34, 139, 34, 0.6)' : 'rgba(220, 20, 60, 0.6)';
                },
                borderColor: (context) => {
                    const value = context.raw;
                    return value >= 0 ? 'rgba(34, 139, 34, 1)' : 'rgba(220, 20, 60, 1)';
                },
                borderWidth: 1
            }]
        };

        const config = {
            type: 'bar',
            data,
            options: {
                indexAxis: 'y',
                scales: {
                    y: {
                        type: 'category'
                    },
                    x: {
                        type: 'linear',
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            color: 'rgb(255, 99, 132)'
                        }
                    },
                    datalabels: {
                        color: '#000',
                        align: 'end',
                        anchor: 'end',
                        formatter: (value) => {
                            return value;
                        }
                    }
                }
            }
        };

        myChart = new Chart(chartRef.current, config);

        return () => {
            if (myChart) {
                myChart.destroy();
            }
        };
    }, []);

    return (
        <Box display="flex" flexDirection="column" alignItems="center"
            width={520}
            boxShadow="0px 4px 12px #7986cb"
            borderRadius="8px"
            height="100%"
            paddingTop='30px'
            mb={theme.spacing(2)}>

            <Typography variant="h6" component="div" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
                Feature Weights
            </Typography>

            <Typography padding='6px' component="div" gutterBottom color="primary" sx={{ fontWeight: 'bold', fontSize: '10pt' }}>
                The Importance of Each Feature
            </Typography>

            <canvas height="350px" style={{ marginBottom: '100px' }} ref={chartRef}></canvas>
        </Box>
    );
};

export default FeatureImportance;
