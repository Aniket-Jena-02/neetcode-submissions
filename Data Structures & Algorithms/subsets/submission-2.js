class Solution {
    nums = []
    res = []
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        this.nums = nums
        let state = []
        this.foo(0, state)
        return this.res
    }

    foo(idx, state) {
        if(idx === this.nums.length) {
            this.res.push([...state])
            return
        }

        state.push(this.nums[idx])
        this.foo(idx + 1, state)
        state.pop()
        this.foo(idx + 1, state)
    }
}
