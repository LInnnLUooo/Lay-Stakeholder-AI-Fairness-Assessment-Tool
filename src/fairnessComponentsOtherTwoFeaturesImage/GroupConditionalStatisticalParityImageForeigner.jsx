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

import * as dataG from '../data/foreignergroups.js';

// import & set: images + group data 
const femaleImage = '/foreigner.png';// The common image source for 'female'，注意斜杠一定不可以少。有了斜杠，无论路由路径如何变化，都会从绝对路径加载找到图片。否则切换路由使用相对路径，容易找不到。
const maleImage = '/local.png'; 

//1.1 Job & Female
const group_predGood_jobMangagement_female = dataG.group_predGood_jobMangagement_female_IDs.map((id) => ({
  source: femaleImage,
  id: id,
}));  

const group_predBad_jobMangagement_female = dataG.group_predBad_jobMangagement_female_IDs.map((id) => ({
  source: femaleImage,
  id: id,
}));  

const group_predGood_jobSkilled_female = dataG.group_predGood_jobSkilled_female_IDs.map((id) => ({
  source: femaleImage,
  id: id,
}));  

const group_predBad_jobSkilled_female = dataG.group_predBad_jobSkilled_female_IDs.map((id) => ({
  source: femaleImage,
  id: id,
}));  

const group_predGood_jobUnskilled_female = dataG.group_predGood_jobUnskilled_female_IDs.map((id) => ({
  source: femaleImage,
  id: id,
}));  

const group_predBad_jobUnskilled_female = dataG.group_predBad_jobUnskilled_female_IDs.map((id) => ({
  source: femaleImage,
  id: id,
})); 

// female 总数：
const totalFemale = 
    group_predGood_jobMangagement_female.length +
    group_predBad_jobMangagement_female.length +
    group_predGood_jobSkilled_female.length +
    group_predBad_jobSkilled_female.length +
    group_predGood_jobUnskilled_female.length +
    group_predBad_jobUnskilled_female.length;


//1.2 Job & Male
const group_predGood_jobMangagement_male = dataG.group_predGood_jobMangagement_male_IDs.map((id) => ({
  source: maleImage,
  id: id,
}));  

const group_predBad_jobMangagement_male = dataG.group_predBad_jobMangagement_male_IDs.map((id) => ({
  source: maleImage,
  id: id,
}));  

const group_predGood_jobSkilled_male = dataG.group_predGood_jobSkilled_male_IDs.map((id) => ({
  source: maleImage,
  id: id,
}));  

const group_predBad_jobSkilled_male = dataG.group_predBad_jobSkilled_male_IDs.map((id) => ({
  source: maleImage,
  id: id,
}));  

const group_predGood_jobUnskilled_male = dataG.group_predGood_jobUnskilled_male_IDs.map((id) => ({
  source: maleImage,
  id: id,
}));  

const group_predBad_jobUnskilled_male = dataG.group_predBad_jobUnskilled_male_IDs.map((id) => ({
  source: maleImage,
  id: id,
})); 

// male 总数：
const totalMale = 
    group_predGood_jobMangagement_male.length +
    group_predBad_jobMangagement_male.length +
    group_predGood_jobSkilled_male.length +
    group_predBad_jobSkilled_male.length +
    group_predGood_jobUnskilled_male.length +
    group_predBad_jobUnskilled_male.length;

//2.1 Savings: female
const group_predGood_savingsUnknown_female = dataG.group_predGood_savingsUnknown_female_IDs.map((id) => ({
  source: femaleImage,
  id: id,
}));  

const group_predBad_savingsUnknown_female = dataG.group_predBad_savingsUnknown_female_IDs.map((id) => ({
  source: femaleImage,
  id: id,
}));  

const group_predGood_savingsMedium_female = dataG.group_predGood_savingsMedium_female_IDs.map((id) => ({
  source: femaleImage,
  id: id,
}));  

const group_predBad_savingsMedium_female = dataG.group_predBad_savingsMedium_female_IDs.map((id) => ({
  source: femaleImage,
  id: id,
}));  

const group_predGood_savingsHigh_female = dataG.group_predGood_savingsHigh_female_IDs.map((id) => ({
  source: femaleImage,
  id: id,
}));  

const group_predBad_savingsHigh_female = dataG.group_predBad_savingsHigh_female_IDs.map((id) => ({
  source: femaleImage,
  id: id,
})); 

const totalFemaleSavings = 
    group_predGood_savingsUnknown_female.length +
    group_predBad_savingsUnknown_female.length +
    group_predGood_savingsMedium_female.length +
    group_predBad_savingsMedium_female.length +
    group_predGood_savingsHigh_female.length +
    group_predBad_savingsHigh_female.length;

//2.2 Savings: male
const group_predGood_savingsUnknown_male = dataG.group_predGood_savingsUnknown_male_IDs.map((id) => ({
  source: maleImage,
  id: id,
}));  

const group_predBad_savingsUnknown_male = dataG.group_predBad_savingsUnknown_male_IDs.map((id) => ({
  source: maleImage,
  id: id,
}));  

const group_predGood_savingsMedium_male = dataG.group_predGood_savingsMedium_male_IDs.map((id) => ({
  source: maleImage,
  id: id,
}));  

const group_predBad_savingsMedium_male = dataG.group_predBad_savingsMedium_male_IDs.map((id) => ({
  source: maleImage,
  id: id,
}));  

const group_predGood_savingsHigh_male = dataG.group_predGood_savingsHigh_male_IDs.map((id) => ({
  source: maleImage,
  id: id,
}));  

const group_predBad_savingsHigh_male = dataG.group_predBad_savingsHigh_male_IDs.map((id) => ({
  source: maleImage,
  id: id,
})); 

const totalMaleSavings = 
    group_predGood_savingsUnknown_male.length +
    group_predBad_savingsUnknown_male.length +
    group_predGood_savingsMedium_male.length +
    group_predBad_savingsMedium_male.length +
    group_predGood_savingsHigh_male.length +
    group_predBad_savingsHigh_male.length;

//3.1 employment Female
const group_predGood_employmentUnemployed_female = dataG.group_predGood_employmentUnemployed_female_IDs.map((id) => ({
  source: femaleImage,
  id: id,
}));  

const group_predBad_employmentUnemployed_female = dataG.group_predBad_employmentUnemployed_female_IDs.map((id) => ({
  source: femaleImage,
  id: id,
}));  

const group_predGood_employmentMedium_female = dataG.group_predGood_employmentMedium_female_IDs.map((id) => ({
  source: femaleImage,
  id: id,
}));  

const group_predBad_employmentMedium_female = dataG.group_predBad_employmentMedium_female_IDs.map((id) => ({
  source: femaleImage,
  id: id,
}));  

const group_predGood_employmentHigh_female = dataG.group_predGood_employmentHigh_female_IDs.map((id) => ({
  source: femaleImage,
  id: id,
}));  

const group_predBad_employmentHigh_female = dataG.group_predBad_employmentHigh_female_IDs.map((id) => ({
  source: femaleImage,
  id: id,
})); 

const totalFemaleEmployment = 
    group_predGood_employmentUnemployed_female.length +
    group_predBad_employmentUnemployed_female.length +
    group_predGood_employmentMedium_female.length +
    group_predBad_employmentMedium_female.length +
    group_predGood_employmentHigh_female.length +
    group_predBad_employmentHigh_female.length;

//3.2 employment Male
const group_predGood_employmentUnemployed_male = dataG.group_predGood_employmentUnemployed_male_IDs.map((id) => ({
  source: maleImage,
  id: id,
}));  

const group_predBad_employmentUnemployed_male = dataG.group_predBad_employmentUnemployed_male_IDs.map((id) => ({
  source: maleImage,
  id: id,
}));  

const group_predGood_employmentMedium_male = dataG.group_predGood_employmentMedium_male_IDs.map((id) => ({
  source: maleImage,
  id: id,
}));  

const group_predBad_employmentMedium_male = dataG.group_predBad_employmentMedium_male_IDs.map((id) => ({
  source: maleImage,
  id: id,
}));  

const group_predGood_employmentHigh_male = dataG.group_predGood_employmentHigh_male_IDs.map((id) => ({
  source: maleImage,
  id: id,
}));  

const group_predBad_employmentHigh_male = dataG.group_predBad_employmentHigh_male_IDs.map((id) => ({
  source: maleImage,
  id: id,
})); 

const totalMaleEmployment = 
    group_predGood_employmentUnemployed_male.length +
    group_predBad_employmentUnemployed_male.length +
    group_predGood_employmentMedium_male.length +
    group_predBad_employmentMedium_male.length +
    group_predGood_employmentHigh_male.length +
    group_predBad_employmentHigh_male.length;

//4.1 creditHistory Female
const group_predGood_creditHistoryPaid_female = dataG.group_predGood_creditHistoryPaid_female_IDs.map((id) => ({
  source: femaleImage,
  id: id,
}));  

const group_predBad_creditHistoryPaid_female = dataG.group_predBad_creditHistoryPaid_female_IDs.map((id) => ({
  source: femaleImage,
  id: id,
}));  

const group_predGood_creditHistoryDelayed_female = dataG.group_predGood_creditHistoryDelayed_female_IDs.map((id) => ({
  source: femaleImage,
  id: id,
}));  

const group_predBad_creditHistoryDelayed_female = dataG.group_predBad_creditHistoryDelayed_female_IDs.map((id) => ({
  source: femaleImage,
  id: id,
}));  

const group_predGood_creditHistoryOthers_female = dataG.group_predGood_creditHistoryOthers_female_IDs.map((id) => ({
  source: femaleImage,
  id: id,
}));  

const group_predBad_creditHistoryOthers_female = dataG.group_predBad_creditHistoryOthers_female_IDs.map((id) => ({
  source: femaleImage,
  id: id,
})); 

const totalFemaleCH = 
    group_predGood_creditHistoryPaid_female.length +
    group_predBad_creditHistoryPaid_female.length +
    group_predGood_creditHistoryDelayed_female.length +
    group_predBad_creditHistoryDelayed_female.length +
    group_predGood_creditHistoryOthers_female.length +
    group_predBad_creditHistoryOthers_female.length;

//4.2 creditHistory male
const group_predGood_creditHistoryPaid_male = dataG.group_predGood_creditHistoryPaid_male_IDs.map((id) => ({
  source: maleImage,
  id: id,
}));  

const group_predBad_creditHistoryPaid_male = dataG.group_predBad_creditHistoryPaid_male_IDs.map((id) => ({
  source: maleImage,
  id: id,
}));  

const group_predGood_creditHistoryDelayed_male = dataG.group_predGood_creditHistoryDelayed_male_IDs.map((id) => ({
  source: maleImage,
  id: id,
}));  

const group_predBad_creditHistoryDelayed_male = dataG.group_predBad_creditHistoryDelayed_male_IDs.map((id) => ({
  source: maleImage,
  id: id,
}));  

const group_predGood_creditHistoryOthers_male = dataG.group_predGood_creditHistoryOthers_male_IDs.map((id) => ({
  source: maleImage,
  id: id,
}));  

const group_predBad_creditHistoryOthers_male = dataG.group_predBad_creditHistoryOthers_male_IDs.map((id) => ({
  source: maleImage,
  id: id,
})); 

const totalMaleCH = 
    group_predGood_creditHistoryPaid_male.length +
    group_predBad_creditHistoryPaid_male.length +
    group_predGood_creditHistoryDelayed_male.length +
    group_predBad_creditHistoryDelayed_male.length +
    group_predGood_creditHistoryOthers_male.length +
    group_predBad_creditHistoryOthers_male.length;

//CSP——condition:Job Image explanation component
function JobGender({ selectedID, handleItemClick }){
  const theme = useTheme(); 

  return (
    <Box display="flex" 
    justifyContent="center" 
    padding="3px">
          <Box display="flex" flexDirection="column" alignItems="center" 
          
          borderRight={`4px solid ${theme.palette.primary.main}`}> 
                  {/* 2.1.1 female title*/}
                 
                  <Typography variant="h5" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      {/* //border: `4px solid ${theme.palette.primary.main}` */}
                      Foreign Worker
                  </Typography>

                  <Typography variant="h6" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      {/* //border: `4px solid ${theme.palette.primary.main}` */}
                      (Total: {totalFemale})
                  </Typography>
                  

                  {/* 2.1.2 female GOOD predictions*/}
                  <Box display="flex" flexDirection="column" alignItems="center"
                    padding="3px"
                    margin="5px"
                    sx={{
                      border: '4px dashed #18C82A'  // 设置为绿色的虚线边框
                    }}>

                        {/* (1)title： Good Predictions*/}
                        <Typography variant="h6" component="div" gutterBottom color='#18C82A'
                          sx={{ fontWeight: 'bold'}}>
                            Predicted as GOOD Credit
                        </Typography>

                        {/* (2)instances: Good Predictions*/}
                        <Box display="flex" justifyContent="center" padding="3px" >          
                  
                            {/* (2.1)instances：Good Predictions， job condition 1*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding="6px" marginRight = "3px" alignItems="center"  backgroundColor="#D3EFFE" sx={{ border: '2px solid #18C82A' }}>
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                    Management/Officer: <br/>{group_predGood_jobMangagement_female.length}
                                  </Typography> 
                                  <ImageList sx={{ width: 300,height: 420}} cols={5} rowHeight={50}>
                                            {group_predGood_jobMangagement_female.map((item) => (
                                              <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                                <img
                                                  src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                  srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                  alt={item.id}
                                                  loading="lazy"
                                                />

                                                <ImageListItemBar title={item.id} 
                                                  position="below"  // 将标题放在图片的下方
                                                  sx={{
                                                    '& .MuiImageListItemBar-titleWrap': {
                                                      paddingTop: 0,  
                                                      paddingBottom: 0,  
                                                    },

                                                    '& .MuiImageListItemBar-title': {
                                                         
                                                        textAlign: 'center' ,
                                                        color: '#3DC852',//green
                                                    }
                                                  }} />

                                              </ImageListItem>
                                            ))}
                                          </ImageList>
                            </Box>

                            {/* (2.1)instances：Good Predictions， job condition 2*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center" backgroundColor="#F9FCA4" sx={{ border: '2px solid #18C82A' }}>            
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                          Skilled:<br/> {group_predGood_jobSkilled_female.length}
                                  </Typography> 
                                  
                                  <ImageList sx={{ width: 400,height: 750}} cols={10} rowHeight={50}>
                                      {group_predGood_jobSkilled_female.map((item) => (
                                        <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                          <img
                                            src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                            srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.id}
                                            loading="lazy"
                                          />

                                          <ImageListItemBar title={item.id} 
                                            position="below"  // 将标题放在图片的下方
                                            sx={{
                                              '& .MuiImageListItemBar-titleWrap': {
                                                paddingTop: 0,  
                                                paddingBottom: 0,  
                                              },

                                              '& .MuiImageListItemBar-title': {
                                                   
                                                  textAlign: 'center' ,
                                                  color: '#3DC852',//green
                                              }
                                            }} />

                                        </ImageListItem>
                                      ))}
                                    </ImageList>
                            </Box>

                            {/* (2.1)instances：Good Predictions， job condition 3*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center" backgroundColor="#FFDEBB" sx={{ border: '2px solid #18C82A' }}>            
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                      Unskilled/Unemployed:<br/> {group_predGood_jobUnskilled_female.length}
                                  </Typography> 
                                  
                                  <ImageList sx={{ width: 300,height: 680}} cols={5} rowHeight={50}>
                                      {group_predGood_jobUnskilled_female.map((item) => (
                                        <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                          <img
                                            src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                            srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.id}
                                            loading="lazy"
                                          />

                                          <ImageListItemBar title={item.id} 
                                            position="below"  // 将标题放在图片的下方
                                            sx={{
                                              '& .MuiImageListItemBar-titleWrap': {
                                                paddingTop: 0,  
                                                paddingBottom: 0,  
                                              },

                                              '& .MuiImageListItemBar-title': {
                                                   
                                                  textAlign: 'center' ,
                                                  color: '#3DC852',//green
                                              }
                                            }} />

                                        </ImageListItem>
                                      ))}
                                    </ImageList>
                            </Box>


                        </Box>
                  </Box>

                  {/* 2.1.3 female BAD predictions*/}
                  <Box display="flex" flexDirection="column" alignItems="center"
                    padding="3px"
                    margin="5px"
                    //width = {450}
                    sx={{
                      border: '4px dashed #E75555'  // 设置为红色的虚线边框
                    }}>

                        {/* (1)title： BAD Predictions*/}
                        <Typography variant="h6" component="div" gutterBottom color='#E75555'
                          sx={{ fontWeight: 'bold'}}>
                            Predicted as BAD Credit
                        </Typography>

                        {/* (2)instances: BAD Predictions*/}
                        <Box display="flex" justifyContent="center"  padding="3px" >          
                  
                            {/* (2.1)instances：Bad Predictions， job condition 1*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center"  backgroundColor="#EEF9FC" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                Management/Officer: <br/>{group_predBad_jobMangagement_female.length}
                                </Typography> 
                                
                                <ImageList sx={{ width: 300,height: 300}} cols={5} rowHeight={50}>
                                          {group_predBad_jobMangagement_female.map((item) => (
                                            <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                              <img
                                                src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.id}
                                                loading="lazy"
                                              />

                                              <ImageListItemBar title={item.id} 
                                                position="below"  // 将标题放在图片的下方
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',//RED
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>

                            {/* (2.1)instances：Bad Predictions， job condition 2*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" backgroundColor="#FDFDEB" alignItems="center" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                      Skilled:<br/> {group_predBad_jobSkilled_female.length}
                                </Typography> 
                                
                                <ImageList sx={{ width: 400,height: 330}} cols={5} rowHeight={50}>
                                          {group_predBad_jobSkilled_female.map((item) => (
                                            <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                              <img
                                                src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.id}
                                                loading="lazy"
                                              />

                                              <ImageListItemBar title={item.id} 
                                                position="below"  // 将标题放在图片的下方
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',//green
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>

                            {/* (2.1)instances：Bad Predictions， job condition 3*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px"  alignItems="center" backgroundColor="#FDF5ED" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                    Unskilled/Unemployed:<br/>{group_predBad_jobUnskilled_female.length}
                                </Typography> 
                                
                                <ImageList sx={{ width: 300,height: 180}} cols={5} rowHeight={50}>
                                          {group_predBad_jobUnskilled_female.map((item) => (
                                            <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                              <img
                                                src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.id}
                                                loading="lazy"
                                              />

                                              <ImageListItemBar title={item.id} 
                                                position="below"  // 将标题放在图片的下方
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',//green
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>


                        </Box>
                  </Box>
              </Box>

          <Box display="flex" flexDirection="column" alignItems="center" 
          
          //borderRight={`4px solid ${theme.palette.primary.main}`}
          > 
                  {/* 2.1.1 female title*/}
                 
                  <Typography variant="h5" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      {/* //border: `4px solid ${theme.palette.primary.main}` */}
                      Local
                  </Typography>

                  <Typography variant="h6" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      {/* //border: `4px solid ${theme.palette.primary.main}` */}
                      (Total: {totalMale})
                  </Typography>
                  

                  {/* 2.1.2 male GOOD predictions*/}
                  <Box display="flex" flexDirection="column" alignItems="center"
                    padding="3px"
                    margin="5px"
                    //width = {450}
                    sx={{
                      border: '4px dashed #18C82A'  // 设置为绿色的虚线边框
                    }}>

                        {/* (1)title： Good Predictions*/}
                        <Typography variant="h6" component="div" gutterBottom color='#18C82A'
                          sx={{ fontWeight: 'bold'}}>
                            Predicted as GOOD Credit
                        </Typography>

                        {/* (2)instances: Good Predictions*/}
                        <Box display="flex" justifyContent="center" padding="3px" >          
                  
                            {/* (2.1)instances：Good Predictions， job condition 1*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding="6px" marginRight = "3px" alignItems="center"  backgroundColor="#D3EFFE" sx={{ border: '2px solid #18C82A' }}>
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                    Management/Officer: <br/>{group_predGood_jobMangagement_male.length}
                                  </Typography> 
                                  <ImageList sx={{ width: 300,height: 750}} cols={5} rowHeight={50}>
                                            {group_predGood_jobMangagement_male.map((item) => (
                                              <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                                <img
                                                  src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                  srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                  alt={item.id}
                                                  loading="lazy"
                                                />

                                                <ImageListItemBar title={item.id} 
                                                  position="below"  // 将标题放在图片的下方
                                                  sx={{
                                                    '& .MuiImageListItemBar-titleWrap': {
                                                      paddingTop: 0,  
                                                      paddingBottom: 0,  
                                                    },

                                                    '& .MuiImageListItemBar-title': {
                                                         
                                                        textAlign: 'center' ,
                                                        color: '#3DC852',//green
                                                    }
                                                  }} />

                                              </ImageListItem>
                                            ))}
                                          </ImageList>
                            </Box>

                            {/* (2.1)instances：Good Predictions， job condition 2*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center" backgroundColor="#F9FCA4" sx={{ border: '2px solid #18C82A' }}>            
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                          Skilled:<br/> {group_predGood_jobSkilled_male.length}
                                  </Typography> 
                                  
                                  <ImageList sx={{ width: 300,height: 200}} cols={5} rowHeight={50}>
                                      {group_predGood_jobSkilled_male.map((item) => (
                                        <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                          <img
                                            src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                            srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.id}
                                            loading="lazy"
                                          />

                                          <ImageListItemBar title={item.id} 
                                            position="below"  // 将标题放在图片的下方
                                            sx={{
                                              '& .MuiImageListItemBar-titleWrap': {
                                                paddingTop: 0,  
                                                paddingBottom: 0,  
                                              },

                                              '& .MuiImageListItemBar-title': {
                                                   
                                                  textAlign: 'center' ,
                                                  color: '#3DC852',//green
                                              }
                                            }} />

                                        </ImageListItem>
                                      ))}
                                    </ImageList>
                            </Box>

                            {/* (2.1)instances：Good Predictions， job condition 3*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center" backgroundColor="#FFDEBB" sx={{ border: '2px solid #18C82A' }}>            
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                      Unskilled/Unemployed: <br/>{group_predGood_jobUnskilled_male.length}
                                  </Typography> 
                                  
                                  <ImageList sx={{ width: 300,height: 520}} cols={5} rowHeight={50}>
                                      {group_predGood_jobUnskilled_male.map((item) => (
                                        <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                          <img
                                            src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                            srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.id}
                                            loading="lazy"
                                          />

                                          <ImageListItemBar title={item.id} 
                                            position="below"  // 将标题放在图片的下方
                                            sx={{
                                              '& .MuiImageListItemBar-titleWrap': {
                                                paddingTop: 0,  
                                                paddingBottom: 0,  
                                              },

                                              '& .MuiImageListItemBar-title': {
                                                   
                                                  textAlign: 'center' ,
                                                  color: '#3DC852',//green
                                              }
                                            }} />

                                        </ImageListItem>
                                      ))}
                                    </ImageList>
                            </Box>


                        </Box>
                  </Box>

                  {/* 2.1.3 male BAD predictions*/}
                  <Box display="flex" flexDirection="column" alignItems="center"
                    padding="3px"
                    margin="5px"
                    //width = {450}
                    sx={{
                      border: '4px dashed #E75555'  // 设置为红色的虚线边框
                    }}>

                        {/* (1)title： BAD Predictions*/}
                        <Typography variant="h6" component="div" gutterBottom color='#E75555'
                          sx={{ fontWeight: 'bold'}}>
                            Predicted as BAD Credit
                        </Typography>

                        {/* (2)instances: BAD Predictions*/}
                        <Box display="flex" justifyContent="center"  padding="3px" >          
                  
                            {/* (2.1)instances：Bad Predictions， job condition 1*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center"  backgroundColor="#EEF9FC" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                Management/Officer: <br/>{group_predBad_jobMangagement_male.length}
                                </Typography> 
                                
                                <ImageList sx={{ width: 300,height: 330}} cols={5} rowHeight={50}>
                                          {group_predBad_jobMangagement_male.map((item) => (
                                            <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                              <img
                                                src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.id}
                                                loading="lazy"
                                              />

                                              <ImageListItemBar title={item.id} 
                                                position="below"  // 将标题放在图片的下方
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',//RED
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>

                            {/* (2.1)instances：Bad Predictions， job condition 2*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" backgroundColor="#FDFDEB" alignItems="center" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                      Skilled: <br/>{group_predBad_jobSkilled_male.length}
                                </Typography> 
                                
                                <ImageList sx={{ width: 330,height: 200}} cols={5} rowHeight={50}>
                                          {group_predBad_jobSkilled_male.map((item) => (
                                            <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                              <img
                                                src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.id}
                                                loading="lazy"
                                              />

                                              <ImageListItemBar title={item.id} 
                                                position="below"  // 将标题放在图片的下方
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',//green
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>

                            {/* (2.1)instances：Bad Predictions， job condition 3*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px"  backgroundColor="#FDF5ED"alignItems="center" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                    Unskilled/Unemployed: <br/>{group_predBad_jobUnskilled_male.length}
                                </Typography> 
                                
                                <ImageList sx={{ width: 300,height: 300}} cols={5} rowHeight={50}>
                                          {group_predBad_jobUnskilled_male.map((item) => (
                                            <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                              <img
                                                src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.id}
                                                loading="lazy"
                                              />

                                              <ImageListItemBar title={item.id} 
                                                position="below"  // 将标题放在图片的下方
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',//green
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>


                        </Box>
                  </Box>
              </Box>    

      </Box>
    );
}

//CSP——condition:Savings
function SavingsGender({ selectedID, handleItemClick }){
  const theme = useTheme(); 

  return (
    <Box display="flex" 
    justifyContent="center" 
    padding="3px"
    width='2000px'
    >
          <Box display="flex" flexDirection="column" alignItems="center" 
          
          borderRight={`4px solid ${theme.palette.primary.main}`}> 
                  {/* 2.1.1 female title*/}
                 
                  <Typography variant="h5" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      {/* //border: `4px solid ${theme.palette.primary.main}` */}
                      Foreign Worker
                  </Typography>

                  <Typography variant="h6" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      {/* //border: `4px solid ${theme.palette.primary.main}` */}
                      (Total: {totalFemaleSavings})
                  </Typography>
                  

                  {/* 2.1.2 female GOOD predictions*/}
                  <Box display="flex" flexDirection="column" alignItems="center"
                    padding="3px"
                    margin="5px"
                    //width = {450}
                    sx={{
                      border: '4px dashed #18C82A'  // 设置为绿色的虚线边框
                    }}>

                        {/* (1)title： Good Predictions*/}
                        <Typography variant="h6" component="div" gutterBottom color='#18C82A'
                          sx={{ fontWeight: 'bold'}}>
                            Predicted as GOOD Credit
                        </Typography>

                        {/* (2)instances: Good Predictions*/}
                        <Box display="flex" justifyContent="center" padding="3px" >          
                  
                            {/* (2.1)instances：Good Predictions， job condition 1*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding="6px" marginRight = "3px" alignItems="center"  backgroundColor="#D3EFFE" sx={{ border: '2px solid #18C82A' }}>
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                    {"<"}500DM/Unknown <br/>{group_predGood_savingsUnknown_female.length}
                                  </Typography> 
                                  <ImageList sx={{ width: 350,height: 900}} cols={10} rowHeight={50}>
                                            {group_predGood_savingsUnknown_female.map((item) => (
                                              <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                                <img
                                                  src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                  srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                  alt={item.id}
                                                  loading="lazy"
                                                />

                                                <ImageListItemBar title={item.id} 
                                                  position="below"  // 将标题放在图片的下方
                                                  sx={{
                                                    '& .MuiImageListItemBar-titleWrap': {
                                                      paddingTop: 0,  
                                                      paddingBottom: 0,  
                                                    },

                                                    '& .MuiImageListItemBar-title': {
                                                         
                                                        textAlign: 'center' ,
                                                        color: '#3DC852',//green
                                                    }
                                                  }} />

                                              </ImageListItem>
                                            ))}
                                          </ImageList>
                            </Box>

                            {/* (2.1)instances：Good Predictions， job condition 2*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center" backgroundColor="#F9FCA4" sx={{ border: '2px solid #18C82A' }}>            
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                  500-1000 DM:<br/> {group_predGood_savingsMedium_female.length}
                                  </Typography> 
                                  
                                  <ImageList sx={{ width: 300,height: 250}} cols={5} rowHeight={50}>
                                      {group_predGood_savingsMedium_female.map((item) => (
                                        <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                          <img
                                            src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                            srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.id}
                                            loading="lazy"
                                          />

                                          <ImageListItemBar title={item.id} 
                                            position="below"  // 将标题放在图片的下方
                                            sx={{
                                              '& .MuiImageListItemBar-titleWrap': {
                                                paddingTop: 0,  
                                                paddingBottom: 0,  
                                              },

                                              '& .MuiImageListItemBar-title': {
                                                   
                                                  textAlign: 'center' ,
                                                  color: '#3DC852',//green
                                              }
                                            }} />

                                        </ImageListItem>
                                      ))}
                                    </ImageList>
                            </Box>

                            {/* (2.1)instances：Good Predictions， job condition 3*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center" backgroundColor="#FFDEBB" sx={{ border: '2px solid #18C82A' }}>            
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                      {">="}1000DM:<br/> {group_predGood_savingsHigh_female.length}
                                  </Typography> 
                                  
                                  <ImageList sx={{ width: 300,height: 180}} cols={5} rowHeight={50}>
                                      {group_predGood_savingsHigh_female.map((item) => (
                                        <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                          <img
                                            src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                            srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.id}
                                            loading="lazy"
                                          />

                                          <ImageListItemBar title={item.id} 
                                            position="below"  // 将标题放在图片的下方
                                            sx={{
                                              '& .MuiImageListItemBar-titleWrap': {
                                                paddingTop: 0,  
                                                paddingBottom: 0,  
                                              },

                                              '& .MuiImageListItemBar-title': {
                                                   
                                                  textAlign: 'center' ,
                                                  color: '#3DC852',//green
                                              }
                                            }} />

                                        </ImageListItem>
                                      ))}
                                    </ImageList>
                            </Box>


                        </Box>
                  </Box>

                  {/* 2.1.3 female BAD predictions*/}
                  <Box display="flex" flexDirection="column" alignItems="center"
                    padding="3px"
                    margin="5px"
                    //width = {450}
                    sx={{
                      border: '4px dashed #E75555'  // 设置为红色的虚线边框
                    }}>

                        {/* (1)title： BAD Predictions*/}
                        <Typography variant="h6" component="div" gutterBottom color='#E75555'
                          sx={{ fontWeight: 'bold'}}>
                            Predicted as BAD Credit
                        </Typography>

                        {/* (2)instances: BAD Predictions*/}
                        <Box display="flex" justifyContent="center"  padding="3px" >          
                  
                            {/* (2.1)instances：Bad Predictions， job condition 1*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center"  backgroundColor="#EEF9FC" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                {"<"}500DM/Unknown <br/>{group_predBad_savingsUnknown_female.length}
                                </Typography> 
                                
                                <ImageList sx={{ width: 350,height: 380}} cols={5} rowHeight={50}>
                                          {group_predBad_savingsUnknown_female.map((item) => (
                                            <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                              <img
                                                src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.id}
                                                loading="lazy"
                                              />

                                              <ImageListItemBar title={item.id} 
                                                position="below"  // 将标题放在图片的下方
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',//RED
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>

                            {/* (2.1)instances：Bad Predictions， job condition 2*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" backgroundColor="#FDFDEB" alignItems="center" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                500-1000 DM:<br/> {group_predBad_savingsMedium_female.length}
                                </Typography> 
                                
                                <ImageList sx={{ width: 300,height: 300}} cols={5} rowHeight={50}>
                                          {group_predBad_savingsMedium_female.map((item) => (
                                            <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                              <img
                                                src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.id}
                                                loading="lazy"
                                              />

                                              <ImageListItemBar title={item.id} 
                                                position="below"  // 将标题放在图片的下方
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',//green
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>

                            {/* (2.1)instances：Bad Predictions， job condition 3*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px"  alignItems="center" backgroundColor="#FDF5ED" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                    {">="}1000DM:<br/>{group_predBad_savingsHigh_female.length}
                                </Typography> 
                                
                                <ImageList sx={{ width: 300,height: 300}} cols={5} rowHeight={50}>
                                          {group_predBad_savingsHigh_female.map((item) => (
                                            <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                              <img
                                                src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.id}
                                                loading="lazy"
                                              />

                                              <ImageListItemBar title={item.id} 
                                                position="below"  // 将标题放在图片的下方
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',//green
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>


                        </Box>
                  </Box>
              </Box>

          <Box display="flex" flexDirection="column" alignItems="center" 
          
          //borderRight={`4px solid ${theme.palette.primary.main}`}
          > 
                  {/* 2.1.1 female title*/}
                 
                  <Typography variant="h5" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      {/* //border: `4px solid ${theme.palette.primary.main}` */}
                      Local
                  </Typography>

                  <Typography variant="h6" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      {/* //border: `4px solid ${theme.palette.primary.main}` */}
                      (Total: {totalMaleSavings})
                  </Typography>
                  

                  {/* 2.1.2 male GOOD predictions*/}
                  <Box display="flex" flexDirection="column" alignItems="center"
                    padding="3px"
                    margin="5px"
                    //width = {450}
                    sx={{
                      border: '4px dashed #18C82A'  // 设置为绿色的虚线边框
                    }}>

                        {/* (1)title： Good Predictions*/}
                        <Typography variant="h6" component="div" gutterBottom color='#18C82A'
                          sx={{ fontWeight: 'bold'}}>
                            Predicted as GOOD Credit
                        </Typography>

                        {/* (2)instances: Good Predictions*/}
                        <Box display="flex" justifyContent="center" padding="3px" >          
                  
                            {/* (2.1)instances：Good Predictions， job condition 1*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding="6px" marginRight = "3px" alignItems="center"  backgroundColor="#D3EFFE" sx={{ border: '2px solid #18C82A' }}>
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                    {"<"}500DM/Unknown <br/>{group_predGood_savingsUnknown_male.length}
                                  </Typography> 
                                  <ImageList sx={{ width: 300,height: 180}} cols={5} rowHeight={50}>
                                            {group_predGood_savingsUnknown_male.map((item) => (
                                              <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                                <img
                                                  src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                  srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                  alt={item.id}
                                                  loading="lazy"
                                                />

                                                <ImageListItemBar title={item.id} 
                                                  position="below"  // 将标题放在图片的下方
                                                  sx={{
                                                    '& .MuiImageListItemBar-titleWrap': {
                                                      paddingTop: 0,  
                                                      paddingBottom: 0,  
                                                    },

                                                    '& .MuiImageListItemBar-title': {
                                                         
                                                        textAlign: 'center' ,
                                                        color: '#3DC852',//green
                                                    }
                                                  }} />

                                              </ImageListItem>
                                            ))}
                                          </ImageList>
                            </Box>

                            {/* (2.1)instances：Good Predictions， job condition 2*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center" backgroundColor="#F9FCA4" sx={{ border: '2px solid #18C82A' }}>            
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                          500-1000 DM:<br/> {group_predGood_savingsMedium_male.length}
                                  </Typography> 
                                  
                                  <ImageList sx={{ width: 300,height: 300}} cols={5} rowHeight={50}>
                                      {group_predGood_savingsMedium_male.map((item) => (
                                        <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                          <img
                                            src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                            srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.id}
                                            loading="lazy"
                                          />

                                          <ImageListItemBar title={item.id} 
                                            position="below"  // 将标题放在图片的下方
                                            sx={{
                                              '& .MuiImageListItemBar-titleWrap': {
                                                paddingTop: 0,  
                                                paddingBottom: 0,  
                                              },

                                              '& .MuiImageListItemBar-title': {
                                                   
                                                  textAlign: 'center' ,
                                                  color: '#3DC852',//green
                                              }
                                            }} />

                                        </ImageListItem>
                                      ))}
                                    </ImageList>
                            </Box>

                            {/* (2.1)instances：Good Predictions， job condition 3*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center" backgroundColor="#FFDEBB" sx={{ border: '2px solid #18C82A' }}>            
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                      {">="}1000DM: <br/>{group_predGood_savingsHigh_male.length}
                                  </Typography> 
                                  
                                  <ImageList sx={{ width: 300,height: 900}} cols={5} rowHeight={50}>
                                      {group_predGood_savingsHigh_male.map((item) => (
                                        <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                          <img
                                            src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                            srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.id}
                                            loading="lazy"
                                          />

                                          <ImageListItemBar title={item.id} 
                                            position="below"  // 将标题放在图片的下方
                                            sx={{
                                              '& .MuiImageListItemBar-titleWrap': {
                                                paddingTop: 0,  
                                                paddingBottom: 0,  
                                              },

                                              '& .MuiImageListItemBar-title': {
                                                   
                                                  textAlign: 'center' ,
                                                  color: '#3DC852',//green
                                              }
                                            }} />

                                        </ImageListItem>
                                      ))}
                                    </ImageList>
                            </Box>


                        </Box>
                  </Box>

                  {/* 2.1.3 male BAD predictions*/}
                  <Box display="flex" flexDirection="column" alignItems="center"
                    padding="3px"
                    margin="5px"
                    //width = {450}
                    sx={{
                      border: '4px dashed #E75555'  // 设置为红色的虚线边框
                    }}>

                        {/* (1)title： BAD Predictions*/}
                        <Typography variant="h6" component="div" gutterBottom color='#E75555'
                          sx={{ fontWeight: 'bold'}}>
                            Predicted as BAD Credit
                        </Typography>

                        {/* (2)instances: BAD Predictions*/}
                        <Box display="flex" justifyContent="center"  padding="3px" >          
                  
                            {/* (2.1)instances：Bad Predictions， job condition 1*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center"  backgroundColor="#EEF9FC" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                {"<"}500DM/Unknown <br/>{group_predBad_savingsUnknown_male.length}
                                </Typography> 
                                
                                <ImageList sx={{ width: 300,height: 380}} cols={5} rowHeight={50}>
                                          {group_predBad_savingsUnknown_male.map((item) => (
                                            <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                              <img
                                                src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.id}
                                                loading="lazy"
                                              />

                                              <ImageListItemBar title={item.id} 
                                                position="below"  // 将标题放在图片的下方
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',//RED
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>

                            {/* (2.1)instances：Bad Predictions， job condition 2*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" backgroundColor="#FDFDEB" alignItems="center" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                500-1000 DM: <br/>{group_predBad_savingsMedium_male.length}
                                </Typography> 
                                
                                <ImageList sx={{ width: 300,height: 300}} cols={5} rowHeight={50}>
                                          {group_predBad_savingsMedium_male.map((item) => (
                                            <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                              <img
                                                src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.id}
                                                loading="lazy"
                                              />

                                              <ImageListItemBar title={item.id} 
                                                position="below"  // 将标题放在图片的下方
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',//green
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>

                            {/* (2.1)instances：Bad Predictions， job condition 3*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px"  backgroundColor="#FDF5ED"alignItems="center" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                    {">="}1000DM: <br/>{group_predBad_savingsHigh_male.length}
                                </Typography> 
                                
                                <ImageList sx={{ width: 300,height: 300}} cols={5} rowHeight={50}>
                                          {group_predBad_savingsHigh_male.map((item) => (
                                            <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                              <img
                                                src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.id}
                                                loading="lazy"
                                              />

                                              <ImageListItemBar title={item.id} 
                                                position="below"  // 将标题放在图片的下方
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',//green
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>


                        </Box>
                  </Box>
              </Box>    

      </Box>
    );
}


//CSP——condition:employment Image explanation component
function EmploymentGender({ selectedID, handleItemClick }){
  const theme = useTheme(); 

  return (
    <Box display="flex" 
    justifyContent="center" 
    padding="3px">
          <Box display="flex" flexDirection="column" alignItems="center" 
          
          borderRight={`4px solid ${theme.palette.primary.main}`}> 
                  {/* 2.1.1 female title*/}
                 
                  <Typography variant="h5" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      {/* //border: `4px solid ${theme.palette.primary.main}` */}
                      Foreign Worker
                  </Typography>

                  <Typography variant="h6" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      {/* //border: `4px solid ${theme.palette.primary.main}` */}
                      (Total: {totalFemaleEmployment})
                  </Typography>
                  

                  {/* 2.1.2 female GOOD predictions*/}
                  <Box display="flex" flexDirection="column" alignItems="center"
                    padding="3px"
                    margin="5px"
                    //width = {450}
                    sx={{
                      border: '4px dashed #18C82A'  // 设置为绿色的虚线边框
                    }}>

                        {/* (1)title： Good Predictions*/}
                        <Typography variant="h6" component="div" gutterBottom color='#18C82A'
                          sx={{ fontWeight: 'bold'}}>
                            Predicted as GOOD Credit
                        </Typography>

                        {/* (2)instances: Good Predictions*/}
                        <Box display="flex" justifyContent="center" padding="3px" >          
                  
                            {/* (2.1)instances：Good Predictions， job condition 1*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding="6px" marginRight = "3px" alignItems="center"  backgroundColor="#D3EFFE" sx={{ border: '2px solid #18C82A' }}>
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                    Unemployed/{"<"}1 Year: <br/>{group_predGood_employmentUnemployed_female.length}
                                  </Typography> 
                                  <ImageList sx={{ width: 300,height: 600}} cols={5} rowHeight={50}>
                                            {group_predGood_employmentUnemployed_female.map((item) => (
                                              <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                                <img
                                                  src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                  srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                  alt={item.id}
                                                  loading="lazy"
                                                />

                                                <ImageListItemBar title={item.id} 
                                                  position="below"  // 将标题放在图片的下方
                                                  sx={{
                                                    '& .MuiImageListItemBar-titleWrap': {
                                                      paddingTop: 0,  
                                                      paddingBottom: 0,  
                                                    },

                                                    '& .MuiImageListItemBar-title': {
                                                         
                                                        textAlign: 'center' ,
                                                        color: '#3DC852',//green
                                                    }
                                                  }} />

                                              </ImageListItem>
                                            ))}
                                          </ImageList>
                            </Box>

                            {/* (2.1)instances：Good Predictions， job condition 2*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center" backgroundColor="#F9FCA4" sx={{ border: '2px solid #18C82A' }}>            
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                          1-4 Years:<br/> {group_predGood_employmentMedium_female.length}
                                  </Typography> 
                                  
                                  <ImageList sx={{ width: 280,height: 1000}} cols={5} rowHeight={50}>
                                      {group_predGood_employmentMedium_female.map((item) => (
                                        <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                          <img
                                            src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                            srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.id}
                                            loading="lazy"
                                          />

                                          <ImageListItemBar title={item.id} 
                                            position="below"  // 将标题放在图片的下方
                                            sx={{
                                              '& .MuiImageListItemBar-titleWrap': {
                                                paddingTop: 0,  
                                                paddingBottom: 0,  
                                              },

                                              '& .MuiImageListItemBar-title': {
                                                   
                                                  textAlign: 'center' ,
                                                  color: '#3DC852',//green
                                              }
                                            }} />

                                        </ImageListItem>
                                      ))}
                                    </ImageList>
                            </Box>

                            {/* (2.1)instances：Good Predictions， job condition 3*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center" backgroundColor="#FFDEBB" sx={{ border: '2px solid #18C82A' }}>            
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                      {">="}4 Years:<br/> {group_predGood_employmentHigh_female.length}
                                  </Typography> 
                                  
                                  <ImageList sx={{ width: 450,height: 600}} cols={10} rowHeight={50}>
                                      {group_predGood_employmentHigh_female.map((item) => (
                                        <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                          <img
                                            src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                            srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.id}
                                            loading="lazy"
                                          />

                                          <ImageListItemBar title={item.id} 
                                            position="below"  // 将标题放在图片的下方
                                            sx={{
                                              '& .MuiImageListItemBar-titleWrap': {
                                                paddingTop: 0,  
                                                paddingBottom: 0,  
                                              },

                                              '& .MuiImageListItemBar-title': {
                                                   
                                                  textAlign: 'center' ,
                                                  color: '#3DC852',//green
                                              }
                                            }} />

                                        </ImageListItem>
                                      ))}
                                    </ImageList>
                            </Box>


                        </Box>
                  </Box>

                  {/* 2.1.3 female BAD predictions*/}
                  <Box display="flex" flexDirection="column" alignItems="center"
                    padding="3px"
                    margin="5px"
                    //width = {450}
                    sx={{
                      border: '4px dashed #E75555'  // 设置为红色的虚线边框
                    }}>

                        {/* (1)title： BAD Predictions*/}
                        <Typography variant="h6" component="div" gutterBottom color='#E75555'
                          sx={{ fontWeight: 'bold'}}>
                            Predicted as BAD Credit
                        </Typography>

                        {/* (2)instances: BAD Predictions*/}
                        <Box display="flex" justifyContent="center"  padding="3px" >          
                  
                            {/* (2.1)instances：Bad Predictions， job condition 1*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center"  backgroundColor="#EEF9FC" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                Unemployed/{"<"}1 Year: <br/>{group_predBad_employmentUnemployed_female.length}
                                </Typography> 
                                
                                <ImageList sx={{ width: 300,height: 300}} cols={5} rowHeight={50}>
                                          {group_predBad_employmentUnemployed_female.map((item) => (
                                            <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                              <img
                                                src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.id}
                                                loading="lazy"
                                              />

                                              <ImageListItemBar title={item.id} 
                                                position="below"  // 将标题放在图片的下方
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',//RED
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>

                            {/* (2.1)instances：Bad Predictions， job condition 2*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" backgroundColor="#FDFDEB" alignItems="center" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                      1-4 Years:<br/> {group_predBad_employmentMedium_female.length}
                                </Typography> 
                                
                                <ImageList sx={{ width: 280,height: 300}} cols={5} rowHeight={50}>
                                          {group_predBad_employmentMedium_female.map((item) => (
                                            <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                              <img
                                                src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.id}
                                                loading="lazy"
                                              />

                                              <ImageListItemBar title={item.id} 
                                                position="below"  // 将标题放在图片的下方
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',//green
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>

                            {/* (2.1)instances：Bad Predictions， job condition 3*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px"  alignItems="center" backgroundColor="#FDF5ED" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                    {">="}4 Years:<br/>{group_predBad_employmentHigh_female.length}
                                </Typography> 
                                
                                <ImageList sx={{ width: 450,height: 250}} cols={5} rowHeight={50}>
                                          {group_predBad_employmentHigh_female.map((item) => (
                                            <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                              <img
                                                src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.id}
                                                loading="lazy"
                                              />

                                              <ImageListItemBar title={item.id} 
                                                position="below"  // 将标题放在图片的下方
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',//green
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>


                        </Box>
                  </Box>
              </Box>

          <Box display="flex" flexDirection="column" alignItems="center" 
          
          //borderRight={`4px solid ${theme.palette.primary.main}`}
          > 
                  {/* 2.1.1 female title*/}
                 
                  <Typography variant="h5" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      {/* //border: `4px solid ${theme.palette.primary.main}` */}
                      Local
                  </Typography>

                  <Typography variant="h6" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      {/* //border: `4px solid ${theme.palette.primary.main}` */}
                      (Total: {totalMaleEmployment})
                  </Typography>
                  

                  {/* 2.1.2 male GOOD predictions*/}
                  <Box display="flex" flexDirection="column" alignItems="center"
                    padding="3px"
                    margin="5px"
                    //width = {450}
                    sx={{
                      border: '4px dashed #18C82A'  // 设置为绿色的虚线边框
                    }}>

                        {/* (1)title： Good Predictions*/}
                        <Typography variant="h6" component="div" gutterBottom color='#18C82A'
                          sx={{ fontWeight: 'bold'}}>
                            Predicted as GOOD Credit
                        </Typography>

                        {/* (2)instances: Good Predictions*/}
                        <Box display="flex" justifyContent="center" padding="3px" >          
                  
                            {/* (2.1)instances：Good Predictions， job condition 1*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding="6px" marginRight = "3px" alignItems="center"  backgroundColor="#D3EFFE" sx={{ border: '2px solid #18C82A' }}>
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                    Unemployed/{"<"}1 Year: <br/>{group_predGood_employmentUnemployed_male.length}
                                  </Typography> 
                                  <ImageList sx={{ width: 300,height: 1000}} cols={5} rowHeight={50}>
                                            {group_predGood_employmentUnemployed_male.map((item) => (
                                              <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                                <img
                                                  src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                  srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                  alt={item.id}
                                                  loading="lazy"
                                                />

                                                <ImageListItemBar title={item.id} 
                                                  position="below"  // 将标题放在图片的下方
                                                  sx={{
                                                    '& .MuiImageListItemBar-titleWrap': {
                                                      paddingTop: 0,  
                                                      paddingBottom: 0,  
                                                    },

                                                    '& .MuiImageListItemBar-title': {
                                                         
                                                        textAlign: 'center' ,
                                                        color: '#3DC852',//green
                                                    }
                                                  }} />

                                              </ImageListItem>
                                            ))}
                                          </ImageList>
                            </Box>

                            {/* (2.1)instances：Good Predictions， job condition 2*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center" backgroundColor="#F9FCA4" sx={{ border: '2px solid #18C82A' }}>            
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                          1-4 Years:<br/> {group_predGood_employmentMedium_male.length}
                                  </Typography> 
                                  
                                  <ImageList sx={{ width: 300,height: 750}} cols={5} rowHeight={50}>
                                      {group_predGood_employmentMedium_male.map((item) => (
                                        <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                          <img
                                            src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                            srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.id}
                                            loading="lazy"
                                          />

                                          <ImageListItemBar title={item.id} 
                                            position="below"  // 将标题放在图片的下方
                                            sx={{
                                              '& .MuiImageListItemBar-titleWrap': {
                                                paddingTop: 0,  
                                                paddingBottom: 0,  
                                              },

                                              '& .MuiImageListItemBar-title': {
                                                   
                                                  textAlign: 'center' ,
                                                  color: '#3DC852',//green
                                              }
                                            }} />

                                        </ImageListItem>
                                      ))}
                                    </ImageList>
                            </Box>

                            {/* (2.1)instances：Good Predictions， job condition 3*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center" backgroundColor="#FFDEBB" sx={{ border: '2px solid #18C82A' }}>            
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                      {">="}4 Years: <br/>{group_predGood_employmentHigh_male.length}
                                  </Typography> 
                                  
                                  <ImageList sx={{ width: 330,height: 500}} cols={10} rowHeight={50}>
                                      {group_predGood_employmentHigh_male.map((item) => (
                                        <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                          <img
                                            src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                            srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.id}
                                            loading="lazy"
                                          />

                                          <ImageListItemBar title={item.id} 
                                            position="below"  // 将标题放在图片的下方
                                            sx={{
                                              '& .MuiImageListItemBar-titleWrap': {
                                                paddingTop: 0,  
                                                paddingBottom: 0,  
                                              },

                                              '& .MuiImageListItemBar-title': {
                                                   
                                                  textAlign: 'center' ,
                                                  color: '#3DC852',//green
                                              }
                                            }} />

                                        </ImageListItem>
                                      ))}
                                    </ImageList>
                            </Box>


                        </Box>
                  </Box>

                  {/* 2.1.3 male BAD predictions*/}
                  <Box display="flex" flexDirection="column" alignItems="center"
                    padding="3px"
                    margin="5px"
                    //width = {450}
                    sx={{
                      border: '4px dashed #E75555'  // 设置为红色的虚线边框
                    }}>

                        {/* (1)title： BAD Predictions*/}
                        <Typography variant="h6" component="div" gutterBottom color='#E75555'
                          sx={{ fontWeight: 'bold'}}>
                            Predicted as BAD Credit
                        </Typography>

                        {/* (2)instances: BAD Predictions*/}
                        <Box display="flex" justifyContent="center"  padding="3px" >          
                  
                            {/* (2.1)instances：Bad Predictions， job condition 1*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center"  backgroundColor="#EEF9FC" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                Unemployed/{"<"}1 Year: <br/>{group_predBad_employmentUnemployed_male.length}
                                </Typography> 
                                
                                <ImageList sx={{ width: 300,height: 300}} cols={5} rowHeight={50}>
                                          {group_predBad_employmentUnemployed_male.map((item) => (
                                            <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                              <img
                                                src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.id}
                                                loading="lazy"
                                              />

                                              <ImageListItemBar title={item.id} 
                                                position="below"  // 将标题放在图片的下方
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',//RED
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>

                            {/* (2.1)instances：Bad Predictions， job condition 2*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" backgroundColor="#FDFDEB" alignItems="center" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                      1-4 Years: <br/>{group_predBad_employmentMedium_male.length}
                                </Typography> 
                                
                                <ImageList sx={{ width: 300,height: 300}} cols={5} rowHeight={50}>
                                          {group_predBad_employmentMedium_male.map((item) => (
                                            <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                              <img
                                                src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.id}
                                                loading="lazy"
                                              />

                                              <ImageListItemBar title={item.id} 
                                                position="below"  // 将标题放在图片的下方
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',//green
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>

                            {/* (2.1)instances：Bad Predictions， job condition 3*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px"  backgroundColor="#FDF5ED"alignItems="center" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                    {">="}4 Years: <br/>{group_predBad_employmentHigh_male.length}
                                </Typography> 
                                
                                <ImageList sx={{ width: 330,height: 300}} cols={5} rowHeight={50}>
                                          {group_predBad_employmentHigh_male.map((item) => (
                                            <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                              <img
                                                src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.id}
                                                loading="lazy"
                                              />

                                              <ImageListItemBar title={item.id} 
                                                position="below"  // 将标题放在图片的下方
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',//green
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>


                        </Box>
                  </Box>
              </Box>    

      </Box>
    );
}

//CSP——condition:Job Image explanation component
function CreditHistoryGender({ selectedID, handleItemClick }){
  const theme = useTheme(); 

  return (
    <Box display="flex" 
    justifyContent="center" 
    padding="3px">
          <Box display="flex" flexDirection="column" alignItems="center" 
          
          borderRight={`4px solid ${theme.palette.primary.main}`}> 
                  {/* 2.1.1 female title*/}
                 
                  <Typography variant="h5" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      {/* //border: `4px solid ${theme.palette.primary.main}` */}
                      Foreign Worker
                  </Typography>

                  <Typography variant="h6" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      {/* //border: `4px solid ${theme.palette.primary.main}` */}
                      (Total: {totalFemaleCH})
                  </Typography>
                  

                  {/* 2.1.2 female GOOD predictions*/}
                  <Box display="flex" flexDirection="column" alignItems="center"
                    padding="3px"
                    margin="5px"
                    //width = {450}
                    sx={{
                      border: '4px dashed #18C82A'  // 设置为绿色的虚线边框
                    }}>

                        {/* (1)title： Good Predictions*/}
                        <Typography variant="h6" component="div" gutterBottom color='#18C82A'
                          sx={{ fontWeight: 'bold'}}>
                            Predicted as GOOD Credit
                        </Typography>

                        {/* (2)instances: Good Predictions*/}
                        <Box display="flex" justifyContent="center" padding="3px" >          
                  
                            {/* (2.1)instances：Good Predictions， job condition 1*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding="6px" marginRight = "3px" alignItems="center"  backgroundColor="#D3EFFE" sx={{ border: '2px solid #18C82A' }}>
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                    Paid back duly/Paid up/No credits: <br/>{group_predGood_creditHistoryPaid_female.length}
                                  </Typography> 
                                  <ImageList sx={{ width: 400,height: 800}} cols={10} rowHeight={50}>
                                            {group_predGood_creditHistoryPaid_female.map((item) => (
                                              <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                                <img
                                                  src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                  srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                  alt={item.id}
                                                  loading="lazy"
                                                />

                                                <ImageListItemBar title={item.id} 
                                                  position="below"  // 将标题放在图片的下方
                                                  sx={{
                                                    '& .MuiImageListItemBar-titleWrap': {
                                                      paddingTop: 0,  
                                                      paddingBottom: 0,  
                                                    },

                                                    '& .MuiImageListItemBar-title': {
                                                         
                                                        textAlign: 'center' ,
                                                        color: '#3DC852',//green
                                                    }
                                                  }} />

                                              </ImageListItem>
                                            ))}
                                          </ImageList>
                            </Box>

                            {/* (2.1)instances：Good Predictions， job condition 2*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center" backgroundColor="#F9FCA4" sx={{ border: '2px solid #18C82A' }}>            
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                          Delayed:<br/> {group_predGood_creditHistoryDelayed_female.length}
                                  </Typography> 
                                  
                                  <ImageList sx={{ width: 300,height: 350}} cols={5} rowHeight={50}>
                                      {group_predGood_creditHistoryDelayed_female.map((item) => (
                                        <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                          <img
                                            src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                            srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.id}
                                            loading="lazy"
                                          />

                                          <ImageListItemBar title={item.id} 
                                            position="below"  // 将标题放在图片的下方
                                            sx={{
                                              '& .MuiImageListItemBar-titleWrap': {
                                                paddingTop: 0,  
                                                paddingBottom: 0,  
                                              },

                                              '& .MuiImageListItemBar-title': {
                                                   
                                                  textAlign: 'center' ,
                                                  color: '#3DC852',//green
                                              }
                                            }} />

                                        </ImageListItem>
                                      ))}
                                    </ImageList>
                            </Box>

                            {/* (2.1)instances：Good Predictions， job condition 3*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center" backgroundColor="#FFDEBB" sx={{ border: '2px solid #18C82A' }}>            
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                      Other Credits Existing:<br/> {group_predGood_creditHistoryOthers_female.length}
                                  </Typography> 
                                  
                                  <ImageList sx={{ width: 300,height: 1100}} cols={5} rowHeight={50}>
                                      {group_predGood_creditHistoryOthers_female.map((item) => (
                                        <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                          <img
                                            src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                            srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.id}
                                            loading="lazy"
                                          />

                                          <ImageListItemBar title={item.id} 
                                            position="below"  // 将标题放在图片的下方
                                            sx={{
                                              '& .MuiImageListItemBar-titleWrap': {
                                                paddingTop: 0,  
                                                paddingBottom: 0,  
                                              },

                                              '& .MuiImageListItemBar-title': {
                                                   
                                                  textAlign: 'center' ,
                                                  color: '#3DC852',//green
                                              }
                                            }} />

                                        </ImageListItem>
                                      ))}
                                    </ImageList>
                            </Box>


                        </Box>
                  </Box>

                  {/* 2.1.3 female BAD predictions*/}
                  <Box display="flex" flexDirection="column" alignItems="center"
                    padding="3px"
                    margin="5px"
                    //width = {450}
                    sx={{
                      border: '4px dashed #E75555'  // 设置为红色的虚线边框
                    }}>

                        {/* (1)title： BAD Predictions*/}
                        <Typography variant="h6" component="div" gutterBottom color='#E75555'
                          sx={{ fontWeight: 'bold'}}>
                            Predicted as BAD Credit
                        </Typography>

                        {/* (2)instances: BAD Predictions*/}
                        <Box display="flex" justifyContent="center"  padding="3px" >          
                  
                            {/* (2.1)instances：Bad Predictions， job condition 1*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center"  backgroundColor="#EEF9FC" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                Paid back duly/Paid up/No credits: <br/>{group_predBad_creditHistoryPaid_female.length}
                                </Typography> 
                                
                                <ImageList sx={{ width: 400,height: 420}} cols={5} rowHeight={50}>
                                          {group_predBad_creditHistoryPaid_female.map((item) => (
                                            <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                              <img
                                                src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.id}
                                                loading="lazy"
                                              />

                                              <ImageListItemBar title={item.id} 
                                                position="below"  // 将标题放在图片的下方
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',//RED
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>

                            {/* (2.1)instances：Bad Predictions， job condition 2*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" backgroundColor="#FDFDEB" alignItems="center" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                      Delayed:<br/> {group_predBad_creditHistoryDelayed_female.length}
                                </Typography> 
                                
                                <ImageList sx={{ width: 300,height: 300}} cols={5} rowHeight={50}>
                                          {group_predBad_creditHistoryDelayed_female.map((item) => (
                                            <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                              <img
                                                src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.id}
                                                loading="lazy"
                                              />

                                              <ImageListItemBar title={item.id} 
                                                position="below"  // 将标题放在图片的下方
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',//green
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>

                            {/* (2.1)instances：Bad Predictions， job condition 3*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px"  alignItems="center" backgroundColor="#FDF5ED" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                    Other Credits Existing:<br/>{group_predBad_creditHistoryOthers_female.length}
                                </Typography> 
                                
                                <ImageList sx={{ width: 300,height: 300}} cols={5} rowHeight={50}>
                                          {group_predBad_creditHistoryOthers_female.map((item) => (
                                            <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                              <img
                                                src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.id}
                                                loading="lazy"
                                              />

                                              <ImageListItemBar title={item.id} 
                                                position="below"  // 将标题放在图片的下方
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',//green
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>


                        </Box>
                  </Box>
              </Box>

          <Box display="flex" flexDirection="column" alignItems="center" 
          
          //borderRight={`4px solid ${theme.palette.primary.main}`}
          > 
                  {/* 2.1.1 female title*/}
                 
                  <Typography variant="h5" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      {/* //border: `4px solid ${theme.palette.primary.main}` */}
                      Local
                  </Typography>

                  <Typography variant="h6" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      {/* //border: `4px solid ${theme.palette.primary.main}` */}
                      (Total: {totalMaleCH})
                  </Typography>
                  

                  {/* 2.1.2 male GOOD predictions*/}
                  <Box display="flex" flexDirection="column" alignItems="center"
                    padding="3px"
                    margin="5px"
                    //width = {450}
                    sx={{
                      border: '4px dashed #18C82A'  // 设置为绿色的虚线边框
                    }}>

                        {/* (1)title： Good Predictions*/}
                        <Typography variant="h6" component="div" gutterBottom color='#18C82A'
                          sx={{ fontWeight: 'bold'}}>
                            Predicted as GOOD Credit
                        </Typography>

                        {/* (2)instances: Good Predictions*/}
                        <Box display="flex" justifyContent="center" padding="3px" >          
                  
                            {/* (2.1)instances：Good Predictions， job condition 1*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding="6px" marginRight = "3px" alignItems="center"  backgroundColor="#D3EFFE" sx={{ border: '2px solid #18C82A' }}>
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                    Paid back duly/Paid up/No credits: <br/>{group_predGood_creditHistoryPaid_male.length}
                                  </Typography> 
                                  <ImageList sx={{ width: 330,height: 180}} cols={5} rowHeight={50}>
                                            {group_predGood_creditHistoryPaid_male.map((item) => (
                                              <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                                <img
                                                  src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                  srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                  alt={item.id}
                                                  loading="lazy"
                                                />

                                                <ImageListItemBar title={item.id} 
                                                  position="below"  // 将标题放在图片的下方
                                                  sx={{
                                                    '& .MuiImageListItemBar-titleWrap': {
                                                      paddingTop: 0,  
                                                      paddingBottom: 0,  
                                                    },

                                                    '& .MuiImageListItemBar-title': {
                                                         
                                                        textAlign: 'center' ,
                                                        color: '#3DC852',//green
                                                    }
                                                  }} />

                                              </ImageListItem>
                                            ))}
                                          </ImageList>
                            </Box>

                            {/* (2.1)instances：Good Predictions， job condition 2*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center" backgroundColor="#F9FCA4" sx={{ border: '2px solid #18C82A' }}>            
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                          Delayed:<br/> {group_predGood_creditHistoryDelayed_male.length}
                                  </Typography> 
                                  
                                  <ImageList sx={{ width: 300,height: 300}} cols={5} rowHeight={50}>
                                      {group_predGood_creditHistoryDelayed_male.map((item) => (
                                        <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                          <img
                                            src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                            srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.id}
                                            loading="lazy"
                                          />

                                          <ImageListItemBar title={item.id} 
                                            position="below"  // 将标题放在图片的下方
                                            sx={{
                                              '& .MuiImageListItemBar-titleWrap': {
                                                paddingTop: 0,  
                                                paddingBottom: 0,  
                                              },

                                              '& .MuiImageListItemBar-title': {
                                                   
                                                  textAlign: 'center' ,
                                                  color: '#3DC852',//green
                                              }
                                            }} />

                                        </ImageListItem>
                                      ))}
                                    </ImageList>
                            </Box>

                            {/* (2.1)instances：Good Predictions， job condition 3*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center" backgroundColor="#FFDEBB" sx={{ border: '2px solid #18C82A' }}>            
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                      Other Credits Existing: <br/>{group_predGood_creditHistoryOthers_male.length}
                                  </Typography> 
                                  
                                  <ImageList sx={{ width: 300,height: 1100}} cols={5} rowHeight={50}>
                                      {group_predGood_creditHistoryOthers_male.map((item) => (
                                        <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                          <img
                                            src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                            srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.id}
                                            loading="lazy"
                                          />

                                          <ImageListItemBar title={item.id} 
                                            position="below"  // 将标题放在图片的下方
                                            sx={{
                                              '& .MuiImageListItemBar-titleWrap': {
                                                paddingTop: 0,  
                                                paddingBottom: 0,  
                                              },

                                              '& .MuiImageListItemBar-title': {
                                                   
                                                  textAlign: 'center' ,
                                                  color: '#3DC852',//green
                                              }
                                            }} />

                                        </ImageListItem>
                                      ))}
                                    </ImageList>
                            </Box>


                        </Box>
                  </Box>

                  {/* 2.1.3 male BAD predictions*/}
                  <Box display="flex" flexDirection="column" alignItems="center"
                    padding="3px"
                    margin="5px"
                    //width = {450}
                    sx={{
                      border: '4px dashed #E75555'  // 设置为红色的虚线边框
                    }}>

                        {/* (1)title： BAD Predictions*/}
                        <Typography variant="h6" component="div" gutterBottom color='#E75555'
                          sx={{ fontWeight: 'bold'}}>
                            Predicted as BAD Credit
                        </Typography>

                        {/* (2)instances: BAD Predictions*/}
                        <Box display="flex" justifyContent="center"  padding="3px" >          
                  
                            {/* (2.1)instances：Bad Predictions， job condition 1*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center"  backgroundColor="#EEF9FC" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                Paid back duly/Paid up/No credits: <br/>{group_predBad_creditHistoryPaid_male.length}
                                </Typography> 
                                
                                <ImageList sx={{ width: 300,height: 420}} cols={5} rowHeight={50}>
                                          {group_predBad_creditHistoryPaid_male.map((item) => (
                                            <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                              <img
                                                src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.id}
                                                loading="lazy"
                                              />

                                              <ImageListItemBar title={item.id} 
                                                position="below"  // 将标题放在图片的下方
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',//RED
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>

                            {/* (2.1)instances：Bad Predictions， job condition 2*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" backgroundColor="#FDFDEB" alignItems="center" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                      Delayed: <br/>{group_predBad_creditHistoryDelayed_male.length}
                                </Typography> 
                                
                                <ImageList sx={{ width: 300,height: 300}} cols={5} rowHeight={50}>
                                          {group_predBad_creditHistoryDelayed_male.map((item) => (
                                            <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                              <img
                                                src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.id}
                                                loading="lazy"
                                              />

                                              <ImageListItemBar title={item.id} 
                                                position="below"  // 将标题放在图片的下方
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',//green
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>

                            {/* (2.1)instances：Bad Predictions， job condition 3*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px"  backgroundColor="#FDF5ED"alignItems="center" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                    Other Credits Existing: <br/>{group_predBad_creditHistoryOthers_male.length}
                                </Typography> 
                                
                                <ImageList sx={{ width: 300,height: 300}} cols={5} rowHeight={50}>
                                          {group_predBad_creditHistoryOthers_male.map((item) => (
                                            <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                              <img
                                                src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.id}
                                                loading="lazy"
                                              />

                                              <ImageListItemBar title={item.id} 
                                                position="below"  // 将标题放在图片的下方
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',//green
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>


                        </Box>
                  </Box>
              </Box>    

      </Box>
    );
}










export default function GroupConditionalStatisticalParityImageGender({ selectedID, handleItemClick }) {
  //condition selection
  const [selectedCondition, setSelectedCondition] = useState("Job");

  const theme = useTheme(); 
  return (
      <Box display="flex" 
      flexDirection="column" 
      alignItems="center"
      boxShadow="0px 4px 12px #7986cb" 
      borderRadius="8px"
      border={`2px solid #42a5f5`} 
      padding="3px"> 

          {/* 1. Header & condition selector*/}
          <Typography variant="h5" component="div" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
              Conditional Statistical Parity for Group Fairness
          </Typography>

          
          <Box display="flex" 
            justifyContent="center" 
            padding="3px">
                {/* RadioGroup */}
                <FormControl>
                          <FormLabel id="condition-selection-label" sx={{ textAlign: 'left' }}>Choose a condition</FormLabel>
                          <RadioGroup
                            row
                            aria-labelledby="condition-selection-label"
                            defaultValue="Job"
                            name="condition-selection"
                            onChange={event => setSelectedCondition(event.target.value)}
                          >
                            <FormControlLabel value="Job" control={<Radio />} label="Job" />
                            <FormControlLabel value="Savings" control={<Radio />} label="Savings" />
                            <FormControlLabel value="Employment" control={<Radio />} label="Employment" />
                            <FormControlLabel value="Credit History" control={<Radio />} label="Credit History" />
                          </RadioGroup>
                        </FormControl>
           </Box>

            {/* 3 Group Selector*/}
            <Box 
                display="flex"
                padding="6px"
                alignItems="flex-start"  // 控制垂直方向的对齐
                justifyContent="flex-end" // 控制水平方向的对齐
                //border={`2px solid #42a5f5`}
                
            >    
                    {/* 根据当前的 radio 选择值，动态地渲染相应的 SVG 组件。 */}
                    {selectedCondition === "Job" &&  <JobGender selectedID={selectedID} handleItemClick={handleItemClick} />}
                    {selectedCondition === "Savings" && <SavingsGender  selectedID={selectedID} handleItemClick={handleItemClick} />}
                    {selectedCondition === "Employment" && <EmploymentGender selectedID={selectedID} handleItemClick={handleItemClick}  />}
                    {selectedCondition === "Credit History" && <CreditHistoryGender selectedID={selectedID} handleItemClick={handleItemClick} />}
            </Box>
            
             {/* 4. text exP*/}    
             <Paper elevation={3} sx={{ width: '98%', backgroundColor: '#f5f5f5', padding: '10px', margin: '10px',borderRadius: '8px' }}>
                <Typography variant="h6" component="div" gutterBottom color="primary"
                 >
                    <strong>Conditional Statistical Parity Definition: </strong>
                    <br/>
                    The AI application is fairness if it has "equal" probability for <strong> Foreign Workers and Locals with specific conditions</strong> to have good predicted credit.
                   <br/>

                   <div style={{ borderRadius: '8px', border: '2px solid #42a5f5', margin:"10px", padding: '10px',display: 'inline-block'  }}>
                    
                    <table style={{ display: 'inline', verticalAlign: 'middle', marginRight: '10px' }}>
                      <tbody>
                        <tr>
                          <td style={{ borderBottom: '1px solid black', textAlign: 'center',fontWeight: 'bold',fontWeight: 'bold' }}>Blue Background</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'center',fontWeight: 'bold' ,fontWeight: 'bold'}}>Blue Background + Lightblue Background</td>
                        </tr>
                      </tbody>
                    </table>
                    (Foreign Worker = Local );
                    <table style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '10px' }}>
                      <tbody>
                        <tr>
                          <td style={{ borderBottom: '1px solid black', textAlign: 'center',fontWeight: 'bold' }}>Yellow Background</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'center',fontWeight: 'bold' }}>Yellow Background + Lightyellow Background</td>
                        </tr>
                      </tbody>
                    </table>
                    (Foreign Worker = Local );
                    <table style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '10px' }}>
                      <tbody>
                        <tr>
                          <td style={{ borderBottom: '1px solid black', textAlign: 'center',fontWeight: 'bold'}}>Orange Background</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'center',fontWeight: 'bold'}}>Orange Background + Lightorange Background</td>
                        </tr>
                      </tbody>
                    </table> 
                    (Foreign Worker = Local );
                    </div>
                   
                </Typography>
          
            </Paper>
     
      </Box>
  );
}



 