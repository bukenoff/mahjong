import { expectSaga } from 'redux-saga-test-plan';
import { handleGenerateNewBoard } from '../board.sagas';
import { actions } from '../../';

describe('moveCardSaga', () => {
  it('Dispatches resumeTimer after succesfully generating a new board', () => {
    return expectSaga(handleGenerateNewBoard)
      .put(actions.resumeTimer())
      .dispatch(actions.generateNewBoard())
      .run();
  });
});
