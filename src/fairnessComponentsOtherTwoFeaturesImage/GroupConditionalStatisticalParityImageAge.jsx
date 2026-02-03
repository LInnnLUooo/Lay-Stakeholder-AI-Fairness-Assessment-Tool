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

import * as dataG from '../data/agegroups.js';

const femaleImage = '/young.png';
const maleImage = '/old.png'; 

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

const totalFemale = 
    group_predGood_jobMangagement_female.length +
    group_predBad_jobMangagement_female.length +
    group_predGood_jobSkilled_female.length +
    group_predBad_jobSkilled_female.length +
    group_predGood_jobUnskilled_female.length +
    group_predBad_jobUnskilled_female.length;


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

const totalMale = 
    group_predGood_jobMangagement_male.length +
    group_predBad_jobMangagement_male.length +
    group_predGood_jobSkilled_male.length +
    group_predBad_jobSkilled_male.length +
    group_predGood_jobUnskilled_male.length +
    group_predBad_jobUnskilled_male.length;

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

function JobGender({ selectedID, handleItemClick }){
  const theme = useTheme(); 

  return (
    <Box display="flex" 
    justifyContent="center" 
    padding="3px">
          <Box display="flex" flexDirection="column" alignItems="center" 
          
          borderRight={`4px solid ${theme.palette.primary.main}`}> 
                 
                  <Typography variant="h5" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      Age{'<'}25
                  </Typography>

                  <Typography variant="h6" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      (Total: {totalFemale})
                  </Typography>
                  

                  <Box display="flex" flexDirection="column" alignItems="center"
                    padding="3px"
                    margin="5px"
                    sx={{
                      border: '4px dashed #18C82A'
                    }}>

                        <Typography variant="h6" component="div" gutterBottom color='#18C82A'
                          sx={{ fontWeight: 'bold'}}>
                            Predicted as GOOD Credit
                        </Typography>

                        <Box display="flex" justifyContent="center" padding="3px" >          
                  
                            <Box  display="flex"  flex="3" flexDirection="column" padding="6px" marginRight = "3px" alignItems="center"  backgroundColor="#D3EFFE" sx={{ border: '2px solid #18C82A' }}>
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                    Management/Officer: <br/>{group_predGood_jobMangagement_female.length}
                                  </Typography> 
                                  <ImageList sx={{ width: 300,height: 750}} cols={5} rowHeight={50}>
                                            {group_predGood_jobMangagement_female.map((item) => (
                                              <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                                <img
                                                  src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                  srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                  alt={item.id}
                                                  loading="lazy"
                                                />

                                                <ImageListItemBar title={item.id} 
                                                  position="below"
                                                  sx={{
                                                    '& .MuiImageListItemBar-titleWrap': {
                                                      paddingTop: 0,  
                                                      paddingBottom: 0,  
                                                    },

                                                    '& .MuiImageListItemBar-title': {
                                                         
                                                        textAlign: 'center' ,
                                                        color: '#3DC852',
                                                    }
                                                  }} />

                                              </ImageListItem>
                                            ))}
                                          </ImageList>
                            </Box>

                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center" backgroundColor="#F9FCA4" sx={{ border: '2px solid #18C82A' }}>            
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                          Skilled:<br/> {group_predGood_jobSkilled_female.length}
                                  </Typography> 
                                  
                                  <ImageList sx={{ width: 300,height: 280}} cols={5} rowHeight={50}>
                                      {group_predGood_jobSkilled_female.map((item) => (
                                        <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                          <img
                                            src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                            srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.id}
                                            loading="lazy"
                                          />

                                          <ImageListItemBar title={item.id} 
                                            position="below"
                                            sx={{
                                              '& .MuiImageListItemBar-titleWrap': {
                                                paddingTop: 0,  
                                                paddingBottom: 0,  
                                              },

                                              '& .MuiImageListItemBar-title': {
                                                   
                                                  textAlign: 'center' ,
                                                  color: '#3DC852',
                                              }
                                            }} />

                                        </ImageListItem>
                                      ))}
                                    </ImageList>
                            </Box>

                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center" backgroundColor="#FFDEBB" sx={{ border: '2px solid #18C82A' }}>            
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                      Unskilled/Unemployed:<br/> {group_predGood_jobUnskilled_female.length}
                                  </Typography> 
                                  
                                  <ImageList sx={{ width: 300,height: 180}} cols={5} rowHeight={50}>
                                      {group_predGood_jobUnskilled_female.map((item) => (
                                        <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                          <img
                                            src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                            srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.id}
                                            loading="lazy"
                                          />

                                          <ImageListItemBar title={item.id} 
                                            position="below"
                                            sx={{
                                              '& .MuiImageListItemBar-titleWrap': {
                                                paddingTop: 0,  
                                                paddingBottom: 0,  
                                              },

                                              '& .MuiImageListItemBar-title': {
                                                   
                                                  textAlign: 'center' ,
                                                  color: '#3DC852',
                                              }
                                            }} />

                                        </ImageListItem>
                                      ))}
                                    </ImageList>
                            </Box>


                        </Box>
                  </Box>

                  <Box display="flex" flexDirection="column" alignItems="center"
                    padding="3px"
                    margin="5px"
                    sx={{
                      border: '4px dashed #E75555'
                    }}>

                        <Typography variant="h6" component="div" gutterBottom color='#E75555'
                          sx={{ fontWeight: 'bold'}}>
                            Predicted as BAD Credit
                        </Typography>

                        <Box display="flex" justifyContent="center"  padding="3px" >          
                  
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
                                                position="below"
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>

                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" backgroundColor="#FDFDEB" alignItems="center" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                      Skilled:<br/> {group_predBad_jobSkilled_female.length}
                                </Typography> 
                                
                                <ImageList sx={{ width: 300,height: 300}} cols={5} rowHeight={50}>
                                          {group_predBad_jobSkilled_female.map((item) => (
                                            <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                              <img
                                                src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.id}
                                                loading="lazy"
                                              />

                                              <ImageListItemBar title={item.id} 
                                                position="below"
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>

                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px"  alignItems="center" backgroundColor="#FDF5ED" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                    Unskilled/Unemployed:<br/>{group_predBad_jobUnskilled_female.length}
                                </Typography> 
                                
                                <ImageList sx={{ width: 300,height: 200}} cols={5} rowHeight={50}>
                                          {group_predBad_jobUnskilled_female.map((item) => (
                                            <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                              <img
                                                src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.id}
                                                loading="lazy"
                                              />

                                              <ImageListItemBar title={item.id} 
                                                position="below"
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',
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
          
          > 
                 
                  <Typography variant="h5" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      Age{'>='}25
                  </Typography>

                  <Typography variant="h6" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      (Total: {totalMale})
                  </Typography>
                  

                  <Box display="flex" flexDirection="column" alignItems="center"
                    padding="3px"
                    margin="5px"
                    sx={{
                      border: '4px dashed #18C82A'
                    }}>

                        <Typography variant="h6" component="div" gutterBottom color='#18C82A'
                          sx={{ fontWeight: 'bold'}}>
                            Predicted as GOOD Credit
                        </Typography>

                        <Box display="flex" justifyContent="center" padding="3px" >          
                  
                            <Box  display="flex"  flex="3" flexDirection="column" padding="6px" marginRight = "3px" alignItems="center"  backgroundColor="#D3EFFE" sx={{ border: '2px solid #18C82A' }}>
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                    Management/Officer: <br/>{group_predGood_jobMangagement_male.length}
                                  </Typography> 
                                  <ImageList sx={{ width: 300,height: 450}} cols={5} rowHeight={50}>
                                            {group_predGood_jobMangagement_male.map((item) => (
                                              <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                                <img
                                                  src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                  srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                  alt={item.id}
                                                  loading="lazy"
                                                />

                                                <ImageListItemBar title={item.id} 
                                                  position="below"
                                                  sx={{
                                                    '& .MuiImageListItemBar-titleWrap': {
                                                      paddingTop: 0,  
                                                      paddingBottom: 0,  
                                                    },

                                                    '& .MuiImageListItemBar-title': {
                                                         
                                                        textAlign: 'center' ,
                                                        color: '#3DC852',
                                                    }
                                                  }} />

                                              </ImageListItem>
                                            ))}
                                          </ImageList>
                            </Box>

                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center" backgroundColor="#F9FCA4" sx={{ border: '2px solid #18C82A' }}>            
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                          Skilled:<br/> {group_predGood_jobSkilled_male.length}
                                  </Typography> 
                                  
                                  <ImageList sx={{ width: 400,height: 750}} cols={10} rowHeight={50}>
                                      {group_predGood_jobSkilled_male.map((item) => (
                                        <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                          <img
                                            src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                            srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.id}
                                            loading="lazy"
                                          />

                                          <ImageListItemBar title={item.id} 
                                            position="below"
                                            sx={{
                                              '& .MuiImageListItemBar-titleWrap': {
                                                paddingTop: 0,  
                                                paddingBottom: 0,  
                                              },

                                              '& .MuiImageListItemBar-title': {
                                                   
                                                  textAlign: 'center' ,
                                                  color: '#3DC852',
                                              }
                                            }} />

                                        </ImageListItem>
                                      ))}
                                    </ImageList>
                            </Box>

                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center" backgroundColor="#FFDEBB" sx={{ border: '2px solid #18C82A' }}>            
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                      Unskilled/Unemployed: <br/>{group_predGood_jobUnskilled_male.length}
                                  </Typography> 
                                  
                                  <ImageList sx={{ width: 300,height: 600}} cols={5} rowHeight={50}>
                                      {group_predGood_jobUnskilled_male.map((item) => (
                                        <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                          <img
                                            src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                            srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.id}
                                            loading="lazy"
                                          />

                                          <ImageListItemBar title={item.id} 
                                            position="below"
                                            sx={{
                                              '& .MuiImageListItemBar-titleWrap': {
                                                paddingTop: 0,  
                                                paddingBottom: 0,  
                                              },

                                              '& .MuiImageListItemBar-title': {
                                                   
                                                  textAlign: 'center' ,
                                                  color: '#3DC852',
                                              }
                                            }} />

                                        </ImageListItem>
                                      ))}
                                    </ImageList>
                            </Box>


                        </Box>
                  </Box>

                  <Box display="flex" flexDirection="column" alignItems="center"
                    padding="3px"
                    margin="5px"
                    sx={{
                      border: '4px dashed #E75555'
                    }}>

                        <Typography variant="h6" component="div" gutterBottom color='#E75555'
                          sx={{ fontWeight: 'bold'}}>
                            Predicted as BAD Credit
                        </Typography>

                        <Box display="flex" justifyContent="center"  padding="3px" >          
                  
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center"  backgroundColor="#EEF9FC" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                Management/Officer: <br/>{group_predBad_jobMangagement_male.length}
                                </Typography> 
                                
                                <ImageList sx={{ width: 300,height: 300}} cols={5} rowHeight={50}>
                                          {group_predBad_jobMangagement_male.map((item) => (
                                            <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                              <img
                                                src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.id}
                                                loading="lazy"
                                              />

                                              <ImageListItemBar title={item.id} 
                                                position="below"
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>

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
                                                position="below"
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>

                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px"  backgroundColor="#FDF5ED"alignItems="center" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                    Unskilled/Unemployed: <br/>{group_predBad_jobUnskilled_male.length}
                                </Typography> 
                                
                                <ImageList sx={{ width: 300,height: 200}} cols={5} rowHeight={50}>
                                          {group_predBad_jobUnskilled_male.map((item) => (
                                            <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                              <img
                                                src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.id}
                                                loading="lazy"
                                              />

                                              <ImageListItemBar title={item.id} 
                                                position="below"
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',
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
                 
                  <Typography variant="h5" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      Age{'<'}25
                  </Typography>

                  <Typography variant="h6" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      (Total: {totalFemaleSavings})
                  </Typography>
                  

                  <Box display="flex" flexDirection="column" alignItems="center"
                    padding="3px"
                    margin="5px"
                    sx={{
                      border: '4px dashed #18C82A'
                    }}>

                        <Typography variant="h6" component="div" gutterBottom color='#18C82A'
                          sx={{ fontWeight: 'bold'}}>
                            Predicted as GOOD Credit
                        </Typography>

                        <Box display="flex" justifyContent="center" padding="3px" >          
                  
                            <Box  display="flex"  flex="3" flexDirection="column" padding="6px" marginRight = "3px" alignItems="center"  backgroundColor="#D3EFFE" sx={{ border: '2px solid #18C82A' }}>
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                    {"<"}500DM/Unknown <br/>{group_predGood_savingsUnknown_female.length}
                                  </Typography> 
                                  <ImageList sx={{ width: 300,height: 350}} cols={5} rowHeight={50}>
                                            {group_predGood_savingsUnknown_female.map((item) => (
                                              <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                                <img
                                                  src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                  srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                  alt={item.id}
                                                  loading="lazy"
                                                />

                                                <ImageListItemBar title={item.id} 
                                                  position="below"
                                                  sx={{
                                                    '& .MuiImageListItemBar-titleWrap': {
                                                      paddingTop: 0,  
                                                      paddingBottom: 0,  
                                                    },

                                                    '& .MuiImageListItemBar-title': {
                                                         
                                                        textAlign: 'center' ,
                                                        color: '#3DC852',
                                                    }
                                                  }} />

                                              </ImageListItem>
                                            ))}
                                          </ImageList>
                            </Box>

                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center" backgroundColor="#F9FCA4" sx={{ border: '2px solid #18C82A' }}>            
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                  500-1000 DM:<br/> {group_predGood_savingsMedium_female.length}
                                  </Typography> 
                                  
                                  <ImageList sx={{ width: 300,height: 750}} cols={5} rowHeight={50}>
                                      {group_predGood_savingsMedium_female.map((item) => (
                                        <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                          <img
                                            src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                            srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.id}
                                            loading="lazy"
                                          />

                                          <ImageListItemBar title={item.id} 
                                            position="below"
                                            sx={{
                                              '& .MuiImageListItemBar-titleWrap': {
                                                paddingTop: 0,  
                                                paddingBottom: 0,  
                                              },

                                              '& .MuiImageListItemBar-title': {
                                                   
                                                  textAlign: 'center' ,
                                                  color: '#3DC852',
                                              }
                                            }} />

                                        </ImageListItem>
                                      ))}
                                    </ImageList>
                            </Box>

                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center" backgroundColor="#FFDEBB" sx={{ border: '2px solid #18C82A' }}>            
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                      {">="}1000DM:<br/> {group_predGood_savingsHigh_female.length}
                                  </Typography> 
                                  
                                  <ImageList sx={{ width: 250,height: 900}} cols={5} rowHeight={50}>
                                      {group_predGood_savingsHigh_female.map((item) => (
                                        <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                          <img
                                            src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                            srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.id}
                                            loading="lazy"
                                          />

                                          <ImageListItemBar title={item.id} 
                                            position="below"
                                            sx={{
                                              '& .MuiImageListItemBar-titleWrap': {
                                                paddingTop: 0,  
                                                paddingBottom: 0,  
                                              },

                                              '& .MuiImageListItemBar-title': {
                                                   
                                                  textAlign: 'center' ,
                                                  color: '#3DC852',
                                              }
                                            }} />

                                        </ImageListItem>
                                      ))}
                                    </ImageList>
                            </Box>


                        </Box>
                  </Box>

                  <Box display="flex" flexDirection="column" alignItems="center"
                    padding="3px"
                    margin="5px"
                    sx={{
                      border: '4px dashed #E75555'
                    }}>

                        <Typography variant="h6" component="div" gutterBottom color='#E75555'
                          sx={{ fontWeight: 'bold'}}>
                            Predicted as BAD Credit
                        </Typography>

                        <Box display="flex" justifyContent="center"  padding="3px" >          
                  
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center"  backgroundColor="#EEF9FC" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                {"<"}500DM/Unknown <br/>{group_predBad_savingsUnknown_female.length}
                                </Typography> 
                                
                                <ImageList sx={{ width: 300,height: 450}} cols={5} rowHeight={50}>
                                          {group_predBad_savingsUnknown_female.map((item) => (
                                            <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                              <img
                                                src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.id}
                                                loading="lazy"
                                              />

                                              <ImageListItemBar title={item.id} 
                                                position="below"
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>

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
                                                position="below"
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>

                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px"  alignItems="center" backgroundColor="#FDF5ED" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                    {">="}1000DM:<br/>{group_predBad_savingsHigh_female.length}
                                </Typography> 
                                
                                <ImageList sx={{ width: 250,height: 350}} cols={5} rowHeight={50}>
                                          {group_predBad_savingsHigh_female.map((item) => (
                                            <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                              <img
                                                src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.id}
                                                loading="lazy"
                                              />

                                              <ImageListItemBar title={item.id} 
                                                position="below"
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',
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
          
          > 
                 
                  <Typography variant="h5" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      Age{'>='}25
                  </Typography>

                  <Typography variant="h6" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      (Total: {totalMaleSavings})
                  </Typography>
                  

                  <Box display="flex" flexDirection="column" alignItems="center"
                    padding="3px"
                    margin="5px"
                    sx={{
                      border: '4px dashed #18C82A'
                    }}>

                        <Typography variant="h6" component="div" gutterBottom color='#18C82A'
                          sx={{ fontWeight: 'bold'}}>
                            Predicted as GOOD Credit
                        </Typography>

                        <Box display="flex" justifyContent="center" padding="3px" >          
                  
                            <Box  display="flex"  flex="3" flexDirection="column" padding="6px" marginRight = "3px" alignItems="center"  backgroundColor="#D3EFFE" sx={{ border: '2px solid #18C82A' }}>
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                    {"<"}500DM/Unknown <br/>{group_predGood_savingsUnknown_male.length}
                                  </Typography> 
                                  <ImageList sx={{ width: 400,height: 900}} cols={10} rowHeight={50}>
                                            {group_predGood_savingsUnknown_male.map((item) => (
                                              <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                                <img
                                                  src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                  srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                  alt={item.id}
                                                  loading="lazy"
                                                />

                                                <ImageListItemBar title={item.id} 
                                                  position="below"
                                                  sx={{
                                                    '& .MuiImageListItemBar-titleWrap': {
                                                      paddingTop: 0,  
                                                      paddingBottom: 0,  
                                                    },

                                                    '& .MuiImageListItemBar-title': {
                                                         
                                                        textAlign: 'center' ,
                                                        color: '#3DC852',
                                                    }
                                                  }} />

                                              </ImageListItem>
                                            ))}
                                          </ImageList>
                            </Box>

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
                                            position="below"
                                            sx={{
                                              '& .MuiImageListItemBar-titleWrap': {
                                                paddingTop: 0,  
                                                paddingBottom: 0,  
                                              },

                                              '& .MuiImageListItemBar-title': {
                                                   
                                                  textAlign: 'center' ,
                                                  color: '#3DC852',
                                              }
                                            }} />

                                        </ImageListItem>
                                      ))}
                                    </ImageList>
                            </Box>

                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center" backgroundColor="#FFDEBB" sx={{ border: '2px solid #18C82A' }}>            
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                      {">="}1000DM: <br/>{group_predGood_savingsHigh_male.length}
                                  </Typography> 
                                  
                                  <ImageList sx={{ width: 300,height: 200}} cols={5} rowHeight={50}>
                                      {group_predGood_savingsHigh_male.map((item) => (
                                        <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                          <img
                                            src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                            srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.id}
                                            loading="lazy"
                                          />

                                          <ImageListItemBar title={item.id} 
                                            position="below"
                                            sx={{
                                              '& .MuiImageListItemBar-titleWrap': {
                                                paddingTop: 0,  
                                                paddingBottom: 0,  
                                              },

                                              '& .MuiImageListItemBar-title': {
                                                   
                                                  textAlign: 'center' ,
                                                  color: '#3DC852',
                                              }
                                            }} />

                                        </ImageListItem>
                                      ))}
                                    </ImageList>
                            </Box>


                        </Box>
                  </Box>

                  <Box display="flex" flexDirection="column" alignItems="center"
                    padding="3px"
                    margin="5px"
                    sx={{
                      border: '4px dashed #E75555'
                    }}>

                        <Typography variant="h6" component="div" gutterBottom color='#E75555'
                          sx={{ fontWeight: 'bold'}}>
                            Predicted as BAD Credit
                        </Typography>

                        <Box display="flex" justifyContent="center"  padding="3px" >          
                  
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center"  backgroundColor="#EEF9FC" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                {"<"}500DM/Unknown <br/>{group_predBad_savingsUnknown_male.length}
                                </Typography> 
                                
                                <ImageList sx={{ width: 400,height: 450}} cols={5} rowHeight={50}>
                                          {group_predBad_savingsUnknown_male.map((item) => (
                                            <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                              <img
                                                src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.id}
                                                loading="lazy"
                                              />

                                              <ImageListItemBar title={item.id} 
                                                position="below"
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>

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
                                                position="below"
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>

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
                                                position="below"
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',
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


function EmploymentGender({ selectedID, handleItemClick }){
  const theme = useTheme(); 

  return (
    <Box display="flex" 
    justifyContent="center" 
    padding="3px">
          <Box display="flex" flexDirection="column" alignItems="center" 
          
          borderRight={`4px solid ${theme.palette.primary.main}`}> 
                 
                  <Typography variant="h5" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      Age{'<'}25
                  </Typography>

                  <Typography variant="h6" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      (Total: {totalFemaleEmployment})
                  </Typography>
                  

                  <Box display="flex" flexDirection="column" alignItems="center"
                    padding="3px"
                    margin="5px"
                    sx={{
                      border: '4px dashed #18C82A'
                    }}>

                        <Typography variant="h6" component="div" gutterBottom color='#18C82A'
                          sx={{ fontWeight: 'bold'}}>
                            Predicted as GOOD Credit
                        </Typography>

                        <Box display="flex" justifyContent="center" padding="3px" >          
                  
                            <Box  display="flex"  flex="3" flexDirection="column" padding="6px" marginRight = "3px" alignItems="center"  backgroundColor="#D3EFFE" sx={{ border: '2px solid #18C82A' }}>
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                    Unemployed/{"<"}1 Year: <br/>{group_predGood_employmentUnemployed_female.length}
                                  </Typography> 
                                  <ImageList sx={{ width: 300,height: 200}} cols={5} rowHeight={50}>
                                            {group_predGood_employmentUnemployed_female.map((item) => (
                                              <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                                <img
                                                  src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                  srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                  alt={item.id}
                                                  loading="lazy"
                                                />

                                                <ImageListItemBar title={item.id} 
                                                  position="below"
                                                  sx={{
                                                    '& .MuiImageListItemBar-titleWrap': {
                                                      paddingTop: 0,  
                                                      paddingBottom: 0,  
                                                    },

                                                    '& .MuiImageListItemBar-title': {
                                                         
                                                        textAlign: 'center' ,
                                                        color: '#3DC852',
                                                    }
                                                  }} />

                                              </ImageListItem>
                                            ))}
                                          </ImageList>
                            </Box>

                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center" backgroundColor="#F9FCA4" sx={{ border: '2px solid #18C82A' }}>            
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                          1-4 Years:<br/> {group_predGood_employmentMedium_female.length}
                                  </Typography> 
                                  
                                  <ImageList sx={{ width: 300,height: 200}} cols={5} rowHeight={50}>
                                      {group_predGood_employmentMedium_female.map((item) => (
                                        <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                          <img
                                            src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                            srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.id}
                                            loading="lazy"
                                          />

                                          <ImageListItemBar title={item.id} 
                                            position="below"
                                            sx={{
                                              '& .MuiImageListItemBar-titleWrap': {
                                                paddingTop: 0,  
                                                paddingBottom: 0,  
                                              },

                                              '& .MuiImageListItemBar-title': {
                                                   
                                                  textAlign: 'center' ,
                                                  color: '#3DC852',
                                              }
                                            }} />

                                        </ImageListItem>
                                      ))}
                                    </ImageList>
                            </Box>

                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center" backgroundColor="#FFDEBB" sx={{ border: '2px solid #18C82A' }}>            
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                      {">="}4 Years:<br/> {group_predGood_employmentHigh_female.length}
                                  </Typography> 
                                  
                                  <ImageList sx={{ width: 300,height: 960}} cols={5} rowHeight={50}>
                                      {group_predGood_employmentHigh_female.map((item) => (
                                        <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                          <img
                                            src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                            srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.id}
                                            loading="lazy"
                                          />

                                          <ImageListItemBar title={item.id} 
                                            position="below"
                                            sx={{
                                              '& .MuiImageListItemBar-titleWrap': {
                                                paddingTop: 0,  
                                                paddingBottom: 0,  
                                              },

                                              '& .MuiImageListItemBar-title': {
                                                   
                                                  textAlign: 'center' ,
                                                  color: '#3DC852',
                                              }
                                            }} />

                                        </ImageListItem>
                                      ))}
                                    </ImageList>
                            </Box>


                        </Box>
                  </Box>

                  <Box display="flex" flexDirection="column" alignItems="center"
                    padding="3px"
                    margin="5px"
                    sx={{
                      border: '4px dashed #E75555'
                    }}>

                        <Typography variant="h6" component="div" gutterBottom color='#E75555'
                          sx={{ fontWeight: 'bold'}}>
                            Predicted as BAD Credit
                        </Typography>

                        <Box display="flex" justifyContent="center"  padding="3px" >          
                  
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
                                                position="below"
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>

                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" backgroundColor="#FDFDEB" alignItems="center" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                      1-4 Years:<br/> {group_predBad_employmentMedium_female.length}
                                </Typography> 
                                
                                <ImageList sx={{ width: 300,height: 300}} cols={5} rowHeight={50}>
                                          {group_predBad_employmentMedium_female.map((item) => (
                                            <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                              <img
                                                src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.id}
                                                loading="lazy"
                                              />

                                              <ImageListItemBar title={item.id} 
                                                position="below"
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>

                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px"  alignItems="center" backgroundColor="#FDF5ED" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                    {">="}4 Years:<br/>{group_predBad_employmentHigh_female.length}
                                </Typography> 
                                
                                <ImageList sx={{ width: 300,height: 300}} cols={5} rowHeight={50}>
                                          {group_predBad_employmentHigh_female.map((item) => (
                                            <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                              <img
                                                src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.id}
                                                loading="lazy"
                                              />

                                              <ImageListItemBar title={item.id} 
                                                position="below"
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',
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
          
          > 
                 
                  <Typography variant="h5" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      Age{'>='}25
                  </Typography>

                  <Typography variant="h6" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      (Total: {totalMaleEmployment})
                  </Typography>
                  

                  <Box display="flex" flexDirection="column" alignItems="center"
                    padding="3px"
                    margin="5px"
                    sx={{
                      border: '4px dashed #18C82A'
                    }}>

                        <Typography variant="h6" component="div" gutterBottom color='#18C82A'
                          sx={{ fontWeight: 'bold'}}>
                            Predicted as GOOD Credit
                        </Typography>

                        <Box display="flex" justifyContent="center" padding="3px" >          
                  
                            <Box  display="flex"  flex="3" flexDirection="column" padding="6px" marginRight = "3px" alignItems="center"  backgroundColor="#D3EFFE" sx={{ border: '2px solid #18C82A' }}>
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                    Unemployed/{"<"}1 Year: <br/>{group_predGood_employmentUnemployed_male.length}
                                  </Typography> 
                                  <ImageList sx={{ width: 300,height: 450}} cols={5} rowHeight={50}>
                                            {group_predGood_employmentUnemployed_male.map((item) => (
                                              <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                                <img
                                                  src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                  srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                  alt={item.id}
                                                  loading="lazy"
                                                />

                                                <ImageListItemBar title={item.id} 
                                                  position="below"
                                                  sx={{
                                                    '& .MuiImageListItemBar-titleWrap': {
                                                      paddingTop: 0,  
                                                      paddingBottom: 0,  
                                                    },

                                                    '& .MuiImageListItemBar-title': {
                                                         
                                                        textAlign: 'center' ,
                                                        color: '#3DC852',
                                                    }
                                                  }} />

                                              </ImageListItem>
                                            ))}
                                          </ImageList>
                            </Box>

                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center" backgroundColor="#F9FCA4" sx={{ border: '2px solid #18C82A' }}>            
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                          1-4 Years:<br/> {group_predGood_employmentMedium_male.length}
                                  </Typography> 
                                  
                                  <ImageList sx={{ width: 300,height: 960}} cols={5} rowHeight={50}>
                                      {group_predGood_employmentMedium_male.map((item) => (
                                        <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                          <img
                                            src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                            srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.id}
                                            loading="lazy"
                                          />

                                          <ImageListItemBar title={item.id} 
                                            position="below"
                                            sx={{
                                              '& .MuiImageListItemBar-titleWrap': {
                                                paddingTop: 0,  
                                                paddingBottom: 0,  
                                              },

                                              '& .MuiImageListItemBar-title': {
                                                   
                                                  textAlign: 'center' ,
                                                  color: '#3DC852',
                                              }
                                            }} />

                                        </ImageListItem>
                                      ))}
                                    </ImageList>
                            </Box>

                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center" backgroundColor="#FFDEBB" sx={{ border: '2px solid #18C82A' }}>            
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                      {">="}4 Years: <br/>{group_predGood_employmentHigh_male.length}
                                  </Typography> 
                                  
                                  <ImageList sx={{ width: 400,height: 700}} cols={10} rowHeight={50}>
                                      {group_predGood_employmentHigh_male.map((item) => (
                                        <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                          <img
                                            src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                            srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.id}
                                            loading="lazy"
                                          />

                                          <ImageListItemBar title={item.id} 
                                            position="below"
                                            sx={{
                                              '& .MuiImageListItemBar-titleWrap': {
                                                paddingTop: 0,  
                                                paddingBottom: 0,  
                                              },

                                              '& .MuiImageListItemBar-title': {
                                                   
                                                  textAlign: 'center' ,
                                                  color: '#3DC852',
                                              }
                                            }} />

                                        </ImageListItem>
                                      ))}
                                    </ImageList>
                            </Box>


                        </Box>
                  </Box>

                  <Box display="flex" flexDirection="column" alignItems="center"
                    padding="3px"
                    margin="5px"
                    sx={{
                      border: '4px dashed #E75555'
                    }}>

                        <Typography variant="h6" component="div" gutterBottom color='#E75555'
                          sx={{ fontWeight: 'bold'}}>
                            Predicted as BAD Credit
                        </Typography>

                        <Box display="flex" justifyContent="center"  padding="3px" >          
                  
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center"  backgroundColor="#EEF9FC" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                Unemployed/{"<"}1 Year: <br/>{group_predBad_employmentUnemployed_male.length}
                                </Typography> 
                                
                                <ImageList sx={{ width: 300,height: 200}} cols={5} rowHeight={50}>
                                          {group_predBad_employmentUnemployed_male.map((item) => (
                                            <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                              <img
                                                src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.id}
                                                loading="lazy"
                                              />

                                              <ImageListItemBar title={item.id} 
                                                position="below"
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>

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
                                                position="below"
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>

                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px"  backgroundColor="#FDF5ED"alignItems="center" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                    {">="}4 Years: <br/>{group_predBad_employmentHigh_male.length}
                                </Typography> 
                                
                                <ImageList sx={{ width: 400,height: 300}} cols={5} rowHeight={50}>
                                          {group_predBad_employmentHigh_male.map((item) => (
                                            <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                              <img
                                                src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.id}
                                                loading="lazy"
                                              />

                                              <ImageListItemBar title={item.id} 
                                                position="below"
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',
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

function CreditHistoryGender({ selectedID, handleItemClick }){
  const theme = useTheme(); 

  return (
    <Box display="flex" 
    justifyContent="center" 
    padding="3px">
          <Box display="flex" flexDirection="column" alignItems="center" 
          
          borderRight={`4px solid ${theme.palette.primary.main}`}> 
                 
                  <Typography variant="h5" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      Age{'<'}25
                  </Typography>

                  <Typography variant="h6" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      (Total: {totalFemaleCH})
                  </Typography>
                  

                  <Box display="flex" flexDirection="column" alignItems="center"
                    padding="3px"
                    margin="5px"
                    sx={{
                      border: '4px dashed #18C82A'
                    }}>

                        <Typography variant="h6" component="div" gutterBottom color='#18C82A'
                          sx={{ fontWeight: 'bold'}}>
                            Predicted as GOOD Credit
                        </Typography>

                        <Box display="flex" justifyContent="center" padding="3px" >          
                  
                            <Box  display="flex"  flex="3" flexDirection="column" padding="6px" marginRight = "3px" alignItems="center"  backgroundColor="#D3EFFE" sx={{ border: '2px solid #18C82A' }}>
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                    Paid back duly/Paid up/No credits: <br/>{group_predGood_creditHistoryPaid_female.length}
                                  </Typography> 
                                  <ImageList sx={{ width: 300,height: 400}} cols={5} rowHeight={30}>
                                            {group_predGood_creditHistoryPaid_female.map((item) => (
                                              <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                                <img
                                                  src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                  srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                  alt={item.id}
                                                  loading="lazy"
                                                />

                                                <ImageListItemBar title={item.id} 
                                                  position="below"
                                                  sx={{
                                                    '& .MuiImageListItemBar-titleWrap': {
                                                      paddingTop: 0,  
                                                      paddingBottom: 0,  
                                                    },

                                                    '& .MuiImageListItemBar-title': {
                                                         
                                                        textAlign: 'center' ,
                                                        color: '#3DC852',
                                                    }
                                                  }} />

                                              </ImageListItem>
                                            ))}
                                          </ImageList>
                            </Box>

                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center" backgroundColor="#F9FCA4" sx={{ border: '2px solid #18C82A' }}>            
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                          Delayed:<br/> {group_predGood_creditHistoryDelayed_female.length}
                                  </Typography> 
                                  
                                  <ImageList sx={{ width: 300,height: 960}} cols={5} rowHeight={50}>
                                      {group_predGood_creditHistoryDelayed_female.map((item) => (
                                        <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                          <img
                                            src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                            srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.id}
                                            loading="lazy"
                                          />

                                          <ImageListItemBar title={item.id} 
                                            position="below"
                                            sx={{
                                              '& .MuiImageListItemBar-titleWrap': {
                                                paddingTop: 0,  
                                                paddingBottom: 0,  
                                              },

                                              '& .MuiImageListItemBar-title': {
                                                   
                                                  textAlign: 'center' ,
                                                  color: '#3DC852',
                                              }
                                            }} />

                                        </ImageListItem>
                                      ))}
                                    </ImageList>
                            </Box>

                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center" backgroundColor="#FFDEBB" sx={{ border: '2px solid #18C82A' }}>            
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                      Other Credits Existing:<br/> {group_predGood_creditHistoryOthers_female.length}
                                  </Typography> 
                                  
                                  <ImageList sx={{ width: 300,height: 300}} cols={5} rowHeight={50}>
                                      {group_predGood_creditHistoryOthers_female.map((item) => (
                                        <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                          <img
                                            src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                            srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.id}
                                            loading="lazy"
                                          />

                                          <ImageListItemBar title={item.id} 
                                            position="below"
                                            sx={{
                                              '& .MuiImageListItemBar-titleWrap': {
                                                paddingTop: 0,  
                                                paddingBottom: 0,  
                                              },

                                              '& .MuiImageListItemBar-title': {
                                                   
                                                  textAlign: 'center' ,
                                                  color: '#3DC852',
                                              }
                                            }} />

                                        </ImageListItem>
                                      ))}
                                    </ImageList>
                            </Box>


                        </Box>
                  </Box>

                  <Box display="flex" flexDirection="column" alignItems="center"
                    padding="3px"
                    margin="5px"
                    sx={{
                      border: '4px dashed #E75555'
                    }}>

                        <Typography variant="h6" component="div" gutterBottom color='#E75555'
                          sx={{ fontWeight: 'bold'}}>
                            Predicted as BAD Credit
                        </Typography>

                        <Box display="flex" justifyContent="center"  padding="3px" >          
                  
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center"  backgroundColor="#EEF9FC" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                Paid back duly/Paid up/No credits: <br/>{group_predBad_creditHistoryPaid_female.length}
                                </Typography> 
                                
                                <ImageList sx={{ width: 300,height: 390}} cols={5} rowHeight={50}>
                                          {group_predBad_creditHistoryPaid_female.map((item) => (
                                            <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                              <img
                                                src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.id}
                                                loading="lazy"
                                              />

                                              <ImageListItemBar title={item.id} 
                                                position="below"
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>

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
                                                position="below"
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>

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
                                                position="below"
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',
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
          
          > 
                 
                  <Typography variant="h5" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      Age{'>='}25
                  </Typography>

                  <Typography variant="h6" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      (Total: {totalMaleCH})
                  </Typography>
                  

                  <Box display="flex" flexDirection="column" alignItems="center"
                    padding="3px"
                    margin="5px"
                    sx={{
                      border: '4px dashed #18C82A'
                    }}>

                        <Typography variant="h6" component="div" gutterBottom color='#18C82A'
                          sx={{ fontWeight: 'bold'}}>
                            Predicted as GOOD Credit
                        </Typography>

                        <Box display="flex" justifyContent="center" padding="3px" >          
                  
                            <Box  display="flex"  flex="3" flexDirection="column" padding="6px" marginRight = "3px" alignItems="center"  backgroundColor="#D3EFFE" sx={{ border: '2px solid #18C82A' }}>
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                    Paid back duly/Paid up/No credits: <br/>{group_predGood_creditHistoryPaid_male.length}
                                  </Typography> 
                                  <ImageList sx={{ width: 330,height: 600}} cols={10} rowHeight={50}>
                                            {group_predGood_creditHistoryPaid_male.map((item) => (
                                              <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                                <img
                                                  src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                  srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                  alt={item.id}
                                                  loading="lazy"
                                                />

                                                <ImageListItemBar title={item.id} 
                                                  position="below"
                                                  sx={{
                                                    '& .MuiImageListItemBar-titleWrap': {
                                                      paddingTop: 0,  
                                                      paddingBottom: 0,  
                                                    },

                                                    '& .MuiImageListItemBar-title': {
                                                         
                                                        textAlign: 'center' ,
                                                        color: '#3DC852',
                                                    }
                                                  }} />

                                              </ImageListItem>
                                            ))}
                                          </ImageList>
                            </Box>

                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center" backgroundColor="#F9FCA4" sx={{ border: '2px solid #18C82A' }}>            
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                          Delayed:<br/> {group_predGood_creditHistoryDelayed_male.length}
                                  </Typography> 
                                  
                                  <ImageList sx={{ width: 300,height: 360}} cols={5} rowHeight={50}>
                                      {group_predGood_creditHistoryDelayed_male.map((item) => (
                                        <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                          <img
                                            src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                            srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.id}
                                            loading="lazy"
                                          />

                                          <ImageListItemBar title={item.id} 
                                            position="below"
                                            sx={{
                                              '& .MuiImageListItemBar-titleWrap': {
                                                paddingTop: 0,  
                                                paddingBottom: 0,  
                                              },

                                              '& .MuiImageListItemBar-title': {
                                                   
                                                  textAlign: 'center' ,
                                                  color: '#3DC852',
                                              }
                                            }} />

                                        </ImageListItem>
                                      ))}
                                    </ImageList>
                            </Box>

                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center" backgroundColor="#FFDEBB" sx={{ border: '2px solid #18C82A' }}>            
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                      Other Credits Existing: <br/>{group_predGood_creditHistoryOthers_male.length}
                                  </Typography> 
                                  
                                  <ImageList sx={{ width: 300,height: 960}} cols={5} rowHeight={50}>
                                      {group_predGood_creditHistoryOthers_male.map((item) => (
                                        <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                          <img
                                            src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                            srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.id}
                                            loading="lazy"
                                          />

                                          <ImageListItemBar title={item.id} 
                                            position="below"
                                            sx={{
                                              '& .MuiImageListItemBar-titleWrap': {
                                                paddingTop: 0,  
                                                paddingBottom: 0,  
                                              },

                                              '& .MuiImageListItemBar-title': {
                                                   
                                                  textAlign: 'center' ,
                                                  color: '#3DC852',
                                              }
                                            }} />

                                        </ImageListItem>
                                      ))}
                                    </ImageList>
                            </Box>


                        </Box>
                  </Box>

                  <Box display="flex" flexDirection="column" alignItems="center"
                    padding="3px"
                    margin="5px"
                    sx={{
                      border: '4px dashed #E75555'
                    }}>

                        <Typography variant="h6" component="div" gutterBottom color='#E75555'
                          sx={{ fontWeight: 'bold'}}>
                            Predicted as BAD Credit
                        </Typography>

                        <Box display="flex" justifyContent="center"  padding="3px" >          
                  
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center"  backgroundColor="#EEF9FC" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold',textAlign: 'center'}}>
                                Paid back duly/Paid up/No credits: <br/>{group_predBad_creditHistoryPaid_male.length}
                                </Typography> 
                                
                                <ImageList sx={{ width: 300,height: 390}} cols={5} rowHeight={50}>
                                          {group_predBad_creditHistoryPaid_male.map((item) => (
                                            <ImageListItem key={item.id} className="ImageListItem" onClick={() => handleItemClick(item)}>
                                              <img
                                                src={`${item.source}?w=32&h=32&fit=crop&auto=format`}
                                                srcSet={`${item.source}?w=32&h=32&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.id}
                                                loading="lazy"
                                              />

                                              <ImageListItemBar title={item.id} 
                                                position="below"
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>

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
                                                position="below"
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',
                                                  }
                                                }} />

                                            </ImageListItem>
                                          ))}
                                        </ImageList>
                            </Box>

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
                                                position="below"
                                                sx={{
                                                  '& .MuiImageListItemBar-titleWrap': {
                                                    paddingTop: 0,  
                                                    paddingBottom: 0,  
                                                  },

                                                  '& .MuiImageListItemBar-title': {
                                                       
                                                      textAlign: 'center' ,
                                                      color: '#E75555',
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

          <Typography variant="h5" component="div" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
              Conditional Statistical Parity for Group Fairness
          </Typography>

          
          <Box display="flex" 
            justifyContent="center" 
            padding="3px">
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

            <Box 
                display="flex"
                padding="6px"
                alignItems="flex-start"
                justifyContent="flex-end"
                
            >    
                    {selectedCondition === "Job" &&  <JobGender selectedID={selectedID} handleItemClick={handleItemClick} />}
                    {selectedCondition === "Savings" && <SavingsGender  selectedID={selectedID} handleItemClick={handleItemClick} />}
                    {selectedCondition === "Employment" && <EmploymentGender selectedID={selectedID} handleItemClick={handleItemClick}  />}
                    {selectedCondition === "Credit History" && <CreditHistoryGender selectedID={selectedID} handleItemClick={handleItemClick} />}
            </Box>
            
             <Paper elevation={3} sx={{ width: '98%', backgroundColor: '#f5f5f5', padding: '10px', margin: '10px',borderRadius: '8px' }}>
                <Typography variant="h6" component="div" gutterBottom color="primary"
                 >
                    <strong>Conditional Statistical Parity Definition: </strong>
                    <br/>
                    The AI application is fairness if it has "equal" probability for <strong> Age{'<'}25 Individuals and Age{'>='}25 Individuals with specific conditions</strong> to have good predicted credit.
                   <br/>

                   <div style={{ borderRadius: '8px', border: '2px solid #42a5f5', margin:"10px", padding: '10px',display: 'inline-block'  }}>
                    
                    <table style={{ display: 'inline', verticalAlign: 'middle', marginRight: '10px' }}>
                      <tbody>
                        <tr>
                          <td style={{ borderBottom: '1px solid black', textAlign: 'center',fontWeight: 'bold' }}>Blue Background</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'center',fontWeight: 'bold' }}>Blue Background + Lightblue Background</td>
                        </tr>
                      </tbody>
                    </table>
                    (Age{'<'}25 = Age{'>='}25 );
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
                    (Age{'<'}25 = Age{'>='}25 );
                    <table style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '10px' }}>
                      <tbody>
                        <tr>
                          <td style={{ borderBottom: '1px solid black', textAlign: 'center',fontWeight: 'bold',fontWeight: 'bold' }}>Orange Background</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'center',fontWeight: 'bold',fontWeight: 'bold'}}>Orange Background + Lightorange Background</td>
                        </tr>
                      </tbody>
                    </table>
                    (Age{'<'}25 = Age{'>='}25 );
                    </div>
                   
                </Typography>
          
            </Paper>
     
      </Box>
  );
}



 