import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';


export const Header: React.FC = () =>{
  const [anchorElNav, setAnchorElNav] = React
      .useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{
      height: '10vh',
      boxShadow: '0px 10px 13px -7px #00091a',
    }} color='dark'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'flex'}}}>

            <img style={{height: '50px'}}
              src={process.env.PUBLIC_URL + '/logo192.png'} />
            <Typography textAlign='center' fontFamily="Chakra Petch"
              sx={{marginTop: '4vh', marginLeft: '10px', display: {xs: 'none', md: 'flex'}}}>
              GRUPO CONNECT
            </Typography>

          </Box>
          <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}, textAlign: 'center'}}>
            <Typography textAlign='center' fontFamily="Chakra Petch">
              GRUPO CONNECT
            </Typography>
          </Box>

          <Box sx={{marginTop: '20px', flexGrow: 0, display: {xs: 'none', md: 'flex'}}}>

            <Button
              onClick={()=> {
                console.log('b2');
              }}
              sx={{color: 'white', display: 'block'}}
            >
                SOBRE NÓS
            </Button>
            <Button
              onClick={()=> {
                console.log('b2');
              }}
              sx={{color: 'white', display: 'block'}}
            >
                PRODUTOS
            </Button>
            <Button
              onClick={()=> {
                console.log('b3');
              }}
              sx={{color: 'white', display: 'block'}}
            >
                CONTATO
            </Button>
            <Button
              onClick={()=> {
                console.log('b4');
              }}
              sx={{color: 'white', display: 'block'}}
            >
                  Sistema Connect
            </Button>


          </Box>
          <Box sx={{flexGrow: 0, display: {xs: 'flex', md: 'none'}}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {xs: 'block', md: 'none'},
              }}
            >
              <MenuItem onClick={()=> {
                console.log('b1');
              }}>
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem onClick={()=> {
                console.log('b1');
              }}>
                <Typography textAlign="center">Sobre Nós</Typography>
              </MenuItem>
              <MenuItem onClick={()=> {
                console.log('b1');
              }}>
                <Typography textAlign="center">Contato</Typography>
              </MenuItem>
              <MenuItem onClick={()=> {
                console.log('b1');
              }}>
                <Typography textAlign="center">Sistema Connect</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
