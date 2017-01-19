import React, { PropTypes } from 'react';

function formatDate(timeInMilliseconds) {
  const date = new Date(timeInMilliseconds);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
}

const Playthrough = ({ playthrough }) => {
  return (
    <div className="playthrough">
      <h3 className="playthrough-name">{playthrough.name}</h3>
      <div className="playthrough-body">
        Last save: {formatDate(playthrough.lastUpdated)}
      </div>
    </div>
  );
};

Playthrough.propTypes = {
  playthrough: PropTypes.object.isRequired
};

export default Playthrough;
