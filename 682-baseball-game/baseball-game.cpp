class Solution {
public:
    int calPoints(vector<string>& operations) {
        
        vector<int> record;

        for (string operation : operations) {

            if (operation == "C") {

                record.pop_back();

            } else if (operation == "D") {

                int lastScore = record.back();

                record.push_back(lastScore * 2);

            } else if (operation == "+") {

                int n = record.size();

                int newScore = record[n - 1] + record[n - 2];

                record.push_back(newScore);

            } else {

                record.push_back(stoi(operation));

            }
        }
        int sum = 0;

        for (int score : record) {

            sum += score;

        }
        return sum;
    }
};