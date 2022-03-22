import {Box, Grid, Typography} from '@mui/material';


export const Info = () =>{
  return (
    <Box sx={{marginTop: '12vh', height: '95vh'}}>
      <Grid container flexDirection='column'>
        <Grid sx={{marginX: '4vh'}} item>
          <Typography color='primary' variant='h2'>
            Sobre Nos
          </Typography>
        </Grid>
        <Grid sx={{margin: '5vh'}} item>
          <Typography variant='body1'>
            Grupo Connect é uma startup que oferece produtos e soluções utilizando um sistema operacional em nuvem que   permite a conexão de máquinas, produtos e demais infraestruturas físicas ao mundo digital e que vem revolucionando a maneira em que as empresas de todos os setores se conectam à Internet das Coisas.
          </Typography>
        </Grid>
        <Grid sx={{marginX: '5vh'}} item>
          <Typography variant='body1'>
            Cada máquina e cada sistema em sua empresa ou casa detém uma riqueza absurda de dados. O Grupo Connect acredita que soluções geradas a partir da interpretação dos dados que estão sendo gerados produzem insights importantes para o seu negócio.
          </Typography>
        </Grid>
        <Grid sx={{margin: '5vh'}} item>
          <Typography variant='body1'>
            Assim, com os serviços oferecidos Grupo Connect é possível a identificação precoce de possíveis problemas em plantas fabris, monitoramento de serviços em qualquer lugar do mundo, redução das paralisações (downtime), resultando dessa forma em um aumento significativo da produção e uma melhor otimização de seus recursos e infraestrutura.
          </Typography>
        </Grid>
        <Grid sx={{marginX: '5vh'}} item>
          <Typography variant='body1'>
            Cada máquina e cada sistema em sua empresa ou casa detém uma riqueza absurda de dados. O Grupo Connect acredita que soluções geradas a partir da interpretação dos dados que estão sendo gerados produzem insights importantes para o seu negócio.
          </Typography>
        </Grid>

      </Grid>
    </Box>

  );
};
