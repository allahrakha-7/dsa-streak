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
    ListNode* mergeInBetween(ListNode* list1, int a, int b, ListNode* list2) {
        
        ListNode* startNode = list1;
        for (int i = 0; i < a - 1; i++) {

            startNode = startNode->next;

        }
        
        ListNode* endNode = startNode;
        for (int i = 0; i < (b-(a - 1)); i++) {

            endNode = endNode->next;

        }

        ListNode* list2Tail = list2;
        while(list2Tail->next != nullptr) {

            list2Tail = list2Tail->next;

        }

        startNode->next = list2;

        list2Tail->next = endNode->next;

        return list1;
    }
};