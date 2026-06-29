class Solution:
    h_map = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"],
    }
    digits = ""
    res = []

    def letterCombinations(self, digits: str) -> List[str]:
        self.digits = digits
        self.res = []

        self.foo(0, "")
        return self.res

    def foo(self, idx, state):
        if idx == len(self.digits):
            if len(state) > 0:
                self.res.append(state[:])
            return

        if self.digits[idx] in self.h_map:
            arr = self.h_map.get(self.digits[idx])

        for j in range(0, len(arr)):
            self.foo(idx + 1, state + arr[j])