'use client'
import React from 'react'
import Link from 'next/link'



const page = () => {



  return (
    <div className='bg-gradient-to-r from-slate-200 to-slate-300 w-full min-h-screen pt-8'>
        <Link href="/"><button className='bg-orange-800 text-white font-bold p-3 rounded-md shadow-xl ml-5 hover:bg-gradient-radial from-orange-500 to-orange-700'>Página principal</button></Link>
        <div className='w-[40rem] h-auto p-4 m-auto shadow-lg rounded-md bg-gradient-to-l from-slate-500 to-slate-800'>
          <h2 className='text-white text-center text-3xl font-bold'>Restablece password</h2>  
        </div>
        <div className="w-[40rem] h-auto p-4 m-auto shadow-lg rounded-md mt-8 bg-white flex flex-col">
            <h2 className='font-lora text-xl text-center mb-2'>Elige la nueva contraseña</h2>
            <h2 className='font-lora text-center mb-6'>Te solicitaremos nuevamente tu correo</h2>
            <input 
            className='border-2 border-slate-200 p-1 rounded-md mb-2'
            type="email" placeholder='Ingrese correo'/>
            <label>Nueva contraseña</label>
            <input
            className='border-2 border-slate-200 p-1 rounded-md mb-2'
            type="password" />
            <label>Repetir contraseña</label>
            <input
            className='border-2 border-slate-200 p-1 rounded-md mb-2'
            type="password" />
            <button className='mt-12 mb-4 bg-orange-600 m-auto text-white font-bold uppercase p-2 rounded-lg shadow-md w-[16rem]'>Solicitar nueva contraseña</button>
        </div>
      
    </div>
  )
}

export default page
