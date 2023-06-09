'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {


  

  return (
    <div className={`backgroundHome w-full min-h-screen`} >
      <div className='bg-white w-1/2 min-h-screen flex flex-col items-center justify-center'>
     <Image className='w-[18rem] h-[12rem] mt-2' src={require('../../public/img/logooficial.png')}/>
     <Link href="/Login"><button 
     className="border-2 border-slate-600 text-2xl font-lora font-bold py-2 mb-4 mt-8 px-4 rounded-xl shadow-lg hover:transform hover:rotate-360 hover:scale-95 hover:duration-500 hover:bg-slate-600 hover:text-white">Ingresa a tu barberia</button></Link>
     <Link href="/Registro"><button 
     className="border-2 border-slate-600 text-2xl font-lora font-bold py-2 mb-8 mt-8 px-4 rounded-xl shadow-lg hover:transform hover:rotate-360 hover:scale-95 hover:duration-500 hover:bg-slate-600 hover:text-white">Registra tu barberia</button></Link>
     <h3 className='mt-12 text-slate-400 font-lora'>Barber.V.1.00</h3>
     </div>
     
    </div>
  )
}
