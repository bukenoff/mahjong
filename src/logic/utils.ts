import { type TilesSymbolsValue, type TileCoordinates } from '~/types'
import { ICONS_MAP } from '../constants/iconsMap'
import type { IconType } from 'react-icons/lib'

export const shuffleArray = <T>(array: T[]): T[] => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

export const isEmptyObject = (
  object: Record<string | number, unknown>
): boolean => {
  return Object.keys(object).length === 0 && object.constructor === Object
}

export const renderIcon = (icon: TilesSymbolsValue): IconType | 'no-icon' => {
  return ICONS_MAP[icon] || 'no-icon'
}

const TILE_BG_COLORS = ['#FCFCFC', '#EEF0F1', '#DFE3E5', '#D1D7DA', '#C2CACE']

export const getTileBackground = (layer: TileCoordinates['layer']): string => {
  return TILE_BG_COLORS[layer]
}
