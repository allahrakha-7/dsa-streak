/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int countNodes(TreeNode* root) {
        
        // base case
        if (root == nullptr) return 0;
        
        int leftHeight = 0;

        TreeNode* l = root;
        
        while(l) {

            leftHeight++;

            l = l->left;
        }
        
        int rightHeight = 0;

        TreeNode* r = root;

        while(r) {

            rightHeight++;

            r = r->right;
        }
        
        if (leftHeight == rightHeight) {

            return (1 << leftHeight) - 1;

        }
        
        return 1 + countNodes(root->left) + countNodes(root->right);
    }
};