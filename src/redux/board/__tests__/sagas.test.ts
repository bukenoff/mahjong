import { expectSaga } from 'redux-saga-test-plan';
import { handleGenerateNewBoard } from '../sagas';
import { generateNewBoard } from '../actions';
import { resumeTimer } from '../../timer/actions';

describe('moveCardSaga', () => {
  it('Dispatches resumeTimer after succesfully generating a new board', () => {
    return expectSaga(handleGenerateNewBoard)
      .put(resumeTimer())
      .dispatch(generateNewBoard())
      .run();
  });
});
