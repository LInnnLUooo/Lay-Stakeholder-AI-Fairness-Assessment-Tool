

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ModelPerformance from '../modelComponents/ModelPerformance';
import GoodPerformance from '../modelComponents/GoodPerformance';
import BadPerformance from '../modelComponents/BadPerformance';

import { useTheme } from '@mui/material/styles';

import { useNavigate } from 'react-router-dom';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { styled } from '@mui/system';


import { Routes, Route } from "react-router-dom";

const Image = styled('img')({
  width: '25px',
  height: '25px',
  verticalAlign: 'middle',
  marginRight: '6px',
});

export default function ModelView() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  

  const theme = useTheme();
  const navigate = useNavigate();

  const [modelTextExplanation, setModelTextExplanation] = useState(true);
  const [modelPerformanceExplanation, setModelPerformanceExplanation] = useState(true);


  
  return (
    <Box display="flex" flexDirection="column" alignItems="center"  height='100%'> 

      {modelTextExplanation && modelPerformanceExplanation &&  
        <Box width='100%' height='100%'>
            <Box 
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  width="95%"
                  minHeight="34%"
                  boxShadow="0px 4px 12px #7986cb"
                  borderRadius="8px"
                  padding="6px" 
                  margin='6px'
                  margin-bottom='0px'
                  padding-bottom='0px'
                  height="98%"      
                  mb={theme.spacing(2)}
                >
                  <Typography variant="h5" component="div" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
                    How the AI model works
                  </Typography>
                  <Typography variant="h6" component="div" gutterBottom  >
                  <Image src='/Red_exclaim.png' alt="Info Icon" />
                  Please click the imgae to check explanations.
                  </Typography>
                  
                  <Box component="img" 
                      src="model.png" 
                      alt="Model Explanation"
                      width="100%"
                      sx={{ height: 200, objectFit: 'contain' }}
                      onClick={handleClickOpen}
                  />
                  <Dialog open={open} onClose={handleClose} maxWidth="lg">
                  <DialogContent>
                    <Box
                      component="img"
                      src="model.png"
                      alt="Model Explanation"
                      sx={{ width: '100%', height: 'auto' }}
                      onClick={handleClose}
                    />
                    <Typography variant="h6" component="div" gutterBottom  >
                  <strong>Training Data:</strong> we take some 800 examples/customers from real life. These examples include the same 20 features and the expert’s credit rating.
                  <br/>
                  <strong>Model(Logistic Regression)</strong>: We then feed it into an AI which learns a pattern in this training data, which we call the model. In this case, we are using what is called a Logistic Regression. Logistic regression uses statistical techniques to evaluate the importance of each feature in decision-making. In the German credit dataset, which has 20 features representing information about loan applicants (e.g., loan amount, credit history), the logistic regression model assigns a <strong>weight</strong> to each feature indicating its impact <strong>(feature importance)</strong> on the prediction. The model multiplies each feature value by its weight and sums these products to get an overall score. Based on this score, the model predicts whether an applicant's credit is good or bad, aiming to match expert judgments as closely as possible. 
                  <br/> 
                  <strong>Test Data:</strong> Once the model is trained, we can use it to get the AI’s Predicted Credit [200 customers above].
                  <br/>
                  <strong>Model Accuracy:</strong> In the test data, if the AI model gives the same prediction as the expert, we consider the AI's prediction is correct. Model accuracy is the proportion of people that were predicted correctly by the AI, i.e., the proportion of AI predictions that match expert predictions. 

                  </Typography>
                  </DialogContent>
                </Dialog>

                <Typography variant="h5" component="div" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
                          Model Performance
                    </Typography>

                    <Box 
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        width="95%"
                        border={`2px solid #42a5f5`}
                        borderRadius="8px"
                        padding="10px"
                        marginBottom="2px"
                      >
                          <Typography variant="body2" component="div" gutterBottom color="primary" align="left" sx={{ fontWeight: 'bold' }}>
                            Overall Accuracy
                          </Typography>

                          <Box component="div" height={200} width="95%">
                            <ModelPerformance /> 
                          </Box> 
                    </Box>

                    <Box 
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        width="95%"
                        border={`2px solid #42a5f5`}
                        borderRadius="8px"
                        padding="10px"
                        marginBottom="2px"
                      >
                          <Typography variant="body2" component="div" gutterBottom color="primary" align="left" sx={{ fontWeight: 'bold',
                            width: '100px',
                            overflowWrap: 'break-word'
                           }}>
                            Customers with Rated Good Credit: Accuracy
                          </Typography>
                          <Box component="div" height={200} width="95%">
                              <GoodPerformance/> 
                          </Box> 
                    </Box>

                    <Box 
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        width="95%"
                        border={`2px solid #42a5f5`}
                        borderRadius="8px"
                        padding="10px"
                        marginBottom="2px"
                      >
                          <Typography variant="body2" component="div" gutterBottom color="primary" align="left" sx={{ fontWeight: 'bold',
                            width: '100px',
                            overflowWrap: 'break-word'
                           }}>
                             Customers with Rated Bad  Credit: Accuracy
                          </Typography>
                          <Box component="div" height={200} width="95%">
                              <BadPerformance/> 
                          </Box> 
                    </Box>

              





                   

                    <Typography variant="h5" component="div" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>Protected Features</Typography>
                    
                    <Typography variant="h6">
                        Protected attributes are features that are protected by law. By law, you cannot discriminate against people based on these attributes. Currently, in the UK Equality Act, the following are protected: age, disability, gender reassignment, marriage and civil partnership, race, religion or belief, sex or gender, and sexual orientation. In our loan scenario, we have two protected attributes, which are commonly used to define AI fairness <strong>Age and Gender</strong>. 
                        </Typography>
                     
                    
                   

                </Box>
                    

      </Box>
      }



    </Box>
  );
  }
