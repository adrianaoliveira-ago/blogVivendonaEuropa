import * as React from "react"

import moneyVase from "./moneyArt.png"

import "./moneyVase.css"

const openLink = link => {
  window.open(link, "_blank")
}

const MoneyPot = () => {
  return (
    <div className="moneyPot">
      <span className="moneyPot-title">
        ❤ If this guide helped you, donate a few euros to support my work.❤
      </span>
      <img
        className="moneyPot-img"
        src={moneyVase}
        onClick={() => openLink("https://www.paypal.me/Aturistinha")}
      ></img>
    </div>
  )
}

export default MoneyPot
