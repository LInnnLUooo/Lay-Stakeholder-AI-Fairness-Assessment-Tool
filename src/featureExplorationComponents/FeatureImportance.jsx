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
            "Checking Account", "Credit History", "Savings","Employment", "Installment Plans", 
            "Housing", "Gender", "Debtors", "Age", "Telephone", "Foreign Worker", "Purpose","Residence Length", 
            "Job",  "Dependents", "Existing Credits", "Credit Amount", "Property",  "Installment Rate","Duration"
        ];

        const data = {
            labels: labels,
            datasets: [{
                axis: 'y',
                label: "Feature Importance",
                data: [
                    0.38, 0.24, 0.18, 0.11, 0.09, 0.09, 0.08, 0.08, 0.07, 0.06, 0.04, 0.02, 
                    0.01, 0.01, 0, -0.03, -0.09, -0.12, -0.14, -0.18
                ],
                backgroundColor: (context) => {
                    const value = context.raw;
                    return value >= 0 ? 'rgba(80, 206, 158, 0.4)' : 'rgba(244, 105, 156, 0.4)';
                },
                borderColor: (context) => {
                    const value = context.raw;
                    return value >= 0 ? 'rgb(80, 206, 158)' : 'rgb(244, 105, 156)';
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
                        type: 'category',
                        ticks: {
                            font: {
                                size: 19 // 调整特征名称的字体大小
                            }
                        }
                    },
                    x: {
                        type: 'linear',
                        beginAtZero: true,
                        ticks: {
                            font: {
                                size: 19 // 调整权重数字的字体大小
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            color: 'rgb(255, 99, 132)',
                            font: {
                                size: 19 // 调整图例标签的字体大小
                            }
                        }
                    },
                    datalabels: {
                        color: '#000',
                        align: 'end',
                        anchor: 'end',
                        font: {
                            size: 19 // 调整数据标签的字体大小
                        },
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
            width="1000px"
            height="100%"
            boxShadow="0px 4px 12px #7986cb"
            borderRadius="8px"
            padding='10px'
            mb={theme.spacing(2)}>

            <Typography variant="h4" component="div" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
                Feature Weights
            </Typography>

            <canvas height="260px" style={{ marginBottom: '20px' }} ref={chartRef}></canvas>
        </Box>
    );
};

export default FeatureImportance;



