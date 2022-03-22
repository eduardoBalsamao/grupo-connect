import {Grid, Typography, Box, Divider} from '@mui/material';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';


export const Footer: React.FC = () =>{
  return (
    <Box sx={{width: '100%', boxShadow: '0px -2px 13px 0px #0C0C1D'}}>
      <Grid sx={{backgroundColor: '#0C0C1D', paddingTop: '1vh'}} container direction='row' justifyContent="center">

        <Grid item >
          <img style={{height: '50px', marginTop: '0.5vh', marginBottom: '0.5vh', marginLeft: '1vh'}}
            src={process.env.PUBLIC_URL + '/logo192.png'} />
        </Grid>
        <Grid item >
          <Typography textAlign='center' fontFamily="Chakra Petch" color="white"
            sx={{marginTop: '4.5vh', marginLeft: '0.5vh', display: {xs: 'none', md: 'flex'}}}>
              GRUPO CONNECT
          </Typography>
        </Grid>
        <Grid item xs={7} >
        </Grid>
        <Grid container item xs={3} justifyContent="flex-end">
          <Stack direction="row" spacing={0}>
            <IconButton sx={{borderRadius: '50px'}} color="primary" component="span">
              <Avatar sx={{width: 30, height: 30}} src={process.env.PUBLIC_URL + '/ifacebook.svg'} />
            </IconButton>
            <IconButton color="primary" component="span">
              <Avatar sx={{width: 30, height: 30}} src={process.env.PUBLIC_URL + '/iinstagram.svg'} />
            </IconButton>
            <IconButton color="primary" aria-label="upload picture" component="span">
              <Avatar sx={{width: 30, height: 30}} src={process.env.PUBLIC_URL + '/ilinkedin.svg'} />
            </IconButton>
          </Stack>
        </Grid>

      </Grid>
      <Divider variant="middle"/>
      <Grid sx={{backgroundColor: '#0C0C1D', padding: '2.5vh'}} container direction='row' justifyContent="space-between">
        <Grid item sx={{marginLeft: '5vh'}}>
          <Stack justifyContent="center" alignItems="center" spacing={1}>
            <Typography variant="caption" color="#F2F4FA" fontWeight='700'>
              Contatos:
            </Typography>
            <Typography variant="caption" color="#F2F4FA">
              (xx)xxxxx-xxxx
            </Typography>
            <Typography variant="caption" color="#F2F4FA">
              (xx)xxxxx-xxxx
            </Typography>
          </Stack>
        </Grid>
        <Grid item sx={{marginRight: '5vh'}}>
          <Stack justifyContent="center" alignItems="center" spacing={1}>
            <Typography variant="caption" color="#F2F4FA" fontWeight='700'>
              Links Úteis:
            </Typography>
            <Typography variant="caption" color="#1B5682" fontWeight='700'>
              Termos e privacidade
            </Typography>
            <Typography variant="caption" color="#1B5682" fontWeight='700'>
              seila
            </Typography>
            <Typography variant="caption" color="#1B5682" fontWeight='700'>
              Contato
            </Typography>
          </Stack>
        </Grid>

      </Grid>
    </Box>
  );
};
