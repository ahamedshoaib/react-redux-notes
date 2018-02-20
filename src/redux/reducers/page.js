import { SAVE_NOTE, NEW_NOTE, EDIT_NOTE, SYNC_NOTES } from '../actions';

const defaultState = {
  page: 1,
};

const page = (state = defaultState, action) => {
  switch (action.type) {
    case SAVE_NOTE: {
      return {
        ...state,
        page: 1,
      };
    }
    case EDIT_NOTE: {
      return {
        ...state,
        page: 0,
      };
    }
    case NEW_NOTE: {
      return {
        ...state,
        page: 0,
      };
    }
    case SYNC_NOTES: {
      return {
        ...state,
        page: 0,
      };
    }
    default: {
      return state;
    }
  }
};

export default page;

