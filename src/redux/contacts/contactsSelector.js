import { createSelector } from "@reduxjs/toolkit";

export const getLoading = (contacts) => contacts.loading;
export const getAllContacts = (contacts) => contacts.items;
export const getFilter = (contacts) => contacts.filter;

export const getFilterContacts = createSelector(
  [getAllContacts, getFilter],
  (items, filter) => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
