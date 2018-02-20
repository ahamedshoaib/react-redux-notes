import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import './AllNotes.css';

import NoteItem from '../NoteItem';

import { editNote } from '../../redux/actions';


class AllNotes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  sync = () => {
    const newNotes = [];
    this.props.notes.forEach((note) => {
      newNotes.push({ noteId: note.noteId, title: note.title, note: note.note });
    });

    fetch(
      '/notes',
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ notes: newNotes }),
      },
    );
  }

  renderNotes = () => {
    const notes = [];
    for (let i = 0; i < this.props.notes.length; i += 1) {
      notes.push(<NoteItem
        onClick={() => { this.props.editNote(this.props.notes[i].noteId); }}
        key={this.props.notes[i].noteId}
        body={this.props.notes[i].note}
        title={this.props.notes[i].title}
      />);
    }
    return notes;
  }

  render() {
    return (
      <div className="all-notes">
        <div>
          <button onClick={this.sync}>sync</button>
        </div>
        {this.renderNotes()}
      </div>
    );
  }
}

AllNotes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    noteId: PropTypes.any,
    title: PropTypes.string,
    note: PropTypes.string,
    bg: PropTypes.string,
  })).isRequired,
  editNote: PropTypes.number.isRequired,
};

const mapStatesToProps = state => ({
  notes: state.notes.notes,
});

const mapDispatchToProps = dispatch => ({
  editNote: (noteId) => { dispatch(editNote(noteId)); },
});


export default connect(mapStatesToProps, mapDispatchToProps)(AllNotes);
