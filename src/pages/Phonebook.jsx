// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/operations';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectIsLoading, selectError } from 'redux/selectors';

import { PhonebookList } from 'components/PhonebookList/PhonebookList';

export default function Phonebook() {
  return (
    <div>
      <title>Your phonebook</title>
      <PhonebookList />
    </div>
  );
}
