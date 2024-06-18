import * as React from "react"

import "./aboutMe.css"
import PhotoAboutMe from "./PhotoAboutMe.svg"

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <h2 className="about-me-title">About me</h2>
      <div className="about-me-description">
        <img src={PhotoAboutMe} className="about-me-photo" />
        <p className="about-me-paragraph">
          Welcome to my blog! My name is Adriana, and I love sharing my travels
          and offering itinerary tips for all travelers. I also make videos
          about these adventures on my channel, "A turistinha - Living in
          Europe." I enjoy presenting all the content in a simple way so that
          everyone can have the same experience of the places I've visited. I
          believe that the posts are super useful, just like the videos, to
          provide efficient direction for creating your travel itinerary. I
          think it will be perfect because the tips are truly experienced and
          shared as they are in reality. I hope this blog becomes a useful tool
          in planning your itinerary, and I'm here for any questions you may
          have. I wish you a wonderful adventure around the world. XoXo
        </p>
      </div>
    </div>
  )
}

export default AboutMe
