import React from "react";
import styles from "./ContactsItem.module.css";

const ContactsItem = ({ contact, deleteContact }) => {
  const { name, number } = contact;
  return (
    <li className={styles.name}>
      {name}: {number}
      <button className={styles.btn} onClick={() => deleteContact(contact)}>
        delete
      </button>
    </li>
  );
};

export default ContactsItem;
