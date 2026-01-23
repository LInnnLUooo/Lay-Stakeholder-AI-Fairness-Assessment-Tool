import "./styles.css";
import React, { useState,useEffect,useRef } from 'react';
import Header from "./pageComponents/Header";

import DataView from "./views/DataView";
import MetricMappingView from "./views/MetricMappingView";
import FairnessTradeOffView from './views/FairnessTradeOffView';
import ModelView from "./views/ModelView";
// import DataDistribution from './featureExplorationComponents/DataDistribution';

import FairnessView from "./views/FairnessView";
import FeatureSelectionView from "./views/FeatureSelectionView";


import { Routes, Route } from "react-router-dom"; //所有路由在APP里面统一渲染
import Box from '@mui/material/Box';
import { useNavigate,useLocation } from 'react-router-dom';

// {for new function}
import Button from '@mui/material/Button';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import Change from "./pageComponents/Change"

import theme from './theme/theme';
import { ThemeProvider } from '@mui/material/styles';

//nevigate path：
const MetricMapping_PATH = "/MetricMappingView";


export default function App() {
  const navigate = useNavigate(); 
  // const theme = useTheme();

  // record user's final feature selection and ranking
  const featureSelectionRef = useRef(null);
  const [rankedSelection, setRankedSelection] = useState([]);
  // 定义 handleConfirmSelection 函数
  const handleConfirmSelection = () => {
    if (featureSelectionRef.current) {
      const selectedFeatures = featureSelectionRef.current.getSelectedFeatures();
      setRankedSelection(selectedFeatures);
      navigate(MetricMapping_PATH);
    }
  };

  // 控制传入到Dataview组件的ID
  const [selectedID, setSelectedID] = useState(null);
  const handleItemClick = (item) => {
    setSelectedID(item.id);
    console.log(`Clicked image with ID: ${item.id}, Type: ${typeof item.id}`);
  };

  // // 控制DataVew组件的显示&& 使用useeffect 监听 location的变化。
  // const [showDataView, setShowDataView] = useState(true);
  // const location = useLocation();
  // useEffect(() => {
  //   // 当路径改变并且不再是 '/change' 时，将 showDataView 设置为 true
  //   if (location.pathname !== CHANGE_PATH) {
  //     setShowDataView(true);
  //   }
  // }, [location.pathname]);  // 依赖于 location.pathname，所以当它变化时 useEffect 会重新运行

  return (
  <ThemeProvider theme={theme}>
    <Box display="flex" flexDirection="column" width='100%'>

    {/* 0: header */}
    {/* <Box mb={theme.spacing(0.5)} display="flex" justifyContent="center">
      <Header
        title="AI Application: predicting a bank customer's credit is Good or Bad"
        // subtitle="Application Scenario: predicting a bank customer's credit is Good or Bad"
      />
    </Box> */}

    {/* 1: Data View */}
    <Box mb={theme.spacing(1)} display="flex" justifyContent="center" >
      {/* {showDataView && <DataView selectedID={selectedID}/> } */}
      {/* 不为其设置路由路径，那么它会始终显示在页面中 */}
      <DataView selectedID={selectedID}/>
    </Box>
    

    {/* 2: Model & Fairness View */}
    <Box mb={theme.spacing(1)} display="flex" justifyContent="center"  width='100%' >           
          {/* 为下面的模块设置路由路径，只有在特定的路径下会显示 */}
          <Box flex={1} marginRight = "3px" > 
            <Routes>
              <Route path="/" element={<ModelView />} />
            </Routes>
          </Box>     

          <Box  flex={2} marginLeft = "3px" >  
          {/* //有两个元素，一个的flex值为3，另一个的flex值为9，这意味着第一个元素会获得容器中总可用空间的1/4（因为3/(3+9) = 1/4），而第二个元素会获得3/4的空间。这确实表示了1:3的比例，但不是简单的3和9的直接空间分配。 */}
            <Routes>
              <Route path="/" element={<FairnessView />} />
            </Routes>
          </Box>

          <Box flex={1} marginRight = "3px" > 
            <Routes>
              {/* <Route path="/" element={<FeatureSelectionView />} /> */}
              <Route path="/" element={<FeatureSelectionView ref={featureSelectionRef} />} />
            </Routes>
          </Box> 

          {/* <GroupPredictiveEqualityImage selectedID={selectedID} handleItemClick={handleItemClick} /> */}
    </Box>

    {/* 3: change function. user-ai joint decision */}
    <Box mb={theme.spacing(1)} display="flex" justifyContent="center" >
        <Routes>
            <Route path="/" element={
                <Button
                style={{ fontSize: '25px' }}
                // startIcon={<TouchAppIcon style={{ fontSize: '40px' }} />}
                variant="contained"
                onClick={handleConfirmSelection}
                size="small"
              >
                Confirm Feature Selection & Ranking
              </Button>
              } />
        </Routes>
    </Box>

   {/* 4: specific route path for explanation pages */}
    <Box mb={theme.spacing(1)} display="flex" justifyContent="center"  width='100%'>
    <Routes>
      

      {/* MetricMapping PATH:  */}
      <Route path="/MetricMappingView" element={<MetricMappingView rankedSelection={rankedSelection} selectedID={selectedID} handleItemClick={handleItemClick} />} />
      {/* Fairness TradeOff PATH:  */}
      <Route path="/FairnessTradeOffView" element={<FairnessTradeOffView />} />
    </Routes>
 </Box> 
    
   
    
 </Box>
 </ThemeProvider>
);
}




