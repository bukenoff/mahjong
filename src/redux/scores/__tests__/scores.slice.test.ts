import { scores_actions, scores_reducer } from '../scores.slice';
import { Player, ScoresState } from '../../../types';

describe('Scores slice', () => {
  it('reducer should be defined', () => {
    expect(scores_reducer).toBeDefined();
  });

  it('should add score to players array', () => {
    const initial_state = ({
      players: [],
    } as unknown) as ScoresState;

    const MOCK_SCORE: Player = {
      name: 'john',
      time: 12,
    };

    const result_state = ({
      players: [MOCK_SCORE],
    } as unknown) as ScoresState;

    expect(
      scores_reducer(initial_state, scores_actions.scoreAdded(MOCK_SCORE)),
    ).toEqual(result_state);
  });

  it('should set currentPlayerScore to specified value', () => {
    const initial_state = ({
      currentPlayerScore: 0,
    } as unknown) as ScoresState;

    const result_state = ({
      currentPlayerScore: 42,
    } as unknown) as ScoresState;

    expect(
      scores_reducer(initial_state, scores_actions.gameStopped({ score: 42 })),
    ).toEqual(result_state);
  });
});
