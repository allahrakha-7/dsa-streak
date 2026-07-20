/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    // edge case
    if (nums.length < 2) return 0;

    // create a indicesMap
    const indicesMap = new Map();

    // loop through the array
    for (let i = 0; i < nums.length; i++) {

        // calculate difference
        let difference = target - nums[i];

        // check for difference exists in indicesMap, if exists then return the indices pair
        if (indicesMap.has(difference)) {

            return [indicesMap.get(difference), i];

        }
        // if not then set it to the indicesMap
        indicesMap.set(nums[i], i);
    }
};