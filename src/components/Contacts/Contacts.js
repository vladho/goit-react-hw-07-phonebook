import React from "react";
import PropTypes from "prop-types";
import styles from "./Contacts.module.css";

const Contacts = ({ contacts, deleteContact }) => {
  const { name, number } = contacts;
  return (
    <>
      <li className={styles.name}>
        {name}: {number}
        <button className={styles.btn} onClick={() => deleteContact(contacts)}>
          delete
        </button>
      </li>
    </>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.object,
  deleteContact: PropTypes.func.isRequired,
};

export default Contacts;
