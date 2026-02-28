import type { State, StepsState } from "../../types";

export const selectStepStack = ({ steps }: State): StepsState["steps_stack"] =>
  steps.steps_stack;

export const selectStepIndex = ({ steps }: State): StepsState["step_index"] =>
  steps.step_index;

export const selectIsStepForwardPossible = ({ steps }: State): boolean => {
  return steps.step_index !== steps.steps_stack.length - 1;
};

export const selectIsStepBackPossible = ({ steps }: State): boolean => {
  return steps.step_index !== -1;
};

export const selectStepsMade = ({ steps }: State): StepsState["steps_made"] =>
  steps.steps_made;
