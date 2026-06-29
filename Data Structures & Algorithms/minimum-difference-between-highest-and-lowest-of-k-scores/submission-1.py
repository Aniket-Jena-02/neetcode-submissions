class Solution:
    def minimumDifference(self, nums: List[int], k: int) -> int:
        if k == 1:
            return 0
        nums.sort()
        res = math.inf
        for i in range(0, len(nums) - k + 1):
            diff = nums[i + k - 1] - nums[i]
            res = min(res, diff)
                
        return int(res)