import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import css from './contactForm.module.css';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const newContact = {
      name: form.name.value,
      number: form.number.value,
    };

    let contactExist = false;

    contacts.forEach(contact => {
      if (contact.name.toLowerCase() === newContact.name.toLowerCase()) {
        alert(`${newContact.name} is already in contacts.`);
        contactExist = true;
      }
    });

    if (!contactExist) {
      dispatch(addContact(newContact));
    }

    form.reset();
  };

  const nameInputId = nanoid();

  return (
    <form onSubmit={handleSubmit} className={css.contactForm}>
      <label htmlFor={nameInputId}>Name</label>
      <input
        id={nameInputId}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor="number">Number</label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  addNewContact: PropTypes.func,
};

export default ContactForm;
