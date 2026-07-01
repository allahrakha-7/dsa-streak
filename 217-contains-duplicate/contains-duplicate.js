/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    let seen = new Set();

    for (let num of nums) {

        if (seen.has(num)) {

            return true;

        } else {

            seen.add(num);

        }
    }
    return false;

    // let seen = new Set(nums);

    // if (seen.size !== nums.length) {

    //     return true;

    // }
    // return false;
};