import { siteConfig } from '../../../../data/config'
import './ContactInfo.css'

function ContactInfo() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`

  return (
    <div className="contact-info">

      <div className="contact-info__block">
        <h3 className="contact-info__block-title">Ubicación</h3>
        <p className="contact-info__text">{siteConfig.address}</p>
      </div>

      <div className="contact-info__block">
        <h3 className="contact-info__block-title">Horario de atención</h3>
        <ul className="contact-info__schedule">
          {siteConfig.contact.schedule.map((item) => (
            <li key={item.days} className="contact-info__schedule-item">
              <span className="contact-info__days">{item.days}</span>
              <span className="contact-info__hours">{item.hours}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="contact-info__block">
        <h3 className="contact-info__block-title">Contacto directo</h3>
        <p className="contact-info__text">{siteConfig.email}</p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-info__whatsapp"
        >
          Escribir por WhatsApp
        </a>
      </div>

    </div>
  )
}

export default ContactInfo