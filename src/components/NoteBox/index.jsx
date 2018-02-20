import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { saveNote } from '../../redux/actions';


import './NoteBox.css';

function NoteBox(props) {
  return (
    <div className="note-box">
      <textarea
        style={{ backgroundColor: props.currentNote.bg }}
        className="note-box-input"
        value={props.currentNote.note}
        onChange={props.handleNoteChange}
      />
      <div className="note-box-footer">
        <button
          className="save-button"
          onClick={() => { props.saveNote(props.currentNote); }}
        >
          Save
        </button>
        <p>{props.currentNote.note.length} character(s) (max {props.maxNoteLength})</p>
      </div>
    </div>
  );
}
NoteBox.propTypes = {
  currentNote: PropTypes.shape({
    noteId: PropTypes.any,
    title: PropTypes.string,
    note: PropTypes.string,
    bg: PropTypes.string,
  }).isRequired,
  handleNoteChange: PropTypes.func.isRequired,
  saveNote: PropTypes.func.isRequired,
  maxNoteLength: PropTypes.number.isRequired,
};

const mapDispatchToProps = dispatch => ({
  saveNote: (note) => { dispatch(saveNote(note)); },
});

export default connect(null, mapDispatchToProps)(NoteBox);
