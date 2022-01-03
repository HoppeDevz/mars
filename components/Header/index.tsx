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
                    alt="Nasa Logo"
                    width="70"
                    height="20"
                    src={NasaLogo} 
                />
            </div>
            

            <div className="mr-2 lg:mr-10 flex flex-row">
                <Button label="Github" type="outlined" onClick={goToGithubRepo} />
                <Button label="NASA API" type="fill" onClick={goToNasaApi} />
            </div>
           
        </header>
    )
}

export default Header;