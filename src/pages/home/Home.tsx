import {HomeLayout} from '../../shared/layouts';
import {BaseLayout} from '../../shared/layouts';
import {Box, Card, CardContent, Grid, Typography, Button} from '@mui/material';

const cardContent = [
  {
    id: 1,
    title: 'Conectar',
    text: 'Conectamos os seus dispositivos a internet usando placas de aquisição de dados e disponibilizamos em plataformas web.',
  },
  {
    id: 2,
    title: 'Gerenciar',
    text: 'Disponibilizamos seu próprio console para acompanhar os dados gerados e a partir da análise tomar as melhores decisões para resolver seus problemas.',
  },
  {
    id: 3,
    title: 'Prever',
    text: 'Obtenha acesso a informações sobre possíveis problemas para planejar ações preventivas dentro da plataforma.',
  },
];

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
        <Box>
          <Grid padding="20px" container justifyContent="space-around" alignItems="center" textAlign="center">
            {cardContent.map(({id, title, text}) => (
              <Grid key={id} item md={3}>
                <Box>
                  <Card variant="outlined" sx={{height: '325px'}}>
                    <CardContent>
                      <img style={{width: '100px', margin: '20px'}} src={process.env.PUBLIC_URL + '/logo192.png'}></img>
                      <Typography sx={{fontSize: 20}} gutterBottom>
                        {title}
                      </Typography>
                      <Typography sx={{fontSize: 14, paddingLeft: '10px', paddingRight: '10px'}} gutterBottom>
                        {text}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>

              </Grid>
            ))}


          </Grid>
        </Box>

      </BaseLayout>

    </Box>
  );
};
