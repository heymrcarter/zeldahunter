import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const PlaythroughHeader = ({ playthroughName, lastUpdated }) => {
  return (
    <div className="playthrough-header">
      <h1>{playthroughName}</h1>
      <span className="last-updated">Last save: {lastUpdated}</span>        
    </div>
  );
};

PlaythroughHeader.propTypes = {
  playthroughName: PropTypes.string.isRequired,
  lastUpdated: PropTypes.string.isRequired  
};

export default PlaythroughHeader;