import React from "react";
import styles from "./ContactsItem.module.css";

const ContactsItem = ({ contact, deleteContact }) => {
  const { name, number, id } = contact;
  return (
    <li className={styles.name}>
      {name}: {number}
      <button className={styles.btn} onClick={() => deleteContact(id)}>
        delete
      </button>
    </li>
  );
};

export default ContactsItem;
