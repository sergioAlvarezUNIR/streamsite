import React from 'react';
import { useState } from 'react';


import { useFetch } from '../hooks/useFetch';

import '../styles/header.css';

const fechaHoraActual = () =>{
    let currentdate = new Date();
    let datetime = currentdate.getDate() + '/'
       + (currentdate.getMonth() + 1) + '/'
       + currentdate.getFullYear() + '-'
       + currentdate.getHours() + ':'
       + currentdate.getMinutes() + ':'
       + currentdate.getSeconds();
    return datetime;
 }

 export const Header = () =>{

   const{fetchResponse} = useFetch('https://randomuser.me/api/');

   const[contador, setContador] = useState(0);
   console.log('RenderizadoUno…' + contador);

    return <header className= 'app-header'>
    <h1><b>TOP Streaming</b></h1>
    <h2><b>Película destacada: La máscara del zorro</b></h2>    
    <p><b>Danos tu puntuación (De 1 a 10):&nbsp; {contador} &nbsp; </b>
    <button onClick={() => {
      if (contador===10) {
         setContador(contador -10)
      } else {
         setContador(contador + 1)
      }
    }
     }>&#128077;
   </button>
   </p> 
   <p>Última Actualización: {fechaHoraActual()}</p><br></br>
   <b>Usuario Registrado: {fetchResponse}</b>
    </header>
 }