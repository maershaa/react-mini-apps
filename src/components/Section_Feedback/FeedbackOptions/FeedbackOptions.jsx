import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { FaFaceGrinWink, FaFaceSmile, FaFaceFrown } from 'react-icons/fa6';

import { FeedbackOptionsWrapper } from '@/components/Section_Feedback/FeedbackOptions/FeedbackOptions.styled';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <FeedbackOptionsWrapper>
      <h3>Please leave a feedback</h3>
      <ul className="feedback-buttons">
        <li>
          <button className="btn-good" onClick={onLeaveFeedback} type="button">
            <FaFaceGrinWink />
            <span>Good</span>
          </button>
        </li>
        <li>
          <button
            className="btn-neutral"
            onClick={onLeaveFeedback}
            type="button"
          >
            <FaFaceSmile />
            <span>Neutral</span>
          </button>
        </li>
        <li>
          <button className="btn-bad" onClick={onLeaveFeedback} type="button">
            <FaFaceFrown />
            <span> Bad</span>
          </button>
        </li>
      </ul>
    </FeedbackOptionsWrapper>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
export { FeedbackOptions };
