'use client'
import UploadFoto from '@/utils/UploadFoto'
import React, { useState} from 'react'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Page = () => {

  const route=useRouter();

  const [ usuario , setUsuario ]= useState('');
  const [ pass , setPass ]= useState('');
  const [ repetirPass , setRepetirPass ]= useState('');
  const [ telefono , setTelefono ]= useState('');
  const [ direccion , setDireccion ]= useState('');
  const [ localidad , setLocalidad ]= useState('');
  const [ nombreBarberia , setNombreBarberia ]= useState('');
  const [ suscripcion , setSuscripcion ]= useState('');
  const [codigoOk,setCodigoOk] = useState(false)
  const [ imagenBarberia , setImagenBarberia ]= useState('');
  const [ correo,setCorreo] = useState('')

  const regexp = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+$/


// Funcion registrar usuario

const handlerRegistrar = () => {
  
if([usuario,pass,repetirPass,telefono,direccion,localidad,correo,imagenBarberia,suscripcion].includes('')){
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Algún campo esta vacio!',
    timer:1500 
  })
  return;
}
if(!regexp.test(correo)){
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Debe ingresar un correo valido!',
    timer:1500 
  })
  return;
}
if(pass != repetirPass){
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Las contraseñas no coinciden!',
    timer:1500 
  })
  return;
}

registrarUsuario();


}

// funcion verificar cupon
const handlerVerificarCodigo = async () => {
   
  const url = "http://localhost:4001/cupones";
   await fetch(url,{
    method:"GET"

   })
   .then(response => response.json()).then(data => {
    const verificarCodigo = data.find( item => item.codigo == suscripcion);

    if(verificarCodigo){
      setCodigoOk(true)

    }else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El codigo no existe!',
        timer:1500 
      })
    }

   }).catch( error => console.log(error))
}


//registrar datos en base

async function registrarUsuario() {
  const url = "http://localhost:4001/registroUsuario";
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        usuario: usuario,
        pass: pass,
        telefono: telefono,
        direccion: direccion,
        localidad: localidad,
        nombrebarberia: nombreBarberia,
        suscripcion: codigoOk,
        correo: correo,
        imagenbarberia: imagenBarberia
      })
    });

    const data = await response.json();
    if(data){
      Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Registrado correctamente!',
            showConfirmButton: false,
            timer: 1500
          })
      setTimeout(()=>{ 
     route.push("/Login")
    },2000)
    }
  } catch (error) {
    console.log(error);
  }
}





  return (
    <div className='w-full h-auto bg-slate-300 pt-4 pb-12'>
       <Link href="/"><button className='bg-orange-800 text-white font-bold p-3 rounded-md shadow-xl ml-5 hover:bg-gradient-radial from-orange-500 to-orange-700'>Página principal</button></Link>
      <h2 className='text-center font-bold text-3xl max-[900px]:mt-12'>Registra tu barberia</h2>
      <p className='mt-3 text-center '>Es importante que se verifiquen todos los datos al momento de registrar para evitar inconvenientes</p>
      <div className='w-1/2 h-auto p-4 flex flex-col m-auto mt-12 bg-white border-[.1rem] border-slate-400 shadow-xl rounded-lg pb-6 max-[900px]:w-full'>
        <h2 className='text-2xl text-center font-bold mb-12'>Registro de usuario</h2>

        <label className='mb-1 font-lora font-medium'>Elige tu usuario</label>
        <input 
        onChange={(e) => setUsuario(e.target.value)}
        className='border-[.1rem] border-slate-300 mb-3 pl-1 max-[900px]:h-[2.5rem] max-[900px]:text-[1.8rem]' type="text" />
        <label className='mb-1 font-lora font-medium'>Elige tu contraseña</label>
        <input 
        onChange={(e) => setPass(e.target.value)}
        className='border-[.1rem] border-slate-300 mb-3 pl-1 max-[900px]:h-[2.5rem] max-[900px]:text-[1.8rem]' type="password" />
        <label className='mb-1 font-lora font-medium'>Repite contraseña</label>
        <input
        onChange={(e) => setRepetirPass(e.target.value)}
        className='border-[.1rem] border-slate-300 mb-3 pl-1 max-[900px]:h-[2.5rem] max-[900px]:text-[1.8rem]' type="password" />
        <label className='mb-1 font-lora font-medium'>Ingresa tu correo electronico</label>
        <input 
        onChange={(e) => setCorreo(e.target.value)}
        className='border-[.1rem] border-slate-300 mb-3 pl-1 max-[900px]:h-[2.5rem] max-[900px]:text-[1.8rem]' type="email" />
        <h2 className='text-2xl text-center font-bold mt-6 mb-12'>Registrar datos barberia</h2>
        <label className='mb-1 font-lora font-medium'>Ingresa Telefono</label>
        <input 
        onChange={(e) => setTelefono(e.target.value)}
        className='border-[.1rem] border-slate-300 mb-3 pl-1 max-[900px]:h-[2.5rem] max-[900px]:text-[1.8rem]' type="number" min={0} />
        <label className='mb-1 font-lora font-medium'>Ingresa dirección</label>
        <input 
        onChange={(e) => setDireccion(e.target.value)}
        className='border-[.1rem] border-slate-300 mb-3 pl-1 max-[900px]:h-[2.5rem] max-[900px]:text-[1.8rem]' type="text" placeholder='Ej: Las Rosas 343'/>
        <label className='mb-1 font-lora font-medium'>Selecciona tu localidad</label>
        <select
        value={localidad} 
        onChange={(e) => setLocalidad(e.target.value)}
        className='border-[.1rem] border-slate-300 mb-3 max-[900px]:h-[2.5rem] max-[900px]:text-[1.8rem]'>
          <option value="">Seleccionar Localidad</option>
          <option value="capital">Capital</option>
          <option value="godoy cruz" >Godoy Cruz</option>
          <option value="las heras" >Las Heras</option>
          <option value="lujan de cuyo" >Lujan de Cuyo</option>
          <option value="guaymallen" >Guaymallén</option>
          <option value="maipu" >Maipú</option>
        </select>
        <label className='mb-1 font-lora font-medium'>Nombre de barberia</label>
        <input 
        onChange={(e) => setNombreBarberia(e.target.value)}
        className='border-[.1rem] border-slate-300 mb-3 pl-1 max-[900px]:h-[2.5rem] max-[900px]:text-[1.8rem]' type="text" />

       <UploadFoto setImagenBarberia={setImagenBarberia}/>

        <label className='mb-1 mt-6 font-lora font-medium'>Ingresa tu codigo de suscripción</label>
        <input 
        onChange={(e)=> setSuscripcion(e.target.value)}
        className='border-[.1rem] border-slate-300 mb-3 pl-1 max-[900px]:h-[2.5rem] max-[900px]:text-[1.8rem]' type='text' placeholder='Ingresar código'/>
        {codigoOk ? <h2 className='bg-green-400 h-[1.5rem] text-white text-center uppercase mt-3'>Codigo autorizado</h2> :<button 
        onClick={handlerVerificarCodigo}
        className='bg-blue-400 text-white uppercase mt-3 h-[2rem]'>Verificar codigo</button>}
        <button
        disabled={!codigoOk}
        onClick={handlerRegistrar}
        className={`bg-blue-600 text-2xl text-white font-lora font-bold py-2 mb-4 mt-24 px-4 rounded-xl shadow-lg  hover:duration-500 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:border-blue-700 ${!codigoOk && 'opacity-30'}`} >Registrar</button>
      </div>
    </div>
  )
}

export default Page
