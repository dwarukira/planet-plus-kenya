import React from 'react';
import { Navbar, Header, Footer, AboutUs, Founder, Team, } from '../components';

const MainPage = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <AboutUs />
            <Founder />
            <Team />
            {/* <Footer /> */}
        </div>
    )
}

export default MainPage