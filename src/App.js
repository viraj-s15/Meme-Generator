import React from "react"
import "./App.css"
import Navbar from "./Navbar.js"
import Memes from "./Memes.js"

export default function App() {
  return (
    <div className="main--container">
      <Navbar />
      <Memes />
    </div>
  )
}
