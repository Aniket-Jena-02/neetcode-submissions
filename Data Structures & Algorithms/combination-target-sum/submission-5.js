class Solution {
    nums = []
    res = []
    target
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        this.nums = nums
        this.target = target

        this.foo(0, 0, [])

        return this.res
    }

    foo(sum, idx, state) {
        if(sum === this.target) {
            this.res.push([...state])
            return
        }

        for(let i = idx; i < this.nums.length; i++) {
            let n = this.nums[i]
            if(sum <= this.target) {
                state.push(n)
                this.foo(sum + n, i, state)
                state.pop()
            }
        }
    }
}
