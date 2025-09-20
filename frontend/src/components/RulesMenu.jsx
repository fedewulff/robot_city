const URL = import.meta.env.VITE_BACKEND_URL

function RulesMenu({ setTimeId, setShowLdbBtnAndRules, setGameEnd }) {
  async function startGame(e) {
    e.preventDefault()
    const randomNumber = Math.floor(Math.random() * 2147483646)
    try {
      const response = await fetch(`${URL}/startTime`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ randomNumber }),
      })
      setTimeId(randomNumber)
      setGameEnd(false)
      setShowLdbBtnAndRules(false)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form className="rulesMenuContainer" onSubmit={startGame}>
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
