import React from 'react';

import PropTypes from 'prop-types';


import './NoteItem.css';

function NoteItem(props) {
  return (
    <div className="note-item">
      <div className="note-item-header">
        <h3>{props.title}</h3>
        <button onClick={props.onClick}>edit</button>
      </div>
      <pre>{props.body}</pre>
    </div>
  );
}
NoteItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NoteItem;
