class Solution:
    def minimumDifference(self, nums: List[int], k: int) -> int:
        nums = sorted(nums)
        res = math.inf
        for i in range(0, len(nums)):
            if i + k - 1 < len(nums):
                diff = nums[i + k - 1] - nums[i]
                res = min(res, diff)
                
        return int(res)