import { useEffect } from 'react';
import axios from 'axios';
import React, { useState } from 'react';
import Button from '../Button';

const PicturesSection: React.FC = () => {

    const[pics, setPics] = useState<any>([{ img_src: null }]);
    const[currentPic, setCurrentPic] = useState(0);

    const[camera, setCamera] = useState("ALL");
    const[rover, setRover] = useState("Curiosity");

    const onChangeCamera = (value: string) => {

        setCamera(value);
        getMarsPhotos(value, rover);
    };
    const onChangeRover = (value: string) => {

        setRover(value);
        getMarsPhotos(camera, value);
    };

    function nextPhotoHandler() {

        if (currentPic + 1 > pics.length - 1) return;

        setCurrentPic(currentPic + 1);
    }
    function previousPhotoHandler() {

        if (currentPic - 1 <0) return;

        setCurrentPic(currentPic - 1);
    }

    async function getMarsPhotos(camera: string, rover: string) {

        try {

            const response = await axios.post("/api/pictures", { camera, rover })
            
            console.log(response.data.photos);

            setPics(response.data.photos);
            

        } catch(err) {}
        
    }

    useEffect(() => {

        getMarsPhotos(camera, rover);
    }, []);

    return(
        <section className="w-full flex flex-col justify-center items-center">

            <h1 className="font-bold text-white text-xl py-10">PICTURES</h1>

            <div className="w-4/5 flex flex-col justify-start items-start">

                <div className="w-full flex flex-row justify-center items-center lg:justify-start">

                    <div className="flex flex-row">

                        <div className="flex flex-col mr-2 justify-center items-center">

                            <select
                                value={camera}
                                onChange={e => onChangeCamera(e.target.value)}

                                className="w-28 bg-neutral-800 text-white rounded-sm px-2 py-2 outline-none"
                            >   
                                <option value="ALL">ALL</option>
                                <option value="FHAZ">FHAZ</option>
                                <option value="RHAZ">RHAZ</option>
                                <option value="NAVCAM">NAVC</option>
                            </select>
                        </div>
                    
                        <div className="flex flex-col mr-2 justify-center items-center">

                            <select
                                value={rover}
                                onChange={e => onChangeRover(e.target.value)}

                                className="w-28 bg-neutral-800 text-white rounded-sm px-2 py-2 outline-none"
                            >
                                <option value="Curiosity">Curiosity</option>
                                <option value="Opportunity">Opportunity</option>
                                <option value="Spirit">Spirit</option>
                            </select>
                        </div>
                    </div> 
                </div>        
            </div>

            <div 
                style={{ height:"900px", overflow:"hidden"}} 
                className="w-4/5 relative bg-black flex flex-col justify-center items-center my-10 rounded-sm"
            >

                <div className="w-full flex flex-row justify-between items-center bg-black top-0 absolute">

                    <div>
                        <Button onClick={previousPhotoHandler} label="Previous" />
                        <Button onClick={nextPhotoHandler} label="Next" />
                    </div>
                    
                    <p className="text-white mr-5">{currentPic + 1}/{pics.length}</p>
                </div>

                <div className="w-full flex flex-row bg-black bottom-0 absolute">
                    {pics.length > 0 && pics[currentPic].earth_date ?
                    
                        <p className='text-gray-400 px-5'>{new Date(pics[currentPic].earth_date).toString()}</p>
                    :
                        null   
                    }
                </div>

                {pics.length > 0 && pics[currentPic].img_src ?
                    
                    <img src={pics[currentPic].img_src} />
                :
                    <img src="" />
                }
                
            </div>

        </section>
    )
}

export default PicturesSection;