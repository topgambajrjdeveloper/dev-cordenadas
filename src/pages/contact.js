import React from "react"
import Layout from "../components/Layout"
import SEO from '../components/SEO'
const contact = () => {
  return (
    <Layout>
    <SEO title="Contactar" description="Contactar DevCordenadas "/>
      <section className="contact-page">
        <article className="contact-form">
          <h3>Ponte en contacto</h3>
          <form action="https://formspree.io/xzbjrqbr" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="nombre"
                className="form-control"
              />
              <input
                type="email"
                placeholder="email"
                name="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="mensaje"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              enviar
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
