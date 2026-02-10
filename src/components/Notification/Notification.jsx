import PropTypes from 'prop-types';
import { BsFillPatchExclamationFill } from 'react-icons/bs';

import { FeedbackNotification } from '@/components/Notification/Notification.styled';
const Notification = ({ message }) => {
  return (
    <FeedbackNotification>
      <BsFillPatchExclamationFill></BsFillPatchExclamationFill>
      <p> {message} </p>
    </FeedbackNotification>
  );
};

Notification.propTypes = {};

export { Notification };
