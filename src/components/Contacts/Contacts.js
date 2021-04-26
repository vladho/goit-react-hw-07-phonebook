import React from "react";
import PropTypes from "prop-types";
import ContactsItem from "./ContactsItem/ContactsItem";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsOperation";
import { getFilterContacts } from "../../redux/contacts/contactsSelector";

const Contacts = ({ deleteContact, filterContacts }) => {
  return (
    <>
      <ul className="contacts__name">
        {filterContacts.map((el) => (
          <ContactsItem
            contact={el}
            key={el.id}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = ({ contacts }) => ({
  filterContacts: getFilterContacts(contacts),
});

const mapDispatchToProps = (dispatch) => {
  return {
    deleteContact: (id) => dispatch(deleteContact(id)),
  };
};

Contacts.propTypes = {
  items: PropTypes.array,
  deleteContact: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
