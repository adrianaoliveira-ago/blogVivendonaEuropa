import React from "react"
import "./Snow.css"

const Snow = () => {
  const snowArray = [
    "❅",
    "❆",
    "❄",
    "❅",
    "❆",
    "❄",
    "❅",
    "❆",
    "❄",
    "❅",
    "❆",
    "❄",
    "❅",
    "❆",
    "❄",
    "❅",
    "❆",
    "❄",
    "❅",
    "❆",
    "❄",
    "❅",
    "❆",
    "❄",
    "❅",
    "❆",
    "❄",
    "❅",
    "❆",
    "❄",
    "❅",
    "❆",
    "❄",
    "❅",
    "❆",
    "❄",
    "❅",
    "❆",
    "❄",
    "❅",
    "❆",
    "❄",
    "❅",
    "❆",
    "❄",
    "❅",
    "❆",
    "❄",
    "❅",
    "❆",
    "❄",
    "❅",
    "❆",
    "❄",
    "❅",
    "❆",
    "❄",
    "❅",
    "❆",
    "❄",
    "❅",
    "❆",
    "❄",
    "❅",
    "❆",
    "❄",
    "❅",
    "❆",
    "❄",
    "❅",
    "❆",
    "❄",
    "❅",
    "❆",
    "❄",
    "❅",
    "❆",
    "❄",
    "❅",
    "❆",
    "❄",
    "❅",
    "❆",
    "❄",
  ]

  const currentDate = new Date()
  const month = currentDate.getMonth() + 1
  const monthToShow = 12

  return (
    <div class="snowflakes" aria-hidden="true">
      {month === monthToShow &&
        snowArray.map(item => {
          return <div class="snowflake">{item}</div>
        })}
    </div>
  )
}

export default Snow
