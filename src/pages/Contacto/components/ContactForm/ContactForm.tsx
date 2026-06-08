import { useState } from 'react'
import { siteConfig } from '../../../../data/config'
import './ContactForm.css'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch(siteConfig.contact.formspreeUrl, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="name">
          Nombre completo
        </label>
        <input
          className="contact-form__input"
          type="text"
          id="name"
          name="name"
          placeholder="Tu nombre"
          required
        />
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="email">
          Correo electrónico
        </label>
        <input
          className="contact-form__input"
          type="email"
          id="email"
          name="email"
          placeholder="tu@email.com"
          required
        />
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="service">
          Servicio de interés
        </label>
        <select
          className="contact-form__input contact-form__select"
          id="service"
          name="service"
        >
          <option value="">Selecciona un servicio</option>
          {siteConfig.services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="message">
          Mensaje
        </label>
        <textarea
          className="contact-form__input contact-form__textarea"
          id="message"
          name="message"
          placeholder="Cuéntanos en qué podemos ayudarte"
          rows={5}
          required
        />
      </div>

      <button
        className="contact-form__btn"
        type="submit"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
      </button>

      {status === 'success' && (
        <p className="contact-form__feedback contact-form__feedback--success">
          Mensaje enviado. Te contactaremos pronto.
        </p>
      )}
      {status === 'error' && (
        <p className="contact-form__feedback contact-form__feedback--error">
          Hubo un error al enviar. Intenta por WhatsApp.
        </p>
      )}
    </form>
  )
}

export default ContactForm