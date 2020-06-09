import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
const Projects = ({ projects, title, showLInk }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center project-center">
      {projects.map((project, index) => {
        return <Project key={project.id} index={index} {...project} />
      })}
      </div>
      {showLInk && (
        <Link to="/projects" className="btn center-btn">
          ver proyectos
        </Link>
      )}
    </section>
  )
}

export default Projects
