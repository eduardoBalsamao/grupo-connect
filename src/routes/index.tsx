
import {Navigate, Route, Routes} from 'react-router-dom';
import {Home, Info, Artigos} from '../pages';


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

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
