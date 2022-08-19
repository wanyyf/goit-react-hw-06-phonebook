import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction('contact/addContact', data => ({
  payload: {
    id: nanoid(),
    name: data.name,
    number: data.number,
  },
}));
export const deleteContact = createAction('contact/deleteContact');
export const filterContact = createAction('contact/filterContact');
