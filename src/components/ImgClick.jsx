import { useState, useEffect } from "react"

function ImgClick({ showRulesMenu, setShowRulesMenu, timeId, characters, setCharacters }) {
  const [clickCoord, setclickCoord] = useState()
  const [clickCoordTotalImg, setclickCoordTotalImg] = useState()
  const [showCharactersNames, setShowCharactersNames] = useState(true)
  const [finalTime, setFinalTime] = useState()
  const [top10, setTop10] = useState()
  const [name, setName] = useState("")

  function playAgain() {
    setFinalTime()
    setShowRulesMenu(true)
    setclickCoord()
    setclickCoordTotalImg()
    setShowCharactersNames()
    setCharacters({ pikachu: false, mojojojo: false, goku: false })
    setName("")
  }
  function characterClicked(character) {
    if (character === "Pikachu") setCharacters((prevState) => ({ ...prevState, pikachu: true }))
    if (character === "Mojo Jojo") setCharacters((prevState) => ({ ...prevState, mojojojo: true }))
    if (character === "Goku") setCharacters((prevState) => ({ ...prevState, goku: true }))
  }
  function handleImgClick(e) {
    const x = ((e.target.naturalWidth * e.nativeEvent.offsetX) / e.target.clientWidth).toFixed(2)
    const y = ((e.target.naturalHeight * e.nativeEvent.offsetY) / e.target.clientHeight).toFixed(2)
    if (!showRulesMenu && x < 1877 && y < 2648) {
      setclickCoord({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
      setclickCoordTotalImg({ x: x, y: y })
      setShowCharactersNames(true)
    }
  }
  async function characterButtonClick(e) {
    console.log(e.target.value)
    try {
      const response = await fetch(`http://localhost:5000/character/${e.target.value}/${clickCoordTotalImg.x}/${clickCoordTotalImg.y}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      const data = await response.json()
      setShowCharactersNames(false)
      characterClicked(data.msg)
    } catch (error) {
      console.error("Network error:", error)
    }
  }
  async function uploadName(e) {
    e.preventDefault()
    try {
      const response = await fetch(`http://localhost:5000/addNameToDB`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, finalTime }),
      })
      const data = await response.json()
      console.log(data)
      playAgain()
    } catch (error) {
      console.error("Network error:", error)
    }
  }
  useEffect(() => {
    if (characters.pikachu && characters.mojojojo && characters.goku) {
      ;(async () => {
        try {
          const response = await fetch(`http://localhost:5000/totalTime/${timeId}`, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          const data = await response.json()
          console.log(data)
          if (data.top10 < 0) {
            setTop10(true)
          }
          setFinalTime(data)
        } catch (error) {
          console.error(error)
        }
      })()
    }
  }, [characters])

  if (finalTime)
    return (
      <div>
        <img src="../images/robotCity.jpg" alt="Robot City" className="robotCityImg" />
        <div className="finalTime">
          <h3>Your time</h3>
          <div>
            {finalTime.min}:{finalTime.sec}:{finalTime.mil}
          </div>
          {top10 && (
            <form onSubmit={uploadName}>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
              <button type="submit">ADD</button>
            </form>
          )}
          <button onClick={playAgain}>Play Again</button>
        </div>
      </div>
    )

  return (
    <>
      <>
        <img src="../images/robotCity.jpg" alt="Robot City" className="robotCityImg" onClick={handleImgClick} />
        {clickCoord && clickCoordTotalImg && showCharactersNames && (
          <div>
            <div
              className="circle"
              style={{
                left: clickCoord.x - 24,
                top: clickCoord.y - 24,
              }}
            ></div>

            <div
              className="characthersButton"
              style={{
                left: clickCoordTotalImg.x < 960 ? clickCoord.x + 28 : clickCoord.x - 148,
                top: clickCoordTotalImg.y < 2430 ? clickCoord.y - 24 : clickCoord.y - 104,
              }}
            >
              {!characters.pikachu && (
                <button type="button" value={"Pikachu"} onClick={characterButtonClick}>
                  Pikachu
                </button>
              )}
              {!characters.mojojojo && (
                <button type="button" value={"Mojo Jojo"} onClick={characterButtonClick}>
                  Mojo Jojo
                </button>
              )}
              {!characters.goku && (
                <button type="button" value={"Goku"} onClick={characterButtonClick}>
                  Goku
                </button>
              )}
            </div>
          </div>
        )}
      </>
    </>
  )
}
export default ImgClick
