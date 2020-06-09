import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "Inicio",
    url: "/",
  },
  {
    id: 2,
    text: "Sobre Mi",
    url: "/about/",
  },
  {
    id: 3,
    text: "projectos",
    url: "/projects/",
  },
  {
    id: 4,
    text: "blog",
    url: "/blog/",
  },
  {
    id: 5,
    text: "contactar",
    url: "/contact/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
