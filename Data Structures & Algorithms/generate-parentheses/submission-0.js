class Solution {
    backtrack(currentString, openCount, closeCount, n, result) {
        if(openCount === n && closeCount === n) {
            result.push(currentString)
            return
        }

        if(openCount < n) {
            this.backtrack(currentString + "(", openCount + 1, closeCount, n, result)
        }
        if(closeCount < openCount) {
            this.backtrack(currentString + ")", openCount, closeCount + 1, n, result)
        }
    }

    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let result = []
        this.backtrack("", 0, 0, n, result)
        return result
    }
}
