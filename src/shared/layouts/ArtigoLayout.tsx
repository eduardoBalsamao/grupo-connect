import {Box, Typography, Grid} from '@mui/material';
import Divider from '@mui/material/Divider';

interface IArtigoLayoutProps {
    title: string | undefined;
    date: string | undefined;
    image?: string | undefined;
    text: string | undefined;
}

export const ArtigoLayout: React.FC<IArtigoLayoutProps> = ({children, title, image, date, text}) => {
  return (
    <Box flex="1" display="flex" flexDirection="column"
      gap={1} sx={{backgroundColor: '#F2F4FA', minHeight: '100vh'}}
    >
      <Box sx={{marginTop: {xs: '7vh', md: '10vh'}, padding: '5vh'}}>
        <Typography variant='h4' fontFamily="Chakra Petch" color="#1B5682">
          {title}
        </Typography>
        <Typography marginY='1vh' marginX='1vh' fontFamily='Montserrat' variant='overline'>
          {date}
        </Typography>
        <Divider />
        <Grid container
          direction="column"
          justifyContent="center"
          alignItems="center">

          <Grid item marginTop='2vh'>
            <Box sx={{maxWidth: {sx: '40vh', md: '75vh'}}}>
              <img style={{maxWidth: '100%'}} src={image} />
            </Box>
          </Grid>
          <Grid item>
            <Typography marginY='1vh' marginX='1vh' fontFamily='Montserrat' variant='overline'>
              {date}
            </Typography>

          </Grid>


        </Grid>
        <Typography sx={{whiteSpace: 'pre-line', marginX: {xs: '1vh', md: '5vh'}, marginY: {xs: '2vh', md: '6vh'}}}
          fontFamily='Montserrat' variant='body1' fontWeight='400'
        >
          {text}
        </Typography>


      </Box>
      {children}

    </Box>
  );
};
