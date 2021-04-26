import { createAction } from "@reduxjs/toolkit";

export const addContactRequest = createAction("@contact/addContactRequest");
export const addContactSuccess = createAction("@contact/addContactSuccess");
export const addContactError = createAction("@contact/addContactError");

export const deleteContactRequest = createAction(
  "@contact/deleteContactRequest"
);
export const deleteContactSuccess = createAction(
  "@contact/deleteContactSuccess"
);
export const deleteContactError = createAction("@contact/deleteContactError");

export const filterContacts = createAction("@contacts/filter");

export const getContactsRequest = createAction("@contacts/getContactRequest");
export const getContactsSuccess = createAction("@contacts/getContactSuccess");
export const getContactsError = createAction("@contacts/getContactError");
