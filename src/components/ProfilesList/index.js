import React from 'react';
import ProfileCard from '../ProfileCard';
import WinnerCard from '../WinnerCard';

console.clear();

const ProfilesList = ({ profilesList, toggleWinner, winner }) => {
  return (
    <div className="container">
      {toggleWinner && profilesList.length > 1 ? (
        <WinnerCard key={winner.id} winner={winner} />
      ) : (
        profilesList?.map((user) => (
          <ProfileCard key={user.id} user={user} winner={winner} />
        ))
      )}
    </div>
  );
};

export default ProfilesList;
