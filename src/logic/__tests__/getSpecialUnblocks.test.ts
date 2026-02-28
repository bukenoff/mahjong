import { getSpecialUnblocks } from '../board'
import { SPECIAL_TILES_UNBLOCKS } from '../../constants/tiles'

describe('getSpecialUnblocks function:', () => {
  it('should be defined:', () => {
    expect(getSpecialUnblocks).toBeDefined()
  })

  it('should return null:', () => {
    expect(getSpecialUnblocks(3, 4, 1)).toEqual(null)

    expect(getSpecialUnblocks(1, 2, 8)).toEqual(null)
  })

  it('should return provided values:', () => {
    expect(getSpecialUnblocks(0, 3, 0)).toEqual(SPECIAL_TILES_UNBLOCKS[0][3][0])

    expect(getSpecialUnblocks(0, 3, 13)).toEqual(
      SPECIAL_TILES_UNBLOCKS[0][3][13]
    )

    expect(getSpecialUnblocks(4, 3, 6)).toEqual(SPECIAL_TILES_UNBLOCKS[4][3][6])
  })
})
