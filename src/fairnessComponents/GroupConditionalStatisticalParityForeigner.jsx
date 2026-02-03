import React, { useEffect,useState,useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as d3 from 'd3';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import TouchAppIcon from '@mui/icons-material/TouchApp';

import { BarChart } from '@mui/x-charts/BarChart';
import { Chart, BarController, BarElement, LinearScale, CategoryScale } from 'chart.js';

import { useNavigate } from 'react-router-dom';
const CSPIMAGE_FOREIGNER_PATH = "/explanationForeigner/CSPimage";

Chart.register(BarController, BarElement, LinearScale, CategoryScale);

export default function GroupConditionalStatisticalParityForeigner() {
    const navigate = useNavigate();
    const percentFormatter = (value) => `${value}%`; 
    
     const [condition, setCondition] = useState(10);
     const [series, setSeries] = useState([
        { data: [88, 91, 84], label:'foreign worker', color: '#8ECFC9',valueFormatter:percentFormatter },
        { data: [50, 100, 100], label:'local', color: '#BEB8DC',valueFormatter:percentFormatter },
        { data: [38, -9, -16], label:'difference',color: '#FA7F6F',valueFormatter:percentFormatter }
    ]); 
     const [conditionValues,setConditionValues] = useState(['Management/Officer', 'Skilled', 'Unskilled/Unemployed']);
     
     const handleChange = (event) => {
        const selectedCondition = event.target.value;
        setCondition(selectedCondition);

        let newSeriesData;
        let newConditionValues;
        switch(selectedCondition) {
            case 10:
                newSeriesData = [
                { data: [88, 91, 84], label:'foreign worker', color: '#8ECFC9',valueFormatter:percentFormatter },
                { data: [50, 100, 100], label:'local', color: '#BEB8DC',valueFormatter:percentFormatter },
                { data: [38, -9, -16], label:'difference',color: '#FA7F6F',valueFormatter:percentFormatter }
                ];
                newConditionValues = ['Management/Officer', 'Skilled', 'Unskilled/Unemployed'];
                break;
            case 20:
                newSeriesData = [
                { data: [88, null, 100], label:'foreign worker', color: '#8ECFC9',valueFormatter:percentFormatter },
                { data: [91, null, 100], label:'local', color: '#BEB8DC',valueFormatter:percentFormatter },
                { data: [-3, null, 0], label:'difference',color: '#FA7F6F',valueFormatter:percentFormatter }
                ];
                newConditionValues = ['<500DM/Unknown','500-1000 DM', '>=1000DM'];
                break;
            case 30:
                newSeriesData = [
                { data: [74, 93, 93], label:'foreign worker', color: '#8ECFC9',valueFormatter:percentFormatter },
                { data: [100, 80, 100], label:'local', color: '#BEB8DC',valueFormatter:percentFormatter },
                { data: [-26, 13, -7], label:'difference',color: '#FA7F6F',valueFormatter:percentFormatter }
                ];
                newConditionValues = ['Unemployed/<1 Year','1-4 Years', '>=4 Years'];
                break;
            case 40:
                newSeriesData = [
                { data: [83, null, 98], label:'foreign worker', color: '#8ECFC9',valueFormatter:percentFormatter },
                { data: [89, null, 100], label:'local', color: '#BEB8DC',valueFormatter:percentFormatter },
                { data: [-6, null, -2], label:'difference',color: '#FA7F6F',valueFormatter:percentFormatter }
                ];
                newConditionValues = ['Paid back duly/Paid up/No credits','Delayed', 'Other Credits Existing'];
                break;
            default:
                newSeriesData = [
                { data: [88, 91, 84], label:'foreign worker', color: '#8ECFC9',valueFormatter:percentFormatter },
                { data: [50, 100, 100], label:'local', color: '#BEB8DC',valueFormatter:percentFormatter },
                { data: [38, -9, -16], label:'difference',color: '#FA7F6F',valueFormatter:percentFormatter }
                ];
                newConditionValues = ['Management/Officer', 'Skilled', 'Unskilled/Unemployed'];
                break;            
        };
        setSeries(newSeriesData);
        setConditionValues(newConditionValues);
    }
   
  return (
    <Box display="flex" flexDirection="column" alignItems="center" width = {500}> 
         
        <Box display="flex" justifyContent="space-between" width="100%">
            <Typography 
                variant="h5" 
                component="div" 
                gutterBottom 
                color="primary" 
                sx={{ fontWeight: 'bold', flexGrow: 1, textAlign: 'center' }}
            >
                  Conditional Statistical Parity
            </Typography>

            <Tooltip 
                title={
                    <span 
                    style={{ 
                        fontSize: '2em'
                    }}
                    >
                    The AI application is fairness if it has "equal" probability for foreign workers and locals with specific conditions to have good predicted credit.
                    </span>
                } 
                placement="left"
                >    
                <HelpIcon color="primary" />
            </Tooltip>     
        </Box>


         <Box sx={{ minWidth: 130 }}>
            <FormControl fullWidth>
                <InputLabel id="conditions">Condition</InputLabel>
                <Select
                labelId="conditions"
                id="condition"
                value={condition}
                label="Conditions"
                onChange={handleChange}
                >
                <MenuItem value={10}>Job</MenuItem>
                <MenuItem value={20}>Savings</MenuItem>
                <MenuItem value={30}>Employment</MenuItem>
                <MenuItem value={40}>Credit History</MenuItem>
                </Select>
            </FormControl>
        </Box>

        <Box 
            display="flex"
            padding="6px"
            margin="12px" 
            alignItems="center"
            justifyContent="center"
            height="400px"
        >    

                <BarChart
                    xAxis={[{ scaleType: 'band', data: conditionValues }]}
                    series={series}
                    width={500}
                    
                    sx={{
                        '--ChartsLegend-itemWidth': '130px',
                        "--ChartsLegend-rootOffsetY": "-40px",
                        }}
                    />    
                 
          </Box>

        <Typography variant="body2" color="text.secondary" sx={{ margin: "12px",color: "black", fontWeight: "bold"}}>
            {(() => {
                switch (condition) {
                    case 10:
                        return (
                            <Box>
                                Of <span style={{textDecoration: 'underline' }}>foreign workers with a management/officer job</span>, <span style={{ color: '#1976D2' }}>88%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
                                <br />
                                Of <span style={{textDecoration: 'underline' }}>locals with a management/officer job</span>, <span style={{ color: '#1976D2' }}>50%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
                                <br />
                                The difference between foreign workers and locals is: <span style={{ color: '#1976D2' }}>38%</span>
                            </Box>
                        );
                    case 20:
                        return (
                            <Box>
                               Of <span style={{textDecoration: 'underline' }}>foreign workers with {"<"}500/unknown savings</span>, <span style={{ color: '#1976D2' }}>88%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
                                <br />
                                Of <span style={{textDecoration: 'underline' }}>locals with {"<"}500/unknown savings</span>, <span style={{ color: '#1976D2' }}>91%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
                                <br />
                                The difference between foreign workers and locals is: <span style={{ color: '#1976D2' }}>-3%</span>
                            </Box>
                        );
                    case 30:
                        return(
                            <Box>
                                Of <span style={{textDecoration: 'underline' }}>foreign workers with umemployed/{"<"}1 year employment</span>, <span style={{ color: '#1976D2' }}>74%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
                                <br />
                                Of <span style={{textDecoration: 'underline' }}>locals with umemployed/{"<"}1 year employment</span>, <span style={{ color: '#1976D2' }}>100%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
                                <br />
                                The difference between foreign workers and locals is: <span style={{ color: '#1976D2' }}>-26%</span>
                            </Box>
                        );
                    case 40:
                        return(
                            <Box>
                                Of <span style={{textDecoration: 'underline' }}>foreign workers with credits paid back duly/paid up or no credits</span>, <span style={{ color: '#1976D2' }}>83%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
                                <br />
                                Of <span style={{textDecoration: 'underline' }}>locals with credits paid back duly/paid up or no credits</span>, <span style={{ color: '#1976D2' }}>89%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
                                <br />
                                The difference between foreign workers and locals is: <span style={{ color: '#1976D2' }}>-6%</span>
                            </Box>
                        );
                    default:
                        return null;
                }
            })()}   
        </Typography>

        <Box 
            display="flex"
            alignItems="center" 
            > 
            <Button startIcon={<TouchAppIcon />} variant="contained" size="small" onClick={() => navigate(CSPIMAGE_FOREIGNER_PATH)}>Check individual instances</Button>
        </Box>

    </Box>
    
   );
}

 