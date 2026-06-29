class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        s = set(nums)
        res = 0
        for i in range(len(nums)):
            n = nums[i]
            curr = 1
            while n - 1 in s:
                n -= 1
                curr += 1
            res = max(res, curr)
        
        return res