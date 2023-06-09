"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import BeatLoader from "react-spinners/BeatLoader";



const Page = () => {
  
  const route=useRouter();
  const [load,setLoad ] = useState(false);

  const handlerEnviar = (e)=>{
    e.preventDefault();
    setLoad(true);
     setTimeout(()=>{
      
      route.push('/dashboard')
     },4000)
   
  }

  
   
  

  return (
    
    <div className={`backgroundHome w-full min-h-screen bg-white`}>
     <div className='bg-white w-1/2 min-h-screen flex flex-col'>
      <Image className='w-[8rem] h-[6rem] mt-6 ml-8' alt="logo" src={require('../../../public/img/logooficial.png')}/>
      <h2 className='font-lora text-center text-4xl uppercase -mb-28 mt-6'>Bienvenido</h2>
            <form className='flex flex-col w-1/2 h-[15rem] m-auto'>
        <label className='mb-3'>Usuario</label>
        <input 
        className='mb-6 border-2 border-slate-200 p-1 rounded-md'
        type="text" placeholder='Ingrese su usuario'/>
        <label className='mb-3'>Contraseña</label>
        <input 
        className='border-2 border-slate-200 p-1 rounded-md'
        type="password" placeholder='Ingrese su contraseña'/>
        <div className='w-1/3 h-[8rem] m-auto flex justify-center mt-8'>
          {load && <BeatLoader 
          color='#1d1d1d'
          />}
        </div>
        <button 
        onClick={handlerEnviar}
        className='border-2 border-slate-600 text-2xl font-lora font-bold py-2 mb-4 mt-12 px-4 rounded-xl shadow-lg hover:transform hover:rotate-360 hover:scale-95 hover:duration-500 hover:bg-slate-600 hover:text-white'>Ingresar</button>
        <h3 className='mt-4 font-lora cursor-pointer hover:text-blue-950 hover:font-bold'>Olvidastes tu contraseña?</h3>
      </form>
     </div>
    </div>
    
  )
}

export default Page
