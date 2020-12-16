import React, { FC } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import * as styles from './styles.scss';
import * as stepsActions from '~/redux/steps/actions';
import { StepsState } from '~/types';

interface Props {
  takeStepBack: typeof stepsActions.takeStepBack;
  takeStepForward: typeof stepsActions.takeStepForward;
  step_stack: StepsState['steps_stack'];
}

export const HistoryControls: FC<Props> = ({
  takeStepBack,
  takeStepForward,
  step_stack,
}) => {
  const onBackClick = () => takeStepBack();
  const onForwardClick = () => takeStepForward();

  return (
    <div className={styles.container}>
      <button
        className={styles.history_navigate_button}
        type="button"
        disabled={step_stack.length === 0}
        onClick={onBackClick}
      >
        <FiArrowLeft />
      </button>
      <button
        className={styles.history_navigate_button}
        type="button"
        disabled={step_stack.length === 0}
        onClick={onForwardClick}
      >
        <FiArrowRight />
      </button>
    </div>
  );
};
