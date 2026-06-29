class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []
        ops = {"+", "-", "*", "/"}

        for c in tokens:
            if c not in ops:
                stack.append(int(c))
            else:
                v1 = stack.pop()
                v2 = stack.pop()

                if c == "+":
                    stack.append(v2 + v1)
                elif c == "-":
                    stack.append(v2 - v1)
                elif c == "*":
                    stack.append(v2 * v1)
                elif c == "/":
                    stack.append(int(v2 / v1))
                
        return stack[-1]