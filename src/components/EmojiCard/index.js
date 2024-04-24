// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, isClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const onClickEmoji = () => {
    isClickEmoji(id)
  }

  return (
    <li>
      <button onClick={onClickEmoji}>
        <img src={emojiUrl} />
      </button>
    </li>
  )
}

export default EmojiCard
