import {Button} from '@mui/material';
import {Navigate, Route, Routes} from 'react-router-dom';


export const AppRoutes = () =>{
  return (
    <Routes>
      <Route path="/" element={
        <Button color="secondary" variant="contained">Teste</Button>}
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
