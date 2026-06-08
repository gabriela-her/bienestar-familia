import ContactInfo from './components/ContactInfo/ContactInfo'
import ContactForm from './components/ContactForm/ContactForm'
import './Contacto.css'

function Contacto() {
  return (
    <main className="contacto">
      <section className="contacto__hero">
        <div className="contacto__hero-container">
          <span className="contacto__label">Estamos aquí para ti</span>
          <h1 className="contacto__title">Contáctanos</h1>
          <p className="contacto__subtitle">
            Escríbenos o llámanos. Estaremos encantados de orientarte
            y resolver cualquier duda.
          </p>
        </div>
      </section>

      <section className="contacto__content">
        <div className="contacto__container">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </main>
  )
}

export default Contacto