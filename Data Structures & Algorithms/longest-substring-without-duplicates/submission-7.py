class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        i, j = 0, 0
        st = set()
        res = 0

        while j < len(s):
            while s[j] in st:
                st.remove(s[i])
                i += 1
            res = max(res, j - i + 1)
            
            st.add(s[j])
            j += 1
        
        return res
            