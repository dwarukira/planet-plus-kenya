import React from 'react';
import { sarah1 } from '../assets'; // Replace with the actual import path

const Founder = () => (
    <div className="bg-gray-100 py-10 px-5 lg:px-20 font-serif relative" id="team">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between">
            <div className="w-full lg:w-1/2 flex flex-col justify-between order-2 lg:order-2 mt-8 lg:mt-0">
                <img src={sarah1} alt="chef_image" className="w-full h-full object-cover" />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col order-1 lg:order-1 lg:ml-5">
                <div className="mb-10 flex flex-col items-center lg:items-start justify-between">
                    <h1 className="text-6xl lg:text-8xl font-bold mt-4 px-4 py-4">Meet The Founder</h1>
                    <h1 className="text-3xl lg:text-5xl font-bold mt-4">"What we believe in"</h1>
                </div>
                <div className="flex flex-col mb-8">
                    <div className="flex flex-col items-center lg:items-start">
                        <p className="text-base ml-5 mr-5 lg:text-lg">Our commitment to conservation is unwavering. We strive to inspire and empower individuals, communities, and businesses to join us in our efforts to safeguard our planet. Together, we can make a significant impact, fostering a healthier, more resilient environment for all.</p>
                        <p className="text-base ml-5 mr-5 lg:text-lg">It is upon us all to take bold steps towards a greener future. Our actions today will shape the world of tomorrow. Join us in our journey to protect and nurture the Earth, our only home.</p>
                    </div>
                </div>
                <div className="text-xl lg:text-2xl m-10 order-3">
                    <p className="font-bold">Sarah Anupi Kutahi</p>
                    <p className="text-base lg:text-lg">Founder</p>
                </div>
            </div>
        </div>
    </div>
);

export default Founder;
