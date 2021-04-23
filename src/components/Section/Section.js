import React from "react"
import PropTypes from "prop-types"
import styles from "./Section.module.css"

const Section = (props) => {
  const { title } = props
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      {props.children}
    </>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Section
