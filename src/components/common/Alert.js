import React, { PropTypes } from 'react';

const Alert = ({ type, children, dismissable }) => {
  const cssClass = `alert alert-${type}`;

  const dismissBtn = <button
    type="button"
    className="close"
    data-dismiss="alert"
    aria-label="Close"><span aria-hidden="true">&times;</span></button>;

  return (
    <div className={cssClass}>
      {dismissable && dismissBtn}

      {children}
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  dismissable: PropTypes.bool.isRequired
};

export default Alert;
