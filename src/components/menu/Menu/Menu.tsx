import React, { FC, useState, useCallback } from 'react';
import { FiMenu } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { actions } from '~/redux';
import MenuItem from '../MenuItem';
import * as styles from './styles.scss';

interface Props {
  generateNewBoard: typeof actions.generateNewBoard;
  shuffleBoard: typeof actions.shuffleBoard;
}

export const Menu: FC<Props> = ({ generateNewBoard, shuffleBoard }) => {
  const [is_menu_open, setMenuOpen] = useState(false);
  const history = useHistory();

  const redirectToScores = useCallback(() => history.push('/scores'), []);

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
            clickHandler={redirectToScores}
            closeMenu={closeMenu}
          />
          <MenuItem
            title="shuffle"
            clickHandler={shuffleBoard}
            closeMenu={closeMenu}
          />
        </ul>
      )}
    </div>
  );
};
