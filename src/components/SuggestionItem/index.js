// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, display} = props
  const {suggestion} = suggestionDetails

  const onClickSuggestion = () => {
    display(suggestion)
  }

  return (
    <li className="list-style">
      <p className="para">{suggestion}</p>
      <button className="delete-btn" type="button" onClick={onClickSuggestion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
