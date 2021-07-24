import { scores_actions, scores_reducer } from '../scores.slice';
import { Player, ScoresState } from '../../../types';

describe('Scores slice', () => {
  it('reducer should be defined', () => {
    expect(scores_reducer).toBeDefined();
  });

  it('should add score to players array', () => {
    const initial_state: ScoresState = {
      players: [],
    };

    const MOCK_SCORE: Player = {
      name: 'john',
      time: 12,
    };

    const result_state: ScoresState = {
      players: [MOCK_SCORE],
    };

    expect(
      scores_reducer(initial_state, scores_actions.scoreAdded(MOCK_SCORE)),
    ).toEqual(result_state);
  });
});
