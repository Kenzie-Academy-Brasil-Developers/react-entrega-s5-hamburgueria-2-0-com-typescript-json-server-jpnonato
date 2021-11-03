import { createTheme } from '@material-ui/core'
import { green, red, yellow, blue, grey } from '@material-ui/core/colors'
import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`

  :root{
    --grey-dark: ${grey[600]};
    --grey-medium: ${grey[300]};
    --grey-light: ${grey[100] };
    --grey-white: ${grey[50]};
    --secondary: ${red[400]};
    --primary:  ${green[800]};
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'inter', Sans-Serif;
  }
`;

export const mainTheme = createTheme({
    palette: {
      primary: {
        main: green[800],
      },
      success: {
        main: green[900],
      },
      secondary: {
        main: red[400],
      },
      error: {
        main: red[700],
      },
      warning: {
        main: yellow[700],
      },
      info: {
        main: blue[900],
      },
    },
    typography: {
      fontFamily: [
        'inter',
        'sans-serif',
      ].join(','),
      fontSize: 12,
    },
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: 'text' },
            style: {
              textTransform: 'none',
              border: 'none',
              backgroundColor: grey[50],
              color: grey[300],
              fontWeight: 'bold'
            },
          },
          {
            props: { variant: 'contained' },
            style: {
              
              color: grey[50],
              
            },
          },
        ],
      },
    },
  });
