/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {

    let left = 0;
    
    let right = nums.length - 1;

    while (left < right) {

        let mid = Math.floor(left + (right - left) / 2);

        let count = 0;

        for (let num of nums) {

            if (num <= mid) {

                count = count + 1;

            }
        }
        if (count > mid) {
            
            right = mid;
        
        } else {
            
            left = mid + 1;

        }
    }
    return left;
};