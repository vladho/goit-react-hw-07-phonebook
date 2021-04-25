import { useEffect } from "react";
import { connect } from "react-redux";
import {
  addContact,
  filterContacts,
  getContacts,
} from "./redux/contacts/contactsActions";
import Phonebook from "./components/Phonebook/Phonebook";
import Section from "./components/Section/Section";
import Filter from "./components/Filter/Filter";
import "./App.css";
import Contacts from "./components/Contacts/Contacts";

const App = ({ items, addContact, filterContacts, getContacts }) => {
  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    getContacts(contacts);
  }, [getContacts]);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(items));
  }, [items]);

  const submitForm = (data) => {
    if (items.length > 0) {
      const isOriginal = items.find(
        (item) => item.name.toLowerCase() === data.name.toLowerCase()
      );
      if (isOriginal) {
        alert(`${data.name} is already in contacts`);
        return;
      }
    }
    addContact(data);
  };

  const SetFilter = (e) => {
    filterContacts(e.target.value);
  };

  return (
    <>
      <Section title="Phonebook">
        <Phonebook onSubmit={submitForm} />
      </Section>
      <Section title="Contacts">
        <Filter onChange={SetFilter} />
        <Contacts items={items} />
      </Section>
    </>
  );
};

const mapStateToProps = ({ contacts }) => {
  return {
    items: contacts.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (name) => dispatch(addContact(name)),
    filterContacts: (name) => dispatch(filterContacts(name)),
    getContacts: (contacts) => dispatch(getContacts(contacts)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
