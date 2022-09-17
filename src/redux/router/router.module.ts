import { IModule } from 'redux-dynamic-modules';
import { DynamicState } from '~/types';
import { routerReducer } from './router.reducer';

export const getRouterModule = (): IModule<DynamicState<'router'>> => {
  return {
    id: 'router',
    reducerMap: {
      router: routerReducer as any,
    },
  };
};
