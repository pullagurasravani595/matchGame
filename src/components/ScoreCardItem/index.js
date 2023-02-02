import './index.css'

const ScoreCardItem = props => {
  const {score, resetGameScore} = props

  const onClickPlayBtn = () => {
    resetGameScore()
  }

  return (
    <div className="score-container">
      <div className="img-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy-img"
        />
      </div>
      <p className="description">YOUR SCORE</p>
      <p className="description">{score}</p>
      <button type="button" className="button" onClick={onClickPlayBtn}>
        <div className="button-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
            className="reset-img"
          />
          <p className="description button-text">PLAY AGAIN</p>
        </div>
      </button>
    </div>
  )
}

export default ScoreCardItem
