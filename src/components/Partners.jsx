
import React from 'react'
import { ayi, biupe, chyulu, g, gro, honey1, kefri, kfs, tani } from '../assets'

const Partners = () => {
    return (
        <div className="grid grid-cols-1 gap-4 m-5 p-5 sm:grid-cols-2 md:grid-cols-3">
            <div>
                <img
                    className="h-40 max-w-150 rounded-lg object-fit object-center"
                    src={gro}
                    alt="gallery-photo"
                />
            </div>
            <div>
                <img
                    className="h-40 max-w-150 rounded-lg object-fit object-center"
                    src={honey1}
                    alt="gallery-photo"
                />
            </div>
            <div>
                <img
                    className="h-40 max-w-150 rounded-lg object-fit object-center"
                    src={g}
                    alt="gallery-photo"
                />
            </div>
            <div>
                <img
                    className="h-40 max-w-150 rounded-lg object-fit object-center"
                    src={ayi}
                    alt="gallery-photo"
                />
            </div>
            <div>
                <img
                    className="h-40 max-w-150 rounded-lg object-fit object-center"
                    src={biupe}
                    alt="gallery-photo"
                />
            </div>
            <div>
                <img
                    className="h-40 max-w-150 rounded-lg object-fit object-center"
                    src={chyulu}
                    alt="gallery-photo"
                />
            </div>
            <div>
                <img
                    className="h-40 max-w-150 rounded-lg object-fit object-center"
                    src={kfs}
                    alt="gallery-photo"
                />
            </div>
            <div>
                <img
                    className="h-40 max-w-150 rounded-lg object-fit object-center"
                    src={kefri}
                    alt="gallery-photo"
                />
            </div>
            <div>
                <img
                    className="h-40 max-w-150 rounded-lg object-fit object-center"
                    src={tani}
                    alt="gallery-photo"
                />
            </div>

        </div>
    )
}

export default Partners