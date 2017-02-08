import React, { PropTypes } from 'react';
import CollectableOverview from './CollectableOverview';

const ProgressOverview = ({ progress }) => {
  return (
    <div className="progress-overview row m3-top">
      {
        progress.map((collectable, i) => {
          return (
            <div key={i} className="m3-bottom col-sm-12 col-md-3">
              <CollectableOverview collectable={collectable} />
            </div>
          );
        })
      }
    </div>    
  );
};

ProgressOverview.propTypes = {
  progress: PropTypes.array.isRequired
};

export default ProgressOverview;