class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        pre = 1
        pref = []
        for n in nums:
            pref.append(pre)
            pre = pre*n

        su = 1
        suf = []
        for n in nums[::-1]:
            suf.append(su)
            su = su*n
        suf = suf[::-1]
        
        for i in range(len(nums)):
            suf[i] *= pref[i]
        return suf
