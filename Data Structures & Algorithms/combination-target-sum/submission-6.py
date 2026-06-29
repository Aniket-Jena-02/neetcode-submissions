class Solution:
    res = []
    nums = []
    target = -1

    def combinationSum(self, nums: List[int], target: int) -> List[List[int]]:
        self.nums = nums
        self.target = target
        self.res = []
        self.foo(0, 0, [])
        return self.res
        
    def foo(self, idx, sum, state):
        if sum == self.target:
            self.res.append(state[:])
            return
        
        for i in range(idx, len(self.nums)):
            if sum < self.target:
                n = self.nums[i]
                state.append(n)
                self.foo(i, sum + n, state)
                _ = state.pop()
