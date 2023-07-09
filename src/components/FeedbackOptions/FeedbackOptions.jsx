import PropTypes from 'prop-types';
import React from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.button_list}>
      {options.map(feedbackType => (
        <li key={feedbackType}>
          <button
            type="button"
            className={css.button_feedback}
            onClick={() => onLeaveFeedback(feedbackType)}
          >
            {feedbackType}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;