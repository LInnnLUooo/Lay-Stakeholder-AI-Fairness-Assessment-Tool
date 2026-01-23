import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import '../styles.css'; 
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

// import {group_predGood_realBad_female, group_predGood_realBad_male, group_predGood_realGoodmale, group_predGood_realGood_male,
//   group_predBad_realBad_female, group_predBad_realBad_male, group_predBad_realGood_female, group_predBad_realGood_male }
//   from '../data/gendergroups.js';  xxxxxxxxx

import {group_predGood_realBad_female_IDs, group_predGood_realBad_male_IDs, group_predGood_realGood_female_IDs, group_predGood_realGood_male_IDs,
  group_predBad_realBad_female_IDs, group_predBad_realBad_male_IDs, group_predBad_realGood_female_IDs, group_predBad_realGood_male_IDs }
  from '../data/gendergroups.js';

// import & set: images + group data 
const goodfemaleImage = '/goodfemale.png';
const badfemaleImage = '/badfemale.png'; // The common image source for 'female'，注意斜杠一定不可以少。有了斜杠，无论路由路径如何变化，都会从绝对路径加载找到图片。否则切换路由使用相对路径，容易找不到。
const goodmaleImage = '/goodmale.png';
const badmaleImage = '/badmale.png'; 

//group1: Good predictions & Rated Good Credit & Female
const itemsForgroup_predGood_realGood_female = group_predGood_realGood_female_IDs.map((id) => ({
  source: goodfemaleImage,
  id: id,
}));  
const Num_predGood_realGood_female = group_predGood_realGood_female_IDs.length

//group2: Good predictions & real bad & Female
const itemsForgroup_predGood_realBad_female = group_predGood_realBad_female_IDs.map((id) => ({
  source: badfemaleImage,
  id: id,
}));  
const Num_predGood_realBad_female = group_predGood_realBad_female_IDs.length

//group3: Bad predictions & Rated Good Credit & Female
const itemsForgroup_predBad_realGood_female = group_predBad_realGood_female_IDs.map((id) => ({
  source: goodfemaleImage,
  id: id,
})); 
const Num_predBad_realGood_female = group_predBad_realGood_female_IDs.length

//group4: Bad predictions & real bad & Female
const itemsForgroup_predBad_realBad_female = group_predBad_realBad_female_IDs.map((id) => ({
  source: badfemaleImage,
  id: id,
})); 
const Num_predBad_realBad_female = group_predBad_realBad_female_IDs.length

//group5: Good predictions & Rated Good Credit & Male
const itemsForgroup_predGood_realGood_male = group_predGood_realGood_male_IDs.map((id) => ({
  source: goodmaleImage,
  id: id,
}));  
const Num_predGood_realGood_male = group_predGood_realGood_male_IDs.length

//group6: Good predictions & real bad & Male
const itemsForgroup_predGood_realBad_male = group_predGood_realBad_male_IDs.map((id) => ({
  source: badmaleImage,
  id: id,
}));  
const Num_predGood_realBad_male =  group_predGood_realBad_male_IDs.length

//group7: Bad predictions & Rated Good Credit & Male
const itemsForgroup_predBad_realGood_male = group_predBad_realGood_male_IDs.map((id) => ({
  source: goodmaleImage,
  id: id,
})); 
const Num_predBad_realGood_male =  group_predBad_realGood_male_IDs.length

//group8: Bad predictions & real bad & Mmale
const itemsForgroup_predBad_realBad_male = group_predBad_realBad_male_IDs.map((id) => ({
  source: badmaleImage,
  id: id,
})); 
const Num_predBad_realBad_male =  group_predBad_realBad_male_IDs.length

// const handleItemClick = (item) => {
  
//   console.log(`Clicked image with ID: ${item.id}`);
//   // You can display the ID in a modal, a tooltip, or perform any other desired action
// };

export default function GroupEqualOpportunityImageGender({ selectedID, handleItemClick }) {
  // const handleImageClick = (id) => {
  //   // 将选定的 ID 传递给父组件
  //   handleItemClick(id);
  // };

  const theme = useTheme(); 
  return (
      <Box display="flex" 
      flexDirection="column" 
      alignItems="center"
      boxShadow="0px 4px 12px #7986cb" 
      borderRadius="8px"
      border={`2px solid #42a5f5`} 
      padding="3px"> 

          {/* 1. Header: Group Fairness Metrics & Results*/}
          <Typography variant="h6" component="div" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
              Equal Opportunity for Group Fairness
          </Typography>

          {/* 2. row：female & male groups*/}
          <Box display="flex" 
            justifyContent="center" 
            padding="3px">

              {/* 2.1 right part： female GOOD & BAD credictions*/}
              <Box display="flex" flexDirection="column" alignItems="center" width = {1000} borderRight={`4px solid ${theme.palette.primary.main}`}> 
                  {/* 2.1.1 female title*/}
                 
                  <Typography variant="h5" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      {/* //border: `4px solid ${theme.palette.primary.main}` */}
                      Female
                  </Typography>

                  <Typography variant="h6" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      {/* //border: `4px solid ${theme.palette.primary.main}` */}
                      (Total: {Num_predGood_realGood_female+Num_predGood_realBad_female+Num_predBad_realGood_female+Num_predBad_realBad_female})
                  </Typography>
                  

                  {/* 2.1.2 female GOOD predictions*/}
                  <Box display="flex" flexDirection="column" alignItems="center"
                    padding="3px"
                    margin="5px"
                    width = '96%'
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
                  
                            {/* (2.1)instances：Good Predictions， Rated Good Credit Lables*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding="6px" marginRight = "3px" alignItems="center" backgroundColor="#FEFDD2" sx={{ border: '2px solid #18C82A' }}>
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold'}}>
                                    Rated Good Credit: {Num_predGood_realGood_female}
                                  </Typography> 
                                  <ImageList sx={{ width: 450,height: 700}} cols={5} rowHeight={30}>
                                            {itemsForgroup_predGood_realGood_female.map((item) => (
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

                            {/* (2.1)instances：Good Predictions， Rated Bad Lables*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center"  backgroundColor="#CFCFCB" sx={{ border: '2px solid #18C82A' }} >            
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold'}}>
                                          Rated Bad Credit: {Num_predGood_realBad_female}
                                  </Typography> 
                                  
                                  <ImageList sx={{ width: 450,height: 460}} cols={5} rowHeight={30}>
                                      {itemsForgroup_predGood_realBad_female.map((item) => (
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
                    width = '96%'
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
                  
                            {/* (2.1)instances：Bad Predictions， Rated Good Credit Lables*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold'}}>
                                        Rated Good Credit: {Num_predBad_realGood_female}
                                </Typography> 
                                
                                <ImageList sx={{ width: 450,height: 340}} cols={5} rowHeight={30}>
                                          {itemsForgroup_predBad_realGood_female.map((item) => (
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

                            {/* (2.1)instances：Bad Predictions， Rated Bad Lables*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px"  alignItems="center"  backgroundColor="#CFCFCB" sx={{ border: '2px solid #E75555' }} >
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold'}}>
                                      Rated Bad Credit: {Num_predBad_realBad_female}
                                </Typography> 
                                
                                <ImageList  sx={{ width: 450,height: 300}} cols={5} rowHeight={30}>
                                          {itemsForgroup_predBad_realBad_female.map((item) => (
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


              {/* 2.2 male GOOD & BAD credictions*/}
              <Box display="flex" flexDirection="column" alignItems="center" width = {1000} > 
                  {/* 2.1.1 male title*/}
                  <Typography variant="h5" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      {/* //border: `4px solid ${theme.palette.primary.main}` */}
                      Male
                  </Typography>

                  <Typography variant="h6" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      {/* //border: `4px solid ${theme.palette.primary.main}` */}
                      (Total: {Num_predGood_realGood_male+Num_predGood_realBad_male+Num_predBad_realGood_male+Num_predBad_realBad_male})
                  </Typography>

                  {/* 2.1.2 male GOOD predictions*/}
                  <Box display="flex" flexDirection="column" alignItems="center"
                    padding="3px"
                    margin="5px"
                    width = '96%'
                    sx={{
                      border: '4px dashed #18C82A'  // 设置为绿色的虚线边框
                    }}>

                        {/* (1)title： Good Predictions*/}
                        <Typography variant="h6" component="div" gutterBottom color='#18C82A'
                          sx={{ fontWeight: 'bold'}}>
                            Predicted as GOOD Credit
                        </Typography>

                        {/* (2)instances: Good Predictions*/}
                        <Box display="flex" justifyContent="center" padding="3px">          
                  
                            {/* (2.1)instances：Good Predictions， Rated Good Credit Lables*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center" backgroundColor="#FEFDD2" sx={{ border: '2px solid #18C82A' }}>
                                <Typography component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',fontSize:"16px"}}>
                                        Rated Good Credit: {Num_predGood_realGood_male}
                                </Typography> 

                                <ImageList sx={{ width: 400,height: 700}} cols={10} rowHeight={20}>
                                                {itemsForgroup_predGood_realGood_male.map((item) => (
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

                            {/* (2.1)instances：Good Predictions， Rated Bad Lables*/}
                            <Box   display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px"  alignItems="center"  backgroundColor="#CFCFCB" sx={{ border: '2px solid #18C82A' }} >
                                <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold'}}>
                                            Rated Bad Credit: {Num_predGood_realBad_male}
                                </Typography> 
                                
                                <ImageList sx={{ width: 450,height: 700}} cols={5} rowHeight={30}>
                                                {itemsForgroup_predGood_realBad_male.map((item) => (
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
                    width = '96%'
                    sx={{
                      border: '4px dashed #E75555'  // 设置为红色的虚线边框
                    }}>

                        {/* (1)title： BAD Predictions*/}
                        <Typography variant="h6" component="div" gutterBottom color='#E75555'
                          sx={{ fontWeight: 'bold'}}>
                            Predicted as BAD Credit
                        </Typography>

                        {/* (2)instances: BAD Predictions*/}
                        <Box display="flex" justifyContent="center"  padding="3px">          
                  
                            {/* (2.1)instances：Bad Predictions， Rated Good Credit Lables*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom  color='#E75555' sx={{ fontWeight: 'bold'}}>
                                                Rated Good Credit: {Num_predBad_realGood_male}
                                </Typography> 
                                
                                <ImageList sx={{ width: 450,height: 120}} cols={5} rowHeight={30}>
                                                {itemsForgroup_predBad_realGood_male.map((item) => (
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

                            {/* (2.1)instances：Bad Predictions， Rated Bad Lables*/}
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px"  alignItems="center"  backgroundColor="#CFCFCB" sx={{ border: '2px solid #E75555' }} >
                                <Typography Typography variant="h7" component="div" gutterBottom  color='#E75555' sx={{ fontWeight: 'bold'}}>
                                                    Rated Bad Credit: {Num_predBad_realBad_male}
                                </Typography> 

                                <ImageList sx={{ width: 450,height: 340}} cols={5} rowHeight={30}>
                                                {itemsForgroup_predBad_realBad_male.map((item) => (
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

           {/* 3. text exP*/}    
            <Paper elevation={3} sx={{ width: '86%', backgroundColor: '#f5f5f5', padding: '10px', margin: '10px',borderRadius: '8px' }}>
                <Typography variant="h6" component="div" gutterBottom color="primary"
                 >
                    <strong>Equal Opportunity Definition: </strong>
                    <br/>
                    The AI application is fairness if it has "equal" probability for <strong> Rated Good Credit males and Rated Good Credit females</strong> to have good predicted credit.
                   <br/>

                   <div style={{ borderRadius: '8px', border: '2px solid #42a5f5', margin:"10px", padding: '10px',display: 'inline-block'  }}>
                    <table style={{ display: 'inline', verticalAlign: 'middle', marginRight: '10px' }}>
                      <tbody>
                        <tr>
                          <td style={{ borderBottom: '1px solid black', textAlign: 'center' }}>Females predicted as Good Credit</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'center' }}>Rated Good Credit Females</td>
                        </tr>
                      </tbody>
                    </table>
                    =
                    <table style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '10px' }}>
                      <tbody>
                        <tr>
                          <td style={{ borderBottom: '1px solid black', textAlign: 'center' }}>Males Predicted as Good Credit</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'center' }}>Rated Good Credit Males</td>
                        </tr>
                      </tbody>
                    </table>
                    =
                    <table style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '10px' }}>
                      <tbody>
                        <tr>
                          <td style={{ borderBottom: '1px solid black', textAlign: 'center',fontWeight: 'bold' }}>Yellow Background</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'center',fontWeight: 'bold'}}>Yellow Background + White Background</td>
                        </tr>
                      </tbody>
                    </table> 
                    </div>
                   
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ color: 'red', fontSize: '24px' }}>❗</span>
                        <span style={{ marginLeft: '10px', color: 'red',fontWeight: 'bold' }}>Groups with a gray background are not considered for fairness.</span>
                    </div>
                   <br/>
                    <table style={{ display: 'inline', verticalAlign: 'middle', marginRight: '10px' }}>
                      <tbody>
                        <tr>
                          <td style={{ borderBottom: '1px solid black', textAlign: 'center' }}>Females predicted as Good Credit</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'center' }}>Rated Good Credit Females</td>
                        </tr>
                      </tbody>
                    </table>
                    =
                    <table style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '10px' }}>
                      <tbody>
                        <tr>
                          <td style={{ borderBottom: '1px solid black', textAlign: 'center' }}>27</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'center' }}>27 + 4</td>
                        </tr>
                      </tbody>
                    </table>                                 
                    <span> =0.87 (87%)</span>

                    <br/>
                    <table style={{ display: 'inline', verticalAlign: 'middle', marginRight: '10px' }}>
                      <tbody>
                        <tr>
                          <td style={{ borderBottom: '1px solid black', textAlign: 'center' }}>Males predicted as Good Credit</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'center' }}>Rated Good Credit Males</td>
                        </tr>
                      </tbody>
                    </table>
                    =
                    <table style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '10px' }}>
                      <tbody>
                        <tr>
                          <td style={{ borderBottom: '1px solid black', textAlign: 'center' }}>108</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'center' }}>108 + 1</td>
                        </tr>
                      </tbody>
                    </table>                                 
                    <span> = 0.99 (99%)</span>

                    <br/>
                    Difference = <strong>female - male</strong> = 0.87 - 0.99 = -0.12 (-12%)


                </Typography>
          
            </Paper>
     

      </Box>
  );
}



 