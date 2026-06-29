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
    good = 0
    
    goodNodes(root) {
        this.foo(root, root.val)
        return this.good
    }

    foo(root, max) {
        if(!root) return
        if(root.val >= max) {
            console.log(max)
            max = root.val
            this.good++
        }
        this.foo(root.left, max)
        this.foo(root.right, max)
    }
}
