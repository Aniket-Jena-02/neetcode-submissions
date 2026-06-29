class Solution:
    board = []
    word = ""
    m = -1
    n = -1
    
    def exist(self, board: List[List[str]], word: str) -> bool:
        self.board = board
        self.word = word

        m = len(self.board)
        n = len(self.board[0])

        self.m = m
        self.n = n

        for i in range(0, m):
            for j in range(0, n):
                if word[0] == board[i][j] and self.foo(0, i, j):
                    return True 
        
        return False
        

    
    def foo(self, idx, i, j):
        if idx == len(self.word):
            return True
        
        if i < 0 or j < 0 or i >= self.m or j >= self.n or self.word[idx] != self.board[i][j]:
            return False

        temp = self.board[i][j]
        self.board[i][j] = "#"

        is_found = self.foo(idx + 1, i + 1, j) or self.foo(idx + 1, i - 1, j) or self.foo(idx + 1, i, j + 1) or self.foo(idx + 1, i, j - 1)

        self.board[i][j] = temp

        return is_found