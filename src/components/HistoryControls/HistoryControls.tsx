import React, { FC } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import * as styles from './styles.scss';
import { useDispatch } from 'react-redux';
import { takeStepBack, takeStepForward } from '~/redux/steps/actions';

export const HistoryControls: FC = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <button
        className={styles.history_navigate_button}
        type="button"
        onClick={() => dispatch(takeStepBack())}
      >
        <FiArrowLeft />
      </button>
      <button
        className={styles.history_navigate_button}
        type="button"
        onClick={() => dispatch(takeStepForward())}
      >
        <FiArrowRight />
      </button>
    </div>
  );
};
