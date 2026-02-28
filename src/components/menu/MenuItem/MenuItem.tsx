import { type FC } from "react";
import * as styles from "./MenuItem.styles.module.scss";

interface Props {
  title: string;
  clickHandler: (...args: any) => any;
  closeMenu: () => void;
}

export const MenuItem: FC<Props> = ({ title, clickHandler, closeMenu }) => {
  function handleClick() {
    clickHandler();
    closeMenu();
  }

  return (
    <li className={styles.container} onClick={handleClick}>
      {title}
    </li>
  );
};
