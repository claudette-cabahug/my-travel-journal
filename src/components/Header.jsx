import React from "react"
import world_icon from "../images/world_icon.png"

export default function Header() {
  return (
    <header>
      <img src={world_icon} alt="white world icon" className="header--icon-world"/>
      <h3 className="header--text">my travel journal.</h3>
    </header>
  )
}