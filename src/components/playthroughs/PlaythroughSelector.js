import React, { PropTypes } from 'react';
import Playthough from './Playthough';
import NewPlaythrough from './NewPlaythrough';

const PlaythoughSelector = ({ playthroughs, newPlaythrough }) => {
  let headingText = '3 Playthroughs in Progress!';

  let gridComponents = playthroughs.map((playthrough, i) => {
    return <Playthough playthrough={playthrough} key={i} />;
  });

  const numPlaythroughs = gridComponents.length;

  if (numPlaythroughs === 0) {
    gridComponents.push(<NewPlaythrough onClick={newPlaythrough}/>);
    gridComponents.push(<NewPlaythrough onClick={newPlaythrough}/>);
    gridComponents.push(<NewPlaythrough onClick={newPlaythrough}/>);

    headingText = 'No Playthroughs Started!'
  }

  if (numPlaythroughs === 1) {
    gridComponents.push(<NewPlaythrough onClick={newPlaythrough}/>);
    gridComponents.push(<NewPlaythrough onClick={newPlaythrough}/>);

    headingText = '1 Playthrough in Progress!'
  }

  if (numPlaythroughs === 2) {
    gridComponents.push(<NewPlaythrough onClick={newPlaythrough}/>);

    headingText = '2 Playthroughs in Progress';
  }

  return (
    <div className="container-fluid">
      <h2 className="playthrough-heading"><span>{headingText}</span></h2>

      <div className="row m5-top">
        {gridComponents.map(component => {
          return (
            <div className="col-sm-12 col-md-4">
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
  newPlaythrough: PropTypes.func.isRequired
};

export default PlaythoughSelector;
