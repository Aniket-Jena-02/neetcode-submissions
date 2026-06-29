class Solution {
    n = -1
    res = 0
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        this.n = n
        this.foo(0, 0, [])

        return this.res
    }

    foo(idx, sum) {
        if(sum === this.n) {
            this.res++
            return
        }

        idx = 1
        if(sum + idx <= this.n) {
            this.foo(idx, sum + idx)
        }

        idx = 2
        if(sum + idx <= this.n) {
            this.foo(idx, sum + idx)
        }
    }
}
