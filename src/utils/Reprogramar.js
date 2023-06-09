'use client';
import React from 'react'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useRouter } from 'next/navigation';
import { diaSelectores , horaSelector } from './Selectores';


const Reprogramar = ({cliente,setModal}) => {

  const route = useRouter();

const { nombre, telefono } = cliente[0]
const fecha = '13/05'
const hora = '20:00'
//enviar mensaje

const handlerEnviar = () => {
  Swal.fire({
    text: "Está por reprogramar un turno!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, salir!'
  }).then((result) => {

    if (result.isConfirmed) {

      window.open(`https://api.whatsapp.com/send?phone=+542617228662&text=Hola,%20${nombre}%20,%20te%20envio%20este%20mensaje%20de%20Barberia%20fulanito%20para%20avisarte%20que%20tuve%20que%20reprogramar%20tu%20turno%20al%20dia%20${fecha}%20a%20la%20hora%20${hora}%20,%20enviam%C3%A9%20un%20mensaje%20si%20te%20parece%20ese%20dia%20y%20esa%20fecha.%20Gracias%20disculpa%20la%20molestia`,'_blank')
      
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Mensaje enviado',
        showConfirmButton: false,
        timer: 1500
      })
    }
  })
    


}









  return (
    <>
         <button className='bg-red-500 p-1 absolute ml-[17rem] w-[2rem] h-[2rem] text-white uppercase rounded-3xl' onClick={() => setModal(false)}>x</button>
         <h2 className='text-center'>Reprogramar turno</h2>
        
        <div className='mt-6 flex flex-col'>
            <h2>Nombre : {nombre}</h2>
            <h2>Telfono : {telefono}</h2>
            <label className='mt-3 mb-2'>Fecha</label>
            <select className='border-[.1rem] border-slate-400'>
            <option>Sel fecha</option>
            {diaSelectores.map( dia => {
                return(
                  <option value={dia} key={dia}>{dia}</option>
                )
              })}
            </select>
            <label className='mt-3 mb-2'>Hora</label>
            <select className='border-[.1rem] border-slate-400'>
              <option>Sel Hora</option>
              {horaSelector.map( horas => {
                return(
                  <option key={horas} value={horas}>{horas}</option>
                )
              })}
            </select>
        </div>
        <button
        onClick={handlerEnviar}
        className='mt-8 bg-green-500 text-white p-1 rounded-md shadow-lg'>Aplicar cambios</button>
      
    </>
  )
}

export default Reprogramar
