import React from 'react'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaGitlab, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

export const SocialLinks = () => {
  const links=[
    {
      id:1,
      href:'https://www.linkedin.com/in/youness-ezzaou-50a8b61b0/',
      style:'rounded-tr-md',
      child :(
        <>
        Linkedin<FaLinkedin size={30}/>
      </>
      )

    },
    {
      id:2,
      href:'https://github.com/',
      child :(
        <>
        GitHub<FaGithub size={30}/>
      </>
      )

    },
    {
      id:3,
      href:'https://repo-pulse.pulsweb.ch/youness7',
      child :(
        <>
        GitLab<FaGitlab size={30}/>
      </>
      )

    },
    {
      id:4,
      href:'gmailto:ezzaouyouness@gmail.com',
      child :(
        <>
        email<HiOutlineMail size={30}/>
      </>
      )

    },
    {
      id:5,
      href:'/Youness Ezzaou_CV.pdf',
      style:'rounded-br-md',
      child :(
        <>
        CV<BsFillPersonLinesFill size={30}/>
      </>
      ),
      download:true

    },
  ];
  return (
    <div className='flex flex-col top-[35%] left-0 text-white  fixed'>
      <ul>
        {links.map(({id,href,style,download,child}) => (
        <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] bg-gray-500'+' '+style}>
          <a href={href}
             download={download}
             target='_blank'
             rel="noreferrer"
           className='flex justify-between items-center w-full' >
           {child}
          </a>
        </li>
        ))}
       
      </ul>
    </div>
  )
}
