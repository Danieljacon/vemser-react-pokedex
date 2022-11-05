import React, { useState, useEffect} from "react";
import Header from '../../components/header'
import InfoCard from '../../components/InfoCard'

const Pokeinfo = () => {
  const [poke, setPoke] = useState([]);
 useEffect(()=>{
  const getPokemon = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${1}`);
    const data = await response.json();
    console.log(data);
    return setPoke(data);
  };
  getPokemon();
 },[]) 
  return (
    <>
    <Header />
    <InfoCard poke={poke}/>
   </>
  )
}

export default Pokeinfo
