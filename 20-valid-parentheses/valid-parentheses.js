/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    // egde case
    if (s.length % 2 !== 0) return false;

    const stack = [];

    const map = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    };
    
    for (let c of s){

        if (map[c]) {

            const topElement = stack.pop();

            if (topElement !== map[c]) {

                return false;

            }

        } else {

            stack.push(c);

        }         
    }
    return stack.length === 0;
};