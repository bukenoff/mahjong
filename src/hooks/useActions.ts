import { bindActionCreators, Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

export function useActions(actions, deps = null) {
  const dispatch: Dispatch = useDispatch();

  return useMemo(
    () => {
      if (Array.isArray(actions)) {
        return actions.map(a => bindActionCreators(a, dispatch));
      }
      return bindActionCreators(actions, dispatch);
    },
    deps ? [dispatch, ...deps] : [dispatch]
  );
}

export default useActions;
