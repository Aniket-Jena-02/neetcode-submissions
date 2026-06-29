class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        n = len(nums)
        arr = [False]*(n)

        for i in range(n):
            if 1 <= nums[i] <= n:
                arr[nums[i] - 1] = True
        
        for i in range(n):
            if not arr[i]:
                return i + 1
        return n + 1
         