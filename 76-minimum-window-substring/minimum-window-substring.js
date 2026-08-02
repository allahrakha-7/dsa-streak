/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {

    // edge case
    if (t.length > s.length) return "";

    const targetMap = {};

    for (let c of t) {

        targetMap[c] = (targetMap[c] || 0) + 1;

    }
    let need = Object.keys(targetMap).length;
    let have = 0;

    let left = 0;
    const windowMap = {};

    let result = [-1, -1];
    let minLength = Infinity;

    for (let right = 0; right < s.length; right++) {

        let c = s[right];

        windowMap[c] = (windowMap[c] || 0) + 1;

        if (targetMap[c] && windowMap[c]  === targetMap[c]) {

            have++;

        }
        while (have === need) {

            let currentLength = right - left + 1;
            if (currentLength < minLength) {

                minLength = currentLength;
                result = [left, right];
                
            }
            let leftChar = s[left];
            windowMap[leftChar]--;

            if (targetMap[leftChar] && windowMap[leftChar] < targetMap[leftChar]) {

                have--;

            }
            left++;
        }
    }
    return minLength !== Infinity ? s.slice(result[0], result[1] + 1) : "";
};