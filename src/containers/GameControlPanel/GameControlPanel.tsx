import React, { FC, useState } from 'react';
import { FiArrowLeft, FiArrowRight, FiMenu } from 'react-icons/fi';

import * as styles from './styles.scss';

const GameControlPanel: FC = () => {
  const [is_menu_open, setMenuOpen] = useState(false);

  return (
    <nav className={styles.container}>
      <div className={styles.history_controls}>
        <button
          className={styles.history_navigate_button}
          type="button"
        >
          <FiArrowLeft />
        </button>
        <button
          className={styles.history_navigate_button}
          type="button"
        >
          <FiArrowRight />
        </button>
      </div>
      <div className={styles.moves_and_time}>
        <div>Moves left: 19</div>
        <div>00:00</div>
      </div>
      <div style={{ position: 'relative' }}>
        <button onClick={() => setMenuOpen(!is_menu_open)}>
          <FiMenu />
        </button>
        { is_menu_open && (
          <ul className={styles.menu}>
            <li>new game</li>
            <li>scores</li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export { GameControlPanel };
