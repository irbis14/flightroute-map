import React from 'react';
import styles from './FlightContainer.module.css';

const FlightContainer = ({ children }) => <div className={styles.flightContainer}>{children}</div>;

export default FlightContainer;
