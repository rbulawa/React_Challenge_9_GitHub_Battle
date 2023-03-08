import React from 'react';
import axios from 'axios';
import Form from './components/Form';
import LoadingScreen from './components/LoadingScreen';
import CumulativeScore from './components/CumulativeScore';
import RevealWinnerButton from './components/RevealWinnerButton';
import ProfilesList from './components/ProfilesList';
import AxiosError from './components/AxiosError';
import './styles.css';

console.clear();

class App extends React.Component {
  state = {
    profiles: [],
    isLoading: false,
    hasError: false,
    error: null,
    toggleWinner: false
  };

  getUserData = async (user) => {
    try {
      this.setState({ isLoading: true });
      const { data: userData } = await axios(
        `https://api.github.com/users/${user}`
      );

      const profileScore = userData?.public_repos + userData?.followers;
      const newProfiles = [
        ...this.state.profiles,
        { ...userData, score: profileScore }
      ];
      this.setState({
        profiles: newProfiles,
        isLoading: false,
        hasError: false
      });
    } catch (error) {
      this.setState({ isLoading: false, hasError: true, error: error });
    }
  };

  calculateWinner = () => {
    const highestScorer = this.state.profiles?.reduce(
      (profile, nextProfile) =>
        profile.score > nextProfile.score ? profile : nextProfile,
      0
    );
    return highestScorer;
  };

  toggleWinner = () => {
    this.state.toggleWinner
      ? this.setState({ toggleWinner: false })
      : this.setState({ toggleWinner: true });
  };

  render() {
    const { profiles, isLoading, hasError, error, toggleWinner } = this.state;
    const userData = !isLoading && profiles;
    const winner = this.calculateWinner();

    return (
      <div className="App">
        <Form
          onChange={this.handleChange}
          onSubmit={this.handleSumbit}
          getUserData={this.getUserData}
          profiles={profiles}
          hasError={hasError}
        />
        {error && <AxiosError error={error} />}
        {profiles.length > 0 && (
          <CumulativeScore profiles={this.state.profiles} />
        )}
        {toggleWinner ? (
          <RevealWinnerButton
            toggleWinner={this.toggleWinner}
            text={`Hide the Winner`}
            profiles={profiles}
          />
        ) : (
          <RevealWinnerButton
            toggleWinner={this.toggleWinner}
            text={`Show the Winner`}
            profiles={profiles}
          />
        )}

        {isLoading && <LoadingScreen />}
        {userData && (
          <ProfilesList
            profilesList={profiles}
            winner={winner}
            toggleWinner={toggleWinner}
          />
        )}
      </div>
    );
  }
}

export default App;
