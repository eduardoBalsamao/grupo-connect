
import {Navigate, Route, Routes} from 'react-router-dom';
import {Home, Info} from '../pages';


export const AppRoutes = () =>{
  return (
    <Routes>
      <Route path="/" element={
        <Home />
      }
      />
      <Route path="/style" element={
        <Info />
      }
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
