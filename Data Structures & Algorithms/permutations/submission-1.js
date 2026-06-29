class Solution {
    res = []
    nums = []
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        this.nums = nums
        let bstate = new Array(this.nums.length).fill(false)
        this.foo(0, [], bstate)
        return this.res
    }

    foo(idx, state, bstate) {
        if(idx === this.nums.length) {
            this.res.push([...state])
            return
        }

        for(let i = 0; i < this.nums.length; i++) {
            let n = this.nums[i]

            if(!bstate[i]) {
                state.push(n)
                bstate[i] = true
                this.foo(idx + 1, state, bstate)
                state.pop()
                bstate[i] = false
            }
        }
    }
}
