import { ProcessingActions } from '~/types';
import { createAction } from '@reduxjs/toolkit';

export const processingToggled = createAction(
  ProcessingActions.PROCESSING_TOGGLED,
  (value: boolean) => ({
    payload: {
      value,
    },
  }),
);
