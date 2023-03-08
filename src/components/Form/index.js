import React from 'react';
import ErrorPrompt from '../ErrorPrompt';

console.clear();

class Form extends React.Component {
  state = {
    searchInput: '',
    profileExists: false
  };

  handleChange = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  handleSumbit = (e) => {
    e.preventDefault();
    // Calling back getUserData() from the main App - with the value of Form input
    if (
      this.props.profiles?.some(
        (profile) =>
          profile.login.toLowerCase() === this.state.searchInput.toLowerCase()
      )
    ) {
      this.setState({ searchInput: '' });
      this.setState({ profileExists: true });
      return;
    }
    this.props.getUserData(this.state.searchInput);
    this.setState({ profileExists: false });
    this.setState({ searchInput: '' });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSumbit}>
          <div className="search-bar">
            <img
              className="search-bar-icon"
              src="https://img.icons8.com/material/24/a7a7a7/search--v1.png"
            />
            <input
              onChange={this.handleChange}
              value={this.state.searchInput}
              placeholder="Enter some company name or whatever"
            />
          </div>
        </form>
        {this.state.profileExists && !this.props.hasError && (
          <ErrorPrompt text="Provided Profile is already on the list. Please try another one." />
        )}
        {this.props.hasError && (
          <ErrorPrompt
            text={`Provided name does not exist. Please provide another one. \n e.g. Tiktok, Spotify, Facebook or GitHub etc.`}
          />
        )}
      </>
    );
  }
}

export default Form;
