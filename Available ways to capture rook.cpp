class Solution {
public:
    int numRookCaptures(vector<vector<char>>& board) {
        int r, c;
        for (int i = 0; i < 8; i++) {
            for (int j = 0; j < 8; j++) {
                if (board[i][j] == 'R') {
                    r = i;
                    c = j;
                }
            }
        }

        int count = 0;
        for (int i = r - 1; i >= 0; i--) {
            if (board[i][c] == 'B')
                break;
            if (board[i][c] == 'p') {
                count++;
                break;
            }
        }
        for (int i = r + 1; i < 8; i++) {
            if (board[i][c] == 'B')
                break;
            if (board[i][c] == 'p') {
                count++;
                break;
            }
        }

        for (int j = c - 1; j >= 0; j--) {
            if (board[r][j] == 'B')
                break;
            if (board[r][j] == 'p') {
                count++;
                break;
            }
        }

        for (int j = c + 1; j < 8; j++) {
            if (board[r][j] == 'B')
                break;
            if (board[r][j] == 'p') {
                count++;
                break;
            }
        }

        return count;
    }
};
