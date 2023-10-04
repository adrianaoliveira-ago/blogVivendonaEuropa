import * as React from "react"

import "./date.css"

const Date = ({ month, year }) => {
  {
    /* <h2 className="date-container">{year}</h2> */
  }
  return <span className="date-container">{month}</span>
}

export default Date
