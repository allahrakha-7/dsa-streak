/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* swapNodes(ListNode* head, int k) {
        
        ListNode* startNode = head;

        for (int i = 0; i < k - 1; i++) {

            startNode = startNode->next;

        }

        ListNode* slow = head;
        ListNode* fast = startNode;

        while (fast->next != nullptr) {

            slow = slow->next;

            fast = fast->next;

        }
        int temp = startNode->val;

        startNode->val = slow->val;

        slow->val = temp;

        return head;
    }
};