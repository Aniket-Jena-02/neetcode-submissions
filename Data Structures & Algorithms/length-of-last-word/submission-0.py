class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        n = len(s)
        res = 0
        for i in range(n-1, -1, -1):

            if s[i] != " ":
                res += 1
            if i > 0 and s[i] != " " and s[i-1] == " ":
                break
        return res
            