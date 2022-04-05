
import {Navigate, Route, Routes} from 'react-router-dom';
import {Home, Info, Artigos, Produto} from '../pages';


export const AppRoutes = () =>{
  return (
    <Routes>
      <Route path="/" element={
        <Home />
      }
      />
      <Route path="/sobre" element={
        <Info />
      }
      />
      <Route path="/artigos/:artigoId" element={
        <Artigos />
      }
      />
      <Route path="/produtos" element={
        <Produto />
      }
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
