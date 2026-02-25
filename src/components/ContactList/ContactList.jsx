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
            key={id}
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
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
      gender: PropTypes.string,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
  toggleFavourite: PropTypes.func.isRequired,

  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
      gender: PropTypes.string,
    })
  ).isRequired, //isRequired ставим тк даже если массив пустой → не проверяется ни один элемент. shape внутри проверять просто нечего — React молчит. Когда добавятся элементы — они будут проверяться по shape.
};
export { ContactList };
