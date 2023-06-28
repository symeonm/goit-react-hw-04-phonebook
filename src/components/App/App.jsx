import { useState, useEffect } from 'react';
import ContactForm from '../contact-form/ContactForm';
import ContactList from '../contact-list/ContactList';
import Filter from '../filter/Filter';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storageContact = localStorage.getItem('contact');
    const contactParse = JSON.parse(storageContact);
    setContacts(contactParse);
  }, []);

  useEffect(() => {
    localStorage.setItem('contact', JSON.stringify(contacts));
  }, [contacts]);

  const addInState = (nameValue, numberValue, idVlue) => {
    
    const nameContact = contacts.find(
      obj => obj.name.toLowerCase() === nameValue.toLowerCase()
    );
    if (!nameContact) {
      const contact = { name: nameValue, number: numberValue, id: idVlue };
      setContacts(prevState => [...prevState, contact]);
    } else {
      alert('Такий контакт вже існує');
    }
  };

  const deleteContactState = id => {
    const updContacts = contacts.filter(obj => obj.id !== id);
    setContacts(updContacts);
  };

  const handleFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filterContactList = () => {
    const normalizedText = filter.toLowerCase();
    return contacts.filter(obj =>
      obj.name.toLowerCase().includes(normalizedText)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addInState} />
      <h2>Contacts</h2>
      <Filter handleChange={handleFilter} value={filter} />
      <ContactList
        dataContact={filterContactList()}
        deleteList={deleteContactState}
      />
    </div>
  );
}
