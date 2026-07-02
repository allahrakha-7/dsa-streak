/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if (s.length !== t.length) {

        return false;

    }

    const anagramMap = new Map(); 
    
    for (let c of s) {

        anagramMap.set(c, (anagramMap.get(c) || 0) + 1);
        
    }

    for (let c of t) {

        if (!anagramMap.get(c) || anagramMap.get(c) === 0) {

            return false;

        }
        anagramMap.set(c, anagramMap.get(c) - 1);

    }
    return true;
};