
import React from 'react';

import NavBar from '../component/layout/Navbar';
import Footer from '../component/layout/Footer';
import { Outlet } from 'react-router-dom';
import TopBar from '../component/layout/Topbar';

const Layout: React.FC = () => {
  return (
    <>
        <TopBar/>
        <NavBar/>
        
        <Outlet/>
       
        <Footer/>
    </>
  );
};

export default Layout;
