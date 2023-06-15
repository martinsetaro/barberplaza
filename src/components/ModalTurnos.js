'use client'
import React,{ useState } from 'react'
import { diaSelectores , horaSelector } from '@/utils/Selectores'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const ModalTurnos = ({idUsuario,setModal}) => {

    const [ nombre,setNombre] = useState('');
    const [ telefono,setTelefono] = useState('');
    const [ fecha,setFecha ]= useState('');
    const [ hora,setHora] = useState('');
    const [ idBarberia, setIdBarberia] = useState(idUsuario)
    


    //hacer pedido de turno

   const handlerPedidoTurno = async () =>{

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
    <div className='flex flex-col'>
      <h2>MODAL TURNOS</h2>
      <label>Nombre</label>
      <input
      onChange={(e)=> setNombre(e.target.value)}
      type="text"/>
      <label>telefono</label>
      <input 
      onChange={(e)=> setTelefono(e.target.value)}
      type="number"/>
      <label>id barberia</label>
      <input 
      value={idUsuario}
      onChange={(idUsuario) => setIdBarberia(idUsuario)}
      type="text"/>
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
      <button
      onClick={handlerPedidoTurno}
      className='bg-orange-600 text-white font-bold'>Agendar turno</button>
    </div>
  )
}

export default ModalTurnos
