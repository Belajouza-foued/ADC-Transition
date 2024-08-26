import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './navbar/Navbar'; // Adjust the import path if necessary
import Footer from './footer/Footer';
import Layout from '../components/layout/Layout' // Adjust the import path if necessary

function Layout() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/login';
const hideFooter = location.pathname === '/login'
  return (
    <>
      {!hideNavbar && <Navbar />}
      {!hideNavbar && <Footer />}
      <Outlet />      
    </>
  );
}

export default Layout;
