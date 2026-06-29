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
    kTarget = null
    counter = 0
    result = null

    kthSmallest(root, k) {
        this.kTarget = k
        this.dfs(root)
        return this.result
    }

    dfs(root) {
        if(!root || this.result) return

        this.dfs(root.left)
        if(this.result) return
        this.counter++
        if(this.counter == this.kTarget) {
            this.result = root.val
            return
        }
        this.dfs(root.right)
    }

}
