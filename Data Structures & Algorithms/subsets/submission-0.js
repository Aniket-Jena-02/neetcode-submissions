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
        this.backtrack(0, state)

        return this.res
    }

    backtrack(index, state) {
        if(index === this.nums.length) {
            this.res.push([...state])
            return
        }

        state.push(this.nums[index])
        this.backtrack(index + 1, state)
        state.pop()
        this.backtrack(index + 1, state)
    }
}