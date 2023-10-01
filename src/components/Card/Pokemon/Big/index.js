import './styles.css'
import defaultImg from '@/utils/defaultImg'
import GridAbilities from '@/components/Grid/Abilities'

const CardPokemonBig = ({ name, abilities = [] }) => {
  return (
    <article className='cardpokemonbig'>
      <div className="pokemon">
        <img className="pokemon-img" src={defaultImg} alt="Pokemon" title="Pikachu" />
        <p className="pokemon-name">{name ?? 'Pokemón'}</p>
      </div>
      <br />
      <hr />
      <GridAbilities abilities={abilities} />
    </article>
  )
}

export default CardPokemonBig