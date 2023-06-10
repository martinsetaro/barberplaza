import React from 'react'
import Image from 'next/image'


const HeaderTurnos = () => {

  return (
    <div className='w-full h-[40rem] bg-slate-300 p-5 uppercase font-bold font-lora'>
    <h2 className='text-2xl'>Panel de control : Las tijeras</h2>
        <div className='w-full h-80 flex flex-col bg-white mt-6 shadow-md'>
           <div className='w-full bg-blue-600 h-[6rem] pl-2 shadow-md bg-gradient-to-r from-blue-500 to-blue-400 flex items-center gap-5'>
               <div className='w-[15rem] flex items-center gap-3'>
                <div className='bg-slate-800 w-[3rem] h-[3rem] rounded-xl flex justify-center items-center'>
                    <h2 className='uppercase text-white text-2xl'>t</h2>
                </div>
                <div>
                  <h2 className='text-white font-bold text-xl'>Las tijeras</h2>
                </div>
               </div>
               <div className='w-[20rem] flex items-center gap-3'>
                <div className='bg-slate-800 w-[3rem] h-[3rem] rounded-xl flex justify-center items-center'>
                    <h2 className='uppercase text-white text-2xl'>p</h2>
                </div>
                <div className='w-[10rem]'>
                  <h2 className='text-white font-bold text-md'>Bienvenido</h2>
                  <h2 className='text-white font-bold text-xl'>Pepe Grillo</h2>
                </div>
               </div>
               <div className='w-[20rem] flex items-center gap-3'>
                <div className=' flex justify-center items-center'>
            <Image className="w-[3rem] h-[3rem] cursor-pointer" src={require('../../public/img/logout.png')} alt="logoout"/>
                </div>
                <div className='w-[10rem]'>
                  <h2 className='text-white font-bold'>Log-out</h2>
                </div>
               </div>
           </div>
        
        </div>
    </div>
  )
}

export default HeaderTurnos