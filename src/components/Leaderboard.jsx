import { useState } from "react"

function Leaderboard({ setShowLdbBtnAndRules, showLdbBtnAndRules }) {
  const [players, setPlayers] = useState()
  const [showPlayers, setShowPlayers] = useState(false)

  async function showLeaderboard() {
    try {
      const response = await fetch(`http://localhost:5000/getNamesFromDB`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      const data = await response.json()

      setPlayers(data.players)
      setShowLdbBtnAndRules(false)
      setShowPlayers(true)
    } catch (error) {
      console.error("Network error:", error)
    }
  }
  function closeLeaderboard() {
    setShowLdbBtnAndRules(true)
    setShowPlayers(false)
  }

  return (
    <>
      {showLdbBtnAndRules && (
        <button className="leaderBoardButton" onClick={showLeaderboard}>
          Leaderboard
        </button>
      )}
      {showPlayers && (
        <div className="leaderboardPlayers">
          <button onClick={closeLeaderboard} className="closeLeaderboard">
            {" "}
            X
          </button>
          <h1 className="top10">TOP 10</h1>
          <div className="dividingLine"></div>
          <div>
            {players.map((player, index) => (
              <div key={player.id}>
                <div className="player">
                  <div className="playerPositionAndName">
                    <div>{index + 1}</div>
                    <div>{player.name}</div>
                  </div>
                  <div>
                    {player.minutes}m {player.seconds}.{player.milliseconds}s
                  </div>
                </div>
                <div className="dividingLine"></div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Leaderboard
