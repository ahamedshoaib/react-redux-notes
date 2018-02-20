import React from 'react';

import PropTypes from 'prop-types';


import { connect } from 'react-redux';

import './NewNote.css';

import NoteBox from '../NoteBox';


class NewNotes extends React.Component {
  constructor(props) {
    super(props);
    if (props.currentNote) {
      this.state = {
        currentNote: {
          noteId: props.currentNote.noteId,
          note: props.currentNote.note,
          title: props.currentNote.title,
          bg: 'white',
        },
        maxNoteLength: 120,
      };
    } else {
      this.state = {
        currentNote: {
          noteId: new Date(),
          note: '',
          title: '',
          bg: 'white',
        },
        maxNoteLength: 120,
      };
    }
  }

  handleTitleChange = (event) => {
    this.setState({
      currentNote: {
        ...this.state.currentNote,
        title: event.target.value,
      },
    });
  }

  handleNoteChange = (event) => {
    const input = event.target.value;
    const inputLength = input.length;
    if (inputLength < (this.state.maxNoteLength + 1)) {
      this.setState({
        currentNote: {
          ...this.state.currentNote,
          note: input,
          bg: 'white',
        },
      });
    } else {
      this.setState({
        currentNote: {
          ...this.state.currentNote,
          bg: 'red',
        },
      });
    }
  }

  render() {
    return (
      <div className="new-note">
        <div className="new-note-header">
          <p>Notes Title</p>
          <button>en</button>
        </div>
        <input type="text" className="title-box" value={this.state.currentNote.title} onChange={this.handleTitleChange} />
        <p>Please type your notes below</p>
        <NoteBox
          currentNote={this.state.currentNote}
          maxNoteLength={this.state.maxNoteLength}
          handleNoteChange={this.handleNoteChange}
        />
      </div>
    );
  }
}
NewNotes.propTypes = {
  currentNote: PropTypes.shape({
    noteId: PropTypes.any,
    title: PropTypes.string,
    note: PropTypes.string,
    bg: PropTypes.string,
  }).isRequired,
};

const mapStatesToProps = state => ({
  currentNote: state.notes.currentNote,
});

export default connect(mapStatesToProps)(NewNotes);
