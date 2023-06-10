'use client';
import React, { useState , useEffect } from 'react'

const TablaTurnos = () => {

  const [turnos,setTurnos] = useState([])



  useEffect(()=>{

   const recepcionTurnos = async ()=>{

    const response = await fetch('http://localhost:4001/Turnos');
    const data = await response.json();
    setTurnos(data)
  
   }
   recepcionTurnos();


  },[])


    
  return (
    <div className='w-full h-auto p-2'>
     
         {turnos.length == 0 ? (<h2 className='text-center text-2xl mt-12'>No existen turnos</h2>) : (
          turnos.map( turno => {
            return(
          <div className='w-full h-auto flex flex-col justify-around border-2 border-slate-600 mb-2 mt-2 p-2' key={turno.id}>
            <div className='flex justify-around'>
              <div>
                 <h2 className='text-xl'>Nombre : {turno.nombre}</h2>
                 <h2 className='text-xl'>Telefono : {turno.telefono}</h2>
              </div>
              <div>
                 <h2 className='text-xl'>Hora: {turno.hora}</h2>
                 <h2 className='text-xl'>Fecha: {turno.fecha}</h2>
               </div>
               </div>
                <div className='w-full h-[2.5rem] flex justify-around mt-4'>
        <button className='rounded-md p-1 border-2 border-green-700 text-green-700 font-bold uppercase hover:bg-green-700 hover:text-white'>confirmar</button>
        <button className='rounded-md p-1 border-2 border-blue-700 text-blue-700 font-bold uppercase hover:bg-blue-700 hover:text-white'>reprogramar</button>
        <button className='rounded-md p-1 border-2 border-red-700 text-red-700 font-bold uppercase hover:bg-red-700 hover:text-white'>borrar</button>
      </div>
           </div>
            )})
     
            )}
    </div>
  )
}

export default TablaTurnos;
