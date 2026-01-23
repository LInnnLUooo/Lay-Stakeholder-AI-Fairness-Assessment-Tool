import * as React from 'react';
import { useState,useEffect  } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

import creditData from '../data/results.json';  // 导入 JSON 数据

// image for not Counterfactual
// 不符合counterfactual fairness（基于年龄）的数据ID： [  2   8  67 120 179 187]  --- json: id+1
const individualImage = '/individual.png';
const notCFindividual = [
  {
    source: individualImage,
    id: 3,
    subtitle:"Age=28"
  },
  {
    source: individualImage,
    id: 9,
    subtitle:"Age=25"
  },
  {
    source: individualImage,
    id: 68,
    subtitle:"Age=22"
  },
  {
    source: individualImage,
    id: 121,
    subtitle:"Age=50"
  },
  {
    source: individualImage,
    id: 180,
    subtitle:"Age=68"
  },
  {
    source: individualImage,
    id: 188,
    subtitle:"Age=46"
  }
]

const data = [
  { value: 194, label: 'Predictions Unchanged', p: "97%" ,color: '#81C784'  }, // 可以随意扩展data的属性, color直接对应成颜色
  { value: 6, label: 'Predictions Changed', p: "3%", color: '#e57373' },
];

const size = {
  width: 800,
  height: 150,
};

export default function AgeCounterfactualWorld (){
  const theme = useTheme();

  const [selectedId, setSelectedId] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  
  useEffect(() => {
    if (creditData.length > 0) {
      const firstItem = creditData.find(item => item.id === notCFindividual[0].id);
      if (firstItem) {
        setSelectedId(firstItem.id);
        setSelectedData(firstItem);
      }
    }
  }, []);
  
  const handleItemClick = (item) => {
    setSelectedId(item.id);
    const selectedItem = creditData.find(result => result.id === item.id);
    setSelectedData(selectedItem);
  };
  

  return (
    <Box display="flex" 
            justifyContent="center" 
            width="85%"
            flexDirection="row"
            padding="3px">

        <Grid container spacing={2} sx={{ marginTop: 2 }}>
        
        <Grid item xs={7}>    
          {/* 1 title */}
          <Typography variant="h6" component="div" gutterBottom color="primary" sx={{ fontWeight: 'bold',textAlign: 'left'  }}>
                Fairness Result
          </Typography>

          {/* 2  chart*/}
          <PieChart
              series={[
                {
                  arcLabel: (item) => `${item.p}`, //`${item.label} (${item.value})`
                  arcLabelMinAngle: 60,
                  data,
                  highlightScope: { faded: 'global', highlighted: 'item' },
                  faded: { innerRadius: 30, additionalRadius: -30 },  
                  cx: 170, // piechart 在x轴方向的位置
                },
              ]}
              
              sx={{
                "--ChartsLegend-rootOffsetX": "-350px", //legend的位置
                "--ChartsLegend-rootOffsetY": "0px", //legend的位置
              }}
              {...size}
            />

            {/* 3  text explanation*/}
            <Paper elevation={3} sx={{ width: '75%', backgroundColor: '#f5f5f5', padding: '10px', margin: '20px',borderRadius: '8px' }}>
              <Typography variant="h6" color="text.secondary" sx={{ margin: "12px",color: "black", width: '95%', fontWeight: "bold"}}>
                Of the total individuals, for <span style={{ color: '#1976D2' }}>97% (194)</span>  of them, 
                changing their <span style={{textDecoration: 'underline' }}> age from {'<='}25 to {'>'}25, or vice versa, </span>          
                does not change the predicted credit result. 
                However, <span style={{ color: '#1976D2' }}>3% (6 individuals)</span> do not conform. When the age attribute is reversed, <span style={{ color: '#1976D2' }}>the predicted outcome changes</span>.
              </Typography>
            </Paper>
            
            {/* 4 image title */}
            <Typography variant="h6" component="div" gutterBottom color="primary" sx={{ fontWeight: 'bold',textAlign: 'left'  }}>
                  Individuals Violating Counterfactual Fairness
            </Typography>

            {/* 5 image list */}
            <ImageList sx={{ width: 500 }} cols={3} rowHeight={170}>
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
              </Grid>

          <Grid item xs={5}>
          {selectedData && (
            <Paper elevation={3} sx={{
              width: '80%',               // 宽度设置为父容器的60%
              backgroundColor: '#FFE5CF', // 背景颜色为浅橙色
              padding: '20px',            // 内边距设置为20px
              margin: '20px auto',        // 外边距为20px，并自动居中
              borderRadius: '12px',       // 边框半径设置为12px
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // 自定义阴影效果
              alignSelf: 'flex-start'  // 添加这一行
            }}>
              <Typography variant="h3" gutterBottom sx={{ textAlign: 'center',fontWeight: 'bold' }}>
                ID: {selectedData.id}
              </Typography>
              <Typography variant="h6"><strong>Duration:</strong> {selectedData.Duration}</Typography>
              <Typography variant="h6"><strong>Credit Amount:</strong> {selectedData["Credit Amount"]}</Typography>
              <Typography variant="h6"><strong>Installment Rate:</strong> {selectedData["Installment Rate"]}</Typography>
              <Typography variant="h6"><strong>Residence Length:</strong> {selectedData["Residence Length"]}</Typography>
              <Typography variant="h6"><strong>Existing Credits:</strong> {selectedData["Existing Credits"]}</Typography>
              <Typography variant="h6"><strong>Dependents:</strong> {selectedData.Dependents}</Typography>
              <Typography variant="h6"><strong>Age:</strong> {selectedData.Age}</Typography>
              <Typography variant="h6"><strong>Gender:</strong> {selectedData.Gender}</Typography>
              <Typography variant="h6"><strong>Checking Account:</strong> {selectedData["Checking Account"]}</Typography>
              <Typography variant="h6"><strong>Credit History:</strong> {selectedData["Credit History"]}</Typography>
              <Typography variant="h6"><strong>Purpose:</strong> {selectedData.Purpose}</Typography>
              <Typography variant="h6"><strong>Savings:</strong> {selectedData.Savings}</Typography>
              <Typography variant="h6"><strong>Employment:</strong> {selectedData.Employment}</Typography>
              <Typography variant="h6"><strong>Debtors:</strong> {selectedData.Debtors}</Typography>
              <Typography variant="h6"><strong>Property:</strong> {selectedData.Property}</Typography>
              <Typography variant="h6"><strong>Installment Plans:</strong> {selectedData["Installment Plans"]}</Typography>
              <Typography variant="h6"><strong>Housing:</strong> {selectedData.Housing}</Typography>
              <Typography variant="h6"><strong>Job:</strong> {selectedData.Job}</Typography>
              <Typography variant="h6"><strong>Telephone:</strong> {selectedData.Telephone}</Typography>
              <Typography variant="h6"><strong>Foreign Worker:</strong> {selectedData["Foreign Worker"]}</Typography>
              <Typography variant="h6"><strong>Real Credit:</strong> 
              {selectedData["Real Credit"]}
              </Typography>
              
              <Typography variant="h6"><strong>Predicted Credit:</strong> 
              <img src={selectedData["Predicted Credit"] === "Good" ? '/GoodIcon.png' : '/BadIcon.png'} alt="Credit Status" style={{ width: 'auto', height: '50px' }} />
              </Typography>

              <Typography variant="h6"><strong>Predicted Credit When Chaning Age:</strong> <img src={selectedData["Predicted Credit"] === "Good" ? '/BadIcon.png' : '/GoodIcon.png'} alt="Credit Status" style={{ width: 'auto', height: '50px' }} />
              </Typography>
            </Paper>
          )}
        </Grid>

          </Grid>

             
              
    </Box>
  );
}