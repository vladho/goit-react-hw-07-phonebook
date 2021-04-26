import axios from "axios";
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  deleteContactSuccess,
  deleteContactRequest,
  deleteContactError,
} from "./contactsActions";

axios.defaults.baseURL = "http://localhost:3004";

export const addContact = ({ name, number }) => async (dispatch) => {
  const contacts = {
    name,
    number,
  };
  dispatch(addContactRequest());
  try {
    const { data } = await axios.post("/contacts", contacts);

    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

export const getContacts = () => async (dispatch) => {
  dispatch(getContactsRequest());
  try {
    const { data } = await axios.get("/contacts");
    dispatch(getContactsSuccess(data));
  } catch (error) {
    dispatch(getContactsError(error));
  }
};

export const deleteContact = (id) => async (dispatch) => {
  dispatch(deleteContactRequest());
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};
