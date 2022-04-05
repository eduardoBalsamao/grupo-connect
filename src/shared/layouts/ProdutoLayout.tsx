/* eslint-disable require-jsdoc */
import {Box, Typography, Grid, Card, Chip} from '@mui/material';
import Divider from '@mui/material/Divider';
import ReactPlayer from 'react-player';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';
import {LinkPreview} from '@dhaiwat10/react-link-preview';

const StyledTableCell = styled(TableCell)(({theme}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

interface IArtigoLayoutProps {
    title: string | undefined;
    date: string | undefined;
    image?: string | undefined;
    text: string | undefined;
}
function createData(
    name: string,
    calories: string,
) {
  return {name, calories};
}

const rows = [
  createData('Voltagem', '127V / 220V'),
  createData('Cor da case', 'Branca'),
  createData('Tipo', 'Domestico'),
  createData('Personalizável', 'Sim'),
  createData('Garantia', '6 Meses'),
];

export const ProdutoLayout: React.FC<IArtigoLayoutProps> = ({children, title, image, date, text}) => {
  return (
    <Box flex="1" display="flex" flexDirection="column"
      gap={1} sx={{backgroundColor: '#F2F4FA', minHeight: '100vh'}}
    >
      <Box sx={{marginTop: {xs: '7vh', md: '10vh'}, padding: '5vh'}}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Card sx={{width: '90vw'}}>
              <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                <Grid item sx={{margin: {xs: '1vh', md: '3vh'}}}>
                  <Box sx={{maxWidth: {xs: '100%', md: '75vh'}, marginTop: {xs: '0', md: '5vh'}}}>
                    <img style={{maxWidth: '100%'}} src={image} />
                  </Box>
                </Grid>

                <Grid item sx={{maxWidth: {xs: '100%', md: '50%'}, marginX: '3vh'}}>
                  <Typography variant='h5' sx={{marginTop: '4vh'}}>
                    Nome do Produto
                  </Typography>
                  <Divider />
                  <Chip sx={{marginTop: {xs: '2vh', md: '1vh'}}} label="Domestico" size="small" variant="outlined" color="primary" />
                  <Typography variant="body2" sx={{marginY: '2vh', marginLeft: {sx: '2vh', md: '0vh'}}}>
                  Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as pessoas mais interessantis.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!

Pra lá , depois divoltis porris, paradis.Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.Atirei o pau no gatis, per gatis num morreus.Detraxit consequat et quo num tendi nada.

Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.Per aumento de cachacis, eu reclamis.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.
                  </Typography>
                </Grid>
              </Grid>
              <Divider variant="middle" />
              <Grid item>
                <Typography variant='h5' sx={{marginTop: {xs: '4vh', md: '4vh'}, textAlign: 'center'}}>
                    Demonstração
                </Typography>
              </Grid>

              <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item sx={{margin: {xs: '1vh', md: '4vh'}}}>
                  <Box sx={{display: {xs: 'none', md: 'flex'}, marginBottom: '1vh'}}>
                    <ReactPlayer height = "350px" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                  </Box>
                  <Box sx={{display: {xs: 'flex', md: 'none'}, marginTop: '1vh', marginBottom: '2vh'}}>
                    <ReactPlayer width='100%' height= '40vh' url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                  </Box>
                </Grid>
              </Grid>
              <Divider variant="middle" />
              <Grid item>

                <Typography variant='h5' sx={{marginTop: {xs: '4vh', md: '4vh'}, textAlign: 'center'}}>
                    Informações
                </Typography>

                <Box sx={{marginTop: '3vh', marginBottom: '5vh', marginX: {xs: '2vh', md: '10vh'}}}>
                  <TableContainer component={Paper}>
                    <Table size="small">
                      <TableBody>
                        {rows.map((row) => (
                          <StyledTableRow
                            key={row.name}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                          >
                            <StyledTableCell component="th" scope="row">
                              {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.calories}</StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </Grid>
              <Divider variant="middle" />
              <Grid item>
                <Typography variant='h5' sx={{marginTop: {xs: '4vh', md: '4vh'}, textAlign: 'center'}}>
                  Links de compra
                </Typography>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                  <Grid item sx={{marginY: {xs: '1vh', md: '4vh'}, marginX: {xs: '2vh', md: '10vh'}}}>
                    <Box sx={{display: {xs: 'none', md: 'flex'}, marginBottom: '1vh'}}>
                      <LinkPreview url='https://www.mercadolivre.com.br/oculos-de-sol-spy-39-open-standard-armaco-de-nylon-cor-preto-brilho-lente-azul-de-polimero-classica-haste-preto-brilho-de-nailon/p/MLB17362377?pdp_filters=category:MLB8378#searchVariation=MLB17362377&position=2&search_layout=grid&type=product&tracking_id=32d0b3d1-479a-4022-950f-8ef57b5b0b03' />
                    </Box>
                    <Box sx={{display: {xs: 'flex', md: 'none'}, marginTop: '1vh', marginBottom: '2vh'}}>
                      <LinkPreview url='https://www.mercadolivre.com.br/oculos-de-sol-spy-39-open-standard-armaco-de-nylon-cor-preto-brilho-lente-azul-de-polimero-classica-haste-preto-brilho-de-nailon/p/MLB17362377?pdp_filters=category:MLB8378#searchVariation=MLB17362377&position=2&search_layout=grid&type=product&tracking_id=32d0b3d1-479a-4022-950f-8ef57b5b0b03' />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Card>

          </Grid>

        </Grid>

      </Box>
      {children}

    </Box>
  );
};
