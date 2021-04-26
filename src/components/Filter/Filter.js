import React from "react";
import { connect } from "react-redux";
import { filterContacts } from "../../redux/contacts/contactsActions";
import { getFilter } from "../../redux/contacts/contactsSelector";
import styles from "./Filter.module.css";

const Filter = ({ filter, onChange, filterContacts }) => {
  const SetFilter = (e) => {
    filterContacts(e.target.value);
  };

  return (
    <>
      <div className={styles.filter}>
        <label>
          <p>Find contacts by name</p>
          <input
            type="text"
            value={filter}
            onChange={SetFilter}
            className={styles.inpt}
            autoComplete="off"
          />
        </label>
      </div>
    </>
  );
};

const mapStateToProps = ({ contacts }) => ({
  filter: getFilter(contacts),
});

const mapDispatchToProps = (dispatch) => {
  return {
    filterContacts: (name) => dispatch(filterContacts(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
