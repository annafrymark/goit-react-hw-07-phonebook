import { useSelector } from 'react-redux';
import { selectFilteredContacts, selectIsLoading } from 'redux/selectors';
import ContactListItem from '../ContactListItem/ContactListItem';
import css from './contactList.module.css';
import PropTypes from 'prop-types';

//  const filterContacts = (contacts, filter) => {
//    return contacts.filter(contact =>
//      contact.name.toLowerCase().includes(filter.toLowerCase())
//    );
//  };

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectFilter);
  // const filterStatus = filter.status;
  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filterStatus)
  // );
  return (
    <ul className={css.contactList}>
      {!!isLoading && <b>Loading contacts...</b>}
      {contacts.map(contact => (
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
