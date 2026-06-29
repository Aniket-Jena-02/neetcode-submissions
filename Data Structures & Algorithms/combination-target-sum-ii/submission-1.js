class Solution {
    candidates = []
    target = -1
    res = []
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        this.candidates = candidates
        this.target = target

        this.candidates.sort((a, b) => a - b)

        this.foo(0, 0, [])
        return this.res
    }

    foo(idx, sum, state) {
        if(sum === this.target) {
            this.res.push([...state])
            return
        }

        for(let i = idx; i < this.candidates.length; i++) {
            if(i > idx && this.candidates[i] === this.candidates[i-1]) continue
            if(sum <= this.target) {
                state.push(this.candidates[i])
                this.foo(i + 1, sum + this.candidates[i], state)
                state.pop()
            }
        }
    } 
}
