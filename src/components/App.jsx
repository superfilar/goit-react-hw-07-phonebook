import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectContacts } from './redux/selectors';
import { fetchContacts } from './redux/operations';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm/>
      <h1>Contacts</h1>
      {contacts.length > 0 ? (
        <Filter/>
      ) : (
        <h3>There is no contacts!<br/> Add contacts through form above.</h3>
      )}
      {contacts.length > 0 && (
        <ContactList/>
      )}
    </div>
  );
};

export default App;
