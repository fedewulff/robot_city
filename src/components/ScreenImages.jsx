function ScreenImages({ characters }) {
  return (
    <div>
      <div className=" charactersImages">
        <img src="../images/pikachu.jpg" alt="pikachu" className={characters.pikachu ? "green" : "red"} />
        <img src="../images/mojojojo.png" alt="pikachu" className={characters.mojojojo ? "green" : "red"} />
        <img src="../images/goku.webp" alt="pikachu" className={characters.goku ? "green" : "red"} />
      </div>
    </div>
  )
}

export default ScreenImages
