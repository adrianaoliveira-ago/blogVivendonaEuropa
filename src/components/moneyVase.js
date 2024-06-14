import * as React from "react"

import moneyVase from "./moneyArt.png"

import "./moneyVase.css"

const MoneyPot = () => {
  return (
    <div className="moneyPot">
      <span className="moneyPot-title">
        ❤ If this guide helped you, donate a few euros to support my work.❤
      </span>

      <a href="https://www.paypal.me/Aturistinha" target="_blank">
        <img className="moneyPot-img" src={moneyVase} />
      </a>
    </div>
  )
}

export default MoneyPot
