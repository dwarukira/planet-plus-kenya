import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { gallery3, gallery4, gallery5, gallery6 } from '../assets';



const Gallery = () => {
    const InstagramButton = () => {
        const handleClick = () => {
            const instagramURL = 'https://www.instagram.com/_planet_plus?gsh=MWQzenZraXVvc2ZweA==';
            window.open(instagramURL, '_blank');
        };

        return (
            <div className="flex flex-col bg-black p-8">
                <div className="flex flex-col items-center justify-center text-center mb-8">
                    <h1 className=" text-5xl mb-4 text-white">Photo Gallery</h1>
                    <button type="button" className="mt-4 bg-golden text-white py-2 px-4 rounded" onClick={handleClick}>
                        Click to view more on Instagram
                    </button>
                </div>
                <div className="relative">
                    {/* Grid layout for images */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
                        <div className="relative w-full h-64 flex items-center justify-center">
                            <img src={gallery3} alt="gallery_image" loading="lazy" className="w-full h-full object-cover" />
                            <BsInstagram className="absolute text-white text-2xl opacity-0 transition-opacity duration-500 ease-in-out cursor-pointer hover:opacity-100" />
                        </div>
                        <div className="relative w-full h-64 flex items-center justify-center">
                            <img src={gallery6} alt="gallery_image" loading="lazy" className="w-full h-full object-cover" />
                            <BsInstagram className="absolute text-white text-2xl opacity-0 transition-opacity duration-500 ease-in-out cursor-pointer hover:opacity-100" />
                        </div>
                        <div className="relative w-full h-64 flex items-center justify-center">
                            <img src={gallery4} alt="gallery_image" loading="lazy" className="w-full h-full object-cover" />
                            <BsInstagram className="absolute text-white text-2xl opacity-0 transition-opacity duration-500 ease-in-out cursor-pointer hover:opacity-100" />
                        </div>
                        <div className="relative w-full h-64 flex items-center justify-center">
                            <img src={gallery5} alt="gallery_image" loading="lazy" className="w-full h-full object-cover" />
                            <BsInstagram className="absolute text-white text-2xl opacity-0 transition-opacity duration-500 ease-in-out cursor-pointer hover:opacity-100" />
                        </div>
                        {/* Add more divs for additional images */}
                    </div>
                </div>
            </div>
        );
    };



    return <InstagramButton />;


};




export default Gallery;
