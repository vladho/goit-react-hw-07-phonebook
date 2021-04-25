import React from "react";
import PropTypes from "prop-types";
import ContactsItem from "./ContactsItem/ContactsItem";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsActions";

const Contacts = ({ filter, deleteContact, items }) => {
  const filterItems = () => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  return (
    <>
      <ul className="contacts__name">
        {filterItems().map((el) => (
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
  filter: contacts.filter,
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
