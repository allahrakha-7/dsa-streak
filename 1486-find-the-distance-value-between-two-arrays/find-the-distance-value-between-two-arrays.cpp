class Solution {
public:
    int findTheDistanceValue(vector<int>& arr1, vector<int>& arr2, int d) {
        
        sort(arr2.begin(), arr2.end());

        int count = 0;

        for (int val : arr1) {

            int lower = val - d;
            int higher = val + d;

            auto it = lower_bound(arr2.begin(), arr2.end(), lower);

            bool unCount = false;

            if (it != arr2.end() && *it <= higher) {

                unCount = true;

            }
            if (!unCount) {

                count++;
                
            }
        }
        return count;
    }
};