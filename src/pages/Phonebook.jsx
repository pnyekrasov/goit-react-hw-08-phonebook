import { PhonebookList } from 'components/PhonebookList/PhonebookList';
import { Helmet } from 'react-helmet';

export default function Phonebook() {
  return (
    <div>
      <Helmet>
        <title>Your phonebook</title>
      </Helmet>

      <PhonebookList />
    </div>
  );
}
