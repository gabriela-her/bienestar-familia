import { Link } from 'react-router-dom'
import { siteConfig } from '../../../../data/config'
import './Hero.css'

function Hero() {
    const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`

    return (
        <section className="hero">
            <div className="hero__container">

                <div className="hero__content">
                    <div className="hero__badges">
                        {siteConfig.modalities.map((modality) => (
                            <span key={modality.id} className="hero__badge">{modality.title}</span>
                        ))}
                    </div>
                    <h1 className="hero__title">
                        Tu espacio de <span className="hero__title--highlight">bienestar</span> y salud mental
                    </h1>
                    <p className="hero__subtitle">
                        Acompañamiento psicológico profesional para individuos, parejas y familias.
                        Un espacio seguro donde comenzar tu proceso de cambio.
                    </p>
                    <div className="hero__actions">
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero__btn hero__btn--primary"
                        >
                            Reservar consulta
                        </a>
                        <Link to="/servicios" className="hero__btn hero__btn--secondary">
                            Ver servicios
                        </Link>
                    </div>
                </div>

                <div className="hero__image">
                    <img
                        src={siteConfig.images.hero}
                        alt="Espacio de consulta de Bienestar y Familia"
                    />
                </div>

            </div>
        </section>
    )
}

export default Hero