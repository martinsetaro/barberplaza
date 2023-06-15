'use client'
import React, { useEffect , useState }from 'react'
import Link from 'next/link'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useRouter } from 'next/navigation'



const page = () => {

  const route = useRouter()
  const [correoIngresado,setCorreoIngresado] = useState('')
  const [password,setPassword] = useState('')
  const [repetirPass,setRepetirPass] = useState('')
  const [ datoFiltrado,setDatoFiltrado] = useState({})

  useEffect(()=>{

    function getEmailFromURL() {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get('email');
    }

    getEmailFromURL()
    setCorreoIngresado(getEmailFromURL())
   

  },[])

  //cambiar contraseña

  console.log(typeof correoIngresado)

  const handlerCambiarContraseña = () =>{
     if([password,repetirPass].includes('')){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algún campo esta vacio!',
        timer:1500 
      })
      return;
     }
     if(password != repetirPass){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Las contraseñas no coinciden!',
        timer:1500 
      })
      return;
    }

 buscarCorreo()

  }
        


  async function actualizarCorreo(filtrado){
     
    const { id_infobarberias } = filtrado
    
    const url = `http://localhost:4001/barberias/${id_infobarberias}`;
    await fetch(url,{
      method:"PUT",
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
         pass:password
      })
    })
    .then(response => response.json())
    .then(data => {
      if(data){
        Swal.fire({
          icon: 'success',
          title: 'Hecho',
          text: 'Contraseña actualizada!',
          timer:1500 
        })
        route.push("/")
      }
    })
    .catch(err => console.log(err))
           
     

  }

 
    async function buscarCorreo(){

        const url= "http://localhost:4001/barberias"
        await fetch(url,{
          method:"GET"
        })
        .then(response => response.json())
        .then(data => {
            
             const filtrado = data.find( item => item.correo === correoIngresado)
             if(filtrado){
              
              actualizarCorreo(filtrado)
             }
        })
        
      .catch (error => {
        console.log(error)})
      }
      
     


  
    
    



  return (
    <div className='bg-gradient-to-r from-slate-200 to-slate-300 w-full min-h-screen pt-8'>
        <Link href="/"><button className='bg-orange-800 text-white font-bold p-3 rounded-md shadow-xl ml-5 hover:bg-gradient-radial from-orange-500 to-orange-700'>Página principal</button></Link>
        <div className='w-[40rem] h-auto p-4 m-auto shadow-lg rounded-md bg-gradient-to-l from-slate-500 to-slate-800'>
          <h2 className='text-white text-center text-3xl font-bold'>Restablece password</h2>  
        </div>
        <div className="w-[40rem] h-auto p-4 m-auto shadow-lg rounded-md mt-8 bg-white flex flex-col">
            <h2 className='font-lora text-xl text-center mb-2'>Elige la nueva contraseña</h2>
            <h2 className='font-lora text-center mb-6'>Te solicitaremos nuevamente tu correo</h2>
            <input
            value={correoIngresado}
            onChange={(correo) => setCorreo(correo)}
            className='border-2 border-slate-200 p-1 rounded-md mb-2'
            type="email" placeholder='Ingrese correo'/>
            <label>Nueva contraseña</label>
            <input
            onChange={(e)=> setPassword(e.target.value)}
            className='border-2 border-slate-200 p-1 rounded-md mb-2'
            type="password" />
            <label>Repetir contraseña</label>
            <input
            onChange={(e)=> setRepetirPass(e.target.value)}
            className='border-2 border-slate-200 p-1 rounded-md mb-2'
            type="password" />
            <button
            onClick={handlerCambiarContraseña}
            className='mt-12 mb-4 bg-orange-600 m-auto text-white font-bold uppercase p-2 rounded-lg shadow-md w-[16rem]'>Solicitar nueva contraseña</button>
        </div>
      
    </div>
  )
}

export default page
