class Solution {
    board = []
    word = ""
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        this.board = board
        this.word = word

        for(let i = 0; i < board.length; i++) {
            for(let j = 0; j < board[i].length; j++) {
                if(board[i][j] === word[0] && this.foo(i, j, 0)) {
                    return true
                }
            }
        }

        return false
    }

    foo(i, j, idx) {
        if(idx === this.word.length) {
            return true
        }

        if(i < 0 || j < 0 || i >= this.board.length || j >= this.board[0].length || this.board[i][j] !== this.word[idx]) return false

        let prev = this.board[i][j]
        this.board[i][j] = "#"
        const isFound = this.foo(i + 1, j, idx + 1) || this.foo(i - 1, j, idx + 1) || this.foo(i, j + 1, idx + 1) || this.foo(i, j - 1, idx + 1)

        this.board[i][j] = prev

        return isFound
    }
}
