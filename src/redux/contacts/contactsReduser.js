import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContact } from './contactActions';

const itemReducer = createReducer([], {
  [addContact]: (state, { payload }) =>
    state
      .map(el => {
        return el.name.toLowerCase();
      })
      .includes(payload.name.toLowerCase())
      ? alert(`${payload.name} is already there`)
      : [...state, payload],

  [deleteContact]: (state, { payload }) =>
    state.filter(el => el.id !== payload),
});
const filterReducer = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

const contactReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});

export default contactReducer;
