import './core-layout.css';
import { Outlet } from 'react-router-dom';

function CoreLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default CoreLayout;
