import { scores_actions, scores_reducer } from "../scores.slice";
import type { Player, ScoresState } from "../../../types";

describe("Scores slice", () => {
  it("reducer should be defined", () => {
    expect(scores_reducer).toBeDefined();
  });

  it("should add score to players array", () => {
    const initial_state = {
      players: [],
    } as unknown as ScoresState;

    const MOCK_SCORE: Player = {
      name: "john",
      time: 12,
    };

    const result_state = {
      players: [MOCK_SCORE],
    } as unknown as ScoresState;

    expect(
      scores_reducer(initial_state, scores_actions.scoreAdded(MOCK_SCORE))
    ).toEqual(result_state);
  });
});
