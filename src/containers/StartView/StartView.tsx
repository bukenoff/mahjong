import React, { ChangeEventHandler, FC, useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PATHS } from '~/constants/paths';
import { actions } from '~/redux';
import * as styles from './styles.scss';

export const StartView: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState('');

  const onNameChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setName(e.currentTarget.value);
    },
    [],
  );

  const onStartGameClick = () => {
    dispatch(actions.generateNewBoard());
    dispatch(actions.gameStarted(name));
    history.push(PATHS.GAME);
  };

  return (
    <div className={styles.container}>
      <label htmlFor="name">Enter your name sir</label>
      <input type="text" id="name" value={name} onChange={onNameChange} />
      <button
        type="button"
        className={styles.start_button}
        onClick={onStartGameClick}
      >
        Start game
      </button>
      <button type="button" className={styles.start_button}>
        <Link to={PATHS.SCORES}>Scores</Link>
      </button>
    </div>
  );
};
