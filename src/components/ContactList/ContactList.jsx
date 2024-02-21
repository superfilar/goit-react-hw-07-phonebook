import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from '../redux/selectors';
import { deleteContacts } from '../redux/operations';
import style from './ContactList.module.css';

const ContactList = () => {

  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  
  return(
  <ul className={style.contactList}>
    {contacts.map(contact => (
      <li key={contact.id} id={contact.id} className={style.contactListItem}>
        <div className={style.contactListItem__name}>
          {contact.name + ' : '}
        </div>
        <div className={style.contactListItem__phone}>
          {contact.phone}
        </div>
        <button
            className={style.contactListItem__button}
            type="button"
            name="delete"
            onClick={() => dispatch(deleteContacts(contact.id))}>
            Delete
          </button>       
        {/* {
          contact.name + ' : ' + contact.phone}
        {
          <button
            type="button"
            name="delete"
            onClick={() => dispatch(deleteContacts(contact.id))}>
            Delete
          </button>
        } */}
      </li>
    ))}
  </ul>)
  };

export default ContactList;
