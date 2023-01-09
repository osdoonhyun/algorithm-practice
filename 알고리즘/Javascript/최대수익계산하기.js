function solution(input) {
  let maxProfit = 0;
  let minBuyPrice = input[0];

  for (let price of input) {
    if (minBuyPrice < price) {
      maxProfit = Math.max(maxProfit, price - minBuyPrice);
    } else {
      minBuyPrice = price;
    }
  }
  return maxProfit;
}

const input = [100, 200, 50, 30, 150, 250];
const input2 = [150, 80, 50, 40];
console.log(solution(input));
console.log(solution(input2));
