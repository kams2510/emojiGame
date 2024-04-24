// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {topScore, playAgainBtn, score, isWon} = props
  const winningImg = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const winningText = isWon ? 'You Won' : 'You Lose'
  const playAgain = () => {
    playAgainBtn()
  }
  return (
    <div className="result-container">
      <div>
        <h1>{winningText}</h1>
        <p>score</p>
        <p>{score}/12</p>
        <button onClick={playAgain}>Play Again</button>
      </div>
      <img src={winningImg} className="img" alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
