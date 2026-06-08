import { Link } from 'react-router-dom'
import { siteConfig } from '../../../../data/config'
import './ServicesPreview.css'

function ServicesPreview() {
  return (
    <section className="services-preview">
      <div className="services-preview__container">

        <div className="services-preview__header">
          <span className="services-preview__label">Lo que ofrecemos</span>
          <h2 className="services-preview__title">Nuestros servicios</h2>
          <p className="services-preview__subtitle">
            Ofrecemos atención psicológica profesional adaptada a las necesidades
            de cada persona, pareja o familia.
          </p>
        </div>

        <div className="services-preview__grid">
          {siteConfig.services.map((service) => (
            <div key={service.id} className="services-preview__card">
              <h3 className="services-preview__card-title">{service.title}</h3>
              <p className="services-preview__card-description">{service.description}</p>
              <p className="services-preview__price">
                Desde {siteConfig.currencySymbol}{service.price} {siteConfig.currency}
              </p>
            </div>
          ))}
        </div>

        <div className="services-preview__footer">
          <Link to="/servicios" className="services-preview__btn">
            Ver todos los servicios
          </Link>
        </div>

      </div>
    </section>
  )
}

export default ServicesPreview