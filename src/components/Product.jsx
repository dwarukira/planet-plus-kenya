import React from 'react'
import { honey } from '../assets'

const Product = () => {

    const WhatsAppButton = () => {
        const handleClick = (event) => {
            event.preventDefault();
            const whatsappUrl = 'https://wa.me/254727899560';
            window.open(whatsappUrl, '_blank');
        };

        return (
            <button
                className="mb-2 md:mb-0 flex-no-shrink bg-yellow-400 hover:bg-yellow-500 px-5 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-yellow-300 hover:border-yellow-500 text-white rounded-full transition ease-in duration-300"
                type="button"
                aria-label="like"
                onClick={handleClick}
            >
                Buy Now
            </button>
        );
    };

    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-5">
            <div className="p-4 bg-gray-100 dark:bg-gray-800 border-gray-800 shadow-md hover:shadow-lg rounded-md">
                <div className="flex flex-col lg:flex-row">
                    <div className="h-full w-full lg:h-32 lg:w-32 rounded-md mb-3 lg:mb-0">
                        <img src={honey} alt="Honey images" className="w-full object-scale-down lg:object-cover lg:h-36 rounded-md" />
                    </div>
                    <div className="flex-auto lg:ml-3 justify-evenly py-2">
                        <div className="flex flex-col ">
                            <div className="flex items-center mr-auto text-sm">

                                <p className="font-normal text-gray-500">500 G</p>
                            </div>
                            <div className="flex items-center  justify-between min-w-0">
                                <h2 className="mr-auto text-yellow-600  text-base capitalize font-medium truncate">Pure Honey</h2>
                            </div>
                            <p className="flex capitalize items-center text-xs text-gray-400">Mzee Konana and Anupi's Honey<span className="relative inline-flex rounded-md shadow-sm ml-2">
                                <span className="flex absolute h-2 w-2 top-0 right-0 -mt-1 -mr-1">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75">
                                    </span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500">
                                    </span>
                                </span>
                            </span>
                            </p>
                        </div>
                        <div className="flex my-3 border-t border-gray-300 dark:border-gray-600 ">
                        </div>
                        <div className="flex space-x-3 text-sm font-medium">
                            <div className=" items-center justify-center flex gap-1 font-medium text-gray-700 dark:text-gray-100">
                                650<span className="text-gray-500 text-sm font-normal">KES</span>
                            </div>
                            <WhatsAppButton />
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 border-gray-800 shadow-md hover:shadow-lg rounded-md">
                <div className="flex flex-col lg:flex-row">
                    <div className="h-full w-full lg:h-32 lg:w-32 rounded-md mb-3 lg:mb-0">
                        <img src={honey} alt="Honey images" className="w-full object-scale-down lg:object-cover lg:h-36 rounded-md" />
                    </div>
                    <div className="flex-auto lg:ml-3 justify-evenly py-2">
                        <div className="flex flex-col ">
                            <div className="flex items-center mr-auto text-sm">

                                <p className="font-normal text-gray-500">1000 G</p>
                            </div>
                            <div className="flex items-center  justify-between min-w-0">
                                <h2 className="mr-auto text-yellow-600  text-base capitalize font-medium truncate">Pure Honey</h2>
                            </div>
                            <p className="flex capitalize items-center text-xs text-gray-400">Mzee Konana and Anupi's Honey<span className="relative inline-flex rounded-md shadow-sm ml-2">
                                <span className="flex absolute h-2 w-2 top-0 right-0 -mt-1 -mr-1">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75">
                                    </span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500">
                                    </span>
                                </span>
                            </span>
                            </p>
                        </div>
                        <div className="flex my-3 border-t border-gray-300 dark:border-gray-600 ">
                        </div>
                        <div className="flex space-x-3 text-sm font-medium">
                            <div className=" items-center justify-center flex gap-1 font-medium text-gray-700 dark:text-gray-100">
                                1100<span className="text-gray-500 text-sm font-normal">KES</span>
                            </div>
                            <WhatsAppButton />
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 border-gray-800 shadow-md hover:shadow-lg rounded-md">
                <div className="flex flex-col lg:flex-row">
                    <div className="h-full w-full lg:h-32 lg:w-32 rounded-md mb-3 lg:mb-0">
                        <img src={honey} alt="Honey images" className="w-full object-scale-down lg:object-cover lg:h-36 rounded-md" />
                    </div>
                    <div className="flex-auto lg:ml-3 justify-evenly py-2">
                        <div className="flex flex-col ">
                            <div className="flex items-center mr-auto text-sm">

                                <p className="font-normal text-gray-500">1500 G</p>
                            </div>
                            <div className="flex items-center  justify-between min-w-0">
                                <h2 className="mr-auto text-yellow-600  text-base capitalize font-medium truncate">Pure Honey</h2>
                            </div>
                            <p className="flex capitalize items-center text-xs text-gray-400">Mzee Konana and Anupi's Honey<span className="relative inline-flex rounded-md shadow-sm ml-2">
                                <span className="flex absolute h-2 w-2 top-0 right-0 -mt-1 -mr-1">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75">
                                    </span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500">
                                    </span>
                                </span>
                            </span>
                            </p>
                        </div>
                        <div className="flex my-3 border-t border-gray-300 dark:border-gray-600 ">
                        </div>
                        <div className="flex space-x-3 text-sm font-medium">
                            <div className=" items-center justify-center flex gap-1 font-medium text-gray-700 dark:text-gray-100">
                                1700<span className="text-gray-500 text-sm font-normal">KES</span>
                            </div>
                            <WhatsAppButton />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Product