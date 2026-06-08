import { NavLink } from 'react-router-dom'
import { siteConfig } from '../../data/config'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__container">

        <div className="footer__brand">
          <h3 className="footer__logo">{siteConfig.name}</h3>
          <p className="footer__tagline">{siteConfig.tagline}</p>
          <div className="footer__modalities">
            <span className="footer__badge">Presencial</span>
            <span className="footer__badge">Online</span>
          </div>
        </div>

        <div className="footer__links">
          <h4 className="footer__title">Navegación</h4>
          <nav className="footer__nav">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/servicios">Servicios</NavLink>
            <NavLink to="/equipo">Equipo</NavLink>
            <NavLink to="/contacto">Contacto</NavLink>
          </nav>
        </div>

        <div className="footer__contact">
          <h4 className="footer__title">Contacto</h4>
          <p>{siteConfig.email}</p>
          <p>{siteConfig.address}</p>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__whatsapp"
          >
            WhatsApp
          </a>
        </div>

      </div>

      <div className="footer__bottom">
        <p>© {currentYear} {siteConfig.name}. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer