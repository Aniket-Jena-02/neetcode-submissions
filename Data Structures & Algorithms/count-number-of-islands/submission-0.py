class Solution:
    grid = []
    def numIslands(self, grid: List[List[str]]) -> int:
        self.grid = grid
        res  = 0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == "1":
                    res += 1
                    self.calc(i, j)
        
        return res

    def calc(self, i, j):
        if i < 0 or j < 0 or i >= len(self.grid) or j >= len(self.grid[0]) or self.grid[i][j] == "0":
            return
        
        self.grid[i][j] = "0"
        self.calc(i + 1, j)
        self.calc(i - 1, j)
        self.calc(i, j + 1)
        self.calc(i, j - 1)
        
        