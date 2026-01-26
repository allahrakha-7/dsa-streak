class Solution {
public:
    string originalDigits(string s) {
        
        vector<int> charCount(26, 0);

        for (char c : s) {

            charCount[c - 'a']++;

        }

        vector<int> digits(10, 0);

        digits[0] = charCount['z' - 'a'];
        digits[2] = charCount['w' - 'a'];
        digits[4] = charCount['u' - 'a'];
        digits[6] = charCount['x' - 'a'];
        digits[8] = charCount['g' - 'a'];

        digits[1] = charCount['o' - 'a'] - digits[0] - digits[2] - digits[4];
        digits[3] = charCount['h' - 'a'] - digits[8];
        digits[5] = charCount['f' - 'a'] - digits[4];
        digits[7] = charCount['s' - 'a'] - digits[6];
        digits[9] = charCount['i' - 'a'] - digits[5] - digits[6] - digits[8];

        string result = "";

        for (int i = 0; i <= 9; i++) {

            while (digits[i] > 0) {

                result += to_string(i);

                digits[i]--;

            }
        }
        return result;
    }
};