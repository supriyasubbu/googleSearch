// Write your code here

import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestion extends Component {
  state = {
    searchInput: '',
  }

  display = suggestion => {
    this.setState({searchInput: suggestion})
  }

  onChangeSearch = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const filterSuggestions = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="google-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="image"
        />
        <div className="google-card-container">
          <div className="google-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              className="search-icon"
              alt="search icon"
            />
            <input
              type="search"
              onChange={this.onChangeSearch}
              placeholder="search Google"
              value={searchInput}
              className="search-style"
            />
          </div>
          <ul className="list-container">
            {filterSuggestions.map(eachUser => (
              <SuggestionItem
                suggestionDetails={eachUser}
                key={eachUser.id}
                display={this.display}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestion
