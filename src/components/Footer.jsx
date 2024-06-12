import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full font-serif text-white py-8 px-2 bg-gradient-to-t from-blue-200 via-slate-600 to-green-300 relative">
            {/* Call to Action Section */}
            <div className='bg-gradient-to-t from-slate-600 to-green-300 py-8'>
                <div className='max-w-[1240px] mx-auto text-center'>
                    <h2 className='text-3xl font-bold uppercase mb-4'>Join Us</h2>
                    <p className='mb-8'>We encourage you to volunteer, attend our events as well as donate to this noble cause. The time to act is now.</p>
                    <div className='col-span-2 pt-2 md:pt-2 justify-center items-center '>
                        <p className='font-bold uppercase'>Subscribe to our newsletter</p>
                        <p className='py-4'>Get latest updates on our events as well as new blog posts sent to you.</p>
                        <form action="" method="" className='flex flex-col sm:flex-row justify-center'>
                            <input type="email" className='w-full sm:w-auto p-2 mr-4 rounded-md mb-4 text-black' placeholder='Enter Email' />
                            <button className='p-2 mb-2 bg-green-800 text-white'>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div className='max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 border-b-2 border-gray-600 py-1 justify-center pt-2'>
                <div className="w-full sm:w-full md:max-w-sm mx-auto mb-4 md:mb-8 text-center">
                    <div className='bg-gradient-to-t from-slate-600 to-green-300 text-white rounded-lg shadow p-4 md:p-6'>
                        <h6 className='font-bold uppercase py-2'>Mzee Konana and Anupi's Honey</h6>
                        <ol className='text-center'>
                            <li className='py-1'>
                                <a href="https://wa.me/254727899560" target="_blank" rel="noopener noreferrer">
                                    +254 727 899560
                                </a>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="w-full sm:w-full md:max-w-sm mx-auto mb-4 md:mb-8 text-center">
                    <div className='bg-gradient-to-t from-slate-600 to-green-300 text-white rounded-lg shadow p-4 md:p-6'>
                        <h6 className='font-bold uppercase py-2'>Join Whatsapp Channel</h6>
                        <ol className='text-center'>
                            <li className='py-1'>WhatsApp</li>
                        </ol>
                    </div>
                </div>
            </div>
            <hr />
            <div className='flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500'>
                <p><strong className='text-gray-600'>2024 Planet Plus Kenya.</strong> All Rights Reserved.</p>
                <div className='flex justify-evenly sm:w-[300px] pt-4 text-2xl gap-2'>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className='cursor-pointer text-gray-400' />
                    </a>

                    <a href="https://www.instagram.com/_planet_plus/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className='cursor-pointer text-gray-400' />
                    </a>
                    <a href="https://www.linkedin.com/company/planet-plus-kenya?trk=public_post_main-feed-card_reshare_feed-actor-name" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className='cursor-pointer text-gray-400' />
                    </a>

                </div>
            </div>
        </div>
    );
}

export default Footer;