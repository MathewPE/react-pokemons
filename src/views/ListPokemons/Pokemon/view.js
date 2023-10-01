import { useSearchParams } from 'next/navigation';
import '../../styles.css';

const ViewPokemon = () => {
  const searchParams = useSearchParams()
  const pokemon = searchParams.get('name')
  return (
    <main className='page'>{JSON.stringify(pokemon)}</main>
  )
}

export default ViewPokemon