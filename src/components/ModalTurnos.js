'use client'
import React,{ useState , useEffect } from 'react'
import { diaSelectores , horaSelector } from '@/utils/Selectores'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const ModalTurnos = ({idUsuario,setModal,modal}) => {

    const [ nombre,setNombre] = useState('');
    const [ telefono,setTelefono] = useState('');
    const [ fecha,setFecha ]= useState('');
    const [ hora,setHora] = useState('');
    const [ idBarberia, setIdBarberia] = useState(idUsuario)
    
    const regex = /^[a-zA-Z\s]+$/;


    //hacer pedido de turno

   const handlerPedidoTurno = async () =>{

if([nombre,telefono,fecha,hora].includes('')){
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Algún campo esta vacio!',
    timer:1500 
  })
}else if(!regex.test(nombre)){
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'El nombre no puede contener numeros ni caracteres especiales!',
    timer:1500 
  })
}else{


    Swal.fire({
      title: 'Está por confirmar un turno?',
      text: `Confirma el turno para el dia ${fecha} a la hora ${hora}?` ,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, salir!'
    }).then((result) => {
        solicitarTurno()
        setModal(false)
      
      }
    )
}
  }


 


async function solicitarTurno(){
  try {
        const url = "http://localhost:4001/turnosClientes";
        await fetch(url,{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
               
                nombre,
                telefono,
                hora,
                fecha,
                infobarberia_id:idBarberia
            })
        })
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Registrado correctamente!',
          showConfirmButton: false,
          timer: 1500
        })
    
   } catch (error) {
    console.log(error)
   }
}
   

   

  




  return (
    <div className='flex flex-col bg-white p-3 h-auto border-2 border-slate-500 rounded-md shadow-lg'>
      <h2 className='text-center fon-bol text-xl text-blue-500 uppercase mb-4'>Registra tu turno</h2>
      <label className='text-lg mb-2 font-lora'>Nombre
      <input
      className='border-[.1rem] border-slate-300 w-1/2 ml-3 pl-2 placeholder-slate-300'
      onChange={(e)=> setNombre(e.target.value)}
      placeholder='Ingrese nombre'
      type="text"/></label>
      <label className='text-lg mb-2 font-lora'>telefono
      <input 
      className='border-[.1rem] border-slate-300 w-1/2 ml-3 pl-2 placeholder-slate-300'
      onChange={(e)=> setTelefono(e.target.value)}
      placeholder='Ej: 2613333333'
      type="number"/></label>
      <input
      hidden 
      value={idUsuario}
      onChange={(idUsuario) => setIdBarberia(idUsuario)}
      type="text"/>
      <div className='flex justify-around mt-5 items-center'>
      <label className='ml-2'>Elegir Fecha</label>
            <select
            onChange={(e)=> setFecha(e.target.value)}
            className='w-[8rem] ml-1 border-[.1rem] border-slate-400 p-1'>
              <option>Sel fecha</option>
              {diaSelectores.map( dia => {
                return(
                  <option value={dia} key={dia}>{dia}</option>
                )
              })}
            </select>
            <label className='ml-5'>Elegir Hora</label>
            <select 
            onChange={(e)=> setHora(e.target.value)}
            className='w-[8rem] ml-1 border-[.1rem] border-slate-400 p-1'>
              <option>Sel Hora</option>
              {horaSelector.map( horas => {
                return(
                  <option key={horas} value={horas}>{horas}</option>
                )
              })}
            </select>
           </div> 
      <button
      onClick={handlerPedidoTurno}
      className='bg-orange-600 text-white font-bold mt-12 mb-8 h-[2rem] w-1/2 m-auto uppercase'>Agendar turno</button>
      <button
      onClick={()=> setModal(!modal)}
      className='bg-red-500 text-white font-bold p-1 w-1/3 m-auto'>cerrar</button>
    </div>
  )
}

export default ModalTurnos
