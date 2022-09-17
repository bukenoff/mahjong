import { IModule } from 'redux-dynamic-modules';
import { DynamicState } from '~/types';
import { board_reducer } from './board.slice';

export const getBoardModule = (): IModule<DynamicState<'board'>> => {
  return {
    id: 'board',
    reducerMap: {
      board: board_reducer,
    },
  };
};
