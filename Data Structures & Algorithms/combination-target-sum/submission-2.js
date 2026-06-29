class Solution {
    nums = []
    res = []
    target = -1
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        this.nums = nums
        this.target = target

        let state = []
        this.foo(0, state)

        return this.res
    }

    foo(sum, state) {
        if(sum === this.target) {
            this.res.push([...state])
            return
        }

        for(let i = 0; i < this.nums.length; i++) {
            let n = this.nums[i]
            console.log()
            state.push(n)
            this.foo(sum + n, state)
            state.pop()
            this.foo(sum, state)
        }
    }
}
