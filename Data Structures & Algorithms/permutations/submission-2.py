class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        self.res = []
        self.nums = nums
        bstate = [False] * len(self.nums)
        self.foo(0, [], bstate)
        return self.res

    def foo(self, idx, state, bstate):
        if(idx == len(self.nums)):
            self.res.append(state[:])
            return
        
        for i in range(0, len(self.nums)):
            if not bstate[i]:
                bstate[i] = True
                state.append(self.nums[i])
                self.foo(idx + 1, state, bstate)
                state.pop()
                bstate[i] = False