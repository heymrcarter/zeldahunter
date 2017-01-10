import React, { PropTypes } from 'react';
import Playthough from './Playthough';
import { Link } from 'react-router';

const PlaythoughSelector = ({ playthroughs, titleId }) => {
  let headingText = '3 Playthroughs in Progress!';

  let gridComponents = playthroughs.map((playthrough, i) => {
    return <Playthough playthrough={playthrough} key={i} />;
  });

  const numPlaythroughs = gridComponents.length;
  const newPlaythroughUrl = `/titles/${titleId}/new-playthrough`;

  if (numPlaythroughs === 0) {
    gridComponents.push(<Link to={newPlaythroughUrl} className="new-playthrough">New Playthrough</Link>);
    gridComponents.push(<Link to={newPlaythroughUrl} className="new-playthrough">New Playthrough</Link>);
    gridComponents.push(<Link to={newPlaythroughUrl} className="new-playthrough">New Playthrough</Link>);

    headingText = 'No Playthroughs Started!';
  }

  if (numPlaythroughs === 1) {
    gridComponents.push(<Link to={newPlaythroughUrl} className="new-playthrough">New Playthrough</Link>);
    gridComponents.push(<Link to={newPlaythroughUrl} className="new-playthrough">New Playthrough</Link>);

    headingText = '1 Playthrough in Progress!';
  }

  if (numPlaythroughs === 2) {
    gridComponents.push(<Link to={newPlaythroughUrl} className="new-playthrough">New Playthrough</Link>);

    headingText = '2 Playthroughs in Progress';
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