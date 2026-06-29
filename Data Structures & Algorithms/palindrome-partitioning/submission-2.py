class Solution:
    s = ""
    res = []

    def partition(self, s: str) -> List[List[str]]:
        self.res = []
        self.s = s
        self.foo(0, [])
        return self.res

    def foo(self, idx, state):
        if idx == len(self.s):
            self.res.append(state[:])
            return
        
        for i in range(idx, len(self.s)):
            if(self.is_pal(idx, i)):
                print(self.s[idx:i+1])
                state.append(self.s[idx:i+1])
                self.foo(i + 1, state)
                state.pop()
        
    
    def is_pal(self, i, j):
        while i < j:
            if self.s[i] != self.s[j]:
                return False
            i += 1
            j -= 1
            
        return True