import { useState } from 'react'
import baseUrl from '@/utils/urlApi'

const useGetPokemon = ({ pokemon }) => {
  const [pokemon, setPokemon] = useState({
    habilities: [],
    name: '',
    isOk: true,
  })
  const getPokemonByName = () => {
    if (pokemon) {
      const api = baseUrl + pokemon;
      fetch(api)
        .then(res => res.json())
        .then(res => {
          const { habilities, name } = res;
          const hasHabilities = habilities.length > 0;
          const isOk = true;

          if (hasHabilities && name) {
            return setPokemon((previous) => ({
              ...previous,
              habilities,
              name,
              isOk
            }))
          }
          return setPokemon((previous) => ({
            ...previous,
            isOk
          }))
        })
        .catch((error) => {
          setPokemon((previous) => ({
            ...previous,
            isOk: false
          }))
          return console.error(error);
        })
        .finally(() => {
          setPokemon((previous) => ({
            ...previous,
            isLoading: false
          }))
        })
    }

  }
  return {
    getPokemonByName
  }
}

export default useGetPokemon