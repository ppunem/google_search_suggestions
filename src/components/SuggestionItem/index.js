// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsList} = props
  const {suggestion} = suggestionsList
  return (
    <li className="item">
      <p className="text">{suggestion}</p>
      <img
        className="arrow-icon"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
      />
    </li>
  )
}

export default SuggestionItem
