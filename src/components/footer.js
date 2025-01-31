import * as React from "react"

import "./footer.css"

import IconYoutube from "../images/iconYoutube.svg"
import IconInstagram from "../images/iconInstagram.svg"
import IconFacebook from "../images/iconFacebook.svg"
// import IconPlane from "../images/IconPlane.png"
import ArrowUp from "../images/arrowUp.png"

const openLink = link => {
  window.open(link, "_blank")
}

function scrollToTop() {
  // Scroll to top logic
  const rootElement = document.documentElement
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

const FooterWave = () => {
  return (
    <footer>
      <div className="footer-conatainer">
        <div className="footer-container-wave">
          <div className="footer-social">
            <img
              src={IconYoutube}
              onClick={() =>
                openLink(
                  "https://www.youtube.com/channel/UCjEbLrPRXibHwF2gn2i3Y6g"
                )
              }
              alt="youtube link"
            ></img>
            <img
              src={IconInstagram}
              onClick={() =>
                openLink(
                  "https://www.instagram.com/a_turistinha_vivendo_na_europa/?hl=de"
                )
              }
              alt="Instagram link"
            ></img>

            <img
              src={IconFacebook}
              onClick={() =>
                openLink("https://www.facebook.com/Vivendo.na.Europa.ve")
              }
              alt="facebook Link"
            ></img>

            {/* <img src={IconPlane}></img> */}
          </div>
          <div className="arrowUp-contanier" onClick={scrollToTop}>
            <img className="arrowUp-style" src={ArrowUp} alt="" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterWave
