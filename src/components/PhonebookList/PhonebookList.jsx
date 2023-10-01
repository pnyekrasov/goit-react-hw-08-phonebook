import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/Phonebook/selectors';
import { fetchContacts } from 'redux/Phonebook/operations';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsBook } from './PhonebookList.staled';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Loader } from 'components/Loader/Loader';

export const PhonebookList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsBook>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
    </ContactsBook>
  );
};
