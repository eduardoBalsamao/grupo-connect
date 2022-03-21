import {createTheme, responsiveFontSizes} from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    dark: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    dark?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/AppBar' {
  // eslint-disable-next-line no-unused-vars
  interface AppBarPropsColorOverrides {
    dark: true;
  }
}

export const LightTheme = responsiveFontSizes(createTheme({

  palette: {
    dark: {
      main: '#0C0C1D',
      contrastText: '#fff',
    },

    primary: {
      main: '#1b5682',
      dark: '#002e55',
      light: '#5282b2',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#3d143d',
      dark: '#2e0f2e',
      light: '#4d194d',
      contrastText: '#ffffff',
    },

  },

  typography: {
    h1: {
      fontFamily: 'Chakra Petch',
    },
    h2: {
      fontFamily: 'Chakra Petch',
    },
    h3: {
      fontFamily: 'Chakra Petch',
    },
    h4: {
      fontFamily: 'Chakra Petch',
    },
    h5: {
      fontFamily: 'Montserrat',
    },
    h6: {
      fontFamily: 'Montserrat',
    },
    subtitle1: {
      fontFamily: 'Montserrat',
      fontWeight: '700',
    },
    subtitle2: {
      fontFamily: 'Montserrat',
      fontWeight: '400',
    },
    body1: {
      fontFamily: 'Montserrat',
    },
    body2: {
      fontFamily: 'Montserrat',
    },
    button: {
      fontFamily: 'Chakra Petch',
    },

    fontFamily: [
      'Montserrat',
      'Chakra Petch',
    ].join(','),
  },

}));


