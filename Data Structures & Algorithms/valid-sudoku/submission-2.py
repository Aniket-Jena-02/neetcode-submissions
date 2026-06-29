class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        for i in range(9):
            rs = set()
            cs = set()

            for j in range(9):
                if board[i][j] != ".":
                    if board[i][j] not in rs:
                        rs.add(board[i][j])
                    else:
                        return False
                if board[j][i] != ".":
                    if board[j][i] not in cs:
                        cs.add(board[j][i])
                    else:
                        return False

        for i in range(9):
            startR = (i // 3) * 3
            startC = (i % 3) * 3
            s = set()
            for j in range(3):
                for k in range(3):
                    if board[j + startR][k + startC] != ".":
                        if board[j + startR][k + startC] not in s:
                            s.add(board[j + startR][k + startC])
                        else:
                            return False

        return True
    