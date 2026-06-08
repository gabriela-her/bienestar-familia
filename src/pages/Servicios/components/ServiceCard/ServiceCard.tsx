import { siteConfig } from '../../../../data/config'
import './ServiceCard.css'

interface Service {
  id: string
  title: string
  description: string
  details: string[]
  price: number
}

interface ServiceCardProps {
  service: Service
}

function ServiceCard({ service }: ServiceCardProps) {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Hola, me interesa el servicio de ${service.title}`)}`

  return (
    <article className="service-card">
      <div className="service-card__header">
        <h3 className="service-card__title">{service.title}</h3>
        <span className="service-card__price">
          {siteConfig.currencySymbol}{service.price} {siteConfig.currency}
        </span>
      </div>
      <p className="service-card__description">{service.description}</p>
      <ul className="service-card__details">
        {service.details.map((detail) => (
          <li key={detail} className="service-card__detail">
            <span className="service-card__detail-dot" />
            {detail}
          </li>
        ))}
      </ul>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="service-card__btn"
      >
        Consultar este servicio
      </a>
    </article>
  )
}

export default ServiceCard