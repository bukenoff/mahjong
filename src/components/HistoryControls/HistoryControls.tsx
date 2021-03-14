import React, { FC } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import * as styles from './styles.scss';
import { actions } from '~/redux';

interface Props {
  takeStepBack: typeof actions.takeStepBack;
  takeStepForward: typeof actions.takeStepForward;
  is_step_forward_possible: boolean;
  is_step_back_possible: boolean;
}

export const HistoryControls: FC<Props> = ({
  takeStepBack,
  takeStepForward,
  is_step_forward_possible,
  is_step_back_possible,
}) => {
  const onBackClick = () => takeStepBack();
  const onForwardClick = () => takeStepForward();

  return (
    <div className={styles.container} data-testid="history_controls_root">
      <button
        className={styles.history_navigate_button}
        type="button"
        disabled={is_step_back_possible === false}
        onClick={onBackClick}
        data-testid="step_back_button"
      >
        <FiArrowLeft />
      </button>
      <button
        className={styles.history_navigate_button}
        type="button"
        disabled={is_step_forward_possible === false}
        onClick={onForwardClick}
        data-testid="step_forward_button"
      >
        <FiArrowRight />
      </button>
    </div>
  );
};
