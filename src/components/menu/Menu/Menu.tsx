import { type FC, useState } from "react";
import { FiMenu } from "react-icons/fi";

import { actions } from "../../../redux";
import MenuItem from "../MenuItem";
import * as styles from "./Menu.styles.module.scss";

interface Props {
  generateNewBoard: typeof actions.generateNewBoard;
  shuffleBoard: typeof actions.shuffleBoard;
}

export const Menu: FC<Props> = ({ generateNewBoard, shuffleBoard }) => {
  const [is_menu_open, setMenuOpen] = useState(false);

  function handleMenuToggleClick() {
    setMenuOpen(!is_menu_open);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

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
            title="shuffle"
            clickHandler={shuffleBoard}
            closeMenu={closeMenu}
          />
        </ul>
      )}
    </div>
  );
};
