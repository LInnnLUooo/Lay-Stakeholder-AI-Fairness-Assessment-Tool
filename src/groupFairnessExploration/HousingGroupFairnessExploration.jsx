import { featureCombinations_string_allvalues, uniqueFeatureValues_string_allvalues,featureCombinations_numeric_allvalues, uniqueNumericValues, featureCombinations_string_combinedvalues,uniqueFeatureValues_string_combinedvalues,

  allFeatureCombinations, allUniqueFeatureValues, } from '../data/allfeaturegroupfairnessfilter.js';
import * as React from 'react';
import {useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import '../styles.css'; 
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(...registerables, ChartDataLabels);



// step1： 为DP,EO,PE,EOS,OT 设置图片矩阵
const featureName = 'Housing';

const ratedGoodImage = '/RatedGoodIcon.png';// The common image source for 'female'，注意斜杠一定不可以少。有了斜杠，无论路由路径如何变化，都会从绝对路径加载找到图片。否则切换路由使用相对路径，容易找不到。
const ratedBadImage = '/RatedBadIcon.png'; 


function ImageSection({selectedGroupFairnessMetric}) {
    const Combinations = featureCombinations_string_allvalues[featureName];
    const uniqueValues = uniqueFeatureValues_string_allvalues[featureName];
    const theme = useTheme();
  
    const mapImages = (ids, realCredit) => {
      if (!ids) return [];
      return ids.map(id => ({
        source: realCredit === 'Good' ? ratedGoodImage : ratedBadImage,
        id: id,
      }));
    };
  
    const calculateMaxHeight = (combinations) => {
      const imageHeight = 32;  // 图片高度
      const idHeight = 18;     // ID 文本高度
      return Math.max(...Object.values(combinations).map(ids => {
        if (!ids) return 0;
        return Math.ceil(ids.length / 7) * (imageHeight + idHeight + 10); // 每行5个图片，每个图片和ID的总高度加上间距
      }));
    };
  
    const maxHeightGood = calculateMaxHeight(
      Object.keys(Combinations).reduce((acc, key) => {
        if (key.includes('predGood')) {
          acc[key] = Combinations[key];
        }
        return acc;
      }, {})
    );
  
    const maxHeightBad = calculateMaxHeight(
      Object.keys(Combinations).reduce((acc, key) => {
        if (key.includes('predBad')) {
          acc[key] = Combinations[key];
        }
        return acc;
      }, {})
    );

    const getBackgroundColor = (metric, predCredit, realCredit) => {
      switch (metric) {
          case 'Demographic Parity':
              return predCredit === 'Good' ? '#eafc70' : 'transparent';
          case 'Equal Opportunity':
              return (predCredit === 'Good' && realCredit === 'Good') ? '#eafc70' : (realCredit === 'Bad' ? '#d3d4cc' : 'transparent');
          case 'Predictive Equality':
              return (predCredit === 'Good' && realCredit === 'Bad') ? '#eafc70' : (realCredit === 'Good' ? '#d3d4cc' : 'transparent');  
          case 'Outcome Test':
              return (predCredit === 'Good' && realCredit === 'Good') ? '#eafc70' : (predCredit === 'Bad' ? '#d3d4cc' : 'transparent'); 
          default:
              return 'transparent';
      }
  };


    return (
      <Box display="flex" flexDirection="row" justifyContent="space-evenly" padding="3px">
        {uniqueValues.map((featureValue, index) => {
    const encodedFeatureValue = encodeURIComponent(featureValue.toString().toLowerCase().replace(/ /g, ''));
          const imagesPredGoodRealGood = mapImages(Combinations[`group_predGood_realGood_${featureName.toLowerCase().replace(/ /g, '')}_${encodedFeatureValue}`], 'Good');
          const imagesPredGoodRealBad = mapImages(Combinations[`group_predGood_realBad_${featureName.toLowerCase().replace(/ /g, '')}_${encodedFeatureValue}`], 'Bad');
          const imagesPredBadRealGood = mapImages(Combinations[`group_predBad_realGood_${featureName.toLowerCase().replace(/ /g, '')}_${encodedFeatureValue}`], 'Good');
          const imagesPredBadRealBad = mapImages(Combinations[`group_predBad_realBad_${featureName.toLowerCase().replace(/ /g, '')}_${encodedFeatureValue}`], 'Bad');
          return (
            <Box
              key={index}
              display="flex"
              flexDirection="column"
              alignItems="center"
              border={`2px solid ${theme.palette.primary.main}`}
              margin="10px"
              padding="10px"
              flexBasis={`calc(100% / ${uniqueValues.length} - 40px)`} // 动态计算每个大Box的宽度
              flexGrow={1}
            >
              <h2>{featureName}: {encodedFeatureValue}</h2>
              <Box display="flex" flexDirection="column" alignItems="center" width="100%" style={{ borderTop: `6px solid ${theme.palette.primary.main}` }}>
                <h3>Predicted Credit is Good ({imagesPredGoodRealGood.length + imagesPredGoodRealBad.length})</h3>
                <Box display="flex" flexDirection="row" justifyContent="space-between" width="100%">
                  <Box display="flex" flexDirection="column" alignItems="center" flex={1} borderRight={`2px solid ${theme.palette.primary.main}`} padding="5px" style={{ height: maxHeightGood, backgroundColor: getBackgroundColor(selectedGroupFairnessMetric, 'Good', 'Good') }}>
                    <h4>Real Credit is Good ({imagesPredGoodRealGood.length})</h4>
                    <Box display="flex" flexWrap="wrap" justifyContent="flex-start" width="100%">
                      {imagesPredGoodRealGood.map((item) => (
                        <Box key={item.id} sx={{ width: '32px', height: '50px', margin: '2px' }} >
                          <img
                            src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                            srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.id}
                            loading="lazy"
                            style={{ width: '100%', height: '32px' }}
                          />
                          <Typography variant="caption" display="block" textAlign="center" color="#3DC852" sx={{ height: '18px', lineHeight: '18px' }}>{item.id}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                  <Box display="flex" flexDirection="column" alignItems="center" flex={1} padding="5px" style={{ height: maxHeightGood, backgroundColor: getBackgroundColor(selectedGroupFairnessMetric, 'Good', 'Bad') }}>
                    <h4>Real Credit is Bad ({imagesPredGoodRealBad.length})</h4>
                    <Box display="flex" flexWrap="wrap" justifyContent="flex-start" width="100%">
                      {imagesPredGoodRealBad.map((item) => (
                        <Box key={item.id} sx={{ width: '32px', height: '50px', margin: '2px' }} >
                          <img
                            src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                            srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.id}
                            loading="lazy"
                            style={{ width: '100%', height: '32px' }}
                          />
                          <Typography variant="caption" display="block" textAlign="center" color="#3DC852" sx={{ height: '18px', lineHeight: '18px' }}>{item.id}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box display="flex" flexDirection="column" alignItems="center" width="100%" marginTop="70px" marginBottom="60px" style={{ borderTop: `6px solid ${theme.palette.primary.main}` }}>
                <h3>Predicted Credit is Bad ({imagesPredBadRealGood.length + imagesPredBadRealBad.length})</h3>
                <Box display="flex" flexDirection="row" justifyContent="space-between" width="100%">
                <Box display="flex" flexDirection="column" alignItems="center" flex={1} borderRight={`2px solid ${theme.palette.primary.main}`} padding="5px" style={{ height: maxHeightBad, backgroundColor: getBackgroundColor(selectedGroupFairnessMetric, 'Bad', 'Good') }}>
                    <h4>Real Credit is Good ({imagesPredBadRealGood.length})</h4>
                    <Box display="flex" flexWrap="wrap" justifyContent="flex-start" width="100%">
                      {imagesPredBadRealGood.map((item) => (
                        <Box key={item.id} sx={{ width: '32px', height: '50px', margin: '2px' }} >
                          <img
                            src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                            srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.id}
                            loading="lazy"
                            style={{ width: '100%', height: '32px' }}
                          />
                          <Typography variant="caption" display="block" textAlign="center" color="#3DC852" sx={{ height: '18px', lineHeight: '18px' }}>{item.id}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                  <Box display="flex" flexDirection="column" alignItems="center" flex={1} padding="5px" style={{ height: maxHeightBad, backgroundColor: getBackgroundColor(selectedGroupFairnessMetric, 'Bad', 'Bad') }}>
                    <h4>Real Credit is Bad ({imagesPredBadRealBad.length})</h4>
                    <Box display="flex" flexWrap="wrap" justifyContent="flex-start" width="100%">
                      {imagesPredBadRealBad.map((item) => (
                        <Box key={item.id} sx={{ width: '32px', height: '50px', margin: '2px' }} >
                          <img
                            src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                            srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.id}
                            loading="lazy"
                            style={{ width: '100%', height: '32px' }}
                          />
                          <Typography variant="caption" display="block" textAlign="center" color="#3DC852" sx={{ height: '18px', lineHeight: '18px' }}>{item.id}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    );
}

// step2：design CSP 子组件
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {useEffect} from 'react';

const predGoodImage = '/PreGoodIcon.png';
const predBadImage = '/PreBadIcon.png';

const allFeatures = ['Duration', 'Credit Amount', 'Installment Rate', 'Residence Length', 'Existing Credits', 
  'Dependents', 'Age', 'Gender', 'Checking Account', 'Credit History',
  'Purpose', 'Savings', 'Employment', 'Debtors', 'Property', 'Installment Plans', 
  'Housing', 'Job', 'Telephone', 'Foreign Worker'];

const featuresForDropdown = allFeatures.filter(feature => feature !== featureName);

// 定义特征类型
const stringFeatures = ['Installment Rate', 'Residence Length', 'Existing Credits', 'Dependents', 'Debtors', 'Property', 'Installment Plans', 'Housing', 'Telephone', 'Foreign Worker','Gender'];
const numericFeatures = ['Age', 'Credit Amount', 'Duration'];
const combinedStringFeatures = ['Checking Account','Job','Employment', 'Savings', 'Purpose', 'Credit History'];

function ConditionalStatisticalParitySection() {
  const [selectedFeature, setSelectedFeature] = useState('');
  const [uniqueFeatureValues, setUniqueFeatureValues] = useState([]);

  const handleChange_CSP = (event) => {
    const selected = event.target.value;
    setSelectedFeature(selected);
    setUniqueFeatureValues(allUniqueFeatureValues[selected] || []);
  };

  const theme = useTheme();

  const selectedFeatureUniqueValues = allUniqueFeatureValues[featureName] || [];

  // 可视化部分的代码
  const [combinations, setCombinations] = useState([]);
  const [currentFeatureCombinations, setCurrentFeatureCombinations] = useState([]);
  
 
  
  // 正则表达式的提取：
  const createRegexForFeatureValue = (pred, feature, value) => {
    const encodedFeature = feature.toLowerCase().replace(/ /g, '');
    let encodedValue = value.toString().toLowerCase().replace(/ /g, '');
    // 特殊处理 Property feature 和 特定值
if (feature === 'Property') {
  if (value === 'Car/Other') {
    encodedValue = 'car_or_other';  // 特殊处理 '/' 为 '_'
    
  } else if (value === 'Real Estate') {
    encodedValue = 'real_estate';  // 特殊处理空格为下划线
    
  } else if (value === 'Life Insurance') {
    encodedValue = 'life_insurance';  // 特殊处理空格为下划线
    
  }
}
    return new RegExp(`group_pred${pred}_\\w+_${encodedFeature}_${encodedValue}`);
  };
  
  

  const extractIDListsForFeatureValue = (combinations, pred, feature, value) => {
    const regex = createRegexForFeatureValue(pred, feature, value);
  
    const filteredLists = Object.keys(combinations)
      .filter(key => regex.test(key))
      .reduce((result, key) => {
        result[key] = combinations[key];
        return result;
      }, {});
  
     return filteredLists;
    
  };

  const removeUndefinedValues = (obj) => {
    return Object.keys(obj)
      .filter(key => obj[key] !== undefined)
      .reduce((result, key) => {
        result[key] = obj[key];
        return result;
      }, {});
  };
  

  useEffect(() => {
    if (selectedFeature) {
      let combinations;
      if (stringFeatures.includes(selectedFeature)) {
        combinations = featureCombinations_string_allvalues[selectedFeature];
      } else if (numericFeatures.includes(selectedFeature)) {
        combinations = featureCombinations_numeric_allvalues[selectedFeature];
      } else if (combinedStringFeatures.includes(selectedFeature)) {
        combinations = featureCombinations_string_combinedvalues[selectedFeature];
      }
      setCombinations(combinations);

  
      let currentFeatureCombinations;
      if (stringFeatures.includes(featureName)) {
        currentFeatureCombinations = featureCombinations_string_allvalues[featureName];
      } else if (numericFeatures.includes(featureName)) {
        currentFeatureCombinations = featureCombinations_numeric_allvalues[featureName];
      } else if (combinedStringFeatures.includes(featureName)) {
        currentFeatureCombinations = featureCombinations_string_combinedvalues[featureName];
      }

      setCurrentFeatureCombinations(currentFeatureCombinations);
  
      console.log(`Combinations for ${selectedFeature}:`, combinations);
      console.log(`Combinations for ${featureName}:`, currentFeatureCombinations);
    }
  }, [selectedFeature]);
    

  return (
    <Box sx={{ width: '96%', height: '100%',margin: '20px auto' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px',height: '100%'}}>
        <Typography variant="h6" sx={{ flexShrink: 0 }}>
       I am interested in this trait: Under the same conditions of
        </Typography>
        <FormControl sx={{ marginLeft: '10px', minWidth: '200px', flexGrow: 1 }}>
          <InputLabel id="select-feature-condition-label">select a condition</InputLabel>
          <Select
            labelId="select-feature-condition-label"
            value={selectedFeature}
            label="select a condition"
            onChange={handleChange_CSP}
          >
            {featuresForDropdown.map((feature, index) => (
              <MenuItem key={index} value={feature}>
                {feature}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Typography variant="h6" sx={{ marginLeft: '10px', flexShrink: 0 }}>
        , groups with different {featureName} have an equal probability of receiving a 'Good Credit' prediction from AI.
        </Typography>
      </Box>

      {uniqueFeatureValues.length > 0 && (
        <Box>
          {uniqueFeatureValues.map((featureValue, index) => {
            return (
              <Box
                key={index}
                display="flex"
                flexDirection="column"
                alignItems="center"
                border={`2px solid ${theme.palette.primary.main}`}
                margin="10px 0"
                padding="10px"
                borderRadius="8px"
                boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
                backgroundColor={theme.palette.background.paper}
                sx={{ width: '100%',height: '100%' }}
              >
                <Typography variant="h5" component="div" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>{selectedFeature}: {featureValue}</Typography>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  sx={{ width: '100%' }}
                >
                  {selectedFeatureUniqueValues.map((subFeatureValue, subIndex) => (
                    <Box
                      key={subIndex}
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      border={`1px solid ${theme.palette.primary.light}`}
                    
                      margin="5px"
                      padding="5px"
                      borderRadius="4px"
                      sx={{ flexGrow: 1,height: '100%'  }}
                    >
                      <Typography variant="h5" sx={{ fontWeight: 'bold',color: 'primary.main'  }}>{featureName}: {subFeatureValue}</Typography>
                      {/* 1111 */}
                      

                      <Box display="flex" justifyContent="space-between" sx={{ width: '100%' }}>
                        
                    {(() => {
                      const pred = 'Good'; // 或 'Bad'，根据需求调整

                      // 检查combinations或currentFeatureCombinations是否有效
                      if (!combinations || !currentFeatureCombinations) {
                        console.error('combinations or currentFeatureCombinations is undefined or null');
                        return null;
                      }

                      // 根据外层Box的selectedFeature和featureValue进行提取:各自取值对应的pred good （包括real good与real bad）
                      const featureValueCombinations = extractIDListsForFeatureValue(combinations, pred, selectedFeature, featureValue);
                      const currentFeatureCombinationsList = extractIDListsForFeatureValue(currentFeatureCombinations, pred, featureName, subFeatureValue);

                      // 使用 Set 去除重复的 ID,获得该特征取值下pred 为good的全部ID
                      const predGood_featureValueCombinationsList = Array.from(new Set([].concat(...Object.values(featureValueCombinations))));
                      const predGood_currentFeatureCombinationsList = Array.from(new Set([].concat(...Object.values(currentFeatureCombinationsList))));

                      // 寻求两者交集
                      const intersection_orig = predGood_featureValueCombinationsList.filter(value => predGood_currentFeatureCombinationsList.includes(value));
                      
                      const intersection = removeUndefinedValues(intersection_orig);

                      // 根据外层Box的selectedFeature和featureValue进行提取:各自取值对应的pred bad （包括real good与real bad）
                      const featureValueCombinations_prebad = extractIDListsForFeatureValue(combinations, 'Bad', selectedFeature, featureValue);
                      const currentFeatureCombinationsList_prebad = extractIDListsForFeatureValue(currentFeatureCombinations, 'Bad', featureName, subFeatureValue);


                      // 使用 Set 去除重复的 ID,获得该特征取值下pred 为good的全部ID
                      const predbad_featureValueCombinationsList = Array.from(new Set([].concat(...Object.values(featureValueCombinations_prebad))));
                      const predbad_currentFeatureCombinationsList = Array.from(new Set([].concat(...Object.values(currentFeatureCombinationsList_prebad))));

                      const allBadPredictions_orig = predbad_featureValueCombinationsList.filter(value => predbad_currentFeatureCombinationsList.includes(value));

                      const allBadPredictions = removeUndefinedValues(allBadPredictions_orig);


                      

                      return (
                        <Box
                          key={subIndex}
                          display="flex"
                          flexDirection="column"
                          alignItems="center"
                          // border={`1px solid ${theme.palette.primary.light}`}
                          margin="5px"
                          padding="5px"
                          borderRadius="4px"
                          sx={{ flexGrow: 1 }}
                        >

                          
                      <Typography variant="h5">Total: {Object.keys(intersection).length+Object.keys(allBadPredictions).length}</Typography>


                    <Box sx={{ width: '230px', height: '400px', display: 'flex', flexWrap: 'wrap', overflowY: 'auto' }}>
                      {Object.values(intersection).map((id, index) => (
                        <Box key={index} sx={{ width: '35px', margin: '2px', textAlign: 'center' }}>
                          <img
                            src={`${predGoodImage}?w=32&h=32&fit=crop&auto=format`}
                            srcSet={`${predGoodImage}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                            alt={`ID: ${id}`}
                            loading="lazy"
                            style={{ width: '35px', height: '35px' }}
                          />
                          <Typography variant="caption">{id}</Typography>
                        </Box>
                      ))}
                      {Object.values(allBadPredictions).map((id, index) => (
                        <Box key={index + Object.keys(intersection).length} sx={{ width: '35px', margin: '2px', textAlign: 'center' }}>
                          <img
                            src={`${predBadImage}?w=32&h=32&fit=crop&auto=format`}
                            srcSet={`${predBadImage}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                            alt={`ID: ${id}`}
                            loading="lazy"
                            style={{ width: '35px', height: '35px' }}
                          />
                          <Typography variant="caption">{id}</Typography>
                        </Box>
                      ))}
                    </Box>



                      <Paper elevation={3} sx={{ width: '98%',height: '140px', backgroundColor: '#f5f5f5', padding: '10px', margin: '5px',borderRadius: '8px' }}>
                          
                      <Typography variant="h6" component="div" gutterBottom color="black" sx={{ fontSize: '22px' }}>
                          <strong>{Object.keys(intersection).length}</strong> (<strong style={{ color: 'blue' }}>{(Object.keys(intersection).length + Object.keys(allBadPredictions).length) === 0 
                            ? 0 
                            : ((Object.keys(intersection).length/(Object.keys(intersection).length+Object.keys(allBadPredictions).length)).toFixed(2))*100
                          }%</strong>) people are predicted as <strong>Good Credit</strong> by AI.
                          </Typography>

                          <Typography variant="h6" component="div" gutterBottom color="black" sx={{ fontSize: '22px' }}>
                          <strong>{Object.keys(allBadPredictions).length}</strong>  ({(Object.keys(intersection).length + Object.keys(allBadPredictions).length) === 0 
                          ? 0 
                          : 100-((Object.keys(intersection).length/(Object.keys(intersection).length+Object.keys(allBadPredictions).length)).toFixed(2))*100
                        }%) people are predicted as <strong>Bad Credit</strong> by AI.

                          </Typography>

                         



                        </Paper>
                       

                        
                        </Box>
                      );
                    })()}                   
                    </Box>
                                
                    </Box>
                  ))}
                </Box>
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
}


export default function HousingGroupFairnessExploration(){

    const [selectedGroupFairnessMetric, setSelectedGroupFairnessMetric] = useState("Demographic Parity");
    
    const theme = useTheme(); 

    // metric value chart:
    const Combinations = featureCombinations_string_allvalues[featureName];
    const uniqueValues = uniqueFeatureValues_string_allvalues[featureName];

    const calculateMetricValues = (metric) => {
      const values = uniqueValues.map(value => {
        const encodedFeatureValue = encodeURIComponent(value.toString().toLowerCase().replace(/ /g, ''));
        const imagesPredGoodRealGood = Combinations[`group_predGood_realGood_${featureName.toLowerCase().replace(/ /g, '')}_${encodedFeatureValue}`]?.length || 0;
        const imagesPredGoodRealBad = Combinations[`group_predGood_realBad_${featureName.toLowerCase().replace(/ /g, '')}_${encodedFeatureValue}`]?.length || 0;
        const imagesPredBadRealGood = Combinations[`group_predBad_realGood_${featureName.toLowerCase().replace(/ /g, '')}_${encodedFeatureValue}`]?.length || 0;
        const imagesPredBadRealBad = Combinations[`group_predBad_realBad_${featureName.toLowerCase().replace(/ /g, '')}_${encodedFeatureValue}`]?.length || 0;

        if (metric === "Demographic Parity") {
          return Math.round((imagesPredGoodRealGood + imagesPredGoodRealBad) / (imagesPredGoodRealGood + imagesPredGoodRealBad + imagesPredBadRealGood + imagesPredBadRealBad) * 100);
        } else if (metric === "Equal Opportunity") {
          return Math.round(imagesPredGoodRealGood / (imagesPredGoodRealGood + imagesPredBadRealGood) * 100);
        } else if (metric === "Predictive Equality") {
          return Math.round(imagesPredGoodRealBad / (imagesPredGoodRealBad + imagesPredBadRealBad) * 100);
        } else if (metric === "Outcome Test") {
          return Math.round(imagesPredGoodRealGood / (imagesPredGoodRealGood + imagesPredGoodRealBad) * 100);
        } 
        else {
          return 0;
        }
      });

      const maxValue = Math.max(...values);
      const minValue = Math.min(...values);
      const difference = maxValue - minValue;

      return [...values, difference];
    };

    const calculateEqualizedOddsValues = () => {
      const equalOpportunityValues = calculateMetricValues("Equal Opportunity");
      const predictiveEqualityValues = calculateMetricValues("Predictive Equality");

      const equalOpportunityDifference = equalOpportunityValues[equalOpportunityValues.length - 1];
      const predictiveEqualityDifference = predictiveEqualityValues[predictiveEqualityValues.length - 1];
      const maxDifference = Math.max(equalOpportunityDifference, predictiveEqualityDifference);

      return [equalOpportunityDifference, predictiveEqualityDifference, maxDifference];
    };

    const data_MetricValues = {
      labels: selectedGroupFairnessMetric === "Equalized Odds" ? ['Equal Opportunity', 'Predictive Equality', 'Maximum Difference'] : [...uniqueValues, 'Maximum Difference'],
      datasets: [
        {
          label: 'Metric Values',
          backgroundColor: selectedGroupFairnessMetric === "Equalized Odds" ? ['rgba(75,192,192,0.4)', 'rgba(75,192,192,0.4)', 'rgba(255,165,0,0.4)'] : [...Array(uniqueValues.length).fill('rgba(75,192,192,0.4)'), 'rgba(255,165,0,0.4)'],
          borderColor: selectedGroupFairnessMetric === "Equalized Odds" ? ['rgba(75,192,192,1)', 'rgba(75,192,192,1)', 'rgba(255,165,0,1)'] : [...Array(uniqueValues.length).fill('rgba(75,192,192,1)'), 'rgba(255,165,0,1)'],
          borderWidth: 1,
          hoverBackgroundColor: selectedGroupFairnessMetric === "Equalized Odds" ? ['rgba(75,192,192,0.6)', 'rgba(75,192,192,0.6)', 'rgba(255,165,0,0.6)'] : [...Array(uniqueValues.length).fill('rgba(75,192,192,0.6)'), 'rgba(255,165,0,0.6)'],
          hoverBorderColor: selectedGroupFairnessMetric === "Equalized Odds" ? ['rgba(75,192,192,1)', 'rgba(75,192,192,1)', 'rgba(255,165,0,1)'] : [...Array(uniqueValues.length).fill('rgba(75,192,192,1)'), 'rgba(255,165,0,1)'],
          data: selectedGroupFairnessMetric === "Equalized Odds" ? calculateEqualizedOddsValues() : calculateMetricValues(selectedGroupFairnessMetric),
        },
      ],
    };

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            font: {
              size: 20
            }
          }
        },
        title: {
          display: true,
          text: `${selectedGroupFairnessMetric} Analysis`,
          font: {
            size: 20
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              let label = context.dataset.label || '';
              if (label) {
                label += ': ';
              }
              label += `${context.raw}%`;
              return label;
            }
          },
          titleFont: {
            size: 20
          },
          bodyFont: {
            size: 20
          },
          footerFont: {
            size: 20
          }
        },
        datalabels: {
          formatter: function(value) {
            return `${value}%`;
          },
          color: 'black',
          font: {
            size: 20,
            weight: 'bold'
          },
        },
      },
      scales: {
        y: {
          title: {
            display: true,
            text: 'Metric Values',
            font: {
              size: 20
            }
          },
          ticks: {
            callback: function(value) {
              return `${value}%`;
            },
            font: {
              size: 20
            }
          }
        },
        x: {
          
          ticks: {
            font: {
              size: 20
            },
            
            
          }
        }
      },
    };

    const getDescriptionForMetric = (metric) => {
      const values = uniqueValues.map(value => {
        const encodedFeatureValue = encodeURIComponent(value.toString().toLowerCase().replace(/ /g, ''));
        const imagesPredGoodRealGood = Combinations[`group_predGood_realGood_${featureName.toLowerCase().replace(/ /g, '')}_${encodedFeatureValue}`]?.length || 0;
        const imagesPredGoodRealBad = Combinations[`group_predGood_realBad_${featureName.toLowerCase().replace(/ /g, '')}_${encodedFeatureValue}`]?.length || 0;
        const imagesPredBadRealGood = Combinations[`group_predBad_realGood_${featureName.toLowerCase().replace(/ /g, '')}_${encodedFeatureValue}`]?.length || 0;
        const imagesPredBadRealBad = Combinations[`group_predBad_realBad_${featureName.toLowerCase().replace(/ /g, '')}_${encodedFeatureValue}`]?.length || 0;
    
        let description = '';
        let percentage = 0;
    
        if (metric === "Demographic Parity") {
          const numerator = imagesPredGoodRealGood + imagesPredGoodRealBad;
          const denominator = imagesPredGoodRealGood + imagesPredGoodRealBad + imagesPredBadRealGood + imagesPredBadRealBad;
          percentage = (denominator === 0) ? 0 : Math.round((numerator / denominator) * 100);
          description = `${featureName}: ${value}, the proportion of applicants predicted as Good Credit is calculated as (Predicted Credit is Good) / (Predicted Credit is Good + Predicted Credit is Bad) = (${imagesPredGoodRealGood} + ${imagesPredGoodRealBad}) / (${imagesPredGoodRealGood} + ${imagesPredGoodRealBad} + ${imagesPredBadRealGood} + ${imagesPredBadRealBad}) = ${percentage}%`;
        } else if (metric === "Equal Opportunity") {
          const numerator = imagesPredGoodRealGood;
          const denominator = imagesPredGoodRealGood + imagesPredBadRealGood;
          percentage = (denominator === 0) ? 0 : Math.round((numerator / denominator) * 100);
          description = `${featureName}: ${value}, the proportion of applicants correctly predicted as Good Credit is calculated as (Predicted Credit is Good with Real Credit is Good) / (Real Credit is Good) = ${imagesPredGoodRealGood} / (${imagesPredGoodRealGood} + ${imagesPredBadRealGood}) = ${percentage}%`;
        } else if (metric === "Predictive Equality") {
          const numerator = imagesPredGoodRealBad;
          const denominator = imagesPredGoodRealBad + imagesPredBadRealBad;
          percentage = (denominator === 0) ? 0 : Math.round((numerator / denominator) * 100);
          description = `${featureName}: ${value}, the proportion of applicants incorrectly predicted as Good Credit is calculated as (Predicted Credit is Good with Real Credit is Bad) / (Real Credit is Bad) = ${imagesPredGoodRealBad} / (${imagesPredGoodRealBad} + ${imagesPredBadRealBad}) = ${percentage}%`;
        } else if (metric === "Outcome Test") {
          const numerator = imagesPredGoodRealGood;
          const denominator = imagesPredGoodRealGood + imagesPredGoodRealBad;
          percentage = (denominator === 0) ? 0 : Math.round((numerator / denominator) * 100);
          description = `${featureName}: ${value}, the proportion of applicants actually having Good Credit among those predicted as Good Credit is calculated as (Predicted Credit is Good with Real Credit is Good) / (Predicted Credit is Good) = ${imagesPredGoodRealGood} / (${imagesPredGoodRealGood} + ${imagesPredGoodRealBad}) = ${percentage}%`;
        } 
        return { value, description, percentage };
      });
    
      const percentages = values.map(v => v.percentage);
      const maxPercentage = Math.max(...percentages);
      const minPercentage = Math.min(...percentages);
      const maxDifference = maxPercentage - minPercentage;
      const maxDifferenceDescription = `Maximum Difference is calculated as the difference between the highest and lowest percentage values = ${maxPercentage}% - ${minPercentage}% = ${maxDifference}%`;
    
      if (metric === "Equalized Odds") {
        return (
          <Box>
             Equalized Odds should meet both Equal Opportunity and Predictive Equality. The higher value between Equal Opportunity and Predictive Equality indicates the level of unfairness.
          </Box>
        );
      } else {
        return (
          <Box>
            {values.map(v => (
              <Box key={v.value}>
                {v.description}
              </Box>
            ))}
            <Box>
              {maxDifferenceDescription}
            </Box>
          </Box>
        );
      }
    };
    
    

    
    
    
    
    return (
      <Box display="flex" 
      flexDirection="column" 
      alignItems="center"
      boxShadow="0px 4px 12px #7986cb" 
      borderRadius="8px"
      border={`2px solid #42a5f5`} 
      padding="3px"> 

          {/* 1. Header & metric selector*/}
          <Typography variant="h5" component="div" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
              Please choose a group fairness metric
          </Typography>

          <Box display="flex" 
            justifyContent="center" 
            padding="3px">
                {/* RadioGroup */}
                <FormControl>
                          <FormLabel id="group-fairness-metrics" sx={{ textAlign: 'left' }}>Group Fainess Metrics</FormLabel>
                          <RadioGroup
                            row
                            aria-labelledby="group-fairness-metrics"
                            defaultValue="Demographic Parity"
                            name="group-fairness-metric-selection"
                            onChange={event => setSelectedGroupFairnessMetric(event.target.value)}
                          >
                            <FormControlLabel value="Demographic Parity" control={<Radio />} label="Demographic Parity" />
                            <FormControlLabel value="Equal Opportunity" control={<Radio />} label="Equal Opportunity" />
                            <FormControlLabel value="Predictive Equality" control={<Radio />} label="Predictive Equality" />
                            <FormControlLabel value="Equalized Odds" control={<Radio />} label="Equalized Odds" />
                            <FormControlLabel value="Outcome Test" control={<Radio />} label="Outcome Test" />
                            <FormControlLabel value="Conditional Statistical Parity" control={<Radio />} label="Conditional Statistical Parity" />                          
                          </RadioGroup>
                        </FormControl>
           </Box>

           {/* 2. text exP*/}    
           <Paper elevation={3} sx={{ width: '98%', backgroundColor: '#f5f5f5', padding: '10px', margin: '10px',borderRadius: '8px' }}>
                <Typography variant="h5" component="div" gutterBottom color="black" sx={{ fontSize: '22px' }}
                 >
                  <strong>I choose {selectedGroupFairnessMetric} because: </strong>
                  <br/>
                  
                  {selectedGroupFairnessMetric === "Demographic Parity" && <Box>
                    <strong>I believe this definition best aligns with my ideal definition of fairness: I hope that applicants, regardless of their {featureName}, should have the same chance of receiving a Good Credit prediction from the AI. I don't care about their actual creditworthiness (whether their real credit is good or bad). </strong>
                  <br/>
                  For each value of {featureName}, the proportion of the yellow area to the (yellow + white) area. 
                  <br/>
                  </Box>}
                  {selectedGroupFairnessMetric === "Equal Opportunity" && <Box>
                    <strong>I believe this definition best aligns with my ideal definition of fairness: I hope that applicants with real good credit, regardless of their {featureName}, should have the same chance of receiving a Good Credit prediction from the AI. I don't care whether applicants with real bad credit are treated fairly.</strong>
                  <br/>
                  For each value of {featureName}, the proportion of the yellow area to the (yellow + white) area. The gray area represents the metric under which the consideration of whether the group is being treated fairly is excluded.
                  <br/>
                  </Box>}
                  {selectedGroupFairnessMetric === "Predictive Equality" && <Box> 
                    <strong>I believe this definition best aligns with my ideal definition of fairness: I hope that applicants with real bad credit, regardless of their {featureName}, should have the same chance of receiving a Good Credit prediction from the AI. I don't care whether applicants with real good credit are treated fairly.</strong>
                  <br/>
                  For each value of {featureName}, the proportion of the yellow area to the (yellow + white) area. The gray area represents the metric under which the consideration of whether the group is being treated fairly is excluded.
                  <br/>
                  </Box>}
                  {selectedGroupFairnessMetric === "Equalized Odds" && <Box>
                    <strong>I believe this definition best aligns with my ideal definition of fairness: On one hand, I hope that applicants with real good credit, regardless of their {featureName}, should have the same chance of receiving a Good Credit prediction from the AI. On the other hand, I also hope that applicants with real bad credit, regardless of their {featureName}, should also have the same chance of receiving a Good Credit prediction from the AI.</strong>
                    <br/>
                    </Box>}
                  
                  {selectedGroupFairnessMetric === "Outcome Test" && <Box>
                    <strong>I believe this definition best aligns with my ideal definition of fairness: I hope that for applicants who receive a Good Credit prediction from AI, regardless of their {featureName}, the probability of having real good credit is the same.</strong>
                    
        
                    
                  <br/>
                  For each value of {featureName}, the proportion of the yellow area to the (yellow + white) area. The gray area represents the metric under which the consideration of whether the group is being treated fairly is excluded.
                  <br/>
                  </Box>}
                  
                  {selectedGroupFairnessMetric === "Conditional Statistical Parity" && <Box>
                    <strong>I believe this definition best aligns with my ideal definition of fairness: I hope that for applicants with same conditions (e.g., same Job, Credit History, and Savings), regardless of their {featureName}, should have the same chance of receiving a Good Credit prediction from the AI. I care more about customers' specific traits (e.g., same job, credit history, and savings) rather than whether their overall real credit is good or bad.</strong>

                  <br/>
                  </Box>}
                   
                </Typography>

                {selectedGroupFairnessMetric !== "Conditional Statistical Parity" && (
                  <Box sx={{ width: '80%', height: '400px', margin: '0 auto' }}>
                    <Bar data={data_MetricValues} options={options} />
                  </Box>
                )}
              
              {selectedGroupFairnessMetric !== "Conditional Statistical Parity" && (
                <Typography variant="body1" component="div" gutterBottom color="black"  sx={{ marginTop: '20px', fontSize: '22px' }}>
                  <strong>Metric Values Calculation:</strong>
                  <br />
                  {getDescriptionForMetric(selectedGroupFairnessMetric)}
                </Typography>
              )}

                {/* <Box sx={{ width: '80%', height: '400px', margin: '0 auto' }}>
                <Bar data={data_MetricValues} options={options} />
              </Box>

                <Typography variant="body1" component="div" gutterBottom color="black"  sx={{ marginTop: '20px', fontSize: '22px' }}>
                  <strong>Metric Values Calculation:</strong>
                  <br />
                  {getDescriptionForMetric(selectedGroupFairnessMetric)}
                </Typography> */}
                
          
            
            
            </Paper>

            {/* 3 metric Selector*/}
            <Box 
                display="flex"
                padding="6px"
                alignItems="flex-start"  // 控制垂直方向的对齐
                justifyContent="flex-end" // 控制水平方向的对齐
                //border={`2px solid #42a5f5`}
                
            >    
                    {/* 根据当前的 radio 选择值，动态地渲染相应的 SVG 组件。 */}
                    {selectedGroupFairnessMetric === "Demographic Parity" &&  <ImageSection  selectedGroupFairnessMetric={selectedGroupFairnessMetric} />}
                    {selectedGroupFairnessMetric === "Equal Opportunity" && <ImageSection selectedGroupFairnessMetric={selectedGroupFairnessMetric} />}
                    {selectedGroupFairnessMetric === "Predictive Equality" && <ImageSection selectedGroupFairnessMetric={selectedGroupFairnessMetric}  />}
                    {selectedGroupFairnessMetric === "Equalized Odds" && <ImageSection selectedGroupFairnessMetric={selectedGroupFairnessMetric} />}
                    {selectedGroupFairnessMetric === "Outcome Test" && <ImageSection selectedGroupFairnessMetric={selectedGroupFairnessMetric} />}
                    {selectedGroupFairnessMetric === "Conditional Statistical Parity" && <ConditionalStatisticalParitySection />}
                    
            </Box>
            
              
             
     
      </Box>
  );
}