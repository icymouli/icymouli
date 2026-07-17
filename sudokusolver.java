class Solution {

    private int SMS = 3;

    private int[] getFreeCell(char[][] board) {
        for (int r = 0; r < 9; r++) {
            for (int c = 0; c < 9; c++) {
                if (board[r][c] == '.') {
                    return new int[]{r, c};
                }
            }
        }
        return new int[]{-1, -1};
    }

    private boolean solve(char[][] board, boolean[][] rf, boolean[][] cf, boolean[][] smf) {

        int[] cell = getFreeCell(board);

        int row = cell[0];
        int col = cell[1];

        if (row == -1)
            return true;

        int smi = (row / SMS) * SMS + col / SMS;

        for (int dig = 1; dig <= 9; dig++) {

            if (rf[row][dig] || cf[col][dig] || smf[smi][dig])
                continue;

            board[row][col] = (char) ('0' + dig);

            rf[row][dig] = cf[col][dig] = smf[smi][dig] = true;

            if (solve(board, rf, cf, smf))
                return true;

            board[row][col] = '.';
            rf[row][dig] = cf[col][dig] = smf[smi][dig] = false;
        }

        return false;
    }

    public void solveSudoku(char[][] board) {

        boolean[][] rf = new boolean[9][10];
        boolean[][] cf = new boolean[9][10];
        boolean[][] smf = new boolean[9][10];

        for (int r = 0; r < 9; r++) {
            for (int c = 0; c < 9; c++) {
                if (board[r][c] != '.') {
                    int dig = board[r][c] - '0';
                    int smi = (r / SMS) * SMS + c / SMS;

                    rf[r][dig] = cf[c][dig] = smf[smi][dig] = true;
                }
            }
        }

        solve(board, rf, cf, smf);
    }
}
