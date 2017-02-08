import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const ProgressOverview = ({ progress }) => {
  return (
    <div className="progress-overview row m3-top">
      {
        progress.map((collectable, i) => {
          return (
            <div key={i} className="m3-bottom col-sm-12 col-md-3">
              <div className="collectable">
                <div className="collectable-name">
                  <Link to="">
                    {collectable.name}<span className="glyphicon glyphicon-menu-right"/>
                  </Link>
                </div>

                <ul className="collectable-progress">
                  {
                    collectable.progress.map((progress, i) => {
                      let iconClass = 'glyphicon glyphicon';
                      if (progress.found) {
                        iconClass += '-ok';
                      } else {
                        iconClass += '-remove';
                      }
                      
                      return (
                        <li key={i}>                        
                          <span className={iconClass} />
                          <span className="sr-only">{progress.found ? 'Complete' : 'Not complete'}</span>                        
                          <span>{progress.name}</span>
                        </li>
                      );
                    })
                  }
                </ul>
              </div>
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