class Solution {
    nums = []
    res = []
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        this.nums = nums
        this.nums.sort((a, b) => a - b)
        this.foo(0, [])
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
        while(idx < this.nums.length && this.nums[idx + 1] === this.nums[idx]) idx++
        this.foo(idx + 1, state)
    }


}
