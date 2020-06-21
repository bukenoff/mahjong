import React, { FC, useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import * as styles from './styles.scss';
import { selectTile } from '~/redux/selected-tiles/actions';
import classNames from 'classnames';
import { Tile } from '~/types';
import { renderIcon, getTileBackground } from '~/utils';


interface Props {
  tile: Tile;
}

const Tile: FC<Props> = ({
  tile,
}) => {
  const dispatch = useDispatch();
  const { is_selected, is_blocked, coordinates, icon, special_styles } = tile;

  const handleTileClick = useCallback(() => {
    if (is_selected || is_blocked) {
      return null;
    }
    dispatch(selectTile(tile));
  }, [dispatch, tile]);

  const tileBackgroundColor = useMemo(() => {
    if (!tile) {
      return null;
    }

    return getTileBackground(coordinates.layer);
  }, [tile]);

  const tileStyles = useMemo(() => {
    if (!tile) {
      return null;
    }

    const main_styles = {
      gridColumn: `${coordinates.col + 1}`,
      gridRow: `${coordinates.row + 1}`,
      backgroundColor: tileBackgroundColor,
    };

    const optional_styles = special_styles || {};

    return {
      ...main_styles,
      ...optional_styles,
    };
  }, [tile]);

  return (
    <div
      style={tileStyles}
      className={
        classNames(styles.container, {
          [styles.is_selected]: is_selected,
          [styles.is_blocked]: is_blocked,
        })
      }
      onClick={handleTileClick}
    >
      <span className={styles.layer_badge}>
        {coordinates.layer}
      </span>
      {React.createElement(renderIcon(icon), { size: '30px', color: '#30292f' })}
    </div>
  );
};

export { Tile };
