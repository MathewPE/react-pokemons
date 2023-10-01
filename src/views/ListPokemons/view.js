'use client';

import '../styles.css'

import Search from "@/components/Search"
import Title from "@/components/Title";
import usePokemons from './usePokemons';
import GridPokemons from '@/components/Grid/Pokemons';

const ViewListPokemons = () => {
  const { pokemons: { data, isOk }, setSearchPokemon, goPokemon } = usePokemons()

  return (
    <main className='page'>
      <Search btnText="Buscar" onChange={setSearchPokemon} onClick={goPokemon} />
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