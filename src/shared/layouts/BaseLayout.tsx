import {Box, Typography} from '@mui/material';

interface IBaseLayoutProps {
    title: string;
    image?: string;
    bg?: string;
    textColor?: string;
}

export const BaseLayout: React.FC<IBaseLayoutProps> = ({children, title, image, bg, textColor}) => {
  return (
    <Box flex="1" display="flex" flexDirection="column"
      gap={1} bgcolor={bg} sx={{height: {sx: '95vh', md: '100vh'}}}
    >
      <Box sx={{marginTop: {xs: '5vh', md: '8vh'}}} fontFamily="Chakra Petch">
        <Typography sx={{fontSize: {xs: '3.5vh', md: '6vh'}}} marginX='1.5vh' textAlign='center' color={textColor}>
          {title}
        </Typography>
      </Box>
      {children}

    </Box>
  );
};
