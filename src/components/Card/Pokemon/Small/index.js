import './styles.css'
import Link from 'next/link';
import defaultImg from "@/utils/defaultImg";

const CardPokemonSmall = ({ name }) => {
  const url = '/pokemon';
  return (
    <Link className='cardpokemonsmall' href={url + '?name=' + name}>
      <img className="cardpokemonsmall-img" src={defaultImg} alt="Pokemon" title={name} />
      <p className="cardpokemonsmall-name">{name ?? 'Pokemón'}</p>

    </Link>
  )
}

export default CardPokemonSmall