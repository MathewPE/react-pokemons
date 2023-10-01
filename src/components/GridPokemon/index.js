import './styles.css'
import CardPokemon from '../CardPokemon'

const GridPokemons = ({ pokemons, onPokemonSelect }) => {
  return (
    <section className='gridpokemons'>
      {pokemons.map((pokemon, i) => (
        <CardPokemon key={i} name={pokemon.name} onPokemonSelect={onPokemonSelect} />
      ))}
    </section>
  )
}

export default GridPokemons