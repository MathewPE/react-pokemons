import './styles.css'
import CardAbility from '@/components/Card/Ability'

const GridAbilities = ({ abilities }) => {
  return (
    <section className='gridabilites'>
      <h1 className='gridabilites-title'>Habilidades</h1>
      <div className='gridabilites-cards'>
        {abilities.map(({ ability, slot }, i) => (
          <CardAbility name={ability.name} slot={slot} key={i} />
        ))}
      </div>
    </section>
  )
}

export default GridAbilities