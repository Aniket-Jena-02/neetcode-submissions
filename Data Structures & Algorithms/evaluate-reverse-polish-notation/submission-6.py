class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []
        ops = {"+", "-", "*", "/"}

        for t in tokens:
            if t in ops:
                o1 = stack.pop()
                o2 = stack.pop()
                if t == "+":
                    stack.append(o2 + o1)
                elif t == "-":
                    stack.append(o2 - o1)
                elif t == "*":
                    stack.append(o2 * o1)
                elif t == "/":
                    stack.append(int(o2 / o1))
            else:  
                stack.append(int(t))
        
        return stack[-1]
        