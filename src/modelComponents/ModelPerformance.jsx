import * as React from 'react';
import { PieChart, pieArcLabelClasses,pieArcClasses } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const data = [
  { value: 152, label: 'Correct Predictions', p: "76%" ,color: '#81C784'  }, // 可以随意扩展data的属性, color直接对应成颜色
  { value: 48, label: 'Incorrect Predictions', p: "24%", color: '#e57373' },
];

const size = {
  width: 210,
  height: 210,
}; // 必须要同时设置高和宽度，不然图表会不显示。



export default function ModelPerformance() { // 此处函数的命名 可以与jsx文件名不同。在其他文件调用该jsx文件的时候，对应的import ”自定义名称“ 就代表了此处的 export default function。 但是建议保持命名的一致
  return (
    <Box display="flex" justifyContent="center" alignItems="center" >
        <Typography align = "center" color="black" sx={{ fontWeight: 'bold',fontSize: '15px' }}>
          Total Instances: 200</Typography>
        <PieChart
          series={[
            {
              data,
              arcLabel: (item) => `${item.p}`, //`${item.label} (${item.value})`
              arcLabelMinAngle: 2,
              highlightScope: { faded: 'global', highlighted: 'item' },
              faded: { innerRadius: 30, additionalRadius: -30 },    
              cx: 100,
              cy: 70,
              arcLine: {
                
                display: (item) => {
                  console.log("Checking item:", item); // 输出当前的数据项
                  return item.p === "4%"; 
                },
                length: 10,
                color: (item) => item.color
              }
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
              //margin: '30 30px'
            },
            [`& .${pieArcClasses.faded}`]: {
              fill: 'gray',
            },
            // 下面是通过开发者工具，获得css样式名称，然后进行修改：
            // ['& .css-1lp2p8j-MuiChartsLegend-label']: {   // 通过开发者工具的元素选择器进行添加
            //   fontSize: '0.4rem',  // 修改字体大小
            // },
            // '& .css-1igfk2o-MuiChartsLegend-mark ': {  // []可加可不加； 通过开发者工具的元素选择器进行添加
            //   width: '15px', 
            //   height: '15px', 
            // },
            // '& .css-184lltk-MuiChartsLegend-mark': {  // []可加可不加； 通过开发者工具的元素选择器进行添加
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
