import { IModule } from 'redux-dynamic-modules';
import { DynamicState } from '~/types';
import { selected_tiles_reducer } from './selected-tiles.slice';

export const getSelectedTilesModule = (): IModule<
  DynamicState<'selected_tiles'>
> => {
  return {
    id: 'selected_tiles',
    reducerMap: {
      selected_tiles: selected_tiles_reducer,
    },
  };
};
