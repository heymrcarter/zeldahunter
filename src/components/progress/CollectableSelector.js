import React, { PropTypes } from 'react';

const CollectableSelector = ({ collectables }) => {
  return (
    <ul className="collectable-selector">
      {
        collectables.map((collectable, i) => {
          return (
            <li key={i}>
              <div className="collectable-glance">
                <span className="glance-name">{collectable.name}</span>
                <div className="glance-completion-percentage">
                  <span className="percentage">
                    {(collectable.found / collectable.total) * 100 || 0}%
                  </span>
                  <span className="glance-completion-label">Complete</span>
                </div>
              </div>
            </li>
          );
        })
      }
    </ul>
  );
};

CollectableSelector.propTypes = {
  collectables: PropTypes.array.isRequired
};

export default CollectableSelector;