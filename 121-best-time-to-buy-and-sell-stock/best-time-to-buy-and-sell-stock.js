/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    // edge case
    if (prices.length === 1) return 0;

    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {

        if (price < minPrice) {

            minPrice = price;

        } else {

            let currentProfit = price - minPrice;

            if (currentProfit > maxProfit) {

                maxProfit = currentProfit;

            }
        }
    }
    return maxProfit;
};