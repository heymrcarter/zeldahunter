import React, { PropTypes } from 'react';

const CollectableOverview = ({ collectable }) => {
  return (
    <div className="collectable">
      <div className="collectable-name">
        {collectable.name}
      </div>

      <ul className="collectable-progress">
        {
          collectable.progress.map((progress, i) => {
            let iconClass = 'found-icon glyphicon glyphicon';
            if (progress.found) {
              iconClass += '-ok';
            } else {
              iconClass += '-remove';
            }
            
            return (
              <li key={i}>                        
                <span className={iconClass} />
                <span className="sr-only">{progress.found ? 'Complete' : 'Not complete'}</span>                        
                <span className="item-name">{progress.name}</span>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

CollectableOverview.propTypes = {
  collectable: PropTypes.object.isRequired,
};

export default CollectableOverview;