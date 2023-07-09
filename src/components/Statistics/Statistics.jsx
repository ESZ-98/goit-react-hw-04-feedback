import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './Statistics.module.css';
import Notification from 'components/Notification/Notification';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <div className={css.statistics_wrap}>
        <h2 className={css.statistics_title}>Statistics</h2>
        {good > 0 || neutral > 0 || bad > 0 ? (
          <ul className={css.statistics_list}>
            <li className={css.statistics_element}>Good: {good}</li>
            <li className={css.statistics_element}>Neutral: {neutral}</li>
            <li className={css.statistics_element}>Bad: {bad}</li>
            <li className={css.statistics_element}>Total: {total}</li>
            <li className={css.statistics_element}>
              Positive feedback: {positivePercentage}%
            </li>
          </ul>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
