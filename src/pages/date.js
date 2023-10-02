import * as React from "react"

import "./date.css"

const Date = ({ month, year }) => {
  return (
    <div>
      <h2 className="date-container">{month}</h2>
      <h2 className="date-container">{year}</h2>
    </div>
  )
}

export default Date
