import { useSelector } from 'react-redux';
import { selectNumberContacts, selectVisibleContacts } from 'redux/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List, ListItem } from './ContactList.styled';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const numberContacts = useSelector(selectNumberContacts);

  return (
    <>
      <p>Number of contacts:&nbsp;{numberContacts}</p>
      <List>
        {visibleContacts.map(item => (
          <ListItem key={item.id}>
            <ContactItem {...item} />
          </ListItem>
        ))}
      </List>
    </>
  );
};
