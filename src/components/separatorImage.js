import * as React from "react"
import "./separatorImage.css"
import separatorImage from "./separator.svg"

const SeparatorImage = () => {
  return (
    <div className="sepator-container">
      <img className="sepator-img" src={separatorImage}></img>
    </div>
  )
}

export default SeparatorImage
