import { siteConfig } from '../../data/config'
import TeamCard from './components/TeamCard/TeamCard'
import './Equipo.css'

function Equipo() {
  return (
    <main className="equipo">
      <section className="equipo__hero">
        <div className="equipo__hero-container">
          <span className="equipo__label">Quiénes somos</span>
          <h1 className="equipo__title">Nuestro equipo</h1>
          <p className="equipo__subtitle">
            Profesionales comprometidos con tu bienestar, con formación
            especializada y vocación de acompañamiento.
          </p>
        </div>
      </section>

      <section className="equipo__grid-section">
        <div className="equipo__grid-container">
          <div className="equipo__grid">
            {siteConfig.team.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Equipo