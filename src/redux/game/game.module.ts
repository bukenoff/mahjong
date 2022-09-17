import { IModule } from 'redux-dynamic-modules';
import { DynamicState } from '~/types';
import { game_reducer } from './game.slice';

export const getGameModule = (): IModule<DynamicState<'game'>> => {
  return {
    id: 'game',
    reducerMap: {
      game: game_reducer,
    },
  };
};
