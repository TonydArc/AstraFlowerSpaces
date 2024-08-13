
import React from 'react';
import TopBar from '../component/Topbar';
import NavBar from '../component/Navbar';
import Footer from '../component/Footer';
import { Outlet } from 'react-router-dom';

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
