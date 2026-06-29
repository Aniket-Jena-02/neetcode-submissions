class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let i = 0
        let j = 0
        let hm = new Map()
        let res = 0

        while(j < s.length) {
            if(hm.has(s[j])) {
                hm.set(s[j], hm.get(s[j]) + 1)
            } else {
                hm.set(s[j], 1)
            }

            let maxFreq = 0;
            for(let count of hm.values()) {
                maxFreq = Math.max(maxFreq, count);
            }

            let windowLen = j - i + 1
            while(windowLen - maxFreq > k) {
                hm.set(s[i], hm.get(s[i]) - 1)
                i++
                windowLen = j - i + 1
            }
            
            res = Math.max(res, windowLen) 
            j++
        }

        return res
    }
}
