import { type FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import type { Row as RowType, Tile as TileType } from '~/types'
import { actions, selectTilesToRemove } from '~/redux'

import Tile from '../Tile'

interface Props {
  row: RowType
}

export const Row: FC<Props> = ({ row }) => {
  const dispatch = useDispatch()
  const tiles_to_remove = useSelector(selectTilesToRemove)

  function selectTile(tile: TileType) {
    dispatch(actions.selectTile(tile))
  }

  const tileList = Object.keys(row)

  return (
    <>
      {tileList.map((r, index) => {
        const tile = row[+r]
        if (!tile) {
          return null
        }

        return (
          <Tile
            key={index}
            tile={tile}
            selectTile={selectTile}
            is_removed={tiles_to_remove.includes(tile.id)}
          />
        )
      })}
    </>
  )
}
