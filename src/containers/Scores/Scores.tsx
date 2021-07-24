import React, { FC } from 'react';
import * as styles from './styles.scss';

const dudes = [
  {
    name: 'Marcus Aurelius',
    score: 144,
  },
  {
    name: 'Lucilius Seneca',
    score: 130,
  },
  {
    name: 'Epictetus',
    score: 121,
  },
  {
    name: 'Zeno',
    score: 114,
  },
];

export const Scores: FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.scores_heading}>These dudes are the best</h1>
      <ul className={styles.scores_container}>
        {dudes.map((dude) => (
          <li className={styles.score_item} key={dude.name}>
            <span className={styles.score_item_name}>{dude.name}</span>
            <span className={styles.score_item_score}>{dude.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
