import React, { PropTypes } from 'react';

const PlaythroughHeader = ({ titleName, playthroughName, lastUpdated, quickviewModel }) => {
  return (
    <div className="playthrough-header">
      <div className="title-name">{titleName}</div>

      <div className="row playthrough-overview">
        <div className="col-sm-12 col-md-4">
          <h1>{playthroughName}</h1>
          <span className="last-updated">Last save: {lastUpdated}</span>
        </div>

        <div className="col-sm-12 col-md-8">
          <ul className="quickview row">
            {
              quickviewModel.map((quickviewItem, key) => {
                return (
                  <li key={key} className="col-sm-3">
                    <div className="quickview-glance">
                      <span className="glance-collectable">{quickviewItem.name}</span>
                      <div className="glance-completion-percentage">
                        <span className="percentage">
                          {(quickviewItem.found / quickviewItem.total) * 100 || 0}%
                        </span>
                        <span className="glance-completion-label">Complete</span>
                      </div>
                    </div>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>      
    </div>
  );
};

PlaythroughHeader.propTypes = {
  titleName: PropTypes.string.isRequired,
  playthroughName: PropTypes.string.isRequired,
  lastUpdated: PropTypes.string.isRequired,
  quickviewModel: PropTypes.array.isRequired
};

export default PlaythroughHeader;