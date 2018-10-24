import React from 'react';
import PropTypes from 'proptypes';
import './Display.css';

const Display = ({ value, result }) => {
  let valueUpper = result ? value : '';
  let valueDown = result ? result : value;
  return (
    <div className="display">
      <div className="display-upper">{ valueUpper }</div>
      <div className="display-down">{ valueDown }</div>
    </div>
  );
};

Display.propTypes = {
  value: PropTypes.string,
  result: PropTypes.string
};

Display.defaultProps = {
  value: ''
};

export default Display;
