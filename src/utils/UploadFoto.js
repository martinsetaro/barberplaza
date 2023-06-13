'use client'
import React, { useState , useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


function UploadFoto({setImagenBarberia}) {

    const [image, setImage] = useState(null);
    const route = useRouter();

useEffect(()=>{
if(image){

handleImageUpload();
}

})


      async function handleImageUpload (){
      
        // Crear un objeto FormData para enviar la imagen a Cloudinary
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', 'prueba'); // Reemplaza con tu propio upload preset
      
        // Hacer una solicitud POST a la API de Cloudinary para subir la imagen
        const response = await fetch(`https://api.cloudinary.com/v1_1/dkqdts2ye/upload`, {
          method: 'POST',
          body: formData,
        });
      
        // Analizar la respuesta de Cloudinary y mostrar la URL de la imagen subida
        const data = await response.json();
        setImagenBarberia(data.url);
        setImage(null)
       
    };


  
    
      
    const handleImageChange = (event) => {
      setImage(event.target.files[0]);
    };
      
    return (
      <div className='w-full h-[5rem] mt-4 flex flex-col'>
        <label className='font-lora font-semibold mb-3'>Selecciona tu logo o foto</label>
        <input type="file" onChange={handleImageChange} />
      </div>
    );
  }
  
  export default UploadFoto;