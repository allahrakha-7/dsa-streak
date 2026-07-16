/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    const countMap = new Map();

    for (let num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    const buckets = Array.from({ length: nums.length + 1 }, () => []);

    for (let [num, freq] of countMap.entries()) {
        buckets[freq].push(num);
    }

    const result = [];
    for (let i = buckets.length - 1; i >= 0; i--) {
        if (buckets[i].length > 0) {
            result.push(...buckets[i]);

            if (result.length === k) {
                return result;
            }
        }
    }
};