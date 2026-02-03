
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


import {group_predGood_realBad_female_IDs, group_predGood_realBad_male_IDs, group_predGood_realGood_female_IDs, group_predGood_realGood_male_IDs,
  group_predBad_realBad_female_IDs, group_predBad_realBad_male_IDs, group_predBad_realGood_female_IDs, group_predBad_realGood_male_IDs }
  from '../data/foreignergroups.js';

const goodfemaleImage = '/goodforeigner.png';
const badfemaleImage = '/badforeigner.png';
const goodmaleImage = '/goodlocal.png';
const badmaleImage = '/badlocal.png'; 

const itemsForgroup_predGood_realGood_female = group_predGood_realGood_female_IDs.map((id) => ({
  source: goodfemaleImage,
  id: id,
}));  
const Num_predGood_realGood_female = group_predGood_realGood_female_IDs.length

const itemsForgroup_predGood_realBad_female = group_predGood_realBad_female_IDs.map((id) => ({
  source: badfemaleImage,
  id: id,
}));  
const Num_predGood_realBad_female = group_predGood_realBad_female_IDs.length

const itemsForgroup_predBad_realGood_female = group_predBad_realGood_female_IDs.map((id) => ({
  source: goodfemaleImage,
  id: id,
})); 
const Num_predBad_realGood_female = group_predBad_realGood_female_IDs.length

const itemsForgroup_predBad_realBad_female = group_predBad_realBad_female_IDs.map((id) => ({
  source: badfemaleImage,
  id: id,
})); 
const Num_predBad_realBad_female = group_predBad_realBad_female_IDs.length

const itemsForgroup_predGood_realGood_male = group_predGood_realGood_male_IDs.map((id) => ({
  source: goodmaleImage,
  id: id,
}));  
const Num_predGood_realGood_male = group_predGood_realGood_male_IDs.length

const itemsForgroup_predGood_realBad_male = group_predGood_realBad_male_IDs.map((id) => ({
  source: badmaleImage,
  id: id,
}));  
const Num_predGood_realBad_male =  group_predGood_realBad_male_IDs.length

const itemsForgroup_predBad_realGood_male = group_predBad_realGood_male_IDs.map((id) => ({
  source: goodmaleImage,
  id: id,
})); 
const Num_predBad_realGood_male =  group_predBad_realGood_male_IDs.length

const itemsForgroup_predBad_realBad_male = group_predBad_realBad_male_IDs.map((id) => ({
  source: badmaleImage,
  id: id,
})); 
const Num_predBad_realBad_male =  group_predBad_realBad_male_IDs.length

  

export default function GroupDemographicParityImageForeigner({ selectedID, handleItemClick }) {

  const theme = useTheme(); 
  return (
      <Box display="flex" 
      flexDirection="column" 
      alignItems="center"
      boxShadow="0px 4px 12px #7986cb" 
      borderRadius="8px"
      border={`2px solid #42a5f5`} 
      padding="3px"> 

          <Typography variant="h6" component="div" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
              Demographic Parity for Group Fairness
          </Typography>

          
          <Box display="flex" 
            justifyContent="center" 
            padding="3px">

              <Box display="flex" flexDirection="column" alignItems="center" width = {1100} borderRight={`4px solid ${theme.palette.primary.main}`}> 
                 
                  <Typography variant="h5" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      Foreign Worker
                  </Typography>

                  <Typography variant="h6" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      (Total: {Num_predGood_realGood_female+Num_predGood_realBad_female+Num_predBad_realGood_female+Num_predBad_realBad_female})
                  </Typography>
                  

                  <Box display="flex" flexDirection="column" alignItems="center"
                    padding="3px"
                    margin="5px"
                    width = '96%'
                    backgroundColor="#FEFDD2"
                    sx={{
                      border: '4px dashed #18C82A'
                    }}>

                        <Typography variant="h6" component="div" gutterBottom color='#18C82A'
                          sx={{ fontWeight: 'bold'}}>
                            Predicted as GOOD Credit
                        </Typography>

                        <Box display="flex" justifyContent="center" padding="3px" >          
                  
                            <Box  display="flex"  flex="3" flexDirection="column" padding="6px" marginRight = "3px" alignItems="center" sx={{ border: '2px solid #18C82A' }}>
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold'}}>
                                    Rated Good Credit: {Num_predGood_realGood_female}
                                  </Typography>            

                                  <ImageList sx={{ width: 500,height: 980}} cols={10} rowHeight={30}>
                                            {itemsForgroup_predGood_realGood_female.map((item) => (
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

                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center"  sx={{ border: '2px solid #18C82A' }}>            
                                  <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold'}}>
                                          Rated Bad Credit: {Num_predGood_realBad_female}
                                  </Typography> 
                                  
                                  <ImageList sx={{ width: 450,height: 1000}} cols={5} rowHeight={30}>
                                      {itemsForgroup_predGood_realBad_female.map((item) => (
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
                    width = '96%'
                    sx={{
                      border: '4px dashed #E75555'
                    }}>

                        <Typography variant="h6" component="div" gutterBottom color='#E75555'
                          sx={{ fontWeight: 'bold'}}>
                            Predicted as BAD Credit
                        </Typography>

                        <Box display="flex" justifyContent="center"  padding="3px" >          
                  
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold'}}>
                                        Rated Good Credit: {Num_predBad_realGood_female}
                                </Typography> 
                                
                                <ImageList sx={{ width: 500,height: 160}} cols={5} rowHeight={30}>
                                          {itemsForgroup_predBad_realGood_female.map((item) => (
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

                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px"  alignItems="center" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#E75555' sx={{ fontWeight: 'bold'}}>
                                      Rated Bad Credit: {Num_predBad_realBad_female}
                                </Typography> 
                                
                                <ImageList sx={{ width: 450,height: 450}} cols={5} rowHeight={30}>
                                          {itemsForgroup_predBad_realBad_female.map((item) => (
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


              <Box display="flex" flexDirection="column" alignItems="center" width = {900} > 
                  <Typography variant="h5" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      Local
                  </Typography>

                  <Typography variant="h6" component="div" gutterBottom color="primary" 
                    sx={{ fontWeight: 'bold'}}> 
                      (Total: {Num_predGood_realGood_male+Num_predGood_realBad_male+Num_predBad_realGood_male+Num_predBad_realBad_male})
                  </Typography>

                  <Box display="flex" flexDirection="column" alignItems="center"
                    padding="3px"
                    margin="5px"
                    width = '96%'
                    backgroundColor="#FEFDD2"
                    sx={{
                      border: '4px dashed #18C82A'
                    }}>

                        <Typography variant="h6" component="div" gutterBottom color='#18C82A'
                          sx={{ fontWeight: 'bold'}}>
                            Predicted as GOOD Credit
                        </Typography>

                        <Box display="flex" justifyContent="center" padding="3px">          
                  
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center"  sx={{ border: '2px solid #18C82A' }}>
                                <Typography component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold',fontSize:"16px"}}>
                                        Rated Good Credit: {Num_predGood_realGood_male}
                                </Typography> 

                                <ImageList sx={{ width: 400,height: 230}} cols={5} rowHeight={20}>
                                                {itemsForgroup_predGood_realGood_male.map((item) => (
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

                            <Box   display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px"  alignItems="center"  sx={{ border: '2px solid #18C82A' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom color='#18C82A'sx={{ fontWeight: 'bold'}}>
                                            Rated Bad Credit: {Num_predGood_realBad_male}
                                </Typography> 
                                
                                <ImageList  sx={{ width: 400,height: 1000}} cols={5} rowHeight={30}>
                                                {itemsForgroup_predGood_realBad_male.map((item) => (
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
                    width = "96%"
                    sx={{
                      border: '4px dashed #E75555'
                    }}>

                        <Typography variant="h6" component="div" gutterBottom color='#E75555'
                          sx={{ fontWeight: 'bold'}}>
                            Predicted as BAD Credit
                        </Typography>

                        <Box display="flex" justifyContent="center"  padding="3px">          
                  
                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px" alignItems="center" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom  color='#E75555' sx={{ fontWeight: 'bold'}}>
                                                Rated Good Credit: {Num_predBad_realGood_male}
                                </Typography> 
                                
                                <ImageList sx={{ width: 400,height: 120}} cols={5} rowHeight={30}>
                                                {itemsForgroup_predBad_realGood_male.map((item) => (
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

                            <Box  display="flex"  flex="3" flexDirection="column" padding='6px' marginRight = "3px"  alignItems="center" sx={{ border: '2px solid #E75555' }}>
                                <Typography Typography variant="h7" component="div" gutterBottom  color='#E75555' sx={{ fontWeight: 'bold'}}>
                                                    Rated Bad Credit: {Num_predBad_realBad_male}
                                </Typography> 

                                <ImageList sx={{ width: 400,height: 450}} cols={5} rowHeight={30}>
                                                {itemsForgroup_predBad_realBad_male.map((item) => (
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
          
            <Paper elevation={3} sx={{ width: '98%', backgroundColor: '#f5f5f5', padding: '10px', margin: '10px',borderRadius: '8px' }}>
                <Typography  variant="h6" component="div" gutterBottom color="primary"
                 >
                    <strong>Demographic Parity Definition: </strong>
                    <br/>
                    The AI application is fairness if it has "equal" probability for <strong> Foreign Workers and Locals</strong> to have good predicted credit.
                   <br/>

                   <div style={{ borderRadius: '8px', border: '2px solid #42a5f5', margin:"10px", padding: '10px',display: 'inline-block'  }}>
                    <table style={{ display: 'inline', verticalAlign: 'middle', marginRight: '10px' }}>
                      <tbody>
                        <tr>
                          <td style={{ borderBottom: '1px solid black', textAlign: 'center' }}>Foreign Workers predicted as Good Credit</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'center' }}>Total Foreign Workers</td>
                        </tr>
                      </tbody>
                    </table>
                    =
                    <table style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '10px' }}>
                      <tbody>
                        <tr>
                          <td style={{ borderBottom: '1px solid black', textAlign: 'center' }}>Locals Predicted as Good Credit</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'center' }}>Total Locals</td>
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
                   
                   <br/>
                    <table style={{ display: 'inline', verticalAlign: 'middle', marginRight: '10px' }}>
                      <tbody>
                        <tr>
                          <td style={{ borderBottom: '1px solid black', textAlign: 'center' }}>Foreign Workers predicted as Good Credit</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'center' }}>Total Foreign Workers</td>
                        </tr>
                      </tbody>
                    </table>
                    =
                    <table style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '10px' }}>
                      <tbody>
                        <tr>
                          <td style={{ borderBottom: '1px solid black', textAlign: 'center' }}>125+42</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'center' }}>125+42 + 5+16</td>
                        </tr>
                      </tbody>
                    </table>                                 
                    <span> = 0.89 (89%)</span>

                    <br/>
                    <table style={{ display: 'inline', verticalAlign: 'middle', marginRight: '10px' }}>
                      <tbody>
                        <tr>
                          <td style={{ borderBottom: '1px solid black', textAlign: 'center' }}>Locals predicted as Good Credit</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'center' }}>Total Locals</td>
                        </tr>
                      </tbody>
                    </table>
                    =
                    <table style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '10px' }}>
                      <tbody>
                        <tr>
                          <td style={{ borderBottom: '1px solid black', textAlign: 'center' }}>10+1</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'center' }}>10+1 + 0+1</td>
                        </tr>
                      </tbody>
                    </table>                                 
                    <span> = 0.92 (92%)</span>

                    <br/>
                    Difference = <strong>Foreign Workers - Locals</strong> = 0.89 - 0.92 = -0.03 (-3%)


                </Typography>
          
            </Paper>
     

         
      </Box>
  );
}



 