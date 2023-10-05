import { PhonebookList } from 'components/PhonebookList/PhonebookList';
import { Helmet, HelmetProvider } from 'react-helmet-async';

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
