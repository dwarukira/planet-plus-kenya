import React from 'react'
import { sarah1 } from '../assets'

const Stats = () => {
    return (

        <div className="relative py-8 md:py-8 overflow-hidden">


            <div className="relative container px-4 mx-auto">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-wrap -mx-4 mb-24 items-end">
                        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                            <div className="max-w-md md:max-w-lg">
                                <span className="inline-block py-1 px-3 mb-5 text-xs font-semibold text-green-900 bg-green-50 rounded-full"> OVERVIEW</span>
                                <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold">
                                    <span>Our </span>
                                    <span className="font-serif italic">Impact</span>
                                </h1>
                            </div>
                        </div>
                        {/* <div className="w-full lg:w-1/2 px-4">
                            <div className="max-w-md lg:ml-auto lg:pb-3">
                                <p className="text-xl text-gray-500 font-semibold">Nisi eu pellentesque felis volutpat aliquet pulvinar sed. Vitae fames vestibulum urna vel odio mauris urna orci est.</p>
                            </div>
                        </div> */}
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        <div className="relative w-full md:w-1/3 px-4 pb-9 md:pb-0 mb-12 lg:mb-0">
                            <div className="hidden md:block absolute top-1/2 right-0 w-px h-28 bg-gray-200 transform -translate-y-1/2"></div>
                            <div className="md:hidden absolute bottom-0 left-1/2 h-px w-40 bg-gray-200 transform -translate-x-1/2"></div>
                            <div className="text-center">
                                <span className="block text-5xl lg:text-7xl font-bold text-gray-900 mb-5">5+</span>
                                <span className="text-xl text-gray-500">Partner CBOs and Counties we have planted in.</span>
                            </div>
                        </div>
                        <div className="relative w-full md:w-1/3 px-4 pb-9 md:pb-0 mb-12 lg:mb-0">
                            <div className="hidden md:block absolute top-1/2 right-0 w-px h-28 bg-gray-200 transform -translate-y-1/2"></div>
                            <div className="md:hidden absolute bottom-0 left-1/2 h-px w-40 bg-gray-200 transform -translate-x-1/2"></div>
                            <div className="text-center">
                                <span className="block text-5xl lg:text-7xl font-bold text-gray-900 mb-5">15+</span>
                                <span className="text-xl text-gray-500">Different tree species planted in an effort to diversify and grow trees best suitable for a specific region.</span>
                            </div>
                        </div>
                        <div className=" relative w-full md:w-1/3 px-4 pb-9 md:pb-0 mb-12 lg:mb-0">
                            <div className="hidden md:block absolute top-1/2 right-0 w-px h-28 bg-gray-200 transform -translate-y-1/2"></div>
                            <div className="md:hidden absolute bottom-0 left-1/2 h-px w-40 bg-gray-200 transform -translate-x-1/2"></div>
                            <div className="text-center">
                                <span className="block text-5xl lg:text-7xl font-bold text-gray-900 mb-5">150k+</span>
                                <span className="text-xl text-gray-500">Trees planted in the April-June rainy season, 2023.</span>
                            </div>
                        </div>
                        <div className=" mt-8 relative w-full md:w-1/3 px-4 pb-9 md:pb-0 mb-12 lg:mb-0">
                            <div className="hidden md:block absolute top-1/2 right-0 w-px h-28 bg-gray-200 transform -translate-y-1/2"></div>
                            <div className="md:hidden absolute bottom-0 left-1/2 h-px w-40 bg-gray-200 transform -translate-x-1/2"></div>
                            <div className="text-center">
                                <span className="block text-5xl lg:text-7xl font-bold text-gray-900 mb-5">500k+</span>
                                <span className="text-xl text-gray-500">Students and community members equiped with knowledge on environmental consciousness.</span>
                            </div>
                        </div>
                        <div className=" mt-8 relative w-full md:w-1/3 px-4 pb-9 md:pb-0 mb-12 lg:mb-0">
                            <div className="hidden md:block absolute top-1/2 right-0 w-px h-28 bg-gray-200 transform -translate-y-1/2"></div>
                            <div className="md:hidden absolute bottom-0 left-1/2 h-px w-40 bg-gray-200 transform -translate-x-1/2"></div>
                            {/* <img src={sarah1} alt="" /> */}
                            <div className="text-center">
                                <span className="block text-5xl lg:text-7xl font-bold text-gray-900 mb-5">20+</span>
                                <span className="text-xl text-gray-500">Partner organizations who believe in our goal for a better planet.</span>
                            </div>
                        </div>
                        <div className=" mt-8 w-full md:w-1/3 px-4">
                            <div className="text-center">
                                <span className="block text-5xl lg:text-7xl font-bold text-gray-900 mb-5">80%</span>
                                <span className="text-xl text-gray-500">Growth rate of planted trees. This has grately transformed the landscape of the areas we have planted, especially in the arid and semi-arid regions.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Stats