import { SAVE_NOTE, EDIT_NOTE, NEW_NOTE } from '../actions';

const defaultState = {
  notes: [],
  currentNote: null,
};

const notes = (state = defaultState, action) => {
  switch (action.type) {
    case SAVE_NOTE: {
      const index = state.notes.findIndex(note => note.noteId === action.payload.noteId);
      if (index !== -1) {
        const newNotes = state.notes.slice();
        newNotes[index] = action.payload;
        return {
          ...state,
          notes: newNotes,
          currentNote: null,
        };
      }
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    }
    case EDIT_NOTE: {
      return {
        ...state,
        currentNote: state.notes.find(note => note.noteId === action.payload),
      };
    }
    case NEW_NOTE: {
      return {
        ...state,
        currentNote: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default notes;

