import React from 'react';
console.clear();

const ProfileCard = ({ user }) => {
  return (
    <div
      key={user.id}
      className={`profile-item  ${user?.isWinner && 'winner'}`}>
      <img src={user?.avatar_url} title={user?.bio} />
      <p>{user?.login}</p>
      {user?.isWinner && (
        <div>
          <img
            className="winner-badge"
            src="https://img.icons8.com/arcade/64/null/first-place-ribbon.png"
            width="48"
          />
        </div>
      )}
      <div className="profile-data">
        <div className="profile-data-details">
          <span>&#8226; Followers:</span>{' '}
          <span>{user?.followers.toLocaleString('en-US')}</span>
        </div>
        <div className="profile-data-details">
          <span>&#8226; Public repos:</span>{' '}
          <span>{user?.public_repos.toLocaleString('en-US')}</span>
        </div>
        <div className="profile-data-details">
          <span className="score">&#8226; Score:</span>{' '}
          <span
            className="detail-value score-value"
            title={`${user?.followers} followers + ${user?.public_repos} public repos`}>
            {user?.score.toLocaleString('en-US')}
          </span>
        </div>
      </div>
      <div>
        <a
          href={user?.blog || user?.html_url}
          target="_blank"
          title={user?.blog || user?.html_url}>
          See Profile &#8250;
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
