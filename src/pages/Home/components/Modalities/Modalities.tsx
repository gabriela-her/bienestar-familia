import { siteConfig } from '../../../../data/config'
import './Modalities.css'

function Modalities() {
  return (
    <section className="modalities">
      <div className="modalities__container">

        <div className="modalities__header">
          <span className="modalities__label">Cómo trabajamos</span>
          <h2 className="modalities__title">Presencial y Online</h2>
          <p className="modalities__subtitle">
            Adaptamos nuestra atención a tu situación y necesidades.
          </p>
        </div>

        <div className="modalities__grid">
          {siteConfig.modalities.map((modality) => (
            <div key={modality.id} className="modalities__card">
              <h3 className="modalities__card-title">{modality.title}</h3>
              <p className="modalities__card-description">{modality.description}</p>
              <ul className="modalities__details">
                {modality.details.map((detail) => (
                  <li key={detail} className="modalities__detail">
                    <span className="modalities__detail-dot" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Modalities