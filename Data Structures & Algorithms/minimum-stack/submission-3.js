class MinStack {
    constructor() {}

    stack = []
    min = []

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        let minVal = Math.min(this.min[this.min.length - 1] ?? 999999999999999999999, val)
        this.min.push(minVal)
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
        this.min.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min[this.stack.length - 1]
    }
}
