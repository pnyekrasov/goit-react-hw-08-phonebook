import { Helmet, HelmetProvider } from 'react-helmet-async';

import { PhonebookList } from 'components/PhonebookList/PhonebookList';

const helmetContext = {};

export default function Phonebook() {
  return (
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <title>Your phonebook</title>
      </Helmet>

      <PhonebookList />
    </HelmetProvider>
  );
}
