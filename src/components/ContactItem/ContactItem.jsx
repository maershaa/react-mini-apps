import PropTypes from 'prop-types';
import { GrFavorite } from 'react-icons/gr';
import { MdDelete } from 'react-icons/md';

import { boy, girl, unknown_gender } from '@/assets/avatar/avatar';
import {
  ContactCard,
  AvatarImg,
  ContactDetails,
  ContactActions,
} from '@/components/ContactItem/ContactItem.styled';

const ContactItem = ({ name, surname, phoneNumber, gender }) => {
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
        <button className="btn-favorite" aria-label="Add to favorites">
          <GrFavorite />
        </button>

        <button className="btn-delete" aria-label="Delete contact">
          <MdDelete />
        </button>
      </ContactActions>
    </ContactCard>
  );
};

ContactItem.propTypes = {};
export { ContactItem };
