const { countWellFormedParenthesis } = require('../src/main');

const catalan = [
  1,       // n = 0
  1, 2, 5, 14, 42, 132, 429, 1430,
  4862, 16796, 58786, 208012, 742900,
  2674440, 9694845            // n = 15
];

describe('countWellFormedParenthesis()', () => {
  for (let n = 0; n <= 15; n++) {
    it(`returns C_${n} = ${catalan[n]}`, () => {
      expect(countWellFormedParenthesis(n)).toBe(catalan[n]);
    });
  }
});
