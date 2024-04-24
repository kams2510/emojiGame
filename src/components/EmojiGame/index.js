import './index.css'
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    uniqueEmojiList: [],
    topScore: 0,
    gameIn: true,
    isWon: false,
  }

  getShuffledEmojiList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojiList = () => {
    const shuffledEmojiList = this.getShuffledEmojiList()
    return (
      <ul>
        {shuffledEmojiList.map(each => (
          <EmojiCard
            emojiDetails={each}
            key={each.id}
            isClickEmoji={this.isClickEmoji}
          />
        ))}
      </ul>
    )
  }

  toSetTopScore = score => {
    const {topScore} = this.state
    let newTopScore = topScore
    if (score > topScore) {
      newTopScore = score
    }

    const wonOrNot = newTopScore === 12
    this.setState({gameIn: false, topScore: newTopScore, isWon: wonOrNot})
  }

  isClickEmoji = id => {
    const {emojisList} = this.props
    const {uniqueEmojiList, topScore} = this.state
    if (uniqueEmojiList.includes(id)) {
      this.toSetTopScore(uniqueEmojiList.length)
    } else {
      if (uniqueEmojiList.length - 1 === emojisList.length - 1) {
        this.toSetTopScore(uniqueEmojiList.length)
      } else {
        this.setState(prevState => ({
          uniqueEmojiList: [...prevState.uniqueEmojiList, id],
        }))
      }
    }
  }

  playAgainBtn = () => {
    this.toSetTopScore()
    this.setState({uniqueEmojiList: [], gameIn: true})
  }

  render() {
    const {topScore, uniqueEmojiList, gameIn, isWon} = this.state
    const currentScore = uniqueEmojiList.length
    console.log(uniqueEmojiList)
    console.log(topScore)
    const renderEmojiList = this.renderEmojiList()

    return (
      <div className="container">
        <NavBar score={currentScore} topScore={topScore} />
        <div className="emoji-container">
          {gameIn ? (
            renderEmojiList
          ) : (
            <WinOrLoseCard
              score={currentScore}
              topScore={topScore}
              isWon={isWon}
              playAgainBtn={this.playAgainBtn}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
