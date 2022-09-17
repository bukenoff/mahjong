import { ISagaModule } from 'redux-dynamic-modules-saga';
import { DynamicState } from '~/types';
import { selected_tiles_reducer } from './selected-tiles.slice';
import selected_tiles_sagas from './selected-tiles.sagas';

export const getSelectedTilesModule = (): ISagaModule<
  DynamicState<'selected_tiles'>
> => {
  return {
    id: 'selected_tiles',
    reducerMap: {
      selected_tiles: selected_tiles_reducer,
    },
    sagas: [selected_tiles_sagas],
  };
};
