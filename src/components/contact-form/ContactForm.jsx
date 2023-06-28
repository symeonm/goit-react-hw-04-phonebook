import { nanoid } from 'nanoid';
import { useState } from 'react';
import PropTypes from 'prop-types';


export default function FormAdd({onSubmit}) {
  const [nameValue, setName] = useState('');
  const [numberValue, setNumber] = useState('');
  const [idVlue, setId] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(nameValue, numberValue, idVlue);
    reset();
  };

  const handleName = e => {
    setName(e.target.value);
    setId(e.target.id)
  };

  const handleNumber = e => {
    setNumber(e.target.value);
    setId(e.target.id)
  };

  const reset = () => {
    setName(''.toLowerCase());
    setNumber('');
    setId('')
  };

  
  const idContact = nanoid();
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={idContact}>
        Name
        <input
          id={idContact}
          type="text"
          name="name"
          value={nameValue}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleName}
          required
        />
      </label>
      <label htmlFor={idContact}>
        Number
        <input
          id={idContact}
          type="tel"
          name="number"
          value={numberValue}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleNumber}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}

FormAdd.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
