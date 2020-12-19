import React, { FC } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import * as styles from './styles.scss';
import * as stepsActions from '~/redux/steps/actions';
import { StepsState } from '~/types';

interface Props {
  takeStepBack: typeof stepsActions.takeStepBack;
  takeStepForward: typeof stepsActions.takeStepForward;
  step_stack: StepsState['steps_stack'];
  is_step_forward_possible: boolean;
  is_step_back_possible: boolean;
}

export const HistoryControls: FC<Props> = ({
  takeStepBack,
  takeStepForward,
  step_stack,
  is_step_forward_possible,
  is_step_back_possible,
}) => {
  const onBackClick = () => takeStepBack();
  const onForwardClick = () => takeStepForward();

  return (
    <div className={styles.container}>
      <button
        className={styles.history_navigate_button}
        type="button"
        disabled={is_step_back_possible === false}
        onClick={onBackClick}
      >
        <FiArrowLeft />
      </button>
      <button
        className={styles.history_navigate_button}
        type="button"
        disabled={is_step_forward_possible === false}
        onClick={onForwardClick}
      >
        <FiArrowRight />
      </button>
    </div>
  );
};
