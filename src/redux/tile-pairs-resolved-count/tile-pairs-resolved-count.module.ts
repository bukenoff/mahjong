import { IModule } from 'redux-dynamic-modules';
import { DynamicState } from '~/types';
import { tile_pairs_resolved_count_reducer } from './tile-pairs-resolved-count.slice';

export const getTilePairsResolvedCountModule = (): IModule<
  DynamicState<'tile_pairs_resolved_count'>
> => {
  return {
    id: 'tile_pairs_resolved_count',
    reducerMap: {
      tile_pairs_resolved_count: tile_pairs_resolved_count_reducer,
    },
  };
};
