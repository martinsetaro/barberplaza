"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import BeatLoader from "react-spinners/BeatLoader";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import Link from 'next/link'
import Script from 'next/script';



const Page = () => {
  
  const route = useRouter();
  const [load,setLoad ] = useState(false);
  const [ nombre,setNombre ]= useState('');
  const [ pass , setPass ] = useState('');
  



  const handlerEnviar = (e)=>{
    e.preventDefault();
    if([nombre,pass].includes('')){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algún campo esta vacio!',
        timer:1500 
      })
    }else {
       setLoad(true);
       autenticar();
    }
  }

  //Buscar usuario

  async function autenticar (){

    const url = "http://localhost:4001/auth";

           await fetch(url,{
           method:"POST",
           headers: {
              "Content-Type": "application/json"
           },
            body:JSON.stringify({
            username:nombre,
            password:pass
           })
           })
          .then(response => response.json())
          .then(data => {
            if(data.error){
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuario no registrado!',
                timer:1500 
              })
              setLoad(false)
              
            }else {
              Swal.fire({
                icon: 'success',
                title: 'Hecho',
                text: 'Sesión iniciada!',
                timer:1500 
              })
              localStorage.setItem('token',JSON.stringify(data))
              buscarId();
              setTimeout(()=>{

                route.push("/dashboard")
              },4000)

            }
           })
          .catch(error => console.log(error))
    }

    //si esta en la base de datos traigo el id

    async function buscarId(){

      const url = "http://localhost:4001/barberias";
      await fetch(url,{
        method:'GET'
      })
      .then(response => response.json())
      .then(data => {
        const id = data.filter( item => item.usuario === nombre && item.pass === pass)
        const idUsuario = id[0].id_infobarberias
        localStorage.setItem('idUser',idUsuario)
      })
      .catch(err => console.log(err))
    }
  
   
  

  return (
    
    <div className={`backgroundHome w-full min-h-screen bg-white`}>
      <>
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-NZNB5SEBYN" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-NZNB5SEBYN');
        `}
      </Script>
    </>
     <div className='bg-white w-1/2 min-h-screen  flex flex-col max-[900px]:w-full max-[900px]:h-[50rem]'>
      <Link href="/"><Image className='w-[8rem] h-[6rem] mt-6 ml-8 max-[900px]:m-auto max-[900px]:mt-12' alt="logo" title='Barber Plaza - Inicio' src={require('../../../public/img/logooficial.png')}/> </Link>
      <h2 className='font-lora text-center text-4xl uppercase -mb-28 mt-6 max-[900px]:text-5xl max-[900px]:mt-12'>Bienvenido</h2>
            <form className='flex flex-col w-1/2 h-[15rem] m-auto max-[900px]:w-[95%] max-[900px]:mt-40'>
        <label className='mb-3'>Usuario</label>
        <input 
        onChange={(e)=> setNombre(e.target.value)}
        className='mb-6 border-2 border-slate-200 p-1 rounded-md max-[900px]:w-full'
        type="text" placeholder='Ingrese su usuario'/>
        <label className='mb-3'>Contraseña</label>
        <input 
        onChange={(e)=> setPass(e.target.value)}
        className='border-2 border-slate-200 p-1 rounded-md max-[900px]:w-full '
        type="password" placeholder='Ingrese su contraseña'/>
        <div className='w-1/3 h-[8rem] m-auto flex justify-center mt-8'>
          {load && <BeatLoader 
          color='#1d1d1d'
          />}
        </div>
        <button 
        onClick={handlerEnviar}
        className='border-2 border-slate-600 text-2xl font-lora font-bold py-2 mb-4 mt-12 px-4 rounded-xl shadow-lg hover:transform hover:rotate-360 hover:scale-95 hover:duration-500 hover:bg-slate-600 hover:text-white max-[900px]:h-[5rem] max-[900px]:mb-12'>Ingresar</button>
        <Link href="/resetPass">
        <h3 className='mt-4 font-lora cursor-pointer hover:text-blue-950 hover:font-bold max-[900px]:text-2xl max-[900px]:text-center'>Olvidastes tu contraseña?</h3>
      </Link>
      </form>
     </div>
    </div>
    
  )
}

export default Page
