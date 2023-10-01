import { useEffect, useState } from 'react'
import baseUrl from '@/utils/urlApi'

const usePokemon = ({ name }) => {
  const [pokemon, setPokemon] = useState({
    abilities: [],
    name: '',
    isOk: true,
    isLoading: true,
  })

  useEffect(() => {
    if (name) {
      const api = baseUrl + '/' + name;
      fetch(api)
        .then(res => res.json())
        .then(res => {
          const { abilities, name } = res;
          const isOk = true;

          const hasAbilities = abilities.length > 0;

          if (hasAbilities && name) {
            return setPokemon((previous) => ({
              ...previous,
              abilities,
              name,
              isOk
            }))
          }
          return setPokemon((previous) => ({ ...previous, isOk }))
        })
        .catch((error) => {
          setPokemon((previous) => ({
            ...previous,
            isOk: false
          }))
          return console.error('error', error);
        })
        .finally(() => {
          setPokemon((previous) => ({
            ...previous,
            isLoading: false
          }))
        })
    }
  }, [])



  return {
    pokemon,
  }
}

export default usePokemon