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
        <Box sx={{width: {md: '350px'}}} marginBottom="100px" marginTop="30px">
          <Button fullWidth sx={{height: '50px', fontSize: '14px', borderRadius: '50px'}} variant='contained'>Confira nossos Produtos</Button>
        </Box>
      </HomeLayout>

      <BaseLayout title='Como o IOT pode transformar a sua vida'>
        <Box>
          <Grid padding="20px" container justifyContent="space-around" alignItems="center" textAlign="center">
            {cardContent.map(({id, title, text}) => (
              <Grid key={id} item md={3}>
                <Box sx={{marginBottom: '3vh'}}>
                  <Card sx={{height: {md: '48vh'}}}>
                    <CardContent>
                      <img style={{width: '90px'}} src={process.env.PUBLIC_URL + '/logo192.png'}></img>
                      <Typography fontWeight='700' variant='h6' gutterBottom>
                        {title}
                      </Typography>
                      <Typography textAlign='center' variant='subtitle2' gutterBottom>
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
