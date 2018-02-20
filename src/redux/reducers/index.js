import { combineReducers } from 'redux';

import notes from './notes';
import page from './page';

const reducer = combineReducers({
  notes,
  page,
});

export default reducer;

