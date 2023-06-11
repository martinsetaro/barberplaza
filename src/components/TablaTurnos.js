'use client';
import React, { useState , useEffect } from 'react'
import Image from 'next/image';
import Reprogramar from '@/utils/Reprogramar';

const TablaTurnos = () => {

  const [turnos,setTurnos] = useState([])
  const [ modal , setModal] = useState(false)
  const [cliente , setCliente] = useState({})



  useEffect(()=>{

   const recepcionTurnos = async ()=>{

    const response = await fetch('http://localhost:4001/Turnos');
    const data = await response.json();
    setTurnos(data)
  
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
    <div className='w-full h-auto p-2'>
      
        {modal && 
         <div className='bg-orange-200 absolute w-[20rem] rounded-md shadow-lg h-auto p-2 mt-14'>
           <Reprogramar 
           cliente={cliente}
           setModal={setModal}/> 
         </div>
        }
      
          <div className='w-full h-[3rem] border-[.1rem] border-slate-500 p-1 flex justify-around gap-3 items-center'>
            <label className='ml-2'>Filtrar fecha</label>
            <select className='w-[8rem] ml-1 border-[.1rem] border-slate-400 p-1'>
              <option disabled>Sel fecha</option>
              <option>01/05</option>
              <option>02/05</option>
              <option>03/05</option>
              <option>04/05</option>
              <option>05/05</option>
              <option>06/05</option>
              <option>07/05</option>
              <option>08/05</option>
              <option>09/05</option>
              <option>10/05</option>
              <option>11/05</option>
              <option>12/05</option>
              <option>13/05</option>
            </select>
            <label className='ml-5'>Filtrar Hora</label>
            <select className='w-[8rem] ml-1 border-[.1rem] border-slate-400 p-1'>
              <option disabled >Sel Hora</option>
              <option>12:00</option>
              <option>13:00</option>
              <option>13:30</option>
              <option>14:00</option>
              <option>14:30</option>
              <option>15:00</option>
              <option>15:30</option>
              <option>16:00</option>
              <option>16:30</option>
              <option>17:00</option>
              <option>17:30</option>
              <option>18:00</option>
              <option>18:30</option>
            </select>
            <button className='bg-slate-500 text-white uppercase p-2 rounded-md text-xs'>Filtrar</button>
          </div>
         {turnos.length == 0 ? (<h2 className='text-center text-2xl mt-12'>No existen turnos</h2>) : (
          turnos.map( turno => {
            return(
          <div className='w-full h-auto flex flex-col justify-around border-2 border-slate-600 mb-2 mt-2 p-2' key={turno.id}>
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
