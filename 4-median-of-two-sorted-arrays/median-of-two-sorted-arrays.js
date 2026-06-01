/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
    let i = 0;
    let j = 0;

    let mergedArray = [];

    while (i < nums1.length && j < nums2.length) {

        if (nums1[i] < nums2[j]) {

            mergedArray.push(nums1[i++]); 
        
        } else {

            mergedArray.push(nums2[j++]);

        }
    }

    while (i < nums1.length) mergedArray.push(nums1[i++]);
    
    while (j < nums2.length) mergedArray.push(nums2[j++]);

    
    let n = mergedArray.length;

    if (n % 2 === 1) {

        return mergedArray[parseInt(n / 2)];

    } else {

        return (mergedArray[n / 2 - 1] + mergedArray[n / 2]) / 2.0;

    }

};