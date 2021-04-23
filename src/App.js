import { useEffect } from "react"
import { connect } from "react-redux"
import { addContact, deleteContact, filterContacts, getContacts } from "./redux/contacts/contactsActions"
import Phonebook from "./components/Phonebook/Phonebook"
import Contacts from "./components/Contacts/Contacts"
import Section from "./components/Section/Section"
import Filter from "./components/Filter/Filter"
import "./App.css"

const App = ({ items, filter, addContact, deleteContact, filterContacts, getContacts }) => {
  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem("contacts"))
    getContacts(contacts)
  }, [getContacts])

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(items))
  }, [items])

  const submitForm = (data) => {
    if (items.length > 0) {
      const isOriginal = items.find((item) => item.name.toLowerCase() === data.name.toLowerCase())
      if (isOriginal) {
        alert(`${data.name} is already in contacts`)
        return
      }
    }
    addContact(data)
  }

  const SetFilter = (e) => {
    filterContacts(e.target.value)
  }
  const filterItems = () => {
    return items.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()))
  }

  // console.log(filterItems())
  return (
    <>
      <Section title="Phonebook">
        <Phonebook onSubmit={submitForm} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={SetFilter} />
        <ul className="contacts__name">
          {filterItems().map((el) => (
            <Contacts key={el.id} contacts={el} deleteContact={deleteContact} />
          ))}
        </ul>
        )
      </Section>
    </>
  )
}

const mapStateToProps = ({ contacts }) => {
  return {
    items: contacts.items,
    filter: contacts.filter,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (name) => dispatch(addContact(name)),
    deleteContact: (id) => dispatch(deleteContact(id)),
    filterContacts: (name) => dispatch(filterContacts(name)),
    getContacts: (contacts) => dispatch(getContacts(contacts)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
