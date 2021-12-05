import React from 'react';
import styles from './TimelineSlider.module.css';
import Slider from '@mui/material/Slider';

const TimelineSlider = ({ routeData, takeoffTime, landingTime }) => (
  <div className={styles.timelineSlider}>
    <span className={styles.label}>Take-off {takeoffTime}</span>
    <Slider className={styles.slider} size="small" defaultValue={0} aria-label="Small" valueLabelDisplay="auto" />
    <span className={styles.label}>Landing {landingTime}</span>
  </div>
);

export default TimelineSlider;
