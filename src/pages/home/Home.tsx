import {HomeLayout} from '../../shared/layouts';
import {BaseLayout} from '../../shared/layouts';
import {Box, Card, CardContent, Grid, Typography, Button} from '@mui/material';


export const Home = () =>{
  return (
    <Box>
      <HomeLayout title='Grupo Connect'
        subtitle='Conectamos o mundo atraves de soluções e produtos IOT'
      >
        <Box width="400px" marginBottom="100px" marginTop="30px">
          <Button sx={{height: '50px', fontSize: '16px', borderRadius: '50px'}} fullWidth variant='contained'>Confira nossos Produtos</Button>
        </Box>
      </HomeLayout>

      <BaseLayout title='Como o IOT pode ajudar seu negócio e sua vida'>
        <Box marginTop="1vh">
          <Grid padding="20px" container justifyContent="space-around" alignItems="center" textAlign="center">
            <Grid item md={3}>
              <Box>
                <Card>
                  <CardContent>
                    <img style={{width: '100px'}} src={process.env.PUBLIC_URL + '/logo192.png'}></img>
                    <Typography sx={{fontSize: 20}} gutterBottom>
                    Conectar
                    </Typography>
                    <Typography sx={{fontSize: 14}} gutterBottom>
                  Conectamos os seus dispositivos a internet  com placas de aquisição de dados,e disponivilizamos em plataformas web para  ações de conectividade IOT.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
            <Grid item md={3}>
              <Card>
                <CardContent>
                  <img style={{width: '100px'}} src={process.env.PUBLIC_URL + '/logo192.png'}></img>
                  <Typography sx={{fontSize: 20}} gutterBottom>
                    Conectar
                  </Typography>
                  <Typography sx={{fontSize: 14}} gutterBottom>
                  Conectamos os seus dispositivos a internet  com placas de aquisição de dados,e disponivilizamos em plataformas web para  ações de conectividade IOT.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={3}>
              <Card >
                <CardContent>
                  <img style={{width: '100px'}} src={process.env.PUBLIC_URL + '/logo192.png'}></img>
                  <Typography sx={{fontSize: 20}} gutterBottom>
                    Conectar
                  </Typography>
                  <Typography sx={{fontSize: 14}} gutterBottom>
                  Conectamos os seus dispositivos a internet  com placas de aquisição de dados,e disponivilizamos em plataformas web para  ações de conectividade IOT.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

          </Grid>
        </Box>

      </BaseLayout>

    </Box>
  );
};
