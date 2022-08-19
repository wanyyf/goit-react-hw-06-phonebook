import ContactItem from 'components/ContactItem/ContactItem';
import { nanoid } from 'nanoid';

import { useSelector } from 'react-redux';
const ContactList = () => {
  const filter = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.items);

  const getFiltredArray = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(el =>
      el.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredArray = getFiltredArray();
  return (
    <ul>
      {filteredArray.map(el => (
        <ContactItem name={el.name} tel={el.number} id={el.id} key={nanoid()} />
      ))}
    </ul>
  );
};

export default ContactList;
