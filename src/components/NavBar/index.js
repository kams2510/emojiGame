// Write your code here.
// Write your code here.
import './index.css'

const NavBar = props => {
  const {topScore, score} = props
  return (
    <div className="bg">
      <div className="logo-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      <div className="score-card">
        <p>Score: {score}</p>
        <p>Top Score: {topScore}/12</p>
      </div>
    </div>
  )
}

export default NavBar
