import React from 'react';

import PropTypes from 'prop-types';

import './CurrentPageHeader.css';

function CurrentPageHeader(props) {
  return (
    <header className="current-page-header">
      {props.pageName}
    </header>
  );
}
CurrentPageHeader.propTypes = {
  pageName: PropTypes.string.isRequired,

};

export default CurrentPageHeader;
