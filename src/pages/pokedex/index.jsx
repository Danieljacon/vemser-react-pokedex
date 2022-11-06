import { useEffect, useState } from 'react';
import React from 'react'
import CardPokedex from '../../components/cardPokedex'
import styles from '../pokedex/pokedex.module.css'
import { useForm } from "react-hook-form";


const Pokedex = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const [poke, setPoke] = useState([]);
  const [pokeSearch, setPokeSearch] = useState([]);


  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
      const data = await response.json()
      return setPoke(data.results)
    }
    fetchApi()
  }, [])

  const onSearch = (e) => {
    const name = e.name;
    const pokeNome = poke.filter((parm) => parm.name.includes(name))
    setPokeSearch(pokeNome);

  }

  return (

    <div className='container'>
      <div className={styles.texto}>
        <p>151 <span>Pokemons</span> for you choose you favorite</p>
      </div>

      <form onSubmit={handleSubmit(onSearch)} >
        <input type='text' placeholder='Encontre seu pokemom' {...register('name')} />
        <input type="submit" value="Pesquisar" />
      </form>

      <div className={styles.pokedex}>
        {poke.map((pokemon, index) => {
          return <CardPokedex index={index} poke={pokemon} key={index} />
        })}

      </div>
    </div>
  )
}

export default Pokedex
