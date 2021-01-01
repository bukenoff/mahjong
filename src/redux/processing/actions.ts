import { createAction } from '@reduxjs/toolkit';

export const processingToggled = createAction(
  'Processing/processing_toggled',
  (value: boolean) => ({
    payload: {
      value,
    },
  }),
);
