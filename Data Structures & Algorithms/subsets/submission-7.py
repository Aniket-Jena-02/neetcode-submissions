class Solution:
    nums = []
    res = []

    def subsets(self, nums):
        self.nums = nums
        self.res = []
        self.foo(0, [])
        return self.res

    def foo(self, idx, state):
        if idx == len(self.nums):
            self.res.append(state.copy())
            return
        
        state.append(self.nums[idx])
        self.foo(idx + 1, state)
        _ = state.pop()

        self.foo(idx + 1, state)

        