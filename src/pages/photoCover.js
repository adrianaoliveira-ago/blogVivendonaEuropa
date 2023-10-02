import * as React from "react"
import "./photoCover.css"

const PhotoCover = ({ image }) => {
  return (
    <div>
      <img src={image} className="photo-cover-container" />
    </div>
  )
}

export default PhotoCover
