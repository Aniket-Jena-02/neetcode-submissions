class Solution {
    s = ""
    res = []
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        this.s = s
        
        this.foo(0, [])
        return this.res
    }

    foo(idx, state) {
        if(idx === this.s.length) {
            this.res.push([...state])
            return
        }

        for(let i = idx; i < this.s.length; i++) {
            if(this.isPal(idx, i)) {
                state.push(this.s.slice(idx, i + 1))
                this.foo(i + 1, state)
                state.pop()
            }
        }
    }

    isPal(i, j) {
        while(i <= j) {
            if(this.s[i] !== this.s[j]) return false

            i++
            j--
        }

        return true
    }
}
