import * as React from "react"
import "./separatorImage.css"
import separatorImage from "../images/separator.svg"

const SeparatorImage = () => {
  return (
    <div className="sepator-container">
      <img className="sepator-img" src={separatorImage} alt="icon"></img>
    </div>
  )
}

export default SeparatorImage
