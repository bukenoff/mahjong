import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  is_stopped: true,
};

export const HANDLERS = {
};

export default createReducer(initialState, HANDLERS);
