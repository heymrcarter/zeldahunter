import React, { PropTypes } from 'react';

const NewPlaythrough = ({ onClick, onSave, renderForm }) => {
  const newPlaythroughButton = (
    <div className="new-playthrough">
      <a href="#" onClick={onClick}>New Playthrough</a>
    </div>
  );

  const newPlaythroughForm = (
    <form>
      <input type="text" name="playthrough-name" id="playthrough-name" onKeyUp={onSave} />
    </form>
  );

  return renderForm ? newPlaythroughForm : newPlaythroughButton;
};

NewPlaythrough.propTypes = {
  onClick: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  renderForm: PropTypes.bool.isRequired
};

export default NewPlaythrough;
