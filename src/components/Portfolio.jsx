import React from 'react'
import hospitalapp from '../assets/accueilportfolio.png'
import restaurant from '../assets/forportfolio.png'
export const Portfolio = () => {
    const portfolios=[
        {
            id:1,
            src:hospitalapp
        },

        {
            id:2,
            src:restaurant
        },

        {
            id:3,
            src:hospitalapp
        },

        {
            id:4,
            src:hospitalapp
        },
        {
            id:5,
            src:hospitalapp
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
                {portfolios.map(({id,src})=>(
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105'>
                    <img className='rounded-md ' src={src} alt='my work'></img>

                    <div className='flex justify-center items-center'>
                        <button className='w-1/2 px-6 py-6 hover:scale-105 duration-200'>Demo</button>
                        <button className='w-1/2 px-6 py-6  hover:scale-105 duration-200'>Code</button>
                    </div>
                </div>
                ))}
                
            </div>
        </div>
    </div>
  )
}
