import { getUnblocks } from '../board'

describe('getUnblocks function:', () => {
  it('should be defined:', () => {
    expect(getUnblocks).toBeDefined()
  })

  it('should return expected values:', () => {
    expect(getUnblocks(0, 0, 1, [1, 7])).toEqual([{ layer: 0, row: 0, col: 2 }])

    expect(getUnblocks(0, 2, 4, [1, 4])).toEqual([{ layer: 0, row: 2, col: 3 }])

    expect(getUnblocks(5, 6, 2, [0, 7])).toEqual([
      { layer: 5, row: 6, col: 1 },
      { layer: 5, row: 6, col: 3 },
    ])
  })
})
