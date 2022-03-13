import {createTheme} from '@mui/material';

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

export const LightTheme = createTheme({

  palette: {
    dark: {
      main: '#000000',
      contrastText: '#fff',
    },

    primary: {
      main: '#1b5682',
      dark: '#154365',
      light: '#1e6091',
      contrastText: '#e8eff4',
    },
    secondary: {
      main: '#3d143d',
      dark: '#2e0f2e',
      light: '#4d194d',
      contrastText: '#ede8ed',
    },

  },
});


