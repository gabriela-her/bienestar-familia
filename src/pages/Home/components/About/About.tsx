import { siteConfig } from '../../../../data/config'
import './About.css'

function About() {
  return (
    <section className="about">
      <div className="about__container">

        <div className="about__image">
          <img
            src={siteConfig.images.about}
            alt="Consultorio de Bienestar y Familia"
          />
        </div>

        <div className="about__content">
          <span className="about__label">Quiénes somos</span>
          <h2 className="about__title">{siteConfig.about.title}</h2>
          <p className="about__description">{siteConfig.about.description}</p>
          <div className="about__values">
            {siteConfig.about.values.map((value) => (
              <div key={value.label} className="about__value">
                <span className="about__value-icon">{value.icon}</span>
                <div>
                  <h4 className="about__value-label">{value.label}</h4>
                  <p className="about__value-description">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default About