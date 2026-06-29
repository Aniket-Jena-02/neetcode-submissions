class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2 !== 0) return false
        let stack = []
        const map = {
            "}":"{",
            "]":"[",
            ")":"("
        }
        for(const c of s) {
            if(c === "{" || c === "(" ||c === "["){
                stack.push(c)
            } else {
                if(stack.length === 0) {
                    return false
                }
                if(stack[stack.length - 1] === map[c]) {
                    stack.pop()
                } else {
                    return false
                }
            }
        }

        return stack.length === 0
    }
}
