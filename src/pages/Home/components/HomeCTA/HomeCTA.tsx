import { siteConfig } from '../../../../data/config'
import './HomeCTA.css'

function HomeCTA() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`

  return (
    <section className="home-cta">
      <div className="home-cta__container">
        <h2 className="home-cta__title">
          ¿Listo para dar el primer paso?
        </h2>
        <p className="home-cta__subtitle">
          Contáctanos hoy y te ayudamos a encontrar el servicio que mejor
          se adapta a tus necesidades. Primera consulta sin compromiso.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="home-cta__btn"
        >
          Escribirnos por WhatsApp
        </a>
      </div>
    </section>
  )
}

export default HomeCTA