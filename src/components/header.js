import * as React from "react"
import "./header.css"
// import { Link } from "gatsby"

import logoVP from "../images/logoAturistinhaVivendoNaEuropa.svg"

const NavLinks = () => {
  const headerlinks = [
    {
      name: "Youtube",
      link: "https://www.youtube.com/@Aturistinha_VivendoNaEuropa",
    },

    {
      name: "Instagram",
      link: "https://www.instagram.com/a_turistinha/?hl=de",
    },

    {
      name: "Facebook",
      link: "https://www.facebook.com/Vivendo.na.Europa.ve",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/adriana-gonzaga-abbb58b4/",
    },
  ]

  return (
    <div className="nav-map-links">
      {headerlinks.map(item => {
        return (
          <li className="nav-items">
            <a href={item.link} target="_blank" rel="noreferrer">
              <span>{item.name}</span>
            </a>
          </li>
        )
      })}
    </div>
  )
}

const goToHomePage = () => {
  window.location.href = "/"
}

const Header = () => {
  return (
    <header>
      <div className="div-header">
        <NavLinks />
      </div>

      <div className="div-header-wave" />

      <div className="div-logo" onClick={goToHomePage}>
        <img src={logoVP} className="icon-logo" alt="logo da pagina"></img>
      </div>
    </header>
  )
}

export default Header
