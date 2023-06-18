'use client'
import React, { useState , useEffect }from 'react'





const Calendario = () => {

const [hora, setHora] = useState("");

const fechaActual = new Date();
const diaSemana = fechaActual.getDay();
const nombresDias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const dia = nombresDias[diaSemana];
const diaMes = fechaActual.getDate();
const mes = fechaActual.getMonth();
const nombresMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const nombreMes = nombresMeses[mes];




  useEffect(() => {
    const intervalId = setInterval(() => {
      const fechaActual = new Date();
      const horas = agregarCero(fechaActual.getHours());
      const minutos = agregarCero(fechaActual.getMinutes());
      const segundos = agregarCero(fechaActual.getSeconds());
      setHora(`${horas}:${minutos}:${segundos}`);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Función para agregar un cero al frente si el número es menor que 10
  function agregarCero(numero) {
    return numero < 10 ? `0${numero}` : numero;
  }







  return (
    
        <div className='border-[.1rem] border-slate-400 p-5 rounded-lg shadow-lg'>
            <h2 className='text-2xl font-lora'>Hoy es {dia}  {diaMes}</h2>
            <h2 className='text-xl'>Hora : {hora}</h2>

        </div>


   
  )
}

export default Calendario