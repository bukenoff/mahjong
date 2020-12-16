import { State, StepsState } from '~/types';

export const selectStepStack = ({ steps }: State): StepsState['steps_stack'] =>
  steps.steps_stack;

export const selectStepIndex = ({ steps }: State): StepsState['step_index'] =>
  steps.step_index;
