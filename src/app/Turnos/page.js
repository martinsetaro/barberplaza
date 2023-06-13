'use client'
import React, { useState , useEffect} from 'react'
import Image from 'next/image'

const page = () => {

  const [ barberias,setBarberias] = useState([])

//barberias registradas

useEffect(() =>{

const barberiasRegistradas = async () => {
const url="http://localhost:4001/barberias";
await fetch(url,{
  method:"GET"
})
.then(response => response.json()).then(data => {
  setBarberias(data)
  console.log(data)
}).catch(err => console.log(err))

}

barberiasRegistradas();


},[])




  return (
    <div className='bg-slate-300 w-full pt-12 pb-12'>
        <h2 className='text-2xl text-center uppercase font-lora'>Solicitar turno</h2>
        <p>A continuación podras elegir la barberia que se encuentre dentro de tu zona.</p>
        <p>Desde ahí podra solicitar un turno o coumincarte con la barberia.</p>
        <div className='w-1/2 h-auto m-auto'>
          <h2>Barberia registradas</h2>
          {barberias.map( barberia => {
            return(
              <div key={barberia.id_infobarberias} className='w-full h-auto p-4 bg-white flex shadow-lg mb-2 mt-2'>
                <div className='w-1/3'>
                   <Image className='w-[15rem] h-[10rem]' src={barberia.imagenbarberia} alt="logo" width={150} height={60} /> 
                </div>
                <div className='w-1/2 text-xl font-lora border-l-2 border-slate-600 pl-8'>
                <h2 className='uppercase mb-2 font-bold'>{barberia.nombrebarberia}</h2>
                <h2>Telefono: {barberia.telefono}</h2>
                <h2>Dirección: {barberia.direccion}</h2>
                <h2>Localidad : {barberia.localidad}</h2>
                </div>
                <button
                className=" bg-blue-600 text-xl text-white font-lora font-bold p-2 h-[4rem] rounded-xl shadow-lg hover:transform hover:rotate-360 hover:scale-95 hover:duration-500 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:border-blue-700 hover:border-2 "
                >Pedir turno</button>
                
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default page