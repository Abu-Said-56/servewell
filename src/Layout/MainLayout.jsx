import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const MainLayout = () => {
    const location = useLocation();
    console.log(location);
    const noNavbarFooter = location.pathname.includes('login');
    return (
        <div>
            {noNavbarFooter || <Navbar></Navbar>}
            <div className='min-h-[550px]'>
            <Outlet></Outlet>
            </div>
            {noNavbarFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;