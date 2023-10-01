import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import baseUrl from "@/utils/urlApi";

const usePokemons = () => {
  const [searchPokemon, setSearchPokemon] = useState('');
  const [pokemons, setPokemons] = useState({
    data: [],
    isOk: true,
    isLoading: true,
  })
  const api = baseUrl + '?limit=10';

  useEffect(() => {
    fetch(api)
      .then(res => res.json())
      .then(res => {
        const { results } = res;
        const hasResults = results.length > 0;
        const isOk = true;
        if (hasResults) {
          return setPokemons((previous) => ({
            ...previous,
            data: results,
            isOk,
          }))
        }
        return setPokemons((previous) => ({
          ...previous,
          isOk,
        }))
      })
      .catch(error => {
        setPokemons((previous) => ({
          ...previous,
          isOk: false
        }))
        return console.error(error);
      })
      .finally(() => {
        setTimeout(() => {
          setPokemons((previous) => ({
            ...previous,
            isLoading: false
          }))
        }, 5000);
      })
  }, [])

  const router = useRouter()
  const goPokemon = () => {
    if (searchPokemon) {
      router.push('/pokemon?name=' + searchPokemon)
    }
  }

  return {
    pokemons, setSearchPokemon, goPokemon
  }
}
export default usePokemons;