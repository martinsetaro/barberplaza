'use client'
import React, { useState , useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {

  const [ barberias,setBarberias] = useState([])
  const [ newBarberias, setNewBarberias] = useState([])
  const [filter,setFilter] = useState('')
  const [pedirTurno,setPedirTurno] = useState('')
  const [ modal , setModal] = useState(false)

//barberias registradas

useEffect(() =>{

const barberiasRegistradas = async () => {
const url="http://localhost:4001/barberias";
await fetch(url,{
  method:"GET"
})
.then(response => response.json()).then(data => {
  setBarberias(data)
  setNewBarberias(data)
 
}).catch(err => console.log(err))

}

barberiasRegistradas();


},[])

// filtar barberias

const handlerFiltrar = ()=> {
  
  const newFilter = newBarberias.filter( item => item.localidad == filter)
  setBarberias(newFilter)

}

//realizar un turno 

const handlerPedirTurno = (id) => {



}





  return (
    <div className='w-full pt-12 pb-12 bg-gradient-radial from-slate-100 to-slate-300 min-h-screen'>
      <Link href="/"><button className='bg-orange-800 text-white font-bold p-3 rounded-md shadow-xl ml-5 hover:bg-gradient-radial from-orange-500 to-orange-700'>Página principal</button></Link>
      <div className='w-2/3 m-auto'>
      <div className='w-full h-[10rem] m-auto'>
        <h2 className='text-5xl text-center text-blue-500 uppercase font-semibold font-lora'>Solicitar turno</h2>
        <p className='text-center text-xl'>A continuación podrás elegir la barbería que se encuentre dentro de tu zona.</p>
        <p className='text-center text-xl'>Desde ahí podrá solicitar un turno o comunicarte con la barbería.</p>
      </div>
        
        <div className='h-auto m-auto'>
          <h2 className='text-4xl font-semibold mb-4 font-lora text-center'>Barberias registradas</h2>
          <div className='h-[4rem] m-auto mt-6 mb-12 border-[.1rem] border-slate-400 p-2 flex items-center justify-around w-[36rem] bg-gradient-radial from-slate-500 to-slate-900 rounded-md'>
            <label className='mr-4 text-xl font-bold text-white'>Seleccionar localidad</label>
            <select 
            onChange={(e) => setFilter(e.target.value)}
            className='border-[.1rem] border-slate-400'>
            <option value="">Seleccionar localidad</option>
          <option value="capital">Capital</option>
          <option value="godoy cruz" >Godoy Cruz</option>
          <option value="las heras" >Las Heras</option>
          <option value="lujan de cuyo" >Lujan de Cuyo</option>
          <option value="guaymallen" >Guaymallén</option>
          <option value="maipu" >Maipú</option>
            </select>
            <button
            onClick={handlerFiltrar}
            className='bg-orange-600 text-white p-2 w-24 rounded-md hover:bg-gradient-to-r from-orange-400 to-orange-500 duration-700 font-bold'>Filtrar</button>
          </div>
          {barberias.length == 0 ? <h2 className='text-2xl text-center font-bold'>Lo siento, actualmente no hay ninguna barbería registrada en tu zona. Sin embargo, ¡próximamente habrá algunas disponibles!</h2> : 
          barberias.map( barberia => {
            return(
              <div key={barberia.id_infobarberias} className='w-full h-auto bg-white p-2 flex shadow-lg mb-2 mt-2'>
                <div className='w-1/3 flex items-center justify-center'>
                   <Image className='w-[15rem] h-[10rem]' src={barberia.imagenbarberia} alt="logo" width={150} height={60} /> 
                </div>
                <div className='w-1/2 text-xl font-lora border-l-2 border-slate-600 pl-8'>
                <h2 className='uppercase mb-2 font-bold'>{barberia.nombrebarberia}</h2>
                <h2 className='mb-2'>Telefono:<span className='text-slate-700 font-semibold uppercase ml-3'>{barberia.telefono}</span></h2>
                <h2 className='mb-2'>Dirección: <span className='text-slate-700 font-semibold uppercase ml-3'>{barberia.direccion}</span></h2>
                <h2 className='mb-2'>Localidad :<span className='text-slate-700 font-semibold uppercase ml-3'>{barberia.localidad}</span> </h2>
                </div>
                <button
                onClick={() => setModal(!modal)}
                // onClick={() => handlerPedirTurno(id_infobarberias)}
                className=" bg-blue-600 text-xl text-white font-lora font-bold p-2 h-[4rem] rounded-xl shadow-lg hover:transform hover:rotate-360 hover:scale-95 hover:duration-500 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:border-blue-700 hover:border-2 mt-12"
                >Pedir turno</button>
                
              </div>
            )
          })}
        </div>
        {modal && <div className='w-[40rem] h-[10rem] fixed top-80 ml-24 bg-red-500'><h2>Pedi tu turno</h2></div>}
        </div>
    </div>
  )
}

export default page