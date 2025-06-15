import { useState } from "react"
import Leaderboard from "./Leaderboard"
import RulesMenu from "./RulesMenu"
import ScreenImages from "./ScreenImages"
import ImgClick from "./ImgClick"
import "../css/Game.css"

function App() {
  const [showRulesMenu, setShowRulesMenu] = useState(true)
  const [showLeaderboardBtn, setShowLeaderboardBtn] = useState(true)
  const [timeId, setTimeId] = useState()
  const [characters, setCharacters] = useState({ pikachu: false, mojojojo: false, goku: false })

  return (
    <>
      <Leaderboard setShowLeaderboardBtn={setShowLeaderboardBtn} showLeaderboardBtn={showLeaderboardBtn} setShowRulesMenu={setShowRulesMenu} />
      {showRulesMenu && showLeaderboardBtn && <RulesMenu setShowRulesMenu={setShowRulesMenu} setTimeId={setTimeId} />}
      {!showRulesMenu && !showLeaderboardBtn && <ScreenImages characters={characters} />}
      <ImgClick
        showRulesMenu={showRulesMenu}
        setShowRulesMenu={setShowRulesMenu}
        timeId={timeId}
        characters={characters}
        setCharacters={setCharacters}
      />
    </>
  )
}

export default App
