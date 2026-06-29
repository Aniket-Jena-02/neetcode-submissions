class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0, j = s.length - 1
        
        while(i < j) {
            while(i < j && !/[a-z0-9]/.test(s[i].toLowerCase())) {
                i++
            }
            
            while(i < j && !/[a-z0-9]/.test(s[j].toLowerCase())) {
                j--
            }


            let lower_a = s[i].toLowerCase()
            let lower_b = s[j].toLowerCase()


            console.log({lower_a, lower_b})
            if(lower_a !== lower_b) return false
            i++
            j--
        }

        return true
    }
}
