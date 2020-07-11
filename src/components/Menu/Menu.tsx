import React, { FC, useState, useCallback } from 'react';
import { FiMenu } from 'react-icons/fi';
import * as styles from './styles.scss';

const Menu: FC = () => {
  const [is_menu_open, setMenuOpen] = useState(false);

  const handleMenuToggleClick = useCallback(() => {
    setMenuOpen(!is_menu_open);
  }, [setMenuOpen, is_menu_open]);

  return (
    <div className={styles.container}>
      <button onClick={handleMenuToggleClick} type="button">
        <FiMenu />
      </button>
      {
        is_menu_open && (
          <ul className={styles.menu}>
            <li>new game</li>
            <li>scores</li>
          </ul>
        )
      }
    </div>
  );
};

export { Menu };
