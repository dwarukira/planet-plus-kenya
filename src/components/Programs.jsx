import React from 'react'
import { education, restoration, sarah1 } from '../assets'
import { Link } from 'react-router-dom';

const Programs = () => {
    return (
        <div className="text-gray-400 bg-gray-300 className= relative py-16 font-serif">
            <div className="container px-4 py-8 mx-auto">
                <h1 className="text-5xl font-extrabold mb-4 text-transparent text-center bg-clip-text bg-gradient-to-r from-green-600 to-white">Our Programs</h1>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 items-start justify-evenly">
                    <div className="p-4 md:w-1/3 flex flex-col">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-green-400 mb-4 flex-shrink-0 shadow-md shadow-green-500">
                            <img src={restoration} alt="" className='rounded-full' />
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-black text-lg title-font font-extrabold mb-2">Landscape restoration and climate action</h2>
                            <p className="leading-relaxed text-black">Landscape restoration is a pivotal component of comprehensive climate action strategies, addressing both the root causes and the wide-ranging impacts of climate change. By rehabilitating degraded ecosystems, landscape restoration enhances carbon sequestration, thereby reducing atmospheric greenhouse gas concentrations.</p>
                            <a className="mt-3 text-gray-900 underline inline-flex items-center"><Link to="/programs">Read More</Link></a>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 flex flex-col">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-green-400 mb-4 flex-shrink-0 shadow-md shadow-green-500">
                            <img src={education} alt="" className='rounded-full' />
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-black text-lg title-font font-extrabold mb-2">Education for sustainable development</h2>
                            <p className="leading-relaxed text-black">Education for sustainable development (ESD) is essential for fostering the knowledge, skills, values, and attitudes needed to build a sustainable future. ESD empowers individuals and communities to make informed decisions and take responsible actions that protect the environment, promote social equity, and drive economic viability.</p>
                            <a className="mt-3 text-gray-900 underline inline-flex items-center"><Link to="/programs">Read More</Link></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Programs