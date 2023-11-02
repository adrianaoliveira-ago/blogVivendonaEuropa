import * as React from "react"

import "./footer.css"

import IconYoutube from "./iconYoutube.svg"
import IconInstagram from "./iconInstagram.svg"
import IconFacebook from "./iconFacebook.svg"
import ArrowUp from "./arrowUp.png"

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
            ></img>
            <img
              src={IconInstagram}
              onClick={() =>
                openLink("https://www.instagram.com/vivendo_na_europa__/?hl=de")
              }
            ></img>
            <img
              src={IconFacebook}
              onClick={() =>
                openLink("https://www.facebook.com/Vivendo.na.Europa.ve")
              }
            ></img>
          </div>
          <div className="arrowUp-contanier">
            <img
              className="arrowUp-style"
              src={ArrowUp}
              onClick={scrollToTop}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterWave
