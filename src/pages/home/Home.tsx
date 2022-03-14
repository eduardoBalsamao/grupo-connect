import {HomeLayout} from '../../shared/layouts';
import {Box, Button} from '@mui/material';


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

    </Box>
  );
};
