/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    getHeight(node) {
        if(node === null) return 0
        return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right))
    }

    isBalanced(root) {
        if(root === null) return true

        if(Math.abs(this.getHeight(root.left) - this.getHeight(root.right)) > 1) {
            return false
        }
        
        return this.isBalanced(root.left) && this.isBalanced(root.right)        
    }
}
