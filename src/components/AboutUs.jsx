import React from 'react'
import { tree2 } from '../assets'

const AboutUs = () => {
    return (
        <div className="relative py-16 font-serif" id="about">
            <div className="container mx-auto px-4 z-10">
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <div className="md:w-1/3 mb-8 md:mb-0">
                        <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-white">Our Vision</h1>
                        <p className="text-lg">
                            We envision a world where ecosystems flourish, biodiversity thrives, and a healthy human population.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 flex items-center justify-center mb-8 md:mb-0">
                        <img src={tree2} alt="about_tree" className="max-w-full h-full object-cover" />
                    </div>
                    <div className="md:w-1/3">
                        <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-white">Our Mission</h1>
                        <p className="text-lg">
                            Our mission is to safeguard the planet's natural ecosystems, biodiversity, and resources through innovative conservation initiatives, sustainable practices, and community engagement.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;