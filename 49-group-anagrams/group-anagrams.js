/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let answer = new Map();

    for (let str of strs) {

        let sortedStr = str.split('').sort().join('');

        if (!answer.has(sortedStr)) {

            answer.set(sortedStr, []);

        }
        answer.get(sortedStr).push(str);
    }
    return Array.from(answer.values());
};