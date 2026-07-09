/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    
    if (nums.length % 2 !== 0) return nums;

    let checkMap = new Map();

    for (let num of nums) {

        checkMap.set(num, (checkMap.get(num) || 0) + 1);

        if (checkMap.get(num) === 2) {
            
            return num;
        
        }
    }
};