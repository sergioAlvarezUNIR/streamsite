import React from 'react';
import {useState} from 'react';
import { Catalogo } from '../components/Catalogo.jsx';
import { Detalles } from '../components/Detalles';
import { Buscador } from '../components/Buscador.jsx';

const Landing = () => {
    const [streamSeleccionado, setStreamSeleccionado] = useState('');
    return <div>
        <Catalogo streams={streams}></Catalogo>
        <Buscador></Buscador>
        <Detalles  streams={streams}></Detalles>
    </div>
};

export default Landing


let streams = [
    {
    titulo : "La máscara del zorro",
    imagen : "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS173EjV-NpmSHWgAXzn4_0tmY1bxbDLROvDaTpRAcHppo29lW3",
    sinopsis : "Después de estar preso 20 años, el Zorro original, Don Diego de la Vega, recibe noticias de que su viejo enemigo ha vuelto. Don Diego escapa y vuelve para entrenar a Alejandro Murrieta, un bandolero con un tortuoso pasado, para ser su sucesor.",
    duracion : "2 horas",
    genero : "Aventura",
    puntuacion : 8,
    stream : 'https://www.youtube.com/watch?v=B7g2Ko_3mHI&t=1s'
    },
    {
    titulo : "La naranja mecánica",
    imagen : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elespanol.com%2Fcultura%2Flibros%2F20170224%2F196230475_0.html&psig=AOvVaw0SOt-QoydPQ94ek6_GKaNc&ust=1703210128249000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCICToqm2n4MDFQAAAAAdAAAAABAE",
    sinopsis : "Alex es un joven muy agresivo que tiene dos pasiones: la violencia desaforada y Beethoven. Es el jefe de la banda de los drugos, que dan rienda suelta a sus instintos más salvajes aterrorizando a la población.",
    duracion : "2.5 horas",
    genero : "Crímen",
    puntuacion : 7,
    stream : 'https://www.youtube.com/watch?v=MmUhbSZMjOY'
    },
    {
        titulo : "Diario de una pasión",
        imagen : "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTZfAvQ4lq-p5CrO2gPGnTT7wdMdSq7BVkQwD68-fLvchs7SXy6",
        sinopsis : "En un hogar de retiro un hombre le lee a una mujer, que sufre de Alzheimer, la historia de dos jóvenes de distintas clases sociales que se enamoraron durante la convulsionada década del 40, y de cómo fueron separados por terceros, y por la guerra.",
        duracion : "2.3 horas",
        genero : "Romance",
        puntuacion : 9,
        stream : 'https://www.youtube.com/watch?v=toDq4DWRZwA'
        }
];

/** 
<h1>{streams[0].duracion}</h1>
*/

/**
 const Landing = () => {
    const [streamSeleccionado, setStreamSeleccionado] = useState('');
    return <div>
        <Catalogo name={streamSeleccionado} onNameChange={setStreamSeleccionado} streams={streams}></Catalogo>
        <Buscador></Buscador>
        <Detalles name={streamSeleccionado} onNameChange={setStreamSeleccionado} streams={streams}></Detalles>
    </div>
};
 */