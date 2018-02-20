const SAVE_NOTE = 'SAVE_NOTE';
const EDIT_NOTE = 'EDIT_NOTE';
const NEW_NOTE = 'NEW_NOTE';
const SYNC_NOTES = 'SYNC_NOTE';

const saveNote = note => ({
  type: SAVE_NOTE,
  payload: note,
});

const newNote = (pageNo = 0) => ({
  type: NEW_NOTE,
  payload: pageNo,
});

const editNote = noteId => ({
  type: EDIT_NOTE,
  payload: noteId,
});

const syncNotes = () => ({
  type: SYNC_NOTES,
});

export default saveNote;
export { SAVE_NOTE };
export { NEW_NOTE };
export { EDIT_NOTE };
export { SYNC_NOTES };
export { saveNote };
export { newNote };
export { editNote };
export { syncNotes };

