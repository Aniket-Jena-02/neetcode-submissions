class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set()
        let i = 0
        let j = 0
        let res = 0

        while(j < s.length) {
            if(set.has(s[j])) {
                while(set.has(s[j])) {
                    set.delete(s[i])
                    i++
                }
            }

            res = Math.max(res, j - i + 1)
            
            set.add(s[j])
            j++
        }

        return res
    }
}
