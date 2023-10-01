import './styles.css'
import CardPokemonSmall from '../../Card/Pokemon/Small'

const GridPokemons = ({ pokemons }) => {
  return (
    <section className='gridpokemons'>
      {pokemons.map((pokemon, i) => (
        <CardPokemonSmall name={pokemon.name} key={i} />
      ))}
    </section>
  )
}

export default GridPokemons