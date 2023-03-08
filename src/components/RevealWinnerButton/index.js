import React from 'react';
console.clear();

const RevealWinnerButton = ({ toggleWinner, text, profiles }) => {
  return profiles.length > 1 && <button onClick={toggleWinner}>{text}</button>;
};

export default RevealWinnerButton;
