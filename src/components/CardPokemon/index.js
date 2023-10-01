import './style.css'
import Link from 'next/link';

const CardPokemon = ({ name }) => {
  return (
    <Link href={'list-pokemons/pokemon?name=' + name}>
      <article className="cardpokemon" >
        <img className="cardpokemonImg" src="https://vader.news/__export/1588965166057/sites/gadgets/img/2020/05/08/2-25193_pokemon-ball-transparent-background-transparent-background-pokeball-png.png_423682103.png" alt="Pokemon" title="Pikachu" />
        <p className="cardpokemonName">{name ?? 'Pokemón'}</p>
      </article>
    </Link>
  )
}
export default CardPokemon;