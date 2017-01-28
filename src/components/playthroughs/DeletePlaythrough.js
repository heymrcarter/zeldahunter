import React, { PropTypes } from 'react';

const DeletePlaythrough = ({ playthrough, position, deleteHandler, changeHandler, isValid }) => {
  return (
    <form className="delete-playthrough-form" data-position={position} onSubmit={deleteHandler} data-playthrough-id={playthrough.id}>
      <p className="lead">Are you sure?</p>
      <p>Deleting a playthrough cannot be undone! If you really want to delete this playthrough, please confirm by typing the playthrough name below</p>
      <div className="playthrough-name-input">
        <label htmlFor="playthrough-name" className="sr-only">Playthrough name</label>
        <input
          type="text"
          className={isValid ? 'valid' : 'invalid'}
          name="playthrough-name"
          placeholder="Type playthough name to continue"
          onKeyUp={changeHandler}/>
        <span className={isValid ? 'glyphicon glyphicon-ok valid' : 'glyphicon glyphicon-remove invalid'} aria-hidden="true" />
      </div>
      <input type="submit" value="Delete" className="sr-only"/>
    </form>
  );
};

DeletePlaythrough.propTypes = {
  playthrough: PropTypes.object.isRequired,
  position: PropTypes.string.isRequired,
  deleteHandler: PropTypes.func.isRequired,
  changeHandler: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired
};

export default DeletePlaythrough;