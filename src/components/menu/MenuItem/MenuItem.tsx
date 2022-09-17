import React, { FC, useCallback } from 'react';
import * as styles from './styles.scss';

interface Props {
  title: string;
  clickHandler: (...args: any) => any;
  closeMenu: () => void;
}

export const MenuItem: FC<Props> = ({ title, clickHandler, closeMenu }) => {
  const handleClick = useCallback(() => {
    clickHandler();
    closeMenu();
  }, [clickHandler, closeMenu]);

  return (
    <li className={styles.container} onClick={handleClick}>
      {title}
    </li>
  );
};
