import { useState } from "react"

function Leaderboard({ setShowLeaderboardBtn, showLeaderboardBtn, setShowRulesMenu }) {
  const [showLeaderboardPlayers, setShowLeaderboardPlayers] = useState(false)
  const [players, setPlayers] = useState()
  console.log(players)

  async function showLeaderboard() {
    try {
      const response = await fetch(`http://localhost:5000/getNamesFromDB`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      const data = await response.json()
      console.log(data.players.time)
      console.log(data.players)
      setPlayers(data.players)
      setShowLeaderboardBtn(false)
      setShowRulesMenu(false)
      setShowLeaderboardPlayers(true)
    } catch (error) {
      console.error("Network error:", error)
    }
  }
  function closeLeaderboard() {
    setShowLeaderboardBtn(true)
    setShowRulesMenu(true)
    setShowLeaderboardPlayers(false)
  }

  return (
    <>
      {showLeaderboardBtn && (
        <button className="leaderBoardButton" onClick={showLeaderboard}>
          Leaderboard
        </button>
      )}
      {showLeaderboardPlayers && (
        <div className="leaderboard">
          <button onClick={closeLeaderboard}> X</button>
          {players.map((player) => (
            <div key={player.id} className="player">
              <div>{player.name}</div>
              <div>
                {player.minutes}:{player.seconds}:{player.milliseconds}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Leaderboard
