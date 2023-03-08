import React from 'react';
console.clear();

class CumulativeScore extends React.Component {
  calcCumulativeScore = () => {
    let totalScore = 0;
    if (this.props.profiles?.length > 0) {
      totalScore = this.props.profiles?.reduce((acc, currProfile) => {
        acc = acc + currProfile?.score;
        return acc;
      }, 0);
    }
    return totalScore.toLocaleString('en-US');
  };

  render() {
    return (
      <p className="overall-score">
        Total Score of all participants:{' '}
        <span>{this.calcCumulativeScore()}</span>
      </p>
    );
  }
}

export default CumulativeScore;
