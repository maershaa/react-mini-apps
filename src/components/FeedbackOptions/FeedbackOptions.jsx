import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { FaFaceGrinWink, FaFaceSmile, FaFaceFrown } from 'react-icons/fa6';

import { FeedbackOptionsWrapper } from '@/components/FeedbackOptions/FeedbackOptions.styled';

class FeedbackOptions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  render() {
    // Деструктурируем пропсы
    const { options, onLeaveFeedback } = this.props;
    return (
      <FeedbackOptionsWrapper>
        <h3>Please leave a feedback</h3>
        <ul className="feedback-buttons">
          <li>
            <button className="btn-good" onClick={onLeaveFeedback}>
              <FaFaceGrinWink />
              <span>Good</span>
            </button>
          </li>
          <li>
            <button className="btn-neutral" onClick={onLeaveFeedback}>
              <FaFaceSmile />
              <span>Neutral</span>
            </button>
          </li>
          <li>
            <button className="btn-bad" onClick={onLeaveFeedback}>
              <FaFaceFrown />
              <span> Bad</span>
            </button>
          </li>
        </ul>
      </FeedbackOptionsWrapper>
    );
  }
}

FeedbackOptions.propTypes = {};

export { FeedbackOptions };
