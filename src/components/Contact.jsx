import React from 'react'

export const Contact = () => {
  return (
    <div name='Contact' className='h-auto w-full bg-gradient-to-b from-black p-4 to-gray-800 '>
        <div className='flex flex-col justify-center p-4 max-w-screen-lg text-white mx-auto '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    Contact
                </p>
                    
                <p className='py-6'>
                    vous pouvez envoyer votre interet depuis la formulaire en bas
                </p>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <form action='https://getform.io/f/bllljqzb' method='POST' className='flex flex-col w-full md:w-1/2'>
                        <input className=' my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' type='text' name='name' placeholder='Entrer votre nom :' required></input>
                        <input className=' my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' type='text' name='email' placeholder='Entrer votre Email :' required></input>
                        <textarea rows={10} className=' my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' name='message' type='text' placeholder='Entrer votre Message :' required />
                        <button type="submit" className='mx-auto text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 rounded-md hover:scale-110 duration-300'     > Envoyer</button>


                </form>

            </div>
        </div>
    </div>
  )
}
