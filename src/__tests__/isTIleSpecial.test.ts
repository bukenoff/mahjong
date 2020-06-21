import { isTileSpecial } from '../logic/createBoard';

describe('isTileSpecial function:', () => {
  it ('should be defined:', () => {
    expect(isTileSpecial).toBeDefined();
  });

  it ('should return false:', () => {
    expect(isTileSpecial(0, 0, 0)).toBe(false);
    expect(isTileSpecial(5, 1, 4)).toBe(false);
    expect(isTileSpecial(3, 2, 3)).toBe(false);
  });

  it ('should return true:', () => {
    expect(isTileSpecial(0, 3, 0)).toBe(true);
    expect(isTileSpecial(0, 3, 13)).toBe(true);
    expect(isTileSpecial(4, 3, 6)).toBe(true);
  });
});
