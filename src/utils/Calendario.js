'use client'
import React from 'react'





const Calendario = () => {

const fecha = new Date();
const dia = fecha.getDay();




  return (
    <div>
        <div>
            <h2>Hoy es {dia} </h2>
            

        </div>


    </div>
  )
}

export default Calendario