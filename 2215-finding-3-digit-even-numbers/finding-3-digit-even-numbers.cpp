class Solution {
public:
    vector<int> findEvenNumbers(vector<int>& digits) {
        
        vector<int> totalCount(10, 0);

        for (int digit : digits) {

            totalCount[digit]++;

        }
        vector<int> result;
        
        for (int i = 100; i < 1000; i += 2) {

            int num = i;

            vector<int> currentNumCount(10, 0);

            int temp = num;

            while (temp > 0) {

                int digit = temp % 10;

                currentNumCount[digit]++;

                temp /= 10;

            }
            bool possible = true;

            for (int j = 0; j < 10; j++) {

                if (currentNumCount[j] > totalCount[j]) {

                    possible = false;

                    break;

                }
            }
            if (possible) {

                result.push_back(i);

            }
        }
        return result;
    }
};