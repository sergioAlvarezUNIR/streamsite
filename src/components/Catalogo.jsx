import React from "react"
import {useState, useEffect} from 'react';

import '../styles/catalogo.css';

export const Catalogo = ({streams }) => {

  const [streamSeleccionado, setStreamSeleccionado] = useState('');

  const handleSelectChange = (e) => {
    setStreamSeleccionado(e.target.value);
  };

  useEffect(() =>{
    console.log('funcionó')
  }, [streamSeleccionado]);

    return (
    <div className="app-catalogo">
      <h2>Selecciona un stream:</h2>
      <select value={streamSeleccionado} onChange={handleSelectChange}>
        <option value="">-- Elige tu stream --</option>
        {streams.map((stream) => (
          <option key={stream.titulo} value={stream.titulo}>
            {stream.titulo}
          </option>
        ))}
      </select>
    
    </div>
  );
};