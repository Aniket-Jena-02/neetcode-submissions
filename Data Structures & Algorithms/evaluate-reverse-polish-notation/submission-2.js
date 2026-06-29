class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
        let ops = new Set(["+", "-", "*", "/"])

        for(const e of tokens) {
            if(!ops.has(e)) {
                stack.push(+e)
            } else {
                let op1 = stack.pop(), op2 = stack.pop()
                if(e === "+") {
                    stack.push(op2 + op1)
                } else if(e === "-") {
                    stack.push(op2 - op1)
                } else if(e === "*") {
                    stack.push(op2 * op1)
                } else if(e === "/") {
                    stack.push(Math.trunc(op2 / op1))
                }
            }
        }

        return Math.trunc(stack[0])
    }
}
