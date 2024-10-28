import React, { useState } from 'react'
import hospitalapp from '../assets/accueilportfolio.png'
import restaurant from '../assets/forportfolio.png'
import freelance from '../assets/freelance.png'
import fssm from '../assets/fssm.png'
import koulHealthy from '../assets/koulHealthy.png'
import anibis from '../assets/anibis.PNG'
import matforce from '../assets/matforce.PNG'
import eshopping from '../assets/ecommerce.PNG'
import casar from '../assets/casar.mp4'
import freelance_v from '../assets/freelance.mp4'
import hospital_v from '../assets/hospital.mp4'
import koulhealthy_v from '../assets/KoulHealthy.mp4'
import restaurant_v from '../assets/restaurant.mp4'
import shop from '../assets/shopp.mp4'








export const Portfolio = () => {
    const[selectedVideo,setSelectedVideo]=useState(null);
    const portfolios=[
        {
            id:1,
            src:anibis,
        },

        {
            id:2,
            src:hospitalapp,
            video:hospital_v

        },

        {
            id:3,
            src:restaurant,
            video:restaurant_v

        },

        {
            id:4,
            src:eshopping,
            video:shop
        },
        {
            id:5,
            src:freelance,
            video:freelance_v
        },
        {
            id:6,
            src:fssm,
            
        },
        {
            id:7,
            src:koulHealthy,
            video:koulhealthy_v
        },
        {
            id:8,
            src:matforce,
            video:casar

        }
    ];
  return (
    <div name="Projets" className='w-full bg-gradient-to-b from-black  to-gray-800 md:h-auto'>
        <div className='max-w-screen-lg flex flex-col mx-auto text-white justify-center p-4 w-full'>
            <div className='pb-8'>
                <p className='text-4xl  font-bold inline border-b-4 border-b-gray-600'>
                    Portfolio
                </p>
                <p className='py-8'>
                    Découvrez certains de mes travaux ici
                </p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {portfolios.map(({id,src,video})=>(
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105'>
                    <img className='h-44 w-full rounded-md ' src={src} alt='my work'></img>

                    <div className='flex justify-center items-center'>
                        <button onClick={()=>setSelectedVideo(video)} className='w-1/2 px-6 py-6 hover:scale-105 duration-200'>Demo</button>
                        <button className='w-1/2 px-6 py-6  hover:scale-105 duration-200'>Code</button>
                    </div>
                </div>
                ))}
                
            </div>
                {/* Modale pour afficher la vidéo */}
                {selectedVideo && (
                    <div className="fixed inset-0 pt-20 bg-black bg-opacity-70 flex justify-center items-center">
                        <div className="bg-white p-4 rounded-lg relative w-full max-w-2xl mx-4">
                            <button
                                onClick={() => setSelectedVideo(null)}
                                className="absolute top-0 right-0 p-2 text-black"
                            >
                                X
                            </button>
                            <video controls className="w-full h-auto rounded-md">
                                <source src={selectedVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                )}
        </div>
    </div>
  )
}
