import React from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import heroImage from "../assets/ezzaou.jpg";

export const Home = () => {
  return (
    <div className='h-auto w-full bg-gradient-to-b from-black via-black to-gray-800 pt-20 md:h-screen lg:h-screen'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 h-full md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-6xl font-bold  text-white'>je suis un Déveleppeur Full Stack</h2>
          <p className='text-gray-500 py-4 max-w-lg'>
            Je maîtrise les technologies suivantes : ReactJS, Symfony, PHP, Docker, AWS, HTML et CSS, 
            ce qui me permet de concevoir et développer des interfaces utilisateurs modernes et fonctionnelles, 
            ainsi que de gérer l'architecture backend et le déploiement d'applications web.
          </p>
          <div>
            <button className="text-white group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>

        <div className='my-4 md:mt-0'>
          {/* Tailwind classes added to make the image responsive and compatible */}
          <img
            src={heroImage}
            alt='my profile'
            className="rounded-2xl w-full max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};
