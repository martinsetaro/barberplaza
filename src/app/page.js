'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {


  

  return (
    <div className={`backgroundHome w-full min-h-screen max-[900px]:pt-24 max-[900px]:pb-24`} >
      <div className=" min-[901px]:bg-white min-[901px]:bg-opacity-30 w-1/2 ml-0 min-h-screen max-[900px]:w-full flex flex-col items-center justify-center">


     <Image className='min-[1000px]:w-[18rem] mt-2 max-[900px]:w-[20rem] max-[900px]:h-[15rem]' alt="logo" src={require('../../public/img/logooficial.png')}/>
     <Link href="/Login"><button 
     className=" bg-white text-2xl font-lora font-bold py-2 mb-4 mt-8 px-4 rounded-xl shadow-lg hover:transform hover:rotate-360 hover:scale-95 hover:duration-500 hover:bg-slate-600 hover:text-white max-[900px]:w-full max-[900px]:h-[6rem] max-[900px]:text-3xl">Ingresa a tu barberia</button></Link>
     <Link href="/Registro"><button 
     className="bg-white text-2xl font-lora font-bold py-2 mb-8 mt-8 px-4 rounded-xl shadow-lg hover:transform hover:rotate-360 hover:scale-95 hover:duration-500 hover:bg-slate-600 hover:text-white max-[900px]:w-full max-[900px]:h-[6rem] max-[900px]:text-3xl">Registra tu barberia</button></Link>
     <Link href="/Turnos"><button 
     className=" bg-blue-600 text-2xl text-white font-lora font-bold py-2 mb-4 mt-4 px-4 rounded-xl shadow-lg hover:transform hover:rotate-360 hover:scale-95 hover:duration-500 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:border-blue-700 hover:border-2 max-[900px]:w-full max-[900px]:h-[6rem] max-[900px]:text-3xl ">Solicitar un turno</button></Link>
     <h3 className='mt-12 text-white font-lora font-bold max-[900px]:text-3xl'>Barber.V.1.00</h3>
     </div>
     
    </div>
  )
}
