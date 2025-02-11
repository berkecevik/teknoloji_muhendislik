import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5C5B59', // Customize colors
    },
    secondary: {
      main: '#F3E197',
    },
    background: {
        default: 'linear-gradient(45deg, #020100 30%, #5C5B59 90%)',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

export default theme;
