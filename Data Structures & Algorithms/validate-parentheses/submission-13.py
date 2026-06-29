class Solution:
    def isValid(self, s: str) -> bool:
        mp = {
            "}": "{",
            ")": "(",
            "]": "["
        }

        st = []

        for c in s:
            if st and c in mp and mp[c] == st[-1]:
                st.pop()
            else:
                st.append(c)
        
        return len(st) == 0
