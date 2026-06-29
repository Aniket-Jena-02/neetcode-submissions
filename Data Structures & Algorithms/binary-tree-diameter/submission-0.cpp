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
    int diameterOfBinaryTree(TreeNode *root) {
  int diameter = 0;
  function<int(TreeNode*)> depthAndDiameter = [&](TreeNode* node) -> int {
    if (node == nullptr) {
      return 0;
    }

    int leftDepth = depthAndDiameter(node->left);
    int rightDepth = depthAndDiameter(node->right);

    diameter = max(diameter, leftDepth + rightDepth);

    return 1 + max(leftDepth, rightDepth);
  };

  depthAndDiameter(root);
  return diameter;
}
};
