class Solution:
    res = []
    target = -1
    nums = []

    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        self.res = []
        self.target = target
        self.nums = candidates
        self.nums.sort()
        
        self.foo(0, 0, [])

        return self.res

    def foo(self, idx, sum, state):
        if sum == self.target:
            self.res.append(state[:])
            return
        
        for i in range(idx, len(self.nums)):
            if i > idx and self.nums[i - 1] == self.nums[i]:
                continue
            if sum < self.target:
                n = self.nums[i]
                state.append(n)
                self.foo(i + 1, sum + n, state)
                _ = state.pop()
            
            