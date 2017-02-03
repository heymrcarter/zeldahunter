import React, { PropTypes } from 'react';

const PlaythroughHeader = ({ titleName, playthroughName, lastUpdated }) => {
  return (
    <div className="playthrough-header">
      <div className="title-name">{titleName}</div>

      <div className="row p2">
        <div className="col-sm-12 col-md-9">
          <h1>{playthroughName}</h1>
        </div>

        <div className="col-sm-12 col-md-3">
          <div className="last-updated">Last save: {lastUpdated}</div>
        </div>
      </div>
    </div>
  );
};

PlaythroughHeader.propTypes = {
  titleName: PropTypes.string.isRequired,
  playthroughName: PropTypes.string.isRequired,
  lastUpdated: PropTypes.string.isRequired
};

export default PlaythroughHeader;