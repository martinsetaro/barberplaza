'use client';
import React, { useState , useEffect } from 'react'
import Image from 'next/image';
import Reprogramar from '@/utils/Reprogramar';
import { diaSelectores , horaSelector } from '@/utils/Selectores';

const TablaTurnos = () => {

  const [turnos,setTurnos] = useState([])
  const [ modal , setModal] = useState(false)
  const [cliente , setCliente] = useState({})

  


  useEffect(()=>{
    const id = localStorage.getItem('idUser')

   const recepcionTurnos = async ()=>{

    const response = await fetch('http://localhost:4001/turnos/guardados');
    const data = await response.json();
    const turnosId = data.filter( item => item.infobarberia_id == id)
    setTurnos(turnosId)
  
   }
   recepcionTurnos();


  },[])

  // funcion reprogramar turno

  const handlerReprogramar = (id) => {
     setModal(true)
     const reprogramarTurno = turnos.filter( item => item.id == id)
     setCliente(reprogramarTurno)

  }

console.log(cliente)
    
  return (
    <div className='w-full h-auto p-2 '>
      
        {modal && 
         <div className='bg-orange-200 absolute w-[20rem] rounded-md shadow-lg h-auto p-2 mt-14'>
           <Reprogramar 
           cliente={cliente}
           setModal={setModal}/> 
         </div>
        }
    
         {turnos.length == 0 ? (<h2 className='text-center text-2xl mt-12'>No existen turnos</h2>) : (
          turnos.map( turno => {
            return(
          <div className='w-full h-auto flex flex-col justify-around border-2 border-slate-600 mb-2 mt-12 p-2' key={turno.id}>
            <div className='flex justify-around'>
                 <Image width={30} height={25} src={require('../../public/img/usuario.png')} alt="usuario"/>
                 <h2>Nombre : {turno.nombre}</h2>
                 <h2>Telefono : {turno.telefono}</h2>
                 <h2>Hora: {turno.hora}</h2>
                 <h2>Fecha: {turno.fecha}</h2>
             
             </div>
                <div className='w-full h-[2.5rem] flex justify-around mt-4'>
        <button 
        onClick={() => handlerReprogramar(turno.id)}
        className='rounded-md p-1 border-2 border-blue-700 text-blue-700 font-bold uppercase hover:bg-blue-700 hover:text-white'>reprogramar</button>
        <button className='rounded-md p-1 border-2 border-red-700 text-red-700 font-bold uppercase hover:bg-red-700 hover:text-white'>borrar</button>
      </div>
           </div>
            )})
     
            )}
    </div>
  )
}

export default TablaTurnos;
