import * as React from 'react';
import { PieChart, pieArcLabelClasses,pieArcClasses } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const data = [
  { value: 21, label: 'Correct Predictions', p: "35%", color: '#81C784'  }, // 可以随意扩展data的属性, color直接对应成颜色
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
          {/* 加空格的时候 使用“nbsp;” */}
        <PieChart
          series={[
            {
              arcLabel: (item) => `${item.p}`, //`${item.label} (${item.value})`
              arcLabelMinAngle: 3,
              data,
              highlightScope: { faded: 'global', highlighted: 'item' },
              faded: { innerRadius: 30, additionalRadius: -30 },
              cx: 100,
              cy: 70
            },
          ]}

          legend={{
            direction: "column", // 官网没有加','是错误的
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
            //  ['& .css-1lp2p8j-MuiChartsLegend-label']: {   // []可加可不加； 通过开发者工具的元素选择器进行添加
            //   fontSize: '0.4rem',  // 修改字体大小
            // },
            // ['& .css-1igfk2o-MuiChartsLegend-mark']: {  // []可加可不加； 通过开发者工具的元素选择器进行添加
            //   width: '15px', 
            //   height: '15px', 
            // },
            // '& .css-184lltk-MuiChartsLegend-mark': {
            //   width: '15px', 
            //   height: '15px', 
            // },
             "--ChartsLegend-rootOffsetX": "18px", //legend的位置
            "--ChartsLegend-rootOffsetY": "-60px", //legend的位置
           
          }}
          {...size}
        />
      </Box>
  );
}
