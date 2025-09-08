function CharacterClick({ clickCoordTotalImg, clickCoord, setclickCoord, characters, setCharacters }) {
  function characterClicked(character) {
    if (character === "Pikachu") setCharacters((prevState) => ({ ...prevState, pikachu: true }))
    if (character === "Mojo Jojo") setCharacters((prevState) => ({ ...prevState, mojojojo: true }))
    if (character === "Goku") setCharacters((prevState) => ({ ...prevState, goku: true }))
  }
  async function characterButtonClick(e) {
    try {
      const response = await fetch(`http://localhost:5000/character/${e.target.value}/${clickCoordTotalImg.x}/${clickCoordTotalImg.y}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      const data = await response.json()
      characterClicked(data.msg)
      setclickCoord(null)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      {clickCoord && clickCoordTotalImg && (
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
  )
}

export default CharacterClick
