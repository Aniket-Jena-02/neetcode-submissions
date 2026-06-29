class Solution {
public:
    string word;
    vector<vector<char>> board;

    bool exist(vector<vector<char>>& board, string word) {
        int i = 0;
        int j = 0;
        this->word = word;
        this->board = board;

        for(int i = 0; i < board.size(); i++) {
            for(int j = 0; j < board[0].size(); j++) {
                if(board[i][j] == word[0] && foo(i, j, 0)) {
                    return true;
                }
            }
        }

        return false;
    }

    bool foo(int i, int j, int idx) {
        if(idx == word.length()) {
            return true;
        }

        if(i < 0 || j < 0 || i >= board.size() || j >= board[0].size() || board[i][j] != word[idx]) return false;

        char temp = board[i][j];
        board[i][j] = '#';

        auto found = foo(i+1, j, idx + 1) ||
        foo(i-1, j, idx + 1) ||
        foo(i, j+1, idx + 1) ||
        foo(i, j-1, idx + 1);

        board[i][j] = temp;
        
        return found;
    }
};
