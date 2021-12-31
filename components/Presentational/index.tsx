import React from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion';

import PresentationalImg from '../../assets/presentational-img-2.png'

const Presentational: React.FC = () => {

    return(
        <div className="w-100 flex flex-row flex-wrap justify-center md:justify-between items-center">

            <div className='max-w-lg py-40 px-10 lg:px-0 lg:ml-40'>

                <AnimatePresence>
                    <motion.div 
                        animate={{ opacity:1, x:0 }}
                        initial={{ opacity:0, x:-20 }}
                        exit={{ opacity:0, x: 20 }}
                        transition={{ duration: 0.9 }} 
                    >
                        <h1 className="font-bold text-6xl text-white">Get weather and pictures from Mars!</h1>
                    </motion.div>
                </AnimatePresence>
               

                <AnimatePresence>
                    <motion.div 
                        animate={{ opacity:1, x:0 }}
                        initial={{ opacity:0, x:-20 }}
                        exit={{ opacity:0, x: 20 }}
                        transition={{ duration: 0.9 }} 
                    >
                        <p className="font-medium text-md my-5 text-gray-500">
                            This application uses NASA API to get wheather and pictures from mars, shooted by Curiosity, Opportunity, and Spirit rovers
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="w-full 2xl:w-3/6">

                <Image className="2xl:rounded-l-md" width="1920px" height="1080px" src={PresentationalImg} />
            </div>
            
            
        </div>
    )
}

export default Presentational