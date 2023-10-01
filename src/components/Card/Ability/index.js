import './styles.css';

const CardAbility = ({ name, slot }) => {
  return (
    <article className="cardability">
      <h3 className='cardability-name'>{name}</h3>
      <p className='cardability-slot'>Slot: {slot}</p>
    </article>
  )
}

export default CardAbility