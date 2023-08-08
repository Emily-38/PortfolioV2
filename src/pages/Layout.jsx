import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function Presentations() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Presentations;
