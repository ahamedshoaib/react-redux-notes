import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { newNote, saveNote } from '../../redux/actions';

import './App.css';
import CurrentPageHeader from '../CurrentPageHeader';
import NewNotes from '../NewNote';
import AllNotes from '../AllNotes';
import FooterButton from '../FooterButton';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentNote: {
        title: '',
        note: '',
        bg: 'white',
        charCount: 0,
      },
      maxNoteLength: 120,
      notes: [],
    };
  }

  componentDidMount = () => {
    this.sync();
  }

  sync = () => {
    fetch('/notes')
      .then(response => response.json())
      .then((notes) => {
        notes.forEach((note) => {
          this.props.saveNote(note);
        });
      });
  };

  render() {
    if (this.props.page === 0) {
      return (
        <div className="app">
          <CurrentPageHeader pageName="Start taking notes" />
          <NewNotes
            currentNote={this.state.currentNote}
            maxNoteLength={this.state.maxNoteLength}
            handleTitleChange={this.handleTitleChange}
            handleNoteChange={this.handleNoteChange}
            handleSave={this.handleSave}
          />
          <FooterButton
            buttonName="About Us"
            onClick={() => {}}
          />
        </div>
      );
    }
    return (
      <div className="app">
        <CurrentPageHeader pageName="Saved Notes" />
        <AllNotes
          notes={this.state.notes}
        />
        {this.props.notes}
        <FooterButton
          buttonName="Create new Notes"
          onClick={this.props.newNote}
        />
      </div>
    );
  }
}

App.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    noteId: PropTypes.any,
    title: PropTypes.string,
    note: PropTypes.string,
    bg: PropTypes.string,
  })).isRequired,
  page: PropTypes.number.isRequired,
  newNote: PropTypes.func.isRequired,
  saveNote: PropTypes.func.isRequired,

};

const mapDispatchToProps = dispatch => ({
  newNote: () => { dispatch(newNote()); },
  saveNote: (note) => { dispatch(saveNote(note)); },
});

const mapStatesToProps = state => ({
  page: state.page.page,
});

export default connect(mapStatesToProps, mapDispatchToProps)(App);
