/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* next;
    Node* random;
    
    Node(int _val) {
        val = _val;
        next = NULL;
        random = NULL;
    }
};
*/

class Solution {
public:
    Node* copyRandomList(Node* head) {
            Node dummy(0);
    Node *dummyHead = &dummy;
    Node *currHead = head;
    std::unordered_map<Node *, Node *> h_map;

    while (currHead != NULL) {
      Node *newNode = new Node(currHead->val);
      dummyHead->next = newNode;

      h_map[currHead] = newNode;

      currHead = currHead->next;
      dummyHead = dummyHead->next;
    }

    dummyHead = &dummy;
    dummyHead = dummyHead->next;
    currHead = head;

    while (currHead != NULL) {
      if (currHead->random != NULL) {
        dummyHead->random = h_map[currHead->random];
      }
      currHead = currHead->next;
      dummyHead = dummyHead->next;
    }

    return dummy.next;

    }
};
