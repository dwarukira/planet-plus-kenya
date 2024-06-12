import React from 'react';
import { honey } from '../assets'; // Assuming the asset is exported from '../assets'

const HoneyDesc = () => {
    return (
        <div
            className="relative bg-cover bg-center bg-no-repeat font-serif"
            style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.6)), url(${honey})`,
            }}
        >
            <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

            <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                <div className="max-w-4xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100">
                        Mzee Konana and Anupis{' '}
                        <strong className="block font-extrabold ">
                            {' '}
                            Pure Honey{' '}
                        </strong>
                    </h1>



                    <div className="mt-8 flex flex-col md:flex-row md:justify-between gap-4">
                        <div className="md:w-2/3 flex flex-col justify-end">
                            <p className="block w-full rounded bg-yellow-600 px-6 py-3 text-sm font-medium text-white shadow hover:bg-yellow-700 sm:w-auto">
                                <strong>Mzee Konana & Anupis honey</strong> is
                                a precious gift of nature from the pristine
                                forest of Mau where the Ogiek Community has
                                called home since time immemorial.
                                <br />
                                This product is developed using the original
                                honey producing techniques of the Ogiek
                                Community, believed to be the original Kenyans,.
                                Its authenticity and originality are assured by
                                the rich tradition behind it's production which
                                has maintained the quality of this particular
                                product for more than 70 years.
                            </p>
                            <p className="block w-full rounded bg-yellow-600 px-6 py-3 text-sm font-medium text-white shadow hover:bg-yellow-700 sm:w-auto mt-4">
                                Buying this product provides an alternative
                                source of income for the Forest Adjacent
                                Dwellers which in return translates to the
                                conservation of the Mau Forest; the largest
                                water tower in the whole of East Africa. The Mau
                                Forest supports major lakes in the Rift Valley
                                and even the adored Masai Mara Ecosystem. The
                                packaging is selected specifically to promote
                                the protection of the environment, making the
                                product not only good for the human being but
                                also for the environment.
                                <br />
                                <br />
                                Once you get a taste you will be back for more!
                            </p>
                        </div>
                        <div className="md:w-1/3 flex justify-end">
                            <p
                                className="block w-full rounded bg-white px-6 py-3 text-sm font-medium text-black text-center shadow hover:bg-slate-300 sm:w-auto h-full"
                            >
                                <br />
                                <strong>Mzee Konana</strong> and{' '}
                                <strong>Sarah Anupi Kutahi</strong> friends who
                                met in 2016 and have a shared passion for
                                enhancing environmental wellbeing, community
                                empowerment and cultural exchange. Mzee Konana
                                is a member of the Ogiek Community, Anupi is an
                                environmental scientist who has been helping to
                                rehabilitate Mau Forest.

                                <br />
                                <br />
                                <br />
                                <br />
                                With love,
                                <br />
                                <strong>Sarah Anupi</strong> and <strong>Mzee Konana</strong>
                                <hr />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HoneyDesc;