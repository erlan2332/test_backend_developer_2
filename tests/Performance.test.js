


const { countWellFormedParenthesis } = require('../src/main');

it('computes n = 15 faster than 50 ms', () => {
  const t0 = performance.now();
  countWellFormedParenthesis(15);
  const elapsed = performance.now() - t0;
  expect(elapsed).toBeLessThan(50);
});
