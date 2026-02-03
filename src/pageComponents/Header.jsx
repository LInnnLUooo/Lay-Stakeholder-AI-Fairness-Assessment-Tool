import React from 'react';
import { styled } from '@mui/system';
import BalanceIcon from '@mui/icons-material/Balance';
import { Box, Typography, useTheme } from '@mui/material';


const StyledDashboardTitle = styled('div')({
  background:  '#26a69a',
  width: '100%',
  color: 'black',
  padding: '2px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '10px',
});


const Subtitle = styled('div')({
  fontSize: '16px',
  textAlign: 'center',
});


const ContentContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  });
  
  const IconContainer = styled('div')({
    marginRight: '8px',
    display: 'flex', 
    alignItems: 'center',
  });

function Header({title,subtitle}) {
  const theme = useTheme();
  return (
    <StyledDashboardTitle>
      <ContentContainer>
        
        <Typography 
        variant="h4" 
        component="h1" 
        sx={{ color:'#ffffff', display: 'flex', alignItems: 'center', height: '100%', fontWeight: 'bold'}}
      >
        {title}
      </Typography>
      </ContentContainer>
      <Subtitle>{subtitle}</Subtitle>
    </StyledDashboardTitle>
  );
}

export default Header;
