import { ProcessingActions } from '~/types';
import { createAction } from '@reduxjs/toolkit';

const toggleProcessing = createAction(ProcessingActions.TOGGLE_PROCESSING,
  (value: boolean) => ({
    payload: {
      value,
    },
  })
);

export { toggleProcessing };
