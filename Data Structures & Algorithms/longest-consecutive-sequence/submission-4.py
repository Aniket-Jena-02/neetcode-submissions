class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        s = set(nums)
        res = 0
        for i in range(len(nums)):
            n = nums[i]
            if n - 1 not in s:
                length = 1
                while (n + length) in s:
                    length += 1
                res = max(res, length)
        return res