import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          fontWeight: 600,
          borderRadius: 8.5,
          textTransform: 'none',
          '&.MuiButton-contained': {
            backgroundColor: '#009be5',
            '&:hover': {
              backgroundColor: '#006db3'
            }
          },
          '&.MuiButton-outlined': {
            color: '#fff',
            borderColor: '#009be5',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)'
            }
          },
          '&.Mui-disabled': { backgroundColor: 'rgba(0, 0, 0, 0.12)' }
        }
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: '1.7rem'
        }
      }
    }
  },
  palette: {
    white: {
      main: '#fff'
    },
    blue: {
      main: '#2196f3'
    },
    secondary: {
      main: '#9e9e9e'
    }
  },
  typography: {
    h1: {
      fontFamily: 'Roboto',
      fontSize: '2rem',
      fontWeight: 600,
      color: '#fff',
      letterSpacing: '0.5px',
      textTransform: 'capitalize'
    }
  }
});
