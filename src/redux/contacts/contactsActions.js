import { createAction } from "@reduxjs/toolkit"

export const addContact = createAction("@contact/add")
export const deleteContact = createAction("@contact/delete")
export const filterContacts = createAction("@contacts/filter")
export const getContacts = createAction("@contacts/get")
