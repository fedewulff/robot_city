import { useState } from "react"

function RulesMenu({ setShowRulesMenu, setTimeId }) {
  async function onSubmit(e) {
    e.preventDefault()
    const randomNumber = Math.floor(Math.random() * 2147483646)
    try {
      const response = await fetch("http://localhost:5000/startTime", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ randomNumber }),
      })
      const data = await response.json()
      console.log(data)
      setTimeId(randomNumber)
      setShowRulesMenu(false)
    } catch (error) {
      console.error("Network error:", error)
    }
  }

  return (
    <form className="rulesMenuContainer" onSubmit={onSubmit}>
      <h1>ROBOT CITY</h1>
      <div>
        <div>Find these characters as fast as you can!</div>
        <div className="characters">
          <div>
            <img src="../images/pikachu.jpg" alt="pikachu" />
            <div className="name">Pikachu</div>
          </div>
          <div>
            <img src="../images/mojojojo.png" alt="pikachu" />
            <div className="name">Mojo Jojo</div>
          </div>
          <div>
            <img src="../images/goku.webp" alt="pikachu" />
            <div className="name">Goku</div>
          </div>
        </div>
      </div>
      <button type="submit">START</button>
    </form>
  )
}
export default RulesMenu

{
  /* <div>
        <label htmlFor="name">Enter your name:</label>
        <input type="text" name="name" id="name" autoComplete="off" value={name} onChange={(e) => setName(e.target.value)} required />
      </div> */
}
