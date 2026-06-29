class Solution {
    res = []
    digits = ""

    hm = {
        "2" : ['a', 'b', 'c'],
        "3" : ['d', 'e', 'f'],
        "4" : ['g', 'h', 'i'],
        "5" : ['j', 'k', 'l'],
        "6" : ['m', 'n', 'o'],
        "7" : ['q', 'p', 'r', 's'],
        "8" : ['t', 'u', 'v'],
        "9" : ['w', 'x', 'y', 'z'],
    }
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        this.res = []
        this.digits = digits

        this.foo(0, "")
        return this.res
    }

    /**
     * @param {number} idx
     * @param {string} state
     */
    foo(idx, state) {
        if(idx === this.digits.length) {
            if(state.length > 0) {
                this.res.push([state])
            }
            return
        }

        let arr = this.hm[this.digits[idx]]
        for(let j = 0; j < arr.length; j++) {                
            this.foo(idx + 1, state + arr[j])
        }
    }
}
