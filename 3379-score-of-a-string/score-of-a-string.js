/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {

    let strScore = 0;

    for (let i = 0; i < s.length - 1; i++) {

        strScore += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));

    }
    return strScore;
};