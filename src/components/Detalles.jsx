import React from "react";
import '../styles/detalles.css';

export const Detalles = ({ streams }) =>{

    return<div className='app-detalles'>
      <div className="app-detalles-info">
        <h3>Nombre: La máscara del zorro</h3>       
        <h3>Imagen: <br/>
          <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS173EjV-NpmSHWgAXzn4_0tmY1bxbDLROvDaTpRAcHppo29lW3" alt="Foto película La Mascara del Zorro"/>
        </h3>
        <h3>Sinópsis: <br/>
         La máscara del Zorro (en inglés: The Mask of Zorro) es una película estadounidense del año 1998, basada en el personaje conocido como El Zorro, creado por Johnston McCulley. Fue dirigida por Martin Campbell y protagonizada por Antonio Banderas, Catherine Zeta-Jones, Anthony Hopkins y Stuart Wilson. En ella se cuenta la historia del Zorro original: Don Diego de la Vega (Hopkins), que tras veinte años en prisión, escapa para vengarse de Rafael Montero (Wilson), el hombre que secuestró a su hija Elena (Zeta-Jones) y además vengar el asesinato de su esposa Esperanza. Para ello, entrenará a un joven bandolero de tortuoso pasado. Elena descubrirá sus verdaderos orígenes y se enamorará del nuevo Zorro Alejandro Murrieta (Banderas).</h3>
        <h3>Duración: {streams[1].duracion} </h3>
        <h3>Puntuación: 8</h3>
      </div>     
      <div className="app-detalles-btnalquilarcomprar">
          <button><h2>Alquilar</h2></button>
          <button><h2>Comprar</h2></button>
      </div>  
      <div className="app-detalles-btnverahora">  
        <a href="https://www.youtube.com/watch?v=B7g2Ko_3mHI&pp=ygUcdHJhaWxlciBsYSBtYXNjYXJhIGRlbCB6b3Jybw%3D%3D">    
        <button ><h2> Reproducir </h2></button>
        </a>
      </div>
      
    </div>;
  };




