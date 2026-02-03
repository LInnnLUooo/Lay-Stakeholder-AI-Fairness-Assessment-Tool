import "./styles.css";
import React, { useState,useEffect,useRef } from 'react';
import Header from "./pageComponents/Header";

import DataView from "./views/DataView";
import MetricMappingView from "./views/MetricMappingView";
import FairnessTradeOffView from './views/FairnessTradeOffView';
import ModelView from "./views/ModelView";

import FairnessView from "./views/FairnessView";
import FeatureSelectionView from "./views/FeatureSelectionView";


import { Routes, Route } from "react-router-dom";
import Box from '@mui/material/Box';
import { useNavigate,useLocation } from 'react-router-dom';

import Button from '@mui/material/Button';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import Change from "./pageComponents/Change"

import theme from './theme/theme';
import { ThemeProvider } from '@mui/material/styles';

const MetricMapping_PATH = "/MetricMappingView";


export default function App() {
  const navigate = useNavigate(); 

  const featureSelectionRef = useRef(null);
  const [rankedSelection, setRankedSelection] = useState([]);
  const handleConfirmSelection = () => {
    if (featureSelectionRef.current) {
      const selectedFeatures = featureSelectionRef.current.getSelectedFeatures();
      setRankedSelection(selectedFeatures);
      navigate(MetricMapping_PATH);
    }
  };

  const [selectedID, setSelectedID] = useState(null);
  const handleItemClick = (item) => {
    setSelectedID(item.id);
    console.log(`Clicked image with ID: ${item.id}, Type: ${typeof item.id}`);
  };


  return (
  <ThemeProvider theme={theme}>
    <Box display="flex" flexDirection="column" width='100%'>

    {}
    {
}

    {}
    <Box mb={theme.spacing(1)} display="flex" justifyContent="center" >
      {}
      {}
      <DataView selectedID={selectedID}/>
    </Box>
    

    {}
    <Box mb={theme.spacing(1)} display="flex" justifyContent="center"  width='100%' >           
          {}
          <Box flex={1} marginRight = "3px" > 
            <Routes>
              <Route path="/" element={<ModelView />} />
            </Routes>
          </Box>     

          <Box  flex={2} marginLeft = "3px" >  
          {}
            <Routes>
              <Route path="/" element={<FairnessView />} />
            </Routes>
          </Box>

          <Box flex={1} marginRight = "3px" > 
            <Routes>
              {}
              <Route path="/" element={<FeatureSelectionView ref={featureSelectionRef} />} />
            </Routes>
          </Box> 

          {}
    </Box>

    {}
    <Box mb={theme.spacing(1)} display="flex" justifyContent="center" >
        <Routes>
            <Route path="/" element={
                <Button
                style={{ fontSize: '25px' }}
                variant="contained"
                onClick={handleConfirmSelection}
                size="small"
              >
                Confirm Feature Selection & Ranking
              </Button>
              } />
        </Routes>
    </Box>

   {}
    <Box mb={theme.spacing(1)} display="flex" justifyContent="center"  width='100%'>
    <Routes>
      

      {}
      <Route path="/MetricMappingView" element={<MetricMappingView rankedSelection={rankedSelection} selectedID={selectedID} handleItemClick={handleItemClick} />} />
      {}
      <Route path="/FairnessTradeOffView" element={<FairnessTradeOffView />} />
    </Routes>
 </Box> 
    
   
    
 </Box>
 </ThemeProvider>
);
}




