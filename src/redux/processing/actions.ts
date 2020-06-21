import { ProcessingActions } from '~/types';

const toggleProcessing = (value: boolean) => ({
  type: ProcessingActions.TOGGLE_PROCESSING,
  value,
});

export { toggleProcessing };
