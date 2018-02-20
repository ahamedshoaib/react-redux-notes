import React from 'react';

import PropTypes from 'prop-types';

import './FooterButton.css';

function FooterButton(props) {
  return (
    <button className="footer-button" onClick={props.onClick}>
      {props.buttonName}
    </button>
  );
}
FooterButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FooterButton;
