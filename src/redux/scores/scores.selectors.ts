import type { State, ScoresState } from "../../types";

export const selectPlayers = ({ scores }: State): ScoresState["players"] =>
  scores.players;
