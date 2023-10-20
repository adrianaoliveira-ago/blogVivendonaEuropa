import * as React from "react"

import "./aboutMe.css"
import PhotoAboutMe from "./PhotoAboutMe.svg"

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-description">
        <h2 className="about-me-title">About me</h2>
        <p className="about-me-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu
          ultricies urna. Donec sit amet varius velit. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos.
        </p>
      </div>
      <div className="about-me-photo-container">
        <img src={PhotoAboutMe} className="about-me-photo" />
      </div>
    </div>
  )
}

export default AboutMe
