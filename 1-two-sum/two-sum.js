/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let indicesMap = new Map();

    for (let i = 0; i < nums.length; i++) {

        let difference = target - nums[i];

        if (indicesMap.has(difference)) {

            return [indicesMap.get(difference), i];
        
        }
        indicesMap.set(nums[i], i);
    }
    return [];

    // *** Brute Force ***
    
    // let indices = [];

    // for (let i = 0; i < nums.length; i++) {

    //     for (let j = i + 1; j < nums.length; j++) {

    //         if (nums[i] + nums[j] === target) {

    //             indices.push(i, j)

    //         }
    //     }
    // }
    // return indices;
};