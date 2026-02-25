import PropTypes from 'prop-types';
import {
  MdOutlineFavorite,
  MdOutlineFavoriteBorder,
  MdDelete,
} from 'react-icons/md';

import { boy, girl, unknown_gender } from '@/assets/avatar/avatar';
import {
  ContactCard,
  AvatarImg,
  ContactDetails,
  ContactActions,
} from '@/components/ContactItem/ContactItem.styled';

const ContactItem = ({
  id,
  name,
  surname,
  phoneNumber,
  gender,
  deleteContact,
  toggleFavourite,
  isFavourite,
}) => {
  const imgSrc =
    gender === 'male' ? boy : gender === 'female' ? girl : unknown_gender;
  return (
    <ContactCard>
      <AvatarImg src={imgSrc} alt="avatar image"></AvatarImg>

      <ContactDetails>
        <p>
          {name} {surname}
        </p>

        <a href={`tel:${phoneNumber}`} aria-label={`Call ${name} ${surname}`}>
          {phoneNumber}
        </a>
      </ContactDetails>

      <ContactActions>
        <button
          className="btn-favorite"
          aria-label="Add to favorites"
          onClick={() => toggleFavourite(id)}
        >
          {isFavourite ? <MdOutlineFavorite /> : <MdOutlineFavoriteBorder />}
        </button>

        <button
          className="btn-delete"
          aria-label="Delete contact"
          onClick={() => deleteContact(id)}
        >
          <MdDelete />
        </button>
      </ContactActions>
    </ContactCard>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  gender: PropTypes.string,
  deleteContact: PropTypes.func.isRequired,
  toggleFavourite: PropTypes.func.isRequired,
  isFavourite: PropTypes.bool.isRequired,
};
export { ContactItem };
