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
private:
  static ListNode *reverseList(ListNode *head) {
    ListNode *prev = nullptr;
    ListNode *curr = head;
    while (curr != nullptr) {
      ListNode *nxt = curr->next;
      curr->next = prev;
      prev = curr;
      curr = nxt;
    }
    return prev;
  }

public:
      static void reorderList(ListNode *head) {
    ListNode *slow = head;
    ListNode *fast = head->next;

    while (fast != nullptr && fast->next != nullptr) {
      slow = slow->next;
      fast = fast->next->next;
    }

    ListNode *second = reverseList(slow->next);
    slow->next = nullptr;
    ListNode *first = head;

    ListNode dummy(0);
    ListNode *dummyHead = &dummy;
    int flag = 0;

    while (first != nullptr && second != nullptr) {
      if (flag % 2 == 0) {
        dummyHead->next = first;
        first = first->next;
      } else {
        dummyHead->next = second;
        second = second->next;
      }
      dummyHead = dummyHead->next;
      flag++;
    }
    if (first != nullptr) {
      dummyHead->next = first;
    }
    if (second != nullptr) {
      dummyHead->next = second;
    }
  }

};
