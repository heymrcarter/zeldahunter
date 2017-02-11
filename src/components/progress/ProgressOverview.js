import React, { PropTypes } from 'react';
import CollectableOverview from './CollectableOverview';

const ProgressOverview = ({ progress, progressUrl }) => {
  return (
    <div className="progress-overview row">
      {
        progress.map((collectable, i) => {
          return (
            <div key={i} className="m2-bottom col-sm-12">
              <CollectableOverview collectable={collectable} progressUrl={progressUrl} />
            </div>
          );
        })
      }
    </div>    
  );
};

ProgressOverview.propTypes = {
  progress: PropTypes.array.isRequired,
  progressUrl: PropTypes.string.isRequired
};

export default ProgressOverview;