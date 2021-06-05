import React, { FC, useState, useCallback } from 'react';
import { FiMenu } from 'react-icons/fi';
import * as styles from './styles.scss';
import { actions } from '~/redux';
import MenuItem from '../MenuItem';
import { push } from 'connected-react-router';
import { PATHS } from '~/constants/paths';

interface Props {
  generateNewBoard: typeof actions.generateNewBoard;
}

const Menu: FC<Props> = ({ generateNewBoard }) => {
  const [is_menu_open, setMenuOpen] = useState(false);

  const handleMenuToggleClick = useCallback(() => {
    setMenuOpen(!is_menu_open);
  }, [setMenuOpen, is_menu_open]);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, [setMenuOpen]);

  return (
    <div className={styles.container} data-testid="menu-root">
      <button
        className={styles.toggle_button}
        onClick={handleMenuToggleClick}
        type="button"
        data-testid="menu-button"
      >
        <FiMenu />
      </button>
      {is_menu_open && (
        <ul className={styles.menu} data-testid="menu-list">
          <MenuItem
            title="new game"
            clickHandler={generateNewBoard}
            closeMenu={closeMenu}
          />
          <MenuItem
            title="scores"
            // TODO: Set up navigating to scores page
            clickHandler={() => console.log('click works')}
            closeMenu={closeMenu}
          />
        </ul>
      )}
    </div>
  );
};

export { Menu };
