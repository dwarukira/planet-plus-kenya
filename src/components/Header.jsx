import React from 'react'
import { head } from '../assets'

const Header = () => {
    return (

        <div className="z-0 relative bg-gradient-to-r from-green-200 to-green-100 py-16 font-sans">
            <div className="absolute inset-0">
                <img
                    src={head}
                    alt="Background Image"
                    className="w-full h-full object-cover opacity-50"
                />
            </div>
            <div className="relative max-w-screen-xl mx-auto px-4 z-10 text-center">
                <h1 className="text-4xl md:text-8xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-800 to-green-500 py-10 font-serif">
                    Planet Plus Kenya
                </h1>
                <p className="text-4xl font-bold md:text-4xl mb-8 text-transparent bg-clip-text bg-gradient-to-r from-black to-green-400 font-serif">
                    For People
                </p>
                <p className="text-3xl font-bold md:text-4xl mb-8 text-transparent bg-clip-text bg-gradient-to-r from-black to-green-400 font-serif">
                    For Planet
                </p>
                <p className="text-2xl font-bold md:text-4xl mb-8 text-transparent bg-clip-text bg-gradient-to-r from-black to-green-400 font-serif">
                    For Prosperity
                </p>
            </div>
        </div>



    )
}

export default Header