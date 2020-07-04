import { ProcessingActions } from '~/types';
import { createAction } from '@reduxjs/toolkit';

const processingToggled = createAction(ProcessingActions.PROCESSING_TOGGLED,
  (value: boolean) => ({
    payload: {
      value,
    },
  })
);

export { processingToggled };
