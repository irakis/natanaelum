
import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

const MainLayout = ({children}) => {
    return (
        <div>
            <Header />
            { children }
            <Footer/>
        </div>
    )
};

export default MainLayout;