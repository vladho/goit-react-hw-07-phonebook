import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  addContactSuccess,
  addContactRequest,
  deleteContactSuccess,
  getContactsSuccess,
  filterContacts,
  addContactError,
  deleteContactRequest,
  deleteContactError,
  getContactsRequest,
  getContactsError,
} from "./contactsActions";

export const contactsItems = createReducer([], {
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter((item) => item.id !== payload),
  [getContactsSuccess]: (_, { payload }) => [...payload],
});

const filter = createReducer("", {
  [filterContacts]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,
});

const error = createReducer(null, {});

export const contactsReducer = combineReducers({
  items: contactsItems,
  filter,
  loading,
  error,
});
