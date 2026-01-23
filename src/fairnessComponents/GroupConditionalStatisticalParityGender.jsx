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
const CSPIMAGE_GENDER_PATH = "/explanationGender/CSPimage";

Chart.register(BarController, BarElement, LinearScale, CategoryScale);

export default function GroupConditionalStatisticalParityGender() {
    const navigate = useNavigate(); 

    const percentFormatter = (value) => `${value}%`; 
    
    // for conditioanl statistical parity
     const [condition, setCondition] = useState(10); //job,savings,employment,credit history
     const [series, setSeries] = useState([{ data: [60, 84, 82], label:'female', color: '#8ECFC9', valueFormatter:percentFormatter}, 
     { data: [91, 94, 87], label:'male', color: '#BEB8DC',valueFormatter:percentFormatter },  
     { data: [-31, -10, -5], label:'difference',color: '#FA7F6F',valueFormatter:percentFormatter } ]); 
     const [conditionValues,setConditionValues] = useState(['Management/Officer', 'Skilled', 'Unskilled/Unemployed']);//设置不同condition下，不同的condition values 有什么，如job:unemployment,skilled等
     
     const handleChange = (event) => {
        const selectedCondition = event.target.value;
        setCondition(selectedCondition);

        let newSeriesData;
        let newConditionValues;
        switch(selectedCondition) {
            case 10: // Job
                newSeriesData = [
                    { data: [60, 84, 82], label:'female', color: '#8ECFC9', valueFormatter:percentFormatter},  // 红色& valueFormatter是hover时候，label的显示form
                    { data: [91, 94, 87], label:'male', color: '#BEB8DC',valueFormatter:percentFormatter },  // 绿色
                    { data: [-31, -10, -5], label:'difference',color: '#FA7F6F',valueFormatter:percentFormatter }  // 蓝色
                ];
                newConditionValues = ['Management/Officer', 'Skilled', 'Unskilled/Unemployed'];
                break;
            case 20: // Savings
                newSeriesData = [
                    { data: [80, 100, 100], label:'female', color: '#8ECFC9', valueFormatter:percentFormatter},  // 红色& valueFormatter是hover时候，label的显示form
                    { data: [91, 93, 100], label:'male', color: '#BEB8DC',valueFormatter:percentFormatter },  // 绿色
                    { data: [-11, 7, 0], label:'difference',color: '#FA7F6F',valueFormatter:percentFormatter }  // 蓝色
                ];
                newConditionValues = ['<500DM/Unknown','500-1000 DM', '>=1000DM'];
                break;
            case 30: // Employment
                newSeriesData = [
                    { data: [77, 89, 77], label:'female', color: '#8ECFC9', valueFormatter:percentFormatter},  // 红色& valueFormatter是hover时候，label的显示form
                    { data: [74, 94, 96], label:'male', color: '#BEB8DC',valueFormatter:percentFormatter },  // 绿色
                    { data: [3, -5, -19], label:'difference',color: '#FA7F6F',valueFormatter:percentFormatter }  // 蓝色
                ];
                newConditionValues = ['Unemployed/<1 Year','1-4 Years', '>=4 Years'];
                break;
            case 40: // Credit History
                newSeriesData = [
                    { data: [74,100, 94], label:'female', color: '#8ECFC9', valueFormatter:percentFormatter},  // 红色& valueFormatter是hover时候，label的显示form
                    { data: [87,94, 100], label:'male', color: '#BEB8DC',valueFormatter:percentFormatter },  // 绿色
                    { data: [-13,6, -6], label:'difference',color: '#FA7F6F',valueFormatter:percentFormatter }  // 蓝色
                ];
                newConditionValues = ['Paid back duly/Paid up/No credits','Delayed', 'Other Credits Existing'];//paidbackduly&no credits taken/paidup
                break;
            default:
                newSeriesData = [
                    { data: [60, 84, 82], label:'female', color: '#8ECFC9', valueFormatter:percentFormatter},  // 红色& valueFormatter是hover时候，label的显示form
                    { data: [91, 94, 87], label:'male', color: '#BEB8DC',valueFormatter:percentFormatter },  // 绿色
                    { data: [-31, -10, -5], label:'difference',color: '#FA7F6F',valueFormatter:percentFormatter }  // 蓝色
                ];
                newConditionValues = ['Management/Officer', 'Skilled', 'Unskilled/Unemployed'];             
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
                    The AI application is fairness if it has "equal" probability for females and males with specific conditions to have good predicted credit.
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
                                Of <span style={{textDecoration: 'underline' }}>females with a management/officer job</span>, <span style={{ color: '#1976D2' }}>60%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
                                <br />
                                Of <span style={{textDecoration: 'underline' }}>males with a management/officer job</span>, <span style={{ color: '#1976D2' }}>91%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
                                <br />
                                The difference between females and males is: <span style={{ color: '#1976D2' }}>-31%</span>
                            </Box>
                        );
                    case 20:
                        return (
                            <Box>
                                Of <span style={{textDecoration: 'underline' }}>females with {"<"}500/unknown savings </span>, <span style={{ color: '#1976D2' }}>80%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
                                <br />
                                Of <span style={{textDecoration: 'underline' }}>males with {"<"}500/unknown savings</span>, <span style={{ color: '#1976D2' }}>91%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
                                <br />
                                The difference between females and males is: <span style={{ color: '#1976D2' }}>-11%</span>
                            </Box>
                        );
                    case 30:
                        return(
                            <Box>
                                Of <span style={{textDecoration: 'underline' }}>females with {">="}4 years' employment </span>, <span style={{ color: '#1976D2' }}>77%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
                                <br />
                                Of <span style={{textDecoration: 'underline' }}>males with {">="}4 years' employment</span>, <span style={{ color: '#1976D2' }}>96%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
                                <br />
                                The difference between females and males is: <span style={{ color: '#1976D2' }}>-19%</span>
                            </Box>
                        );
                    case 40:
                        return(
                            <Box>
                                Of <span style={{textDecoration: 'underline' }}>females with credits paid back duly/paid up or no credits</span>, <span style={{ color: '#1976D2' }}>74%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
                                <br />
                                Of <span style={{textDecoration: 'underline' }}>males with credits paid back duly/paid up or no credits</span>, <span style={{ color: '#1976D2' }}>87%</span> are predicted as <span style={{textDecoration: 'underline' }}>Good Credit</span>.
                                <br />
                                The difference between females and males is: <span style={{ color: '#1976D2' }}>-13%</span>
                            </Box>
                        );
                    default:
                        return null;
                }
            })()}   
             {/* {注意必须要有上面的括号/* the pattern (() => { ... })() defines an arrow function and immediately invokes it.  */}
             {/* This is useful in JSX when we need to execute some logic inline and return a value or a component. */} 
        </Typography>

        {/* 5 Image Button*/}
        <Box 
            display="flex"
            alignItems="center"  > 
            <Button startIcon={<TouchAppIcon />} variant="contained" onClick={() => navigate(CSPIMAGE_GENDER_PATH)} size="small">Check individual instances</Button>
        </Box>

    </Box>
    
   );
}