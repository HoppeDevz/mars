import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Separator from '../Separator';
import monthNames from '../../data/monthNames';
import { motion, AnimatePresence } from 'framer-motion';

const WeatherSection: React.FC = () => {

    const[currentSol, setCurrentSol] = useState(0);
    const[currentMonthInEarthPlanet, setCurrentMonthInEarthPlanet] = useState("");
    const[currentMonthDayInEarthPlanet, setCurrentMonthDayInEarthPlanet] = useState(1);
    const[min, setMin] = useState(0);
    const[max, setMax] = useState(0);

    useEffect(() => {

        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const currentMonthName = monthNames[currentMonth];
        const currentMonthDay = currentDate.getDate();

        setCurrentMonthInEarthPlanet(currentMonthName);
        setCurrentMonthDayInEarthPlanet(currentMonthDay);

        axios.get("/api/weather")
        .then(response => {

            setCurrentSol(response.data.currentSol);
            setMin(response.data.min);
            setMax(response.data.max);
        })
    }, []);

    return(
        <section className="w-full flex flex-col justify-center items-center py-5">

            <div className="w-4/5 flex flex-row justify-between items-center py-10">

                <AnimatePresence exitBeforeEnter>
                    <motion.div 
                        animate={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.50 }} 
                        className="w-1/3 flex flex-col justify-center items-center"
                    >
                        <p className="font-bold text-xl text-white">SOL {currentSol}</p>
                        <p className="font-regular text-gray-500">{currentMonthInEarthPlanet} {currentMonthDayInEarthPlanet}</p>
                    </motion.div>
                </AnimatePresence>

                <AnimatePresence exitBeforeEnter>
                    <motion.div 
                        animate={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.50 }} 
                        className="w-1/3 flex flex-col justify-center items-center"
                    >
                        <p className="font-bold text-xl text-white">HIGH</p>
                        <p className="font-regular text-gray-500">{max.toFixed(2)}F</p>
                    </motion.div>
                </AnimatePresence>

                <AnimatePresence exitBeforeEnter>
                    <motion.div 
                        animate={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.50 }} 
                        className="w-1/3 flex flex-col justify-center items-center"
                    >
                        <p className="font-bold text-xl text-white">LOW</p>
                        <p className="font-regular text-gray-500">{min.toFixed(2)}F</p>
                    </motion.div>
                </AnimatePresence>
            </div>

            <Separator/>
        </section>
    )
}

export default WeatherSection;