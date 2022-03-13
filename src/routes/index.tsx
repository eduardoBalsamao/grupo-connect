
import {Navigate, Route, Routes} from 'react-router-dom';
import {Header} from '../shared/components';


export const AppRoutes = () =>{
  return (
    <Routes>
      <Route path="/" element={
        <Header />}
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
