/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    // sort the array
    nums.sort((a, b) => a - b);

    // create an array result
    const result = [];

    // loop through the array
    for (let i = 0; i < nums.length - 2; i++) {

        // check if the current number is greater than 0 then break 
        if (nums[i] > 0) break;

        // check if the i greater than 0 && the current num is equal to the prev num then continue
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // initialize two pointers 
        let left = i + 1;
        let right = nums.length - 1;

        // loop through the pointers
        while (left < right) {
            
            // calculate sum of current number and left and right pointers
            const sum = nums[i] + nums[left] + nums[right];

            // check if sum is equal to 0
            if (sum === 0) {

                // push the current number and left and right pointers in the result array
                result.push([nums[i], nums[left], nums[right]]);

                // increment the left pointer
                left++;
                // decrement the right pointer
                right--;

                // while loop through the pointers && check for left pointer num is equal to previous left pointer num
                while (left < right && nums[left] === nums[left - 1]) {

                    // increment left pointer
                    left++;

                }

            // else if sum less than 0
            } else if (sum < 0) {

                // increment left pointer
                left++;

            } else {

                // else decrement the right pointer
                right--;

            }
        }
    }
    // return result array at last
    return result;
};