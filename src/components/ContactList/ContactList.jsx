import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import ContactListItem from '../ContactListItem/ContactListItem';
import css from './contactList.module.css';
import PropTypes from 'prop-types';

 const filterContacts = (contacts, filter) => {
   return contacts.filter(contact =>
     contact.name.toLowerCase().includes(filter.toLowerCase())
   );
 };


const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = filterContacts(contacts, filter);
  return (
    <ul className={css.contactList}>
      {filteredContacts && filteredContacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          // deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  deleteContact: PropTypes.func,
};

export default ContactList;
