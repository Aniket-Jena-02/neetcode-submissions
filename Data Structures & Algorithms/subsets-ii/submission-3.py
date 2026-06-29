class Solution:
    res = []
    nums = []
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        self.res = []
        self.nums = nums
        self.nums.sort()
        self.foo(0, [])
        return self.res
    
    def foo(self, idx, state):
        if idx == len(self.nums):
            self.res.append(state[:])
            return

        state.append(self.nums[idx])
        self.foo(idx + 1, state)
        while idx + 1 < len(self.nums) and self.nums[idx] == self.nums[idx + 1]:
            idx += 1
        state.pop()
        self.foo(idx + 1, state)