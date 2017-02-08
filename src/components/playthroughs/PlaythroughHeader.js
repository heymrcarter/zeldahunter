import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const PlaythroughHeader = ({ title, playthroughName, lastUpdated, quickviewModel }) => {
  let backLink = `/titles/${title.id}`;

  return (
    <div className="playthrough-header">
      <div className="title-name">
        <Link to={backLink}>
          <span className="glyphicon glyphicon-menu-left" aria-hidden="true" />{title.name}
        </Link>
      </div>

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
                  <li key={key} className="col-sm-3 m3-bottom">
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
  title: PropTypes.object.isRequired,
  playthroughName: PropTypes.string.isRequired,
  lastUpdated: PropTypes.string.isRequired,
  quickviewModel: PropTypes.array.isRequired
};

export default PlaythroughHeader;