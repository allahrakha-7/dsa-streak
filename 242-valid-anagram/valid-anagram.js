/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    // edge case
    if (s.length !== t.length) return false;

    // create a new hash map
    const charCount = new Map();

    // loop through the string s
    for (let c of s) {

        charCount.set(c, (charCount.get(c) || 0) + 1);

    }
    // loop through the string t and check
    for (let c of t) {

        // check if the character does not exists or dropped to 0     
        if (!charCount.get(c)) {

            return false;

        } else {

            // else subtract it from the map
            charCount.set(c, charCount.get(c) - 1);

        }
    }
    return true;
};