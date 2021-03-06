import React from 'react';
import PropTypes from 'prop-types';

import styles from './Notification.module.css';

const Notification = ({ message }) => (
  <section>
    <p className={styles.Notification}>{message}</p>
  </section>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;