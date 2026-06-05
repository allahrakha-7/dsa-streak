/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    if (prices.length < 2) {

        return 0;

    }
    let buyTime = 0;
    let sellTime = 1;

    let maxProfit = 0;

    while (buyTime < sellTime && sellTime < prices.length) {

        if (prices[sellTime] > prices[buyTime]) {

            let currentProfit = prices[sellTime] - prices[buyTime];

            maxProfit = Math.max(maxProfit, currentProfit);

        } else {

            buyTime = sellTime;

        }
        sellTime++;
    }
    return maxProfit;
};