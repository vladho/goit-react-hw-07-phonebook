import { createReducer } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import { addContact, deleteContact, getContacts, filterContacts } from "./contactsActions"

const contactsItems = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) => state.filter((item) => item.id !== payload.id),
  [getContacts]: (_, { payload }) => [...payload],
})

const contactsFilter = createReducer("", {
  [filterContacts]: (_, { payload }) => payload,
})

const contactsReducer = combineReducers({
  items: contactsItems,
  filter: contactsFilter,
})

export { contactsReducer }
