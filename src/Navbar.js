import React from "react"
import Pikachu from "./images/pikachu.png"
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className="navbar--container">
      <img src={Pikachu} className="shocked--pikachu"></img>
      <h1 className="navbar--title">Meme Generator</h1>
    </div>
  )
}
