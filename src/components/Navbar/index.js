import './index.css'

const Navbar = props => {
  const {score, seconds} = props
  return (
    <nav className="navbar-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
      <div className="score-timer-container">
        <p className="score">
          score: <span className="timer-value">{score}</span>
        </p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          alt="timer"
          className="timer"
        />
        <p className="timer-value">{seconds} sec</p>
      </div>
    </nav>
  )
}

export default Navbar
