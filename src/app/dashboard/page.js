'use client'
import React, { useState , useEffect} from 'react'
import HeaderTurnos from '@/components/HeaderTurnos';




const Page = () => {

  const [datos , setDatos] = useState({})

  //buscar usuario

  useEffect(()=>{

    const buscarUsuario = async ()=>{
 
      const id = localStorage.getItem('idUser');
      console.log(id)
      const url = "http://localhost:4001/barberias";
      await fetch(url, {
        method:"GET"
      })
      .then(response => response.json())
      .then(data => {
        const newUser = data.filter( item => item.id_infobarberias == id)
        setDatos(newUser[0])
      })
      .catch(err => console.log(err))

    }
    buscarUsuario()

  },[])





  return (
    <div>
      <HeaderTurnos
      datos={datos}
      />
      
    </div>
  )
}

export default Page