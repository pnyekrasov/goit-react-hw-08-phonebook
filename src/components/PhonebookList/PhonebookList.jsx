// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/operations';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectIsLoading, selectError } from 'redux/selectors';

// import { ContactForm } from 'components/ContactForm/ContactForm';
// import { Filter } from 'components/Filter/Filter';
// import { ContactList } from 'components/ContactList/ContactList';
// import { Loader } from 'components/Loader/Loader';

import { ContactsBook } from './PhonebookList.staled';

export const PhonebookList = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <ContactsBook>
      <h1>Phonebook</h1>
      {/* <ContactForm /> */}
      <h2>Contacts</h2>
      {/* <Filter /> */}
      {/* {isLoading && !error && <Loader />}
      <ContactList /> */}
    </ContactsBook>
  );
};
