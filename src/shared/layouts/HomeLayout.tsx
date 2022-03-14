import {Box} from '@mui/material';

interface IBaseLayoutProps {
    title: string;
    subtitle: string
}

export const HomeLayout: React.FC<IBaseLayoutProps> = ({children, title, subtitle}) => {
  return (
    <Box height="85vh" flex="1" display="flex" flexDirection="column"
      gap={2} alignItems="center"
      sx={{
        backgroundImage: {
          xs: `linear-gradient(to left, rgba(1, 10, 27, 0.85), rgba(0, 21, 35, 0.3)), url(${process.env.PUBLIC_URL + '/wp5.jpg'})`,
          md: `linear-gradient(to left, rgba(1, 10, 27, 0.85), rgba(0, 21, 35, 0.3)), url(${process.env.PUBLIC_URL + '/wp4.jpg'})`,
        },
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',

      }}>
      <Box marginTop="75px" fontFamily="Chakra Petch"
        sx={{
          fontSize: {xs: '50px', md: '65px'},
          color: 'white',
        }}>
        {title}
      </Box>
      <Box fontFamily="Montserrat"
        sx={{
          fontSize: {xs: '15px', md: '25px'},
          color: 'white',
        }}>
        {subtitle}
      </Box>
      {children}

    </Box>
  );
};
