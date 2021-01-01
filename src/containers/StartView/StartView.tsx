import React, { FC } from 'react';
import * as styles from './styles.scss';
import { Link } from 'react-router-dom';
import { PATHS } from '~/constants/paths';

export const StartView: FC = () => {
  return (
    <div className={styles.container}>
      <button type="button" className={styles.start_button}>
        <Link to={PATHS.GAME}>Start game</Link>
      </button>
    </div>
  );
};
