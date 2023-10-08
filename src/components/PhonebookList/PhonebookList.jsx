import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addContact, fetchContacts } from 'redux/Phonebook/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/Phonebook/selectors';

import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Loader } from 'components/Loader/Loader';

import { ContactsBook } from './PhonebookList.staled';

export const PhonebookList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, actions) => {
    contacts.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    )
      ? alert(`${values.name} is already in contacts`)
      : dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <ContactsBook>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} Button="Add contact" />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
    </ContactsBook>
  );
};
