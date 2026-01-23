import { createTheme } from '@mui/material/styles';
import { green,teal,orange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: teal[600],
      light: green[300],
      dark: green[500],
      contrastText: '#fff'
    },
    secondary: {
      main: '#8ac6d1',
      light: '#ffffff',
      dark: '#00c853',
      contrastText: '#fff',
    },
    text: {
        primary: '#000000',
      },
    typography: {
        fontFamily: 'Arial, sans-serif',
        fontSize: 18
    },
  },
});

export default theme;
