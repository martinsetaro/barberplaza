'use client'
import React, { useState , useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ModalTurnos from '@/components/ModalTurnos'

const Page = () => {

  const [ barberias,setBarberias] = useState([])
  const [ newBarberias, setNewBarberias] = useState([])
  const [filter,setFilter] = useState('')
  const [pedirTurno,setPedirTurno] = useState('')
  const [ modal , setModal] = useState(false)
  const [idUsuario , setIdUsuario] = useState('')

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
setModal(!modal)
setIdUsuario(id)

}





  return (
    <div className='w-full bg-gradient-radial from-slate-100 pt-12 to-slate-300 min-h-screen pb-24 max-[900px]:pt-12 max-[900px]:flex flex-col items-center max-[900px]:min-h-screen'>
      <Link href="/"><button className='bg-orange-800 text-white font-bold p-3 rounded-md shadow-xl ml-5 hover:bg-gradient-radial from-orange-500 to-orange-700 max-[900px]:w-[15rem] max-[900px]:h-[4rem] max-[900px]:text-2xl'>Página principal</button></Link>
      <div className='w-full m-auto h-auto'>
      <div className='w-full h-auto m-auto p-4 max-[900px]:-mt-60 mb-24'>
        <h2 className='text-5xl text-center text-blue-500 uppercase font-semibold font-lora max-[900px]:text-6xl max-[900px]:mt-80'>Solicitar turno</h2>
        <p className='text-center text-xl max-[900px]:mt-3 max-[900px]:text-5xl'>A continuación podrás elegir la barbería que se encuentre dentro de tu zona.</p>
        <p className='text-center text-xl max-[900px]:text-5xl'>Desde ahí podrá solicitar un turno o comunicarte con la barbería.</p>
      </div>
        
        <div className='h-auto m-auto'>
          <h2 className='text-4xl font-semibold mb-4 font-lora text-center max-[900px]:text-6xl'>Barberias registradas</h2>
          <div className='min-[1001px]:h-[4rem] mt-6 mb-12 border-[.1rem] border-slate-400 p-2 flex items-center justify-around w-1/2 m-auto bg-gradient-radial from-slate-500 to-slate-900 rounded-md  max-[1000px]:w-full max-[1000px]:flex-col h-[20rem] max-[900px]:flex'>
            <label className='mr-4 text-xl font-bold text-white max-[900px]:text-5xl mb-3'>Seleccionar localidad</label>
            <select 
            onChange={(e) => setFilter(e.target.value)}
            className='border-[.1rem] border-slate-400 max-[900px]:w-2/3 max-[900px]:h-[4rem] max-[900px]:text-2xl '>
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
            className='bg-orange-600 text-white p-2 w-24 rounded-md hover:bg-gradient-to-r from-orange-400 to-orange-500 duration-700 font-bold max-[900px]:w-2/3 max-[900px]:h-[6rem] max-[900px]:text-2xl max-[900px]:mt-2'>Filtrar</button>
          </div>
          {barberias.length == 0 ? <h2 className='text-2xl text-center font-bold max-[900px]:text-7xl'>Lo siento, actualmente no hay ninguna barbería registrada en tu zona. Sin embargo, ¡próximamente habrá algunas disponibles!</h2> : 
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
                onClick={() => handlerPedirTurno(barberia.id_infobarberias)}
                className=" bg-blue-600 text-xl text-white font-lora font-bold p-2 h-[4rem] rounded-xl shadow-lg hover:transform hover:rotate-360 hover:scale-95 hover:duration-500 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:border-blue-700 hover:border-2 mt-12"
                >Pedir turno</button>
                
              </div>
            )
          })}
        </div>
        {modal && <div className='w-[40rem] h-[30rem] fixed top-24 ml-24'><h2>Pedi tu turno</h2><ModalTurnos idUsuario={idUsuario} setModal={setModal} modal={modal}/></div>}
        </div>
    </div>
  )
}

export default Page