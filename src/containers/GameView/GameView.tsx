import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import Board from '~/components/Board';
import GameControlPanel from '~/containers/GameControlPanel';
import { actions, selectIsStopped } from '~/redux';
import { getBoardModule } from '~/redux/board/board.module';
import { getGameModule } from '~/redux/game/game.module';
import { getRouterModule } from '~/redux/router/router.module';
import { getSelectedTilesModule } from '~/redux/selected-tiles/selected-tiles.module';
import { getStepsModule } from '~/redux/steps/steps.module';
import { getTilePairsResolvedCountModule } from '~/redux/tile-pairs-resolved-count/tile-pairs-resolved-count.module';
import { getTimerModule } from '~/redux/timer/timer.module';
import * as styles from './styles.scss';

export const GameView: FC = () => {
  const is_stopped = useSelector(selectIsStopped);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.generateNewBoard());
    dispatch(actions.gameStarted('johny'));
  }, []);

  return (
    <div className={styles.container}>
      <GameControlPanel />
      {!is_stopped && <Board />}
    </div>
  );
};

export const AsyncGameView: FC = () => (
  <DynamicModuleLoader
    modules={[
      getBoardModule(),
      getGameModule(),
      getSelectedTilesModule(),
      getStepsModule(),
      getTilePairsResolvedCountModule(),
      getTimerModule(),
    ]}
  >
    <GameView />
  </DynamicModuleLoader>
);
