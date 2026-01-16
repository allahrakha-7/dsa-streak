class Solution {
public:
    vector<int> grayCode(int n) {
        
        vector<int> result = {0};

        for (int i = 0; i < n; i++) {

            int currentSize = result.size();

            for (int j = currentSize - 1; j >= 0; j--) {

                int value = result[j];

                int newValue = value | (1 << i);

                result.push_back(newValue);

            }
        }
        return result;
    }
};