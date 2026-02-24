import PropTypes from 'prop-types';
import { ContactItem } from '@/components/ContactItem/ContactItem';

const ContactList = ({
  contacts,
  deleteContact,
  toggleFavourite,
  favorites,
}) => {
  return (
    <ul>
      {contacts.map(contact => {
        const { id, name, surname, phoneNumber, gender } = contact;
        const isFavourite = favorites.some(fav => fav.id === id);

        return (
          <ContactItem
            id={id}
            name={name}
            surname={surname}
            phoneNumber={phoneNumber}
            gender={gender}
            deleteContact={deleteContact}
            toggleFavourite={toggleFavourite}
            isFavourite={isFavourite}
          ></ContactItem>
        );
      })}
    </ul>
  );
};
ContactList.propTypes = {};
export { ContactList };
