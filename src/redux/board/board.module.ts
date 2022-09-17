import { ISagaModule } from 'redux-dynamic-modules-saga';
import { DynamicState } from '~/types';
import { board_reducer } from './board.slice';
import board_sagas from './board.sagas';

export const getBoardModule = (): ISagaModule<DynamicState<'board'>> => {
  return {
    id: 'board',
    reducerMap: {
      board: board_reducer,
    },
    sagas: [board_sagas],
  };
};
