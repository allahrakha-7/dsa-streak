/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    // edge case
    if (s.length <= 1) return s;
    
    let startIndex = 0;
    let maxLength = 1;
    
    function expandAroundCenter (left, right) {

        while (left >= 0 && right < s.length && s[left] === s[right]) {

            const currentLength = right - left + 1;

            if (currentLength > maxLength) {

                maxLength = currentLength;

                startIndex = left;

            }

            left--;
            right++;
        
        }
    }
    for (let i = 0; i < s.length; i++) {
        
        expandAroundCenter(i, i);
        expandAroundCenter(i, i + 1);
        
    }
    return s.substring(startIndex, startIndex + maxLength);
};