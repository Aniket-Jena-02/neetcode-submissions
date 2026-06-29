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
        const left = this.getHeight(node.left)
        const right = this.getHeight(node.right)
        const bFactor = Math.abs(left - right)

        if(bFactor > 1 || left === -1 || right === -1) return -1
        return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right))
    }

    isBalanced(root) {
        
        return this.getHeight(root) !== -1        
    }
}
