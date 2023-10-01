import '../../styles.css';

import { useSearchParams } from 'next/navigation';
import CardPokemonBig from '@/components/Card/Pokemon/Big';
import useGetPokemon from './usePokemon';

const ViewPokemon = () => {
  const searchParams = useSearchParams()
  const name = searchParams.get('name')
  const { pokemon } = useGetPokemon({ name });

  return (
    <main className='page'>
      {
        pokemon.isOk && pokemon.isLoading === false
          ? <CardPokemonBig name={pokemon.name} abilities={pokemon.abilities} />
          : <h2 className='message-error'>No se encontró pokemón {name} </h2>
      }
    </main>
  )
}

export default ViewPokemon