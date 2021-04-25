import React from "react";
import { connect } from "react-redux";
// import { deleteContact } from "../../redux/contacts/contactsActions";
// import Contacts from "../Contacts/Contacts";
import styles from "./Filter.module.css";

const Filter = ({ filter, onChange }) => {
  return (
    <>
      <div className={styles.filter}>
        <label>
          <p>Find contacts by name</p>
          <input
            type="text"
            value={filter}
            onChange={onChange}
            className={styles.inpt}
            autoComplete="off"
          />
        </label>
      </div>
    </>
  );
};

const mapStateToProps = ({ contacts }) => ({
  filter: contacts.filter,
});

export default connect(mapStateToProps)(Filter);
