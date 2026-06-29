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
    ListNode* removeNthFromEnd(ListNode* head, int n) {
            ListNode *dummy = head;
    int listSize = 0;

    while (dummy != nullptr) {
      dummy = dummy->next;
      listSize++;
    }

    dummy = head;
    int currentIndex = 0;

    if (listSize - n == 0) {
      return head->next;
    }

    while (listSize - n > 0 && dummy != nullptr) {
      if (currentIndex == listSize - n - 1) {
        dummy->next = dummy->next->next;
      }
      dummy = dummy->next;
      currentIndex++;
    }

    return head;

    }
};
