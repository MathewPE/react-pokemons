'use client';

import '../styles.css'

import Search from "@/components/Search"
import Title from "@/components/Title";
import { useGetPokemons } from './hooks/useGetPokemons';
import GridPokemons from '@/components/GridPokemon';

const ViewListPokemons = () => {
  const { pokemons: { data, isOk } } = useGetPokemons()

  const onChange = (value) => {
    console.log('value', value);
  }
  const onClick = () => {
    console.log('click')
  }



  return (
    <main className='page'>
      <Search btnText="Buscar" onChange={onChange} onClick={onClick} />

      {isOk && data.length > 0 &&
        <>
          <Title text="Listado de Pokemones" />
          <GridPokemons pokemons={data} />
        </>
      }
    </main>
  )
}

export default ViewListPokemons;