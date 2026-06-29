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
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    arr = []

    kthSmallest(root, k) {
        this.dfs(root)
        console.log(this.arr)
        return this.arr[k - 1]
    }

    dfs(root) {
        if(!root) return

        this.dfs(root.left)
        this.arr.push(root.val)
        this.dfs(root.right)
    }

}
