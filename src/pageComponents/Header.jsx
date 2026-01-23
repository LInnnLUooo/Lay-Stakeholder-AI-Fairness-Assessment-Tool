import React from 'react';
import { styled } from '@mui/system';
import BalanceIcon from '@mui/icons-material/Balance';
import { Box, Typography, useTheme } from '@mui/material';


const StyledDashboardTitle = styled('div')({
  background:  '#26a69a', // 背景色 '#8ac6d1' #4db6ac
  width: '100%', // 铺满外层box的横向
  color: 'black', // 文字颜色为白色
  padding: '2px', // 添加一些内边距
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '10px',
});

// const Title = styled('div')({
//   fontSize: '20px', // 标题字体大小
//   fontWeight: 'bold', // 标题字体粗细
//   margin: '4px 4px', // 上下外边距
// });

const Subtitle = styled('div')({
  fontSize: '16px', // 副标题字体大小
  textAlign: 'center', // 副标题居中
});


const ContentContainer = styled('div')({
  display: 'flex',
  alignItems: 'center', // 垂直居中
  justifyContent: 'center', // 水平居中
  });
  
  const IconContainer = styled('div')({
    marginRight: '8px', // 图标距离标题和副标题的右侧距离
    display: 'flex', 
    alignItems: 'center', // 垂直居中
  });

function Header({title,subtitle}) {
  const theme = useTheme();
  return (
    <StyledDashboardTitle>
      <ContentContainer>
        {/* <IconContainer>
          <img src='/logo.png' alt="Logo" style={{ width: '50px', height: '50px' }} />
        </IconContainer> */}
        
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
