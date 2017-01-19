import React, { PropTypes } from 'react';
import Playthrough from './Playthough';
import { Link } from 'react-router';

const PlaythoughSelector = ({ playthroughs, titleId }) => {
  const newPlaythroughUrl = `/titles/${titleId}/new-playthrough`;
  const numPlaythroughs = playthroughs.length;
  let headingText = `${numPlaythroughs} Playthroughs in Progress!`;
  let gridComponents = [];  

  if (numPlaythroughs === 0) {
    gridComponents.push(<Link to={newPlaythroughUrl} className="new-playthrough">New Playthrough</Link>);
    gridComponents.push(<Link to={newPlaythroughUrl} className="new-playthrough">New Playthrough</Link>);
    gridComponents.push(<Link to={newPlaythroughUrl} className="new-playthrough">New Playthrough</Link>);

    headingText = 'No Playthroughs Started!';
  }

  playthroughs.map((playthrough, i) => {
    gridComponents.push(<Playthrough playthrough={playthrough} key={i} />);
  });

  if (numPlaythroughs === 1) {
    gridComponents.push(<Link to={newPlaythroughUrl} className="new-playthrough">New Playthrough</Link>);
    gridComponents.push(<Link to={newPlaythroughUrl} className="new-playthrough">New Playthrough</Link>);

    headingText = '1 Playthrough in Progress!';
  }

  if (numPlaythroughs === 2) {
    gridComponents.push(<Link to={newPlaythroughUrl} className="new-playthrough">New Playthrough</Link>);
  }

  return (
    <div className="container-fluid">
      <h2 className="playthrough-heading"><span>{headingText}</span></h2>

      <div className="row m5-top">
        {gridComponents.map((component, i) => {
          return (
            <div key={i} className="col-sm-12 col-md-4">
              {component}
            </div>
          );
        })}
      </div>
    </div>
  );
};

PlaythoughSelector.propTypes = {
  playthroughs: PropTypes.array.isRequired,
  titleId: PropTypes.string.isRequired
};

export default PlaythoughSelector;