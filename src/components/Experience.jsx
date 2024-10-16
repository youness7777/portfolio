import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import tailwind from '../assets/Tailwind_CSS.png'
import php from '../assets/php.png'
import laravel from '../assets/laravel.png'
import symfony from '../assets/symfony.png'
import docker from '../assets/docker.png'
import aws from '../assets/aws.png'
import github  from '../assets/github.png'
import gitlab from '../assets/gitlab.png'
import trello from '../assets/trello.png'

export const Experience = () => {

    const Exps = [
        {
          id: 1,
          src: html,
          title: "HTML",
          style: 'shadow-orange-500' // HTML est souvent associé à l'orange
        },
        {
          id: 2,
          src: css,
          title: "CSS",
          style: 'shadow-blue-500' // CSS est souvent bleu
        },
        {
          id: 3,
          src: js,
          title: "JavaScript",
          style: 'shadow-yellow-500' // JavaScript est lié au jaune
        },
        {
          id: 4,
          src: react,
          title: "React",
          style: 'shadow-cyan-500' // React utilise le cyan
        },
        {
          id: 5,
          src: tailwind,
          title: "Tailwind",
          style: 'shadow-teal-500' // Tailwind utilise le teal (bleu-vert)
        },
        {
          id: 6,
          src: php,
          title: "PHP",
          style: 'shadow-indigo-500' // PHP est souvent représenté avec une couleur indigo
        },
        {
          id: 7,
          src: laravel,
          title: "Laravel",
          style: 'shadow-red-500' // Laravel utilise le rouge
        },
        {
          id: 8,
          src: symfony,
          title: "Symfony",
          style: 'shadow-gray-500' // Symfony utilise des couleurs neutres, souvent noir/gris
        },
        {
          id: 9,
          src: docker,
          title: "Docker",
          style: 'shadow-blue-500' // Docker est bleu
        },
        {
          id: 10,
          src: aws,
          title: "AWS",
          style: 'shadow-orange-400' // AWS utilise l'orange dans son logo
        },
        {
          id: 11,
          src: github,
          title: "GitHub",
          style: 'shadow-gray-500' // GitHub est généralement noir ou gris
        },
        {
          id: 12,
          src: gitlab,
          title: "GitLab",
          style: 'shadow-orange-600' // GitLab est orange foncé
        },
        {
          id: 13,
          src: trello,
          title: "Trello",
          style: 'shadow-blue-500' // Trello est souvent bleu
        }
      ];
      
  return (
    <div className='w-full bg-gradient-to-b from-gray-800 to-black pt-20 md:h-auto'>
        <div className='max-w-screen-lg flex flex-col mx-auto justify-center p-4 text-white w-full h-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-600'>
                    Expériences
                </p>
                <p className='py-8'>
                   Voici les technologies avec lesquelles j'ai travaillé : 
                </p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 text-center py-8 gap-8 px-12 sm:px:0'>
                {Exps.map(({id,src,title,style})=>(
                    <div key={id} className={`shadow-md shadow-orange-600 hover:scale-105 py-2 duration-150 rounded-lg ${style}`}>    
                        <img src={src} className='w-28 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                    </div>
                ))}
             </div>
        </div>
    </div>
  )
}
