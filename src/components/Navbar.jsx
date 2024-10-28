import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

export const Navbar = () => {
  const [nav,setNav]=useState(false);
  const links =[
    {
      id:1,
      link:'Accueil'
    },
    {
      id:2,
      link:'À propos de moi'
    },
    {
      id:3,
      link:'Projets'
    },
    {
      id:4,
      link:'Expériences'
    },
    {
      id:5,
      link:'Contact'
    }


  ]
  return (
    <div className="flex justify-between items-center text-white  px-4 z-50 w-full h-20 bg-black fixed">
        <div>
            <h1 className='text-5xl font-signature'>Youness</h1>
        </div>
        <ul className='hidden md:flex'>
          {links.map(({link,id})=>(
            <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'> 
              <Link to={link} smooth duration={500}> 
                {link} 
              </Link>
            </li>
          ))}
          
        </ul>

        <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
          {nav? <FaTimes size={20} /> : <FaBars size={30} />}
         
        </div>  
        {nav && (
         <ul className='flex flex-col absolute top-0 left-0 justify-center w-full h-screen items-center bg-gradient-to-b from-black to-gray-500 text-gray-500'>
          {links.map(({link,id})=>(
            <li key={id} className='px-4 text-4xl cursor-pointer capitalize  hover:scale-105 duration-200 py-6'> 
              <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}> 
                {link} 
              </Link>
            </li>
          ))}
         </ul>
         )
        }
    </div>
  );
};
export default Navbar;
