import React, { PropTypes } from 'react';

const PlaythroughForm = ({ changeHandler, submitHandler }) => {
  return (
    <form className="new-playthrough-form" onSubmit={submitHandler}>
      <h3>Start a new playthrough</h3>
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
  submitHandler: PropTypes.func.isRequired
};

export default PlaythroughForm;