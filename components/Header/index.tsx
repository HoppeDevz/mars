import React from 'react';
import Image from 'next/image';

import NasaLogo from '../../assets/nasa-logo-font-white-70x20.png';

import Button from '../Button';

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
                <Button type="outlined" onClick={goToGithubRepo}>Github</Button>
                <Button type="fill" onClick={goToNasaApi}>NASA API</Button>
            </div>
           
        </header>
    )
}

export default Header;