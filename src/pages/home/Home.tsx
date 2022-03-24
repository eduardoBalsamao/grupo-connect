import {HomeLayout} from '../../shared/layouts';
import {BaseLayout} from '../../shared/layouts';
import {Box, Card, CardContent, Grid, Typography, Button, CardMedia, CardActions} from '@mui/material';

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
        <Box sx={{marginTop: '5vh'}}>
          <Grid padding="20px" container justifyContent="space-around" alignItems="center" textAlign="center">
            {cardContent.map(({id, title, text}) => (
              <Grid key={id} item md={3}>
                <Box sx={{marginBottom: '2vh'}}>
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
      <Box sx={{height: {xs: '10vh', md: '15vh'}, backgroundColor: 'red', backgroundImage: {
        xs: `linear-gradient(to left, rgba(1, 10, 27, 0.85), rgba(0, 21, 35, 0.3)), url(${process.env.PUBLIC_URL + '/wp5.jpg'})`,
        md: `linear-gradient(to left, rgba(1, 10, 27, 0.85), rgba(0, 21, 35, 0.3)), url(${process.env.PUBLIC_URL + '/wp4.jpg'})`,
      }}}>

      </Box>

      <BaseLayout title='Leia nossos artigos'>
        <Box sx={{marginTop: '5vh', paddingX: '5vh'}}>
          <Card sx={{maxWidth: 345}}>
            <CardMedia
              component="img"
              height="140"
              src={process.env.PUBLIC_URL + '/img1.jpg'}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
          Iot Domestico
              </Typography>
              <Typography variant="body2" textAlign='initial'>
          Você sabe como o uso domestico do IOT pode facilitar sua vida? Possibilitamos automação
          de jardinagem, piscinas, portões eletronicos e luzes. Leia nosso artigo e saiba mais.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Leia Mais</Button>
            </CardActions>
          </Card>
        </Box>

      </BaseLayout>

    </Box>
  );
};
