import { Outlet } from 'react-router-dom';
import HeaderComponent from '../../base/header/header/Header'; // Renamed Header
import Footer from '../../base/footer/footer/Footer';

const DefaultLayout = () => {
  return (
    <>
      <HeaderComponent /> {/* Updated the component name here */}
      <Outlet />
      <Footer />
    </>
  );
}

export default DefaultLayout;
