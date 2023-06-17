'use client'
import React, { useState , useEffect } from 'react'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useRouter } from 'next/navigation'
import BeatLoader from "react-spinners/BeatLoader";





const Page = () => {

    const [ email ,setEmail ]= useState('')
    const [load,setLoad] = useState(false)
    const regexp = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+$/

    const route = useRouter();



 const enviarCorreo = () => {

    if(email === ''){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algún campo esta vacio!',
            timer:1500 
          })
          return;
    }
    if(!regexp.test(email)){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Debe ingresar un correo valido!',
          timer:1500 
        })
        return;
      }
    setLoad(true)
    setTimeout(() => {
       verificarCorreo(); 
       setLoad(false)
    }, 3000);
    

 }

 // funcion enviar correo a casilla de correo


async function verificarCorreo(){
try {
  const url = "http://localhost:4001/barberias";
  await fetch(url,{
    method:"GET"
  })
  .then(response => response.json())
  .then(data => {
     console.log(data)
    const newData = data.find( item => item.correo == email)
    if(newData){
        
        revisionOk();
    }else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Parece que el correo no esta regitrado.Verifique otra vez!',
            timer:2000 
          })
          setEmail('')
    }
  })


    
} catch (error) {
    console.log(error)
}
     
}

//hacer post y enviar el email cofirmando que esta todo correcto

async function revisionOk(){

  

    try {
        const url = "http://localhost:4001/recuperarPassword";
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email
          })
        });
    
        const data = await response.json();

        console.log(data.message)
    
        if (data.message == 'ok') {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Se envió el correo, Revise su casilla de email!',
            showConfirmButton: false,
            timer: 3000
          });
    
          setTimeout(() => {
            route.push("/Login");
          }, 2000);
        } else {
          console.log('Error al recuperar la contraseña');
        }
      } catch (error) {
        console.log('Error en la solicitud:', error);
      }
    }













  return (
    <div className='bg-gradient-to-r from-slate-300 to-slate-500 min-h-screen w-full pt-24 flex flex-col'>
      <div className='bg-white w-1/2 h-auto p-4 m-auto flex flex-col items-center'>
        <h2 className='text-xl text-center text-blue-600 font-lora mb-12'>Desde aquí podra hacer reset de su contraseña</h2>
        <p className='text-center'>Enviaremos un correo electronico si el correo está registrado en nuestra bases de datos.</p>
        <p className='text-center mb-12'>Dirijasé a su correo y desde allí haga click en el link que le enviaremos para establecer una contraseña nueva.</p>
       <div className='w-[40rem] h-24 flex gap-12 m-auto items-center'>
        <label className='font-lora font-semibold'>Ingrese su correo electronico</label>
        <input
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        className='border-[.1rem] border-slate-400 p-2 w-[18rem]'
        type="email" placeholder='Ingrese su email'/>
       </div>
       <div className='w-1/3 h-[5rem] m-auto flex justify-center mt-8'>
          {load && <BeatLoader 
          color='#1d1d1d'
          />}
        </div>
        <button 
        onClick={enviarCorreo}
        className=' bg-orange-600 text-white font-bold uppercase p-2 rounded-lg shadow-md w-[6rem]'>Enviar</button>
     </div>
     
    </div>
  )
}

export default Page
