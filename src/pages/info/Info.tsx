import {Box, Typography} from '@mui/material';


export const Info = () =>{
  return (
    <Box marginTop="12vh" flexDirection='column' fontFamily='Chakra Petch'>
      <Typography variant='h1'>h1. Heading</Typography>
      <Typography variant='h2'>h2. Heading</Typography>
      <Typography variant='h3'>h3. Heading</Typography>
      <Typography variant='h4'>h4. Heading</Typography>
      <Typography variant='h5'>h5. Heading</Typography>
      <Typography variant='h6'>h6. Heading</Typography>
      <Typography variant='subtitle1'>subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</Typography>
      <Typography variant='subtitle2'>subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</Typography>
      <Typography variant='body1'>body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</Typography>
      <Typography variant='body2'>body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</Typography>
      <Typography variant='button'>BUTTON TEXT</Typography>
      <Typography variant='caption'>caption text</Typography>
      <Typography variant='overline'>OVERLINE TEXT</Typography>
    </Box>
  );
};
