import React from 'react';
import Image from 'next/image';

import NasaLogo from '../../assets/nasa-logo-font-white-70x20.png'

const Header: React.FC = () => {

    function goToNasaApi() {

        window.open("https://api.nasa.gov/")
    }

    function goToGithubRepo() {

        window.open("https://github.com/HoppeDevz/")
    }

    return(
        <header className="w-100 py-10 flex flex-row bg-#080808 justify-between items-center">

            <div className="ml-10 lg:ml-40">

                <Image 
                    width="70"
                    height="20"
                    src={NasaLogo} 
                />
            </div>
            

            <div className="mr-2 lg:mr-10 flex flex-row">
                <p onClick={goToGithubRepo} className="cursor-pointer hover:text-white text-slate-400 font-bold mx-2">Github</p>
                <p onClick={goToNasaApi} className="cursor-pointer hover:text-white text-slate-400 font-bold mx-2">NASA API</p>
            </div>
           
        </header>
    )
}

export default Header;