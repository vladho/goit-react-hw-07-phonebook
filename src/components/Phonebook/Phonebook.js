import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Phonebook.module.css";
import { v4 as uuidv4 } from "uuid";

class Phonebook extends Component {
  initialState = {
    name: "",
    number: "",
  };
  state = {
    ...this.initialState,
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.setState({ id: uuidv4() });
    this.props.onSubmit(this.state);
    this.reset();
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ ...this.initialState });
  };
  render() {
    return (
      <div className={styles.phonebook}>
        <form onSubmit={this.handleSubmit}>
          <label>
            <p>Name</p>
            <input
              type="text"
              value={this.state.name}
              name="name"
              className={styles.inpt}
              onChange={this.onInputChange}
              autoComplete="off"
            />
          </label>
          <label>
            <p>Number</p>
            <input
              type="text"
              value={this.state.number}
              name="number"
              className={styles.inpt}
              onChange={this.onInputChange}
              autoComplete="off"
            />
          </label>
          <button type="submit" className={styles.btn}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

Phonebook.propTypes = {
  props: PropTypes.string,
};

export default Phonebook;
