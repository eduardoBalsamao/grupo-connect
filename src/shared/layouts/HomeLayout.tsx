import {Box, Typography} from '@mui/material';

interface IBaseLayoutProps {
    title: string;
    subtitle: string
}

export const HomeLayout: React.FC<IBaseLayoutProps> = ({children, title, subtitle}) => {
  return (
    <Box height="100vh" display="flex" flexDirection="column"
      gap={2} alignItems="center" justifyContent="center"
      sx={{
        backgroundImage: {
          xs: `linear-gradient(to left, rgba(1, 10, 27, 0.85), rgba(0, 21, 35, 0.3)), url(${process.env.PUBLIC_URL + '/wp5.jpg'})`,
          md: `linear-gradient(to left, rgba(1, 10, 27, 0.85), rgba(0, 21, 35, 0.3)), url(${process.env.PUBLIC_URL + '/wp4.jpg'})`,
        },
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',

      }}>
      <Box fontFamily="Chakra Petch">
        <Typography textAlign='center' variant='h2' color='white'>
          {title}
        </Typography>
      </Box>
      <Box textAlign='center' fontFamily="Montserrat">
        <Typography variant='h5' color='white'>
          {subtitle}
        </Typography>

      </Box>
      {children}

    </Box>
  );
};
