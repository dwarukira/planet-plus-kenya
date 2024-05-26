import React from 'react'
import { beverley, diana, idah, juliana, marleen, roselindah } from '../assets'


const Team = () => {
    return (
        <div className="font-[sans-serif] text-[#333] relative p-4 m-4 ">
            <div className="w-[300px] h-[300px] max-sm:w-full max-sm:h-20 sm:rounded-full flex items-center max-md:mx-auto bg-gradient-to-r from-green-300 via-green-500 to-green-600 p-6">
                <h2 className="text-4xl font-extrabold text-white">Our Team</h2>
            </div>
            <div className="max-w-6xl max-md:max-w-xl mx-auto sm:absolute md:left-24 sm:top-[62%] max-md:left-0 max-md:right-0">
                <div className="flex-col grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-12 max-sm:justify-center text-center max-sm:p-8">
                    <div className="bg-white rounded-md h-[400px] flex flex-col">

                        <img src={juliana} className="w-full h-[80%] rounded-md inline-block shadow-[-20px_20px_0px_rgba(32,228,57,1)]" />
                        <div className="mt-8">
                            <h4 className="text-xl font-extrabold">Juliana Kimani</h4>
                            <p className="text-xs mt-1">Partnerships and Stakeholder Engagement.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-md h-[400px] flex flex-col">

                        <img src={roselindah} className="w-full h-[80%] rounded-md inline-block shadow-[-20px_20px_0px_rgba(32,228,57,1)]" />
                        <div className="mt-8">
                            <h4 className="text-xl font-extrabold">Roselindah Atieno</h4>
                            <p className="text-xs mt-1">Commnity Wellfare.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-md h-[400px] flex flex-col">

                        <img src={idah} className="w-full h-[80%] rounded-md inline-block shadow-[-20px_20px_0px_rgba(32,228,57,1)]" />
                        <div className="mt-8">
                            <h4 className="text-xl font-extrabold">Idah Odeka</h4>
                            <p className="text-xs mt-1">Urbanism, Circular Economy and Sustainable Development.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-md h-[400px] flex flex-col">

                        <img src={diana} className="w-full h-[80%] rounded-md inline-block shadow-[-20px_20px_0px_rgba(32,228,57,1)]" />
                        <div className="mt-8">
                            <h4 className="text-xl font-extrabold">Diana Musa</h4>
                            <p className="text-xs mt-1">Social Enterprises.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-md h-[400px] flex flex-col">

                        <img src={marleen} className="w-full h-[80%] rounded-md inline-block shadow-[-20px_20px_0px_rgba(32,228,57,1)]" />
                        <div className="mt-8">
                            <h4 className="text-xl font-extrabold">Marleen Atieno</h4>
                            <p className="text-xs mt-1">Gender, Cheldren, and Climate Action.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-md h-[400px] flex flex-col">

                        <img src={beverley} className="w-full h-[80%] rounded-md inline-block shadow-[-20px_20px_0px_rgba(32,228,57,1)]" />
                        <div className="mt-8">
                            <h4 className="text-xl font-extrabold">Beverley Masita</h4>
                            <p className="text-xs mt-1">Communications and PR.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team