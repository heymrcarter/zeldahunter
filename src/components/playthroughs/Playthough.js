import React, { PropTypes } from 'react';

function formatDate(timeInMilliseconds) {
  const date = new Date(timeInMilliseconds);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
}

const Playthrough = ({ playthrough, startDeletePlaythrough, position }) => {
  return (
    <div className="playthrough">
      <h3 className="playthrough-name">{playthrough.name}</h3>
      <div className="playthrough-body">
        Last save: {formatDate(playthrough.lastUpdated)}
      </div>

      <a href="#delete"
        className="delete-playthrough"
        onClick={startDeletePlaythrough}
        data-playthrough-id={playthrough.id}
        data-position={position}>
          <span className="glyphicon glyphicon-trash" />
          <span className="sr-only">Delete playthrough</span>
          <div className="tooltip bottom" role="tooltip">
            <div className="tooltip-arrow" />
            <div className="tooltip-inner">Delete playthrough</div>
          </div>
      </a>
    </div>
  );
};

Playthrough.propTypes = {
  playthrough: PropTypes.object.isRequired,
  startDeletePlaythrough: PropTypes.func.isRequired,
  position: PropTypes.string.isRequired
};

export default Playthrough;
