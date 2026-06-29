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
    currentIndex = 0
    hm = new Map()
    /**
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        inorder.map((v, i) => {
            this.hm.set(v, i)
        })

        const node = this.dfs(preorder, 0, preorder.length - 1)
        return node
    }

    dfs(pre, l, r) {
        if(l > r) return null
        const rootValue = pre[this.currentIndex]
        this.currentIndex++

        let node = new TreeNode(rootValue)
        const k = this.hm.get(rootValue)

        node.left = this.dfs(pre, l, k - 1)
        node.right = this.dfs(pre, k + 1, r)

        return node
    }
}
