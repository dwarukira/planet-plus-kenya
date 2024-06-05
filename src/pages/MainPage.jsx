import React from 'react';
import { Navbar, Header, Footer, Programs, Events, Stats, Updates, } from '../components';

const MainPage = () => {
    return (
        <div >
            <Navbar />
            <Header />
            <Stats />
            <Programs />
            <Updates />
            {/* <Events /> */}
            <Footer />
        </div>
    )
}

export default MainPage