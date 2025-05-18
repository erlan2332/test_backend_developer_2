function countWellFormedParenthesis(nCouples) {
    const dp = new Array(nCouples + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= nCouples; i++) {
      for (let j = 0; j < i; j++) {
        dp[i] += dp[j] * dp[i - 1 - j];
      }
    }
    return dp[nCouples];
  }
  
  function main() {
    for (let n = 1; n <= 15; n++) {
      console.log(`n = ${n}: ${countWellFormedParenthesis(n)}`);
    }
  }
  
  if (require.main === module) {
    main();
  }
  
  module.exports = { countWellFormedParenthesis };
  