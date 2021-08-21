import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectPlayers } from '~/redux/scores/scores.selectors';
import * as styles from './styles.scss';

export const Scores: FC = () => {
  const players = useSelector(selectPlayers);

  return (
    <div className={styles.container}>
      <h1 className={styles.scores_heading}>These dudes are the best</h1>
      <ul className={styles.scores_container}>
        {players.map((dude) => (
          <li className={styles.score_item} key={dude.name}>
            <span className={styles.score_item_name}>{dude.name}</span>
            <span className={styles.score_item_score}>{dude.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
