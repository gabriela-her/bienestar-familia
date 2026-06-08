import { siteConfig } from '../../data/config'
import ServiceCard from './components/ServiceCard/ServiceCard'
import ServiciosCTA from './components/ServiciosCTA/ServiciosCTA'
import './Servicios.css'

function Servicios() {
  return (
    <main className="servicios">
      <section className="servicios__hero">
        <div className="servicios__hero-container">
          <span className="servicios__label">Lo que ofrecemos</span>
          <h1 className="servicios__title">Nuestros servicios</h1>
          <p className="servicios__subtitle">
            Atención psicológica profesional adaptada a cada etapa
            de la vida y a cada tipo de necesidad.
          </p>
        </div>
      </section>

      <section className="servicios__grid-section">
        <div className="servicios__grid-container">
          <div className="servicios__grid">
            {siteConfig.services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <ServiciosCTA />
    </main>
  )
}

export default Servicios