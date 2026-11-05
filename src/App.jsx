import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addContact, deleteContact as deleteContactAction, updateContact as updateContactAction } from "./redux/store";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {


  const contacts = useSelector((state) => state.contacts)

  const dispatch = useDispatch()


  const [searchValue, setSearchValue] = useState("");
  const [editingContact, setEditingContact] = useState(null);

  const deleteContact = (contactId) => {
    dispatch(deleteContactAction(contactId))

    if (editingContact && editingContact.id === contactId) {
      setEditingContact(null);
    }
  };



  const editContact = (contact) => {
    setEditingContact(contact);
  };

  const cancelEdit = () => {
    setEditingContact(null);
  };

  const updateContact = (contact) => {

    dispatch(updateContactAction(contact))

    setEditingContact(null);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <div className="app">
      <h1>Phonebook</h1>

      <ContactForm
        editingContact={editingContact}
        onUpdateContact={updateContact}
        onCancelEdit={cancelEdit}
      />

      <SearchBox searchValue={searchValue} onSearch={setSearchValue} />

      <p>Кількість контактів: {contacts.length}</p>

      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
        onEditContact={editContact}
      />
    </div>
  );
}

export default App;
