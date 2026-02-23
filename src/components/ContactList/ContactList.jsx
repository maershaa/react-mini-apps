import PropTypes from 'prop-types';
import { ContactItem } from '@/components/ContactItem/ContactItem';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => {
        const { id, name, surname, phoneNumber, gender } = contact;
        return (
          <ContactItem
            key={id}
            name={name}
            surname={surname}
            phoneNumber={phoneNumber}
            gender={gender}
          ></ContactItem>
        );
      })}
    </ul>
  );
};
ContactList.propTypes = {};
export { ContactList };
