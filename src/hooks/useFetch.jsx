import { useEffect, useState } from 'react';


 
export const useFetch = (url) =>{
 
  console.log('ejecutando function useFetch');

  const[fetchResponse, setFetchResponse] = useState('…');

  useEffect(() =>{
    const fetchRequest = async () =>{
      console.log('Realizando peticion…');
      let res = await fetch(url);
      let data = await res.json();
      setFetchResponse(data.results[0].email);
      console.log(data.results[0].email)
  };

  fetchRequest();},[]);

  return { fetchResponse }
}