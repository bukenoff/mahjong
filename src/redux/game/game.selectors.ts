import type { State } from "../../types";

export const selectPlayerName = ({ game }: State) => game.player_name;
