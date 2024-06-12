import React from 'react'
import { AboutUs, Description, Footer, Founder, History, Navbar, Team } from '../components'

const AboutUspage = () => {
    return (
        <div>
            <Navbar />
            <Description />
            <History />
            <AboutUs />
            <Founder />
            <Team />
            <Footer />
        </div>
    )
}

export default AboutUspage