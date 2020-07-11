import React, { FC } from 'react';
import * as styles from './styles.scss';
import Menu from '~/components/menu/Menu';
import HistoryControls from '~/components/HistoryControls';
import TimerAndMovesCount from '~/components/TimerAndMovesCount';
import { generateNewBoard as generateNewBoardAction } from '~/redux/board/actions';
import useActions from '~/hooks/useActions';

const GameControlPanel: FC = () => {
  const generateNewBoard = useActions(generateNewBoardAction, []);

  return (
    <nav className={styles.container}>
      <HistoryControls />
      <TimerAndMovesCount />
      <Menu
        generateNewBoard={generateNewBoard}
      />
    </nav>
  );
};

export { GameControlPanel };
