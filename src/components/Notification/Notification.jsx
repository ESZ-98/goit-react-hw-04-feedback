import PropTypes from 'prop-types';
import React from 'react';
import css from './Notification.module.css';

const Notification = ({ message }) => {
  return <div className={css.message_notification}>{message}</div>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
