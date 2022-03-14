import {Button, Box} from '@mui/material';
import {HomeLayout} from '../../shared/layouts';


export const Info = () =>{
  return (
    <HomeLayout title='Grupo Connect'
      subtitle='Conectamos o mundo atraves de soluções e produtos IOT'
    >
      <Box width="300px" marginBottom="100px" marginTop="30px">
        <Button fullWidth variant='contained'>Entre</Button>
      </Box>
    </HomeLayout>
  );
};
