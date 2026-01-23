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
//nevigate path：
const CSPIMAGE_AGE_PATH = "/explanationAge/CSPimage";

Chart.register(BarController, BarElement, LinearScale, CategoryScale);

export default function GroupConditionalStatisticalParity() {
    const navigate = useNavigate(); 
    const percentFormatter = (value) => `${value}%`;  
    
    // for conditioanl statistical parity
     const [condition, setCondition] = useState(10); //job,savings,employment,credit history
     const [series, setSeries] = useState([{ data: [100, 83, 100], label:'age<25', color: '#8ECFC9', valueFormatter:percentFormatter}, 
     { data: [85, 93, 83], label:'age>=25', color: '#BEB8DC',valueFormatter:percentFormatter },  
     { data: [15, -10, 17], label:'difference',color: '#FA7F6F',valueFormatter:percentFormatter } ]); 
     const [conditionValues,setConditionValues] = useState(['Management/Officer', 'Skilled', 'Unskilled/Unemployed']);//设置不同condition下，不同的condition values 有什么，如job:unemployment,skilled等
     
     const handleChange = (event) => {
        const selectedCondition = event.target.value;
        setCondition(selectedCondition);

        let newSeriesData;
        let newConditionValues;
        switch(selectedCondition) {
            case 10: // Job
                newSeriesData = [
                { data: [100, 83, 100], label:'age<25', color: '#8ECFC9', valueFormatter:percentFormatter}, 
                { data: [85, 93, 83], label:'age>=25', color: '#BEB8DC',valueFormatter:percentFormatter },  
                { data: [15, -10, 17], label:'difference',color: '#FA7F6F',valueFormatter:percentFormatter } 
             ];
                newConditionValues = ['Management/Officer', 'Skilled', 'Unskilled/Unemployed'];
                break;
            case 20: // Savings
                newSeriesData = [
                { data: [86, 100, 100], label:'age<25', color: '#8ECFC9', valueFormatter:percentFormatter}, 
                { data: [88, 92, 100], label:'age>=25', color: '#BEB8DC',valueFormatter:percentFormatter },  
                { data: [-2, 8, 0], label:'difference',color: '#FA7F6F',valueFormatter:percentFormatter } 
                ];
                newConditionValues = ['<500DM/Unknown','500-1000 DM', '>=1000DM'];
                break;
            case 30: // Employment
                newSeriesData = [
                { data: [91, 100, 67], label:'age<25', color: '#8ECFC9', valueFormatter:percentFormatter}, 
                { data: [71, 91, 95], label:'age>=25', color: '#BEB8DC',valueFormatter:percentFormatter },  
                { data: [20, 9, -28], label:'difference',color: '#FA7F6F',valueFormatter:percentFormatter } 
                ];
                newConditionValues = ['Unemployed/<1 Year','1-4 Years', '>=4 Years'];
                break;
            case 40: // Credit History
                newSeriesData = [
                { data: [84, 100, 100], label:'age<25', color: '#8ECFC9', valueFormatter:percentFormatter}, 
                { data: [83, 94, 98], label:'age>=25', color: '#BEB8DC',valueFormatter:percentFormatter },  
                { data: [1, 6, 2], label:'difference',color: '#FA7F6F',valueFormatter:percentFormatter } 
                ];
                newConditionValues = ['Paid back duly/Paid up/No credits','Delayed', 'Other Credits Existing'];//paidbackduly&no credits taken/paidup
                break;
            default:
                newSeriesData = [
                { data: [100, 83, 100], label:'age<25', color: '#8ECFC9', valueFormatter:percentFormatter}, 
                { data: [85, 93, 83], label:'age>=25', color: '#BEB8DC',valueFormatter:percentFormatter },  
                { data: [15, -10, 17], label:'difference',color: '#FA7F6F',valueFormatter:percentFormatter } 
                ];
                newConditionValues = ['Management/Officer', 'Skilled', 'Unskilled/Unemployed'];
                break;            
        };
        setSeries(newSeriesData);
        setConditionValues(newConditionValues);
    }
   
  return (
    <Box display="flex" flexDirection="column" alignItems="center" width = {500}> 
         
            {/* 1 title */}
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
                        fontSize: '2em'  // 调整为你需要的大小
                    }}
                    >
                    The AI application is fairness if it has "equal" probability for Age{'<'}25 Individuals and Age{'>='}25 Individuals with specific conditions to have good predicted credit.
                    </span>
                } 
                placement="left"
                >    
                <HelpIcon color="primary" />
            </Tooltip>   
        </Box>


         {/* 2 Select Button */}
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

        {/* 3 chart： fairness metric result */}
        <Box 
            display="flex"
            padding="6px"
            margin="12px" 
            alignItems="center"  // 控制垂直方向的对齐
            justifyContent="center" // 控制水平方向的对齐
            height="400px"
            //border={`2px solid #42a5f5`}
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

        {/* 4 Text Explanation */}
        <Typography variant="body2" color="text.secondary" sx={{ margin: "12px",color: "black", fontWeight: "bold"}}>
            {(() => {  //  ！！！No parameter needed here！
                switch (condition) {
                    case 10:
                        return (
                            <Box>
                                Of <span style={{textDecoration: 'underline' }}>age{"<"}25 with unskilled/unemployed</span>, <span style={{ color: '#1976D2' }}>100%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
                                <br />
                                Of <span style={{textDecoration: 'underline' }}>age{">="}25 with unskilled/unemployed</span>, <span style={{ color: '#1976D2' }}>83%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
                                <br />
                                The difference between age{"<"}25 and age{">="}25 is: <span style={{ color: '#1976D2' }}>17%</span>
                            </Box>
                        );
                    case 20:
                        return (
                            <Box>
                               Of <span style={{textDecoration: 'underline' }}>age{"<"}25 with 500-1000DM savings</span>, <span style={{ color: '#1976D2' }}>100%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
                                <br />
                                Of <span style={{textDecoration: 'underline' }}>age{">="}25 with 500-1000DM savings</span>, <span style={{ color: '#1976D2' }}>92%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
                                <br />
                                The difference between age{"<"}25 and age{">="}25 is: <span style={{ color: '#1976D2' }}>8%</span>
                            </Box>
                        );
                    case 30:
                        return(
                            <Box>
                                Of <span style={{textDecoration: 'underline' }}>age{"<"}25 with {">="}4 years' employment</span>, <span style={{ color: '#1976D2' }}>67%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
                                <br />
                                Of <span style={{textDecoration: 'underline' }}>age{">="}25 with {">="}4 years' employment</span>, <span style={{ color: '#1976D2' }}>95%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
                                <br />
                                The difference between age{"<"}25 and age{">="}25 is: <span style={{ color: '#1976D2' }}>-28%</span>
                            </Box>
                        );
                    case 40:
                        return(
                            <Box>
                                Of <span style={{textDecoration: 'underline' }}>age{"<"}25 with credits delayed in the past</span>, <span style={{ color: '#1976D2' }}>100%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
                                <br />
                                Of <span style={{textDecoration: 'underline' }}>age{">="}25 with credits delayed in the past</span>, <span style={{ color: '#1976D2' }}>94%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
                                <br />
                                The difference between age{"<"}25 and age{">="}25 is: <span style={{ color: '#1976D2' }}>6%</span>
                            </Box>
                        );
                    default:
                        return null;
                }
            })()}   
        </Typography>

        {/* 5 Image Button*/}
        <Box 
            display="flex"
            alignItems="center"  > 
             <Button variant="contained" size="small" startIcon={<TouchAppIcon />} onClick={() => navigate(CSPIMAGE_AGE_PATH)} >Check individual instances</Button>
        </Box>

    </Box>
    
   );
}

 