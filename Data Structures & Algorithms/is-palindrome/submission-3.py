class Solution:
    def isPalindrome(self, s: str) -> bool:
        sr = ""
        for c in s:
            if c.isalnum():
                sr += c.lower()
        return sr == sr[::-1]

        