import {ThemeProvider} from '@mui/material';
import {BrowserRouter} from 'react-router-dom';
import {AppRoutes} from './routes';
import {Header} from './shared/components';
import {LightTheme} from './shared/themes';


export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

