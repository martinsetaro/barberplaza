'use client'
import React from 'react'
import Image from 'next/image'



const page = () => {

  return (
    
    <div className={`backgroundHome w-full min-h-screen bg-white`}>
     <div className='bg-white w-1/2 min-h-screen flex flex-col'>
      <Image className='w-[10rem] h-[8rem] mt-12 ml-8'  src={require('../../../public/img/logooficial.png')}/>
      <h2 className='font-lora text-center text-5xl -mb-44 mt-12'>Bienvenido!</h2>
      <form className='flex flex-col w-1/3 h-[15rem] m-auto'>
        <label className='mb-3'>Usuario</label>
        <input 
        className='mb-6 border-2 border-slate-200 p-1 rounded-md'
        type="text" placeholder='Ingrese su usuario'/>
        <label className='mb-3'>Contraseña</label>
        <input 
        className='border-2 border-slate-200 p-1 rounded-md'
        type="password" placeholder='Ingrese su contraseña'/>
        <button className='border-2 border-slate-600 text-2xl font-lora font-bold py-2 mb-4 mt-16 px-4 rounded-xl shadow-lg hover:transform hover:rotate-360 hover:scale-95 hover:duration-500 hover:bg-slate-600 hover:text-white'>Ingresar</button>
        <h3 className='mt-4 font-lora cursor-pointer'>Olvidastes tu contraseña?</h3>
      </form>
     </div>
    </div>
    
  )
}

export default page
