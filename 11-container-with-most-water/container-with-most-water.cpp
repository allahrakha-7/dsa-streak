class Solution {
public:
    int maxArea(vector<int>& height) {
        
        int maxAreaOfWater = 0;

        int left = 0;
        int right = height.size() - 1;

        while (left < right) {

            int w = right - left;

            int h = (min(height[left], height[right]));

            maxAreaOfWater = max(maxAreaOfWater, w * h);

            if (height[left] < height[right]) {

                left++;

            } else {

                right --;

            }
        }
        return maxAreaOfWater;
    }
};