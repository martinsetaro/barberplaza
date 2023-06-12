'use client'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-auto bg-slate-300 pt-4 pb-12'>
      <h2 className='text-center font-bold text-3xl'>Registra tu barberia</h2>
      <p className='mt-3 text-center '>Es importante que se verifiquen todos los datos al momento de registrar para evitar inconvenientes</p>
      <div className='w-1/2 h-auto p-2 flex flex-col m-auto mt-12 bg-white border-[.1rem] border-slate-400 shadow-xl rounded-lg pb-6'>
        <h2 className='text-xl text-center font-bold mb-12'>Registro de usuario</h2>

        <label className='mb-1 font-semibold'>Elige tu usuario</label>
        <input className='border-[.1rem] border-slate-300 mb-3 pl-1' type="text" placeholder='Ingresa usuario'/>
        <label className='mb-1 font-semibold'>Elige tu contraseña</label>
        <input className='border-[.1rem] border-slate-300 mb-3 pl-1' type="password" placeholder='Ingresa contraseña'/>
        <label className='mb-1 font-semibold'>Repite contraseña</label>
        <input className='border-[.1rem] border-slate-300 mb-3 pl-1' type="password" placeholder='Repite contraseña'/>
        <h2 className='text-xl text-center font-bold mt-6 mb-12'>Registrar datos barberia</h2>
        <label className='mb-1 font-semibold'>Ingresa Telefono</label>
        <input className='border-[.1rem] border-slate-300 mb-3 pl-1' type="text" placeholder='Ingresa numero de telfono'/>
        <label className='mb-1 font-semibold'>Ingresa dirección</label>
        <input className='border-[.1rem] border-slate-300 mb-3 pl-1' type="text" placeholder='Ingresa dirección'/>
        <label className='mb-1 font-semibold'>Selecciona tu localidad</label>
        <select className='border-[.1rem] border-slate-300 mb-3'>
          <option>Seleccionar Localidad</option>
          <option>Capital</option>
          <option>Godoy Cruz</option>
          <option>Las Heras</option>
          <option>Lujan de Cuyo</option>
          <option>Guaymallén</option>
          <option>Maipú</option>
        </select>
        <label className='mb-1 font-semibold'>Nombre de barberia</label>
        <input className='border-[.1rem] border-slate-300 mb-3 pl-1' type="text" placeholder='Ingresa nombre barberia'/>
        <label>Seleccione imagen</label>
        <input type="file"/>
        <button className=' bg-blue-600 text-2xl text-white font-lora font-bold py-2 mb-4 mt-24 px-4 rounded-xl shadow-lg  hover:duration-500 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:border-blue-700 '>Registrar</button>
      </div>
    </div>
  )
}

export default page
