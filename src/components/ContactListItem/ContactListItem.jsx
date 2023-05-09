import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import css from './contactListItem.module.css';
import PropTypes from 'prop-types';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={css.contactListItem}>
      {contact.name} : {contact.phone}
      <button
        className={css.deleteButton}
        type="button"
        onClick={handleOnClick}
        data-id={contact.id}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string),
  deleteContact: PropTypes.func,
};

export default ContactListItem;
