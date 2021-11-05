import React, { ChangeEventHandler, FC, useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import * as styles from './styles.scss';
import { Link } from 'react-router-dom';
import { PATHS } from '~/constants/paths';
import { useDispatch } from 'react-redux';
import { actions } from '~/redux';

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
    history.push(PATHS.GAME);
  };

  return (
    <div className={styles.container}>
      <label htmlFor="name">Enter your name sir</label>
      <input type="text" id="name" value={name} onChange={onNameChange} />
      <>
        <button
          type="button"
          className={styles.start_button}
          onClick={onStartGameClick}
          disabled={!name.length}
        >
          Start game
        </button>
        <button type="button" className={styles.start_button}>
          <Link to={PATHS.SCORES}>Scores</Link>
        </button>
      </>
    </div>
  );
};
