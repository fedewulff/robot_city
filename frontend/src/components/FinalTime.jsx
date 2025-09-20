function FinalTime() {
  const [name, setName] = useState("")
  return (
    <div>
      <img src="../images/robotCity.jpg" alt="Robot City" className="robotCityImg" />
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
            <form onSubmit={uploadName} className="top10form">
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
          Play Agaiddn
        </button>
      </div>
    </div>
  )
}

export default FinalTime
