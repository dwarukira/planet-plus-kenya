import React from 'react';
import { kyle } from '../assets';

const Updates = () => {
    return (
        <div className="dark:bg-gray-100 dark:text-gray-900 font-serif py-2">
            <div className="container mx-auto">
                <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
                    <div className="relative flex flex-col justify-center items-center bg-no-repeat bg-cover h-[80vh] md:h-[120vh] bg-gradient-to-r from-slate-500 via-slate-500 to-slate-500">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${kyle})` }}></div>
                        <div className="absolute bottom-0 left-0 right-0 mx-auto mb-4 md:mb-8 z-10 text-left max-w-full p-4 md:p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-11/12 md:w-auto md:max-w-sm">
                            <span className="text-xl md:text-2xl">June, 2024</span>
                            <br />
                            <h1 className="text-2xl md:text-4xl font-bold">Events Schedule for the month of June, 2024.</h1>
                            <br />
                            <p className="text-base md:text-xl">Contact us on any of our socials to volunteer, sign up to attend, adopt a tree, and/or to donate to our cause.</p>
                        </div>
                    </div>
                    <div className="flex flex-col p-6 divide-y md:divide-y-0 md:grid md:grid-cols-2 md:gap-4 dark:divide-gray-300 bg-green-100">
                        <div className="pt-6 pb-4 pl-4 pr-4 space-y-2 bg-green-200 md:col-span-1">
                            <span>1 June, 2024</span>
                            <h1 className="text-3xl font-bold">Charity Drive</h1>
                            <p>This event took place at Mukuru kwa Reuben. It was aimed at providing relief to the persons affected by the floods that ravaged the nation in 2024.</p>
                        </div>
                        <div className="pt-6 pb-4 pl-4 pr-4 space-y-2 bg-green-300 md:col-span-1">
                            <span>5 June, 2024</span>
                            <h1 className="text-3xl font-bold">World Environmental Day.</h1>
                            <p>Join us as we celebrate the World Environmental Day alongside our partners from the KDF Thika Garrison.</p>
                        </div>
                        <div className="pt-6 pb-4 pl-4 pr-4 space-y-2 bg-green-400 md:col-span-1">
                            <span>8 June, 2024</span>
                            <h1 className="text-3xl font-bold">Environmental Cleanup.</h1>
                            <p>We will be headed to Mukuru kwa Reuben for a day of environmental cleanup. This activity will be conducted with the help of our partner Takataka ni Mali as well as the residents of Mukuru kwa Reuben.</p>
                        </div>
                        <div className="pt-6 pb-4 pl-4 pr-4 space-y-2 bg-green-500 md:col-span-1">
                            <span>15 June, 2024</span>
                            <h1 className="text-3xl font-bold">Tree Planting.</h1>
                            <p>We will be planting trees at Raha Kids in Machakos County. Well-wishers, volunteers, and members of the community are encouraged to attend.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Updates;
