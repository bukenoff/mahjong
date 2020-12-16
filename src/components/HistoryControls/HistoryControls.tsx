import React, { FC } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import * as styles from './styles.scss';

export const HistoryControls: FC = () => {
  return (
    <div className={styles.container}>
      <button className={styles.history_navigate_button} type="button">
        <FiArrowLeft />
      </button>
      <button className={styles.history_navigate_button} type="button">
        <FiArrowRight />
      </button>
    </div>
  );
};
