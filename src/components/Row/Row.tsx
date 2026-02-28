import { type FC } from 'react'
import { useDispatch } from 'react-redux'

import type { Row as RowType, Tile as TileType } from '~/types'
import { actions } from '~/redux'

import Tile from '../Tile'

interface Props {
  row: RowType
}

export const Row: FC<Props> = ({ row }) => {
  const dispatch = useDispatch()

  function selectTile(tile: TileType) {
    dispatch(actions.selectTile(tile))
  }

  const tileList = Object.keys(row)

  return (
    <>
      {tileList.map((r, index) => {
        if (!row[+r]) {
          return null
        }

        return <Tile key={index} tile={row[+r]} selectTile={selectTile} />
      })}
    </>
  )
}
