class Solution:
    grid = []
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        self.grid = grid
        res  = 0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == 1:
                    area = self.calc(i, j)
                    res = max(res, area)
        return res

    def calc(self, i, j):
        if i < 0 or j < 0 or i >= len(self.grid) or j >= len(self.grid[0]) or self.grid[i][j] == 0:
            return 0
        self.grid[i][j] = 0
        return 1 + self.calc(i + 1, j) + self.calc(i - 1, j) + self.calc(i, j + 1) + self.calc(i, j - 1)