import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
  const [nav,setNav]=useState(false);
  const links =[
    {
      id:1,
      link:'Home'
    },
    {
      id:2,
      link:'About'
    },
    {
      id:3,
      link:'Portfolio'
    },
    {
      id:4,
      link:'Expérience'
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
            {link}
            </li>
          ))}
          
        </ul>

        <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
          {nav? <FaTimes size={20} /> : <FaBars size={30} />}
         
        </div>  
        {nav && (
         <ul className='flex flex-col absolute top-0 left-0 justify-center w-full h-screen items-center bg-gradient-to-b from-black to-gray-500 text-gray-500'>
          {links.map(({link,id})=>(
            <li key={id} className='px-4  cursor-pointer capitalize  hover:scale-105 duration-200 py-6'> 
            {link}
            </li>
          ))}
         </ul>
         )
        }
    </div>
  );
};
export default Navbar;
