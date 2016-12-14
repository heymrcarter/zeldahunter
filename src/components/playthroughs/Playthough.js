import React, { PropTypes } from 'react';

const Playthrough = ({ playthrough }) => {
  return (
    <div className="playthrough">
      <h3 className="playthrough-name">{playthrough.name}</h3>
      <div className="playthrough-body">
        Last save: {playthrough.lastUpdated}
      </div>
    </div>
  );
};

Playthrough.propTypes = {
  playthrough: PropTypes.object.isRequired
};

export default Playthrough;
