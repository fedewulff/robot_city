import { useState, useEffect } from "react"
const URL = import.meta.env.VITE_BACKEND_URL

function ImgClick({ setShowLdbBtnAndRules, timeId, characters, setCharacters, setGameEnd }) {
  const [finalTime, setFinalTime] = useState()
  const [top10, setTop10] = useState(false)
  const [name, setName] = useState("")

  function playAgain() {
    setFinalTime()
    setTop10(false)
    setName("")
    setCharacters({ pikachu: false, mojojojo: false, goku: false })
    setShowLdbBtnAndRules(true)
  }
  async function uploadNameToDB(e) {
    e.preventDefault()
    try {
      const response = await fetch(`${URL}/addNameToDB`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, finalTime }),
      })
      playAgain()
    } catch (error) {
      console.error("Network error:", error)
    }
  }
  async function deleteTimeIdFromDB() {
    try {
      const response = await fetch(`${URL}/deleteTimeFromDB`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ timeId }),
      })
    } catch (error) {
      console.error("Network error:", error)
    }
  }
  useEffect(() => {
    if (characters.pikachu && characters.mojojojo && characters.goku) {
      ;(async () => {
        try {
          const response = await fetch(`${URL}/totalTime/${timeId}`, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          const data = await response.json()
          if (data.top10 < 0) {
            setTop10(true)
          }
          setFinalTime(data)
          setGameEnd(true)
          deleteTimeIdFromDB()
        } catch (error) {
          console.error(error)
        }
      })()
    }
  }, [characters])

  return (
    <>
      {finalTime && (
        <div className="finalTime">
          <h1>Your time</h1>
          <div className="myTime">
            {finalTime.min}m {finalTime.sec}.{finalTime.mil}s
          </div>
          <div className="dividingLine"></div>
          {top10 && (
            <div>
              <h2> Congratulations!</h2>
              <p>You made it to the TOP 10</p>
              <p>Enter your name to be in the leaderboard</p>
              <form onSubmit={uploadNameToDB} className="top10form">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  minLength={1}
                  maxLength={20}
                  autoComplete="off"
                  required
                />
                <button type="submit">ADD</button>
              </form>
              <div className="dividingLine"></div>
            </div>
          )}
          <button onClick={playAgain} className="playAgain">
            Play Again
          </button>
        </div>
      )}
    </>
  )
}
export default ImgClick
