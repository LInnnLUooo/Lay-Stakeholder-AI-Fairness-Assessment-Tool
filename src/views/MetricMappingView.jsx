import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import theme from '../theme/theme';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

// import group fairness exploration for these 20 features
import GroupFairnessExplorationOverall from '../groupFairnessExploration/GroupFairnessExplorationOverall';
import DurationGroupFairnessExploration from '../groupFairnessExploration/DurationGroupFairnessExploration';
import CreditAmountGroupFairnessExploration from '../groupFairnessExploration/CreditAmountGroupFairnessExploration';
import InstallmentRateGroupFairnessExploration from '../groupFairnessExploration/InstallmentRateGroupFairnessExploration';
import ResidenceLengthGroupFairnessExploration from '../groupFairnessExploration/ResidenceLengthGroupFairnessExploration';
import ExistingCreditsGroupFairnessExploration from '../groupFairnessExploration/ExistingCreditsGroupFairnessExploration';
import DependentsGroupFairnessExploration from '../groupFairnessExploration/DependentsGroupFairnessExploration';
import AgeGroupFairnessExploration from '../groupFairnessExploration/AgeGroupFairnessExploration';
import GenderGroupFairnessExploration from '../groupFairnessExploration/GenderGroupFairnessExploration';
import CheckingAccountGroupFairnessExploration from '../groupFairnessExploration/CheckingAccountGroupFairnessExploration';
import CreditHistoryGroupFairnessExploration from '../groupFairnessExploration/CreditHistoryGroupFairnessExploration';
import PurposeGroupFairnessExploration from '../groupFairnessExploration/PurposeGroupFairnessExploration';
import SavingsGroupFairnessExploration from '../groupFairnessExploration/SavingsGroupFairnessExploration';
import EmploymentGroupFairnessExploration from '../groupFairnessExploration/EmploymentGroupFairnessExploration';
import DebtorsGroupFairnessExploration from '../groupFairnessExploration/DebtorsGroupFairnessExploration';
import PropertyGroupFairnessExploration from '../groupFairnessExploration/PropertyGroupFairnessExploration';
import InstallmentPlansGroupFairnessExploration from '../groupFairnessExploration/InstallmentPlansGroupFairnessExploration';
import HousingGroupFairnessExploration from '../groupFairnessExploration/HousingGroupFairnessExploration';
import JobGroupFairnessExploration from '../groupFairnessExploration/JobGroupFairnessExploration';
import TelephoneGroupFairnessExploration from '../groupFairnessExploration/TelephoneGroupFairnessExploration';
import ForeignWorkerGroupFairnessExploration from '../groupFairnessExploration/ForeignWorkerGroupFairnessExploration';

import IndividualFairnessMetricsOverall from '../individualFairnessExploration/IndividualFairnessMetricsOverall';

import { styled } from '@mui/system';
const Image = styled('img')({
    width: '25px', // 根据需要调整图像大小
    height: '25px',
    verticalAlign: 'middle', // 确保图像与文本对齐
    marginRight: '6px', // 调整图像与文本之间的间距
  });
const MetricMappingView = ({ rankedSelection, selectedID, handleItemClick }) => {
    const completeFeatureList = [
        'Duration', 'Credit Amount', 'Installment Rate', 'Residence Length', 'Existing Credits', 
        'Dependents', 'Age', 'Gender', 'Checking Account', 'Credit History',
        'Purpose', 'Savings', 'Employment', 'Debtors', 'Property', 'Installment Plans', 
        'Housing', 'Job', 'Telephone', 'Foreign Worker'
      ];
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [feature, setFeature] = React.useState('');

    const handleFeatureChange = (event) => {
    setFeature(event.target.value);
    };

    // 初始化一个对象来保存每个特征对应的输入值
    const [metrics, setMetrics] = useState({});

    // 处理输入框变化
    // const handleInputChange = (featureId, event) => {
    //     const { value } = event.target;
    //     setMetrics((prevMetrics) => ({
    //         ...prevMetrics,
    //         [featureId]: value,
    //     }));
    // };

    const handleInputChange = (featureId, event) => {
        const { value } = event.target;
        setMetrics((prevMetrics) => ({
            ...prevMetrics,
            [featureId]: value,
        }));
    };

    const options = [
        "Demographic Parity", 
        "Equal Opportunity", 
        "Predictive Equality", 
        "Equalized Odds", 
        "Outcome Test", 
        "Conditional Statistical Parity", 
        "Counterfactual Fairness", 
        "Consistency", 
        "Custom Fairness"
    ];
    

    // 处理confirm mapping button,进入Fairness trade off 这个功能页面：
    const navigate = useNavigate();
    // MetricMappingView.jsx
    // const handleMappingConfirm = () => {
    //     const selectedFeaturesWithMetrics = rankedSelection.map((feature) => ({
    //         ...feature,
    //         metric: metrics[feature.id] || ''
    //     }));
    //     navigate('/FairnessTradeOffView', { state: { selectedFeaturesWithMetrics } });
    // };
    const handleMappingConfirm = () => {
        const selectedFeaturesWithMetrics = rankedSelection.map((feature) => ({
            ...feature,
            metric: metrics[feature.id] || ''
        }));
        navigate('/FairnessTradeOffView', { state: { selectedFeaturesWithMetrics } });
    };
    

    // 定义特征名称和对应组件的映射
    const featureComponents = {
        'Duration': <DurationGroupFairnessExploration />,
        'Credit Amount': <CreditAmountGroupFairnessExploration />,
        'Installment Rate': <InstallmentRateGroupFairnessExploration />,
        'Residence Length': <ResidenceLengthGroupFairnessExploration />,
        'Existing Credits': <ExistingCreditsGroupFairnessExploration />,
        'Dependents': <DependentsGroupFairnessExploration />,
        'Age': <AgeGroupFairnessExploration />,
        'Gender': <GenderGroupFairnessExploration />,
        'Checking Account': <CheckingAccountGroupFairnessExploration />,
        'Credit History': <CreditHistoryGroupFairnessExploration />,
        'Purpose': <PurposeGroupFairnessExploration />,
        'Savings': <SavingsGroupFairnessExploration />,
        'Employment': <EmploymentGroupFairnessExploration />,
        'Debtors': <DebtorsGroupFairnessExploration />,
        'Property': <PropertyGroupFairnessExploration />,
        'Installment Plans': <InstallmentPlansGroupFairnessExploration />,
        'Housing': <HousingGroupFairnessExploration />,
        'Job': <JobGroupFairnessExploration />,
        'Telephone': <TelephoneGroupFairnessExploration />,
        'Foreign Worker': <ForeignWorkerGroupFairnessExploration />
    };

    return (
    <Box display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center">
        <Box mb={theme.spacing(1)} display="flex" justifyContent="center"  width='100%' >
            <Box flex={3}  marginRight = "3px" > 
                <Box 
                            display="flex" 
                            flexDirection="column" 
                            alignItems="center"
                            boxShadow="0px 4px 12px #7986cb" 
                            borderRadius="8px"
                            padding="6px"
                            margin='6px'
                        >
                            {/* 1. Header: Overall Fairness results (group,subgroup,individuals)*/}
                    <Typography variant="h4" component="div" gutterBottom color="primary" sx={{ fontWeight: 'bold'}}>
                    Metric Exploration
                    </Typography>

                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Group Fairness" value="1" sx={{ fontSize: '1.5rem', fontWeight: 'bold'}}/>
                            <Tab label="Individual Fairness" value="2"
                            sx={{ fontSize: '1.5rem', fontWeight: 'bold'}} />
                            
                        </TabList>
                        </Box>

                        {/* tab1: Group fairness exploration here */}   
                        <TabPanel value="1">                    
                            <Box display="flex" flexDirection="column" alignItems="left">
                            {/* 1.1 feature selector */}
                            <Box >
                                <FormControl sx={{ m: 1, width: 300 }}>
                                    <InputLabel id="demo-simple-select-label"> Feature</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={feature}
                                    label="Feature"
                                    onChange={handleFeatureChange}
                                    >
                                    {rankedSelection.map((feature, index) => (
                                        <MenuItem key={index} value={feature.name}>
                                        {feature.rank}. {feature.name}
                                        </MenuItem>
                                    ))}
                                    {/* 下面是增加全部feature的: */}
                                    {/* {completeFeatureList.filter(f => !rankedSelection.some(rf => rf.name === f)).map((feature, index) => (
                                        <MenuItem key={rankedSelection.length + index} value={feature}>
                                        {rankedSelection.length + index + 1}. {feature}
                                        </MenuItem>
                                    ))} */}
                                    </Select>
                                </FormControl>
                             </Box>

                             {/* 1.2 feature-specific component rendering */}
                             {feature && featureComponents[feature]}
                             
                             
                            </Box>
                        </TabPanel>

                        <TabPanel value="2">
                            <IndividualFairnessMetricsOverall/>
                        </TabPanel>

                        
                        
                    </TabContext>
                </Box>
            </Box>

            <Box flex={1}  marginRight = "3px" > 
                <Box 
                        display="flex" 
                        flexDirection="column" 
                        alignItems="center"
                        minWidth="50dx"
                        boxShadow="0px 4px 12px #7986cb" 
                        borderRadius="8px"
                        padding="6px"
                        margin='6px'
                    >
                        <Typography variant="h4" component="div" gutterBottom color="primary" sx={{ fontWeight: 'bold'}}>
                        Map Feature & Metric
                        </Typography>
                        <Typography
                        variant="body1"
                        component="div"
                        gutterBottom
                        color="#000000"
                        sx={{
                            fontSize: '20pt', // 放大字体 // 字体加粗
                            lineHeight: 1.6, // 增加行高
                            textShadow: '1px 1px 2px rgba(0,0,0,0.1)', // 添加阴影
                            margin: '10px'
                        }}
                            >
                                <Image src='/Red_exclaim.png' alt="Info Icon" />
                         Please determine how you would like to audit the fairness of each feature. You can select from the existing fairness definitions on the left or create your own custom fairness definition. 
                        </Typography>
                        <Typography variant="h6" component="div" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
                            Your Selected Features and Ranking
                        </Typography>

                        <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
                            {rankedSelection.map((feature) => (
                                <ListItem key={feature.id} sx={{ display: 'flex', alignItems: 'center' }}>
                                    <ListItemText
                                        primary={`${feature.rank}. ${feature.name}`}
                                        primaryTypographyProps={{ sx: { fontSize: '1.5rem' } }}
                                    />
                                    {/* <TextField
                                        label="Metric"
                                        variant="outlined"
                                        size="small"
                                        value={metrics[feature.id] || ''}
                                        onChange={(event) => handleInputChange(feature.id, event)}
                                        sx={{ ml: 2 }} // 添加一些左边距以分隔输入框和文本
                                    /> */}

<Select
                    labelId={`select-label-${feature.id}`}
                    id={`select-${feature.id}`}
                    value={metrics[feature.id] || ''}
                    onChange={(event) => handleInputChange(feature.id, event)}
                    label="Metric"
                    size="small"
                    sx={{ width: '250px' }}
                >
                    {options.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>



                                </ListItem>
                            ))}
                        </List>
                
                </Box>

            </Box>
        </Box>

        <Box flexDirection="row" margin = "20px">
            {/* <Button
                    style={{ fontSize: '25px' }}
                    variant="contained"
                    size="small"
                    sx={{ marginRight: '25px' }}
                >
                    Back
            </Button> */}
            <Button
                    style={{ fontSize: '25px' }}
                    variant="contained"
                    size="small"
                    sx={{ marginLeft: '25px' }}
                    onClick={handleMappingConfirm}
                >
                    Confirm Feature & Metric Mapping
            </Button>
        </Box>
    </Box>
        


    );

}

export default MetricMappingView;
