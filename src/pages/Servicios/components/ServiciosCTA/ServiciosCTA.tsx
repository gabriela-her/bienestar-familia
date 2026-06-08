import { siteConfig } from '../../../../data/config'
import './ServiciosCTA.css'

function ServiciosCTA() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`

  return (
    <section className="servicios-cta">
      <div className="servicios-cta__container">
        <h2 className="servicios-cta__title">
          ¿No encuentras lo que buscas?
        </h2>
        <p className="servicios-cta__subtitle">
          Contáctanos y cuéntanos tu situación. Te orientamos hacia
          el servicio más adecuado para ti.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="servicios-cta__btn"
        >
          Hablar con un profesional
        </a>
      </div>
    </section>
  )
}

export default ServiciosCTA