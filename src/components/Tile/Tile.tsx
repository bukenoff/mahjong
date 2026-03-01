import React, { type CSSProperties, type FC, memo } from 'react'
import classNames from 'classnames'

import type { Tile as TileType } from '~/types'
import { renderIcon, getTileBackground } from '~/logic/utils'
import { TileIconStyles } from '~/styles/styles'

import * as styles from './Tile.styles.module.scss'

interface Props {
  tile: TileType | null
  selectTile: (tile: TileType) => void
}

export const Tile: FC<Props> = memo(({ tile, selectTile }) => {
  if (!tile) return null

  const {
    is_selected,
    is_blocked,
    coordinates,
    icon,
    special_styles = {},
  } = tile

  function handleTileClick() {
    if (is_selected || is_blocked || !tile) {
      return null
    }

    selectTile(tile)
  }

  const tileBackgroundColor = getTileBackground(coordinates.layer)

  const tileStyles: CSSProperties = {
    gridColumn: `${coordinates.col + 1}`,
    gridRow: `${coordinates.row + 1}`,
    backgroundColor: tileBackgroundColor,
    zIndex: (coordinates.layer + 1) * 30 - coordinates.col,
    bottom: coordinates.layer * 7,
    left: coordinates.layer * 7,
    ...special_styles,
  }

  return (
    <button
      style={tileStyles}
      className={classNames(styles.container, {
        [styles.is_selected]: is_selected,
        [styles.is_blocked]: is_blocked,
      })}
      onClick={handleTileClick}
      data-testid="tile"
    >
      {React.createElement(renderIcon(icon), TileIconStyles)}
    </button>
  )
})

Tile.displayName = 'Tile'
