import { type FC } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import { actions } from "~/redux";

import * as styles from "./HistoryControl.styles.module.scss";

interface Props {
  is_step_forward_possible: boolean;
  is_step_back_possible: boolean;
  takeStepBack: typeof actions.takeStepBack;
  takeStepForward: typeof actions.takeStepForward;
}

export const HistoryControls: FC<Props> = ({
  is_step_forward_possible,
  is_step_back_possible,
  takeStepBack,
  takeStepForward,
}) => {
  const onBackClick = () => takeStepBack();
  const onForwardClick = () => takeStepForward();

  return (
    <div className={styles.container} data-testid="history_controls_root">
      <button
        className={styles.history_navigate_button}
        type="button"
        disabled={!is_step_back_possible}
        onClick={onBackClick}
        data-testid="step_back_button"
      >
        <FiArrowLeft />
      </button>
      <button
        className={styles.history_navigate_button}
        type="button"
        disabled={!is_step_forward_possible}
        onClick={onForwardClick}
        data-testid="step_forward_button"
      >
        <FiArrowRight />
      </button>
    </div>
  );
};
