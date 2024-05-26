import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full text-white py-8 px-2 bg-gradient-to-t from-blue-200 via-slate-600 to-green-300 relative">
            <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-1 justify-center'>
                <div>
                    <h6 className='font-bold uppercase py-2'>Mzee Konana and Anupi's Honey</h6>
                    <ol>
                        <li className='py-1'>+254 727 899560</li>
                    </ol>
                </div>
                <div>
                    <h6 className='font-bold uppercase py-2'>Join Whatsapp Channel</h6>
                    <ol>
                        <li className='py-1'>WhatsApp</li>
                    </ol>
                </div>

                <div className='col-span-2 pt-2 md:pt-2 justify-end items-end '>
                    <p className='font-bold uppercase'>Subscribe to our newsletter</p>
                    <p className='py-4'>Get latest updates on our events as well as new blog posts sent to you.</p>
                    <form action="" method="" className='flex flex-col sm:flex-row'>
                        <input type="email" className='w-full p-2 mr-4 rounded-md mb-4 text-black ' placeholder='Enter Email' />
                        <button className='p-2 mb-2 bg-green-800 text-white'>Subscribe</button>
                    </form>
                </div>
            </div>
            <div className='flex flex-col max-w-[1240px] px-2 py4 m-auto justify-between sm:flex-row text-center text-gray-500'>
                <p><strong className=' text-gray-600'>2024 Planet Plus Kenya. </strong>  all Rights Reserved.</p>
                <div className='flex justify-evenly sm:w-[300px] pt-4 text-2-xl gap-2 mouse-pointer'>
                    <FaFacebook className='cursor-pointer  text-gray-400' />
                    <FaInstagram className='cursor-pointer  text-gray-400' />
                    <FaLinkedin className='cursor-pointer  text-gray-400' />
                </div>
            </div>
        </div>
    )
}

export default Footer