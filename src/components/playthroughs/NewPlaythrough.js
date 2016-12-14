import React, { PropTypes } from 'react';

const NewPlaythrough = ({ onClick }) => {
  return (
    <div className="new-playthrough">
      <a href="#" onClick={onClick}>New Playthrough</a>
    </div>
  );
};

NewPlaythrough.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default NewPlaythrough;
