class Solution {
public:

    unordered_map<string, vector<int>> memo;

    vector<int> diffWaysToCompute(string expression) {
        
        if (memo.find(expression) != memo.end()) {

            return memo[expression];

        }

        vector<int> results;

        int n = expression.length();

        for (int i = 0; i < n; i++) {

            char c = expression[i];

            if (c == '+' || c == '-' || c == '*') {
                
                string leftPart = expression.substr(0, i);
                string rightPart = expression.substr(i + 1);

                vector<int> leftResults = diffWaysToCompute(leftPart);
                vector<int> rightResults = diffWaysToCompute(rightPart);

                for (int x : leftResults) {
                    
                    for (int y : rightResults) {
                    
                        if (c == '+') results.push_back(x + y);
                    
                        else if (c == '-') results.push_back(x - y);
                    
                        else if (c == '*') results.push_back(x * y);
                    
                    }
                }
            }
        }

        if (results.empty()) {

            results.push_back(stoi(expression));
        
        }

        return memo[expression] = results;
    }
};