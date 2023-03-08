import React from 'react';
console.clear();

const WinnerCard = ({ winner }) => {
  return (
    <div key={winner.id} className={`profile-item winner`}>
      <img src={winner?.avatar_url} title={winner?.bio} />
      <p>{winner?.login}</p>
      <div>
        <img
          className="winner-badge"
          src="https://img.icons8.com/arcade/64/null/first-place-ribbon.png"
          width="48"
        />
      </div>
      <div className="profile-data">
        <div className="profile-data-details">
          <span>&#8226; Followers:</span>{' '}
          <span>{winner?.followers.toLocaleString('en-US')}</span>
        </div>
        <div className="profile-data-details">
          <span>&#8226; Public repos:</span>{' '}
          <span>{winner?.public_repos.toLocaleString('en-US')}</span>
        </div>
        <div className="profile-data-details">
          <span className="score">&#8226; Score:</span>{' '}
          <span
            className="detail-value score-value"
            title={`${winner?.followers} followers + ${winner?.public_repos} public repos`}>
            {winner?.score.toLocaleString('en-US')}
          </span>
        </div>
      </div>
      <div>
        <a
          href={winner?.blog || winner?.html_url}
          target="_blank"
          title={winner?.blog || winner?.html_url}>
          See Profile &#8250;
        </a>
      </div>
    </div>
  );
};

export default WinnerCard;
