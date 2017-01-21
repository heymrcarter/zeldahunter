import React, { PropTypes } from 'react';
import Playthrough from './Playthough';
import { Link } from 'react-router';
import PlaythroughForm from './PlaythroughForm';

const PlaythoughSelector = (props) => {
  const {
    playthroughs,
    titleId,
    startNewPlaythrough,
    newPlaythrough,
    saveNewPlaythrough,
    newPlaythroughChange
  } = props;
  
  const newPlaythroughUrl = `/titles/${titleId}/new-playthrough`;
  const numPlaythroughs = playthroughs.length;
  const maxPlaythroughs = 3;
  let headingText = `${numPlaythroughs} Playthroughs in Progress!`;
  let gridComponents = [];  

  playthroughs.map((playthrough, i) => {
    gridComponents.push(<Playthrough playthrough={playthrough} key={i} />);
  });

  while(gridComponents.length >= 0 && gridComponents.length < maxPlaythroughs) {
    const position = gridComponents.length + 1;

    if (newPlaythrough.starting && newPlaythrough.position === position) {
      gridComponents.push(<PlaythroughForm changeHandler={newPlaythroughChange} submitHandler={saveNewPlaythrough} />);    
    } else {
      gridComponents.push(
        <Link
          to={newPlaythroughUrl}
          onClick={startNewPlaythrough}
          className="new-playthrough"
          data-position={position}>
            New Playthrough
          </Link>);
    }
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
  titleId: PropTypes.string.isRequired,
  startNewPlaythrough: PropTypes.func.isRequired,
  newPlaythrough: PropTypes.object.isRequired,
  saveNewPlaythrough: PropTypes.func.isRequired,
  newPlaythroughChange: PropTypes.func.isRequired
};

export default PlaythoughSelector;