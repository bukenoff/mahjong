import type { State, TimerState } from "../../types";

export const selectIsStopped = ({ timer }: State): TimerState["is_stopped"] =>
  timer.is_stopped;
