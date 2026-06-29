class Solution:
    def islandsAndTreasure(self, grid: List[List[int]]) -> None:
        n = len(grid)
        m = len(grid[0])
        q = deque()
        for i in range(n):
            for j in range(m):
                if grid[i][j] == 0:
                  q.append((i, j))
        while q:
            i, j = q.popleft()
            for dr, dc in [(0, 1), (0, -1), (1, 0), (-1, 0)]:
                nr = i + dr
                nc = j + dc
                if 0 <= nr < n and 0 <= nc < m and grid[nr][nc] == 2147483647:
                    grid[nr][nc] = grid[i][j] + 1
                    q.append((nr, nc))

