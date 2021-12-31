import React from 'react';

import Separator from '../Separator';

const WeatherSection: React.FC = () => {

    return(
        <section className="w-full flex flex-col justify-center items-center py-5">

            <div className="w-4/5 flex flex-row justify-between items-center py-10">

                <div className="w-1/3 flex flex-col justify-center items-center">
                    <p className="font-bold text-xl text-white">SOL 1098</p>
                    <p className="font-regular text-gray-500">August 25</p>
                </div>

                <div className="w-1/3 flex flex-col justify-center items-center">
                    <p className="font-bold text-xl text-white">HIGH</p>
                    <p className="font-regular text-gray-500">-15F</p>
                </div>
                
                <div className="w-1/3 flex flex-col justify-center items-center">
                    <p className="font-bold text-xl text-white">LOW</p>
                    <p className="font-regular text-gray-500">-125F</p>
                </div>
            </div>

            <Separator/>
        </section>
    )
}

export default WeatherSection;