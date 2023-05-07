import { useSelector } from 'react-redux';
import { selectContacts, selectFilter, selectIsLoading } from 'redux/selectors';
import ContactListItem from '../ContactListItem/ContactListItem';
import css from './contactList.module.css';
import PropTypes from 'prop-types';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={css.contactList}>
      {!!isLoading && <b>Loading contacts...</b>}
      {filteredContacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
        
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),

};

export default ContactList;
