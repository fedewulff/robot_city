import { useState } from "react"
import Leaderboard from "./Leaderboard"
import RulesMenu from "./RulesMenu"
import ScreenImages from "./ScreenImages"
import ImgClick from "./ImgClick"
import CharacterClick from "./CharacterClick"
import "../css/Game.css"

function App() {
  const [showLdbBtnAndRules, setShowLdbBtnAndRules] = useState(true)
  const [timeId, setTimeId] = useState()
  const [gameEnd, setGameEnd] = useState(true)
  const [characters, setCharacters] = useState({ pikachu: false, mojojojo: false, goku: false })
  const [clickCoord, setclickCoord] = useState()
  const [clickCoordTotalImg, setclickCoordTotalImg] = useState()

  function handleImgClick(e) {
    const x = ((e.target.naturalWidth * e.nativeEvent.offsetX) / e.target.clientWidth).toFixed(2)
    const y = ((e.target.naturalHeight * e.nativeEvent.offsetY) / e.target.clientHeight).toFixed(2)
    if (!gameEnd && x < 1877 && y < 2648) {
      setclickCoord({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
      setclickCoordTotalImg({ x: x, y: y })
    }
  }

  return (
    <div className="container">
      <img src="../images/robotCity.jpg" alt="Robot City" className="robotCityImg" onClick={handleImgClick} />

      <Leaderboard setShowLdbBtnAndRules={setShowLdbBtnAndRules} showLdbBtnAndRules={showLdbBtnAndRules} />
      {showLdbBtnAndRules && <RulesMenu setShowLdbBtnAndRules={setShowLdbBtnAndRules} setTimeId={setTimeId} setGameEnd={setGameEnd} />}
      {!gameEnd && <ScreenImages characters={characters} />}
      <ImgClick
        setShowLdbBtnAndRules={setShowLdbBtnAndRules}
        timeId={timeId}
        characters={characters}
        setCharacters={setCharacters}
        setGameEnd={setGameEnd}
      />
      <CharacterClick
        clickCoordTotalImg={clickCoordTotalImg}
        clickCoord={clickCoord}
        setclickCoord={setclickCoord}
        characters={characters}
        setCharacters={setCharacters}
      />
    </div>
  )
}

export default App
