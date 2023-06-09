'use client';
import React from 'react'
import Image from 'next/image'
import TablaTurnos from './TablaTurnos'
import CalendarComponent from './CalendarComponent'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useRouter } from 'next/navigation';
import { diaSelectores,horaSelector } from '@/utils/Selectores';

const HeaderTurnos = ({datos}) => {

const route = useRouter();
const {usuario, pass, telefono, direccion, localidad, nombrebarberia, suscripcion, correo, imagenbarberia } = datos


const handlerLogOut = ()=>{


  Swal.fire({
    title: 'Está usted seguro?',
    text: "Deberá loguearse nuevamente para ingresar",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, salir!'
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.clear();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Sesión finalizada',
        showConfirmButton: false,
        timer: 1500
      })
     setTimeout(() => {
       
      route.push('/');
     }, 2000);
    }
  })
}


  return (
    <div className='w-full h-auto pb-10 bg-slate-300 p-5 min-h-screen font-bold font-lora'>
    <h2 className='text-2xl'>Panel de control : {nombrebarberia}</h2>
        <div className='w-full h-auto flex flex-col bg-white mt-6 shadow-md border-2 border-top-slate-600 border-bottom-slater-600'>
           <div className='w-full  h-[6rem] pl-2 shadow-md  flex items-center gap-5'>
               <div className='w-[15rem] flex items-center gap-3'>
                <div className='bg-slate-800 w-[3rem] h-[3rem] rounded-xl flex justify-center items-center'>
                    <h2 className='uppercase text-white text-2xl'>t</h2>
                </div>
                <div>
                  <h2 className='text-slate-600 font-bold text-xl uppercase'>{nombrebarberia}</h2>
                </div>
               </div>
               <div className='w-[20rem] flex items-center gap-3'>
                <div className='bg-slate-800 w-[3rem] h-[3rem] rounded-xl flex justify-center items-center'>
                    <h2 className='uppercase text-white text-2xl'>p</h2>
                </div>
                <div className='w-[10rem]'>
                  <h2 className='text-slate-600 font-bold text-md uppercase'>Bienvenido</h2>
                  <h2 className='text-slate-600 font-bold text-xl'>{usuario}</h2>
                </div>
               </div>
               <div className='w-[20rem] flex items-center gap-3'>
                <div className=' flex justify-center items-center'>
            <Image 
            onClick={handlerLogOut}
            className="w-[3rem] h-[3rem] cursor-pointer" src={require('../../public/img/salida.png')} alt="logoout"/>
                </div>
                <div className='w-[10rem]'>
                  <h2 className='text-slate-600 font-bold'>Log-out</h2>
                </div>
               </div>
               <div>
                <h2 className='text-md text-slate-600'>Su suscripción termina dentro de : 28 días.</h2>
                <button className='bg-orange-600 text-white p-1 rounded-md mt-2 hover:bg-gradient-to-r from-orange-500 to-orange-700'>Renovar suscripción</button>
               </div>
           </div>

        <div className='w-full  h-auto flex flex-col justify-around'>
          <div>
          <div className='w-2/3 m-auto h-[3rem] border-[.1rem] border-slate-500 p-1 flex justify-around gap-3 items-center'>
            <label className='ml-2'>Filtrar fecha</label>
            <select className='w-[8rem] ml-1 border-[.1rem] border-slate-400 p-1'>
              <option disabled>Sel fecha</option>
              {diaSelectores.map( dia => {
                return(
                  <option value={dia} key={dia}>{dia}</option>
                )
              })}
            </select>
            <label className='ml-5'>Filtrar Hora</label>
            <select className='w-[8rem] ml-1 border-[.1rem] border-slate-400 p-1'>
              <option disabled >Sel Hora</option>
              {horaSelector.map( horas => {
                return(
                  <option key={horas} value={horas}>{horas}</option>
                )
              })}
            </select>
            <button className='bg-slate-500 text-white uppercase p-2 rounded-md text-xs'>Filtrar</button>
          </div>
          </div>
          <div className='flex justify-around  h-[35rem]'>
          <div className="w-1/3 h-[25rem] p-2  flex justify-center items-center">
            <CalendarComponent/>
          </div>
          <div className=' w-full h-auto overflow-y-scroll p-2'>
            <TablaTurnos/>
          </div>
           </div>
        </div>
        </div>
    </div>
  )
}

export default HeaderTurnos