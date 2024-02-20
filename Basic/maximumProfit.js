let input1 = [100, 200, 50, 30, 150, 250];
let input2 = [150, 80, 40, 20];

function getMaximumProfit(profits) {
  let maximumProfit = 0;
  let minimumProfit = profits[0];

  for (const profit of profits) {
    if (profit > minimumProfit) {
      maximumProfit = Math.max(maximumProfit, profit - minimumProfit);
    } else {
      minimumProfit = profit;
    }
  }
  return maximumProfit;
}

console.log(getMaximumProfit(input1));
console.log(getMaximumProfit(input2));
