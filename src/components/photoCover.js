import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "./photoCover.css"

const PhotoCover = ({ image }) => {
  const featuredImg = getImage(image?.childImageSharp?.gatsbyImageData)

  return (
    <GatsbyImage
      image={featuredImg}
      alt="featured image"
      className="photo-cover-container"
    />
  )
}

export default PhotoCover
