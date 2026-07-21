/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    // create a has map
    const countMap = new Map();

    // loop through the array
    for (let num of nums) {

        countMap.set(num, (countMap.get(num) || 0) + 1);

    }

    // create an array called buckets & length should be length + 1
    const buckets = Array.from({ length: nums.length + 1 }, () => []);

    // loop through the buckets array
    for (let [num, freq] of countMap.entries()) {

        // push the number with frequency into bucket
        buckets[freq].push(num);

    }

    // create a empty array result
    let result = [];

    // loop through the buckets array
    for (let i = buckets.length - 1; i >= 0; i--) {

        // find number in bucket, if found then dump it into the result array
        if (buckets[i].length > 0) {

            result.push(...buckets[i]);

        }

        // stop if we hit the length of k
        if (result.length === k) {

            return result;

        }
    }
};