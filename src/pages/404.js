import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
    <SEO title="404" description="Error 404 DevCordenadas "/>
      <main className="error-page">
        <div className="error-container">
          <h1>Uy, es un callejón sin salida</h1>
          <Link to="/" className="btn">
            ir a inicio
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
