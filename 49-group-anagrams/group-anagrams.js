/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    // create a hash map
    const strsMap = new Map();

    // loop through the every string in the strs array
    for (let str of strs) {

        // split the string, sort it and then join it back
        let sortedKey = str.split('').sort().join('');

        // check for this sortedKey if not exists in map
        if (!strsMap.has(sortedKey)) {

            // add it to the map
            strsMap.set(sortedKey, []);

        }
        // push the original str to its matching group
        strsMap.get(sortedKey).push(str);
    }
    return Array.from(strsMap.values());
};