import {Box} from '@mui/material';

interface IBaseLayoutProps {
    title: string;
    image?: string;
}

export const BaseLayout: React.FC<IBaseLayoutProps> = ({children, title, image}) => {
  return (
    <Box height="100vh" flex="1" display="flex" flexDirection="column"
      gap={2}
    >
      <Box padding="50px" marginTop="2vh" fontFamily="Chakra Petch"
        sx={{
          fontSize: {xs: '25px', md: '45px'},
          color: '#154365',
          textAlign: 'center',
        }}>
        {title}
      </Box>
      {children}
      <Box height="100%" flex="1" display="flex" flexDirection="column"
        gap={2} alignItems="center"
        sx={{
          backgroundImage: {
            xs: `linear-gradient(to left, rgba(1, 10, 27, 0.2), rgba(0, 21, 35, 0.5)), url(${process.env.PUBLIC_URL + '/wp1.jpg'})`,
            md: `linear-gradient(to left, rgba(1, 10, 27, 0.2), rgba(0, 21, 35, 0.5)), url(${process.env.PUBLIC_URL + '/wp1.jpg'})`,
          },
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',

        }}>

      </Box>


    </Box>
  );
};
