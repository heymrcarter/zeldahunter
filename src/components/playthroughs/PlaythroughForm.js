import React, { PropTypes } from 'react';

const PlaythroughForm = ({ changeHandler, submitHandler, position, cancelHandler }) => {
  return (
    <form className="new-playthrough-form" onSubmit={submitHandler} data-position={position}>
      <h3>Start a new playthrough</h3>
      <a href="#cancel-playthrough" onClick={cancelHandler} className="cancel-playthrough" data-position={position}>
        <span className="glyphicon glyphicon-remove"/>
        <span className="sr-only">Cancel</span>
      </a>
      <div>
        <label className="sr-only" htmlFor="playthrough-name">Playthrough name</label>
        <input type="text" name="playthrough-name" placeholder="Name" onChange={changeHandler} />
        <inout type="submit" className="sr-only" value="Submit"/>
      </div>
    </form>
  );
};

PlaythroughForm.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
  position: PropTypes.string.isRequired,
  cancelHandler: PropTypes.func.isRequired
};

export default PlaythroughForm;