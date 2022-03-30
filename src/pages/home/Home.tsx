import {HomeLayout} from '../../shared/layouts';
import {BaseLayout} from '../../shared/layouts';
import {Box, Card, CardContent, Grid, Typography, Button, CardMedia, CardActions} from '@mui/material';
import app from '../../shared/firebase/firebase';
import {getDatabase, ref, onValue} from 'firebase/database';
import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const cardContent = [
  {
    id: 1,
    title: 'Conectar',
    text: 'Conectamos os seus dispositivos a internet usando placas de aquisição de dados e disponibilizamos em plataformas web.',
    img: process.env.PUBLIC_URL + '/iot.svg',
  },
  {
    id: 2,
    title: 'Gerenciar',
    text: 'Disponibilizamos seu próprio console para acompanhar os dados gerados e a partir da análise tomar as melhores decisões para resolver seus problemas.',
    img: process.env.PUBLIC_URL + '/project-management-timeline.svg',
  },
  {
    id: 3,
    title: 'Prever',
    text: 'Obtenha acesso a informações sobre possíveis problemas para planejar ações preventivas dentro da plataforma.',
    img: process.env.PUBLIC_URL + '/tech.svg',
  },
];

export const Home = () =>{
  const [data, setData] = React.useState<any>([]);
  const database = getDatabase(app);
  const reference = ref(database, `/Artigos/`);
  const navigate = useNavigate();

  React.useEffect(() => {
    const getArtigos = async () =>{
      await onValue(reference, (snapshot) =>{
        const d: any[] = []; // Data temporaria

        snapshot.forEach((item) => {
          const artigosData: {
            id?: any,
            title: string,
            description: string,
            image: string
          } = {
            id: item.key,
            title: item.val().titulo,
            description: item.val().descricao,
            image: item.val().imagem,
          };
          d.push(artigosData);
        });
        setData(d);
      });
    };

    getArtigos();
  }, []);
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
            {cardContent.map(({id, title, text, img}) => (
              <Grid key={id} item md={3}>
                <Box sx={{marginBottom: '2vh'}}>
                  <Card sx={{height: {md: '53vh'}}}>
                    <CardContent>
                      <img style={{width: '90px', marginBottom: '2vh'}} src={img}></img>
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
      <Box sx={{height: {xs: '12vh', md: '16vh'}, backgroundImage: {
        xs: `url(${process.env.PUBLIC_URL + '/wp2.png'})`,
        md: `url(${process.env.PUBLIC_URL + '/wp2.png'})`,
      }}}>

      </Box>

      <BaseLayout title='Leia nossos artigos'>
        <Box>
          <Grid container alignItems="center" justifyContent="space-around">
            <Swiper
              effect={'coverflow'}
              modules={[Pagination]}
              pagination={{clickable: true}}
              spaceBetween={25}
              watchOverflow
              breakpoints={{
                // when window width is >= 640px
                640: {
                  width: 640,
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  width: 768,
                  slidesPerView: 2,
                },
              }}
            >
              {data.map((item: any) => (
                <SwiperSlide key={item.id}>
                  <Grid item>
                    <Box marginBottom='10vh' marginTop='2vh' sx={{marginX: {xs: '2vh', md: '5vh'}}}>
                      <Card sx={{minWidth: 335, display: 'flex', flexDirection: 'column', height: {md: '58vh'}}}>
                        <CardMedia
                          component="img"
                          height="140px"
                          src={item.image}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div" color="primary">
                            {item.title}
                          </Typography>
                          <Typography variant="body2" textAlign='initial'>
                            {item.description}
                          </Typography>
                        </CardContent>
                        <Box flexGrow={1}></Box>
                        <CardActions sx={{justifyContent: 'end', marginRight: '2vh', alignItems: 'end'}}>
                          <Button onClick={()=>{
                            navigate(`/artigos/${item.id}`);
                          }} size="small">Leia Mais</Button>
                        </CardActions>
                      </Card>
                    </Box>
                  </Grid>
                </SwiperSlide>
              ))}


            </Swiper>

          </Grid>
        </Box>
      </BaseLayout>

    </Box>
  );
};
