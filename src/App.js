import { useEffect } from "react";
import { connect } from "react-redux";
import { addContact, getContacts } from "./redux/contacts/contactsOperation";
import Phonebook from "./components/Phonebook/Phonebook";
import Section from "./components/Section/Section";
import Filter from "./components/Filter/Filter";
import Contacts from "./components/Contacts/Contacts";
import { getAllContacts, getLoading } from "./redux/contacts/contactsSelector";
import "./App.css";

const App = ({ items, addContact, getContacts, loading }) => {
  useEffect(() => {
    getContacts();
  }, [getContacts]);

  const submitForm = (data) => {
    const isOriginal = items.find(
      (item) => item.name.toLowerCase() === data.name.toLowerCase()
    );
    isOriginal
      ? alert(`${data.name} is already in contacts`)
      : addContact(data);
  };

  return (
    <>
      {loading && "загрузка..."}
      <Section title="Phonebook">
        <Phonebook onSubmit={submitForm} />
      </Section>
      <Section title="Contacts">
        <Filter />
        <Contacts items={items} />
      </Section>
    </>
  );
};

const mapStateToProps = ({ contacts }) => {
  return {
    loading: getLoading(contacts),
    items: getAllContacts(contacts),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (name) => dispatch(addContact(name)),
    getContacts: (contacts) => dispatch(getContacts(contacts)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
