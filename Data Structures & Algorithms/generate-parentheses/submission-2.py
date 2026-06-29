class Solution:
    res = []
    n = -1

    def generateParenthesis(self, n: int) -> List[str]:
        self.n = n
        self.res = []
        self.foo(0, 0, "")
        return self.res

    def foo(self, open, closed, state):
        if open == self.n and closed == open:
            self.res.append(state[:])
            return
        
        if open < self.n:
            self.foo(open + 1, closed, state + "(")
        
        if closed < open:
            self.foo(open, closed + 1, state + ")")

