class Solution {
    int diff[]={0,1,0,-1,0};
    private boolean dfs(int R,int C,int r,int c,char board[][],String word,int idx)
    {
        if(idx==word.length()-1)
            return true;
        char bkup=board[r][c];
        board[r][c]='*';
        
        for(int i=0;i<4;i++)
        {
            int ar=r+diff[i],ac=c+diff[i+1];
            if(ar>=0&&ar<R&&ac>=0&&ac<C&&board[ar][ac]==word.charAt(idx+1))
            {
                boolean found=dfs(R,C,ar,ac,board,word,idx+1);
                if(found)
                    return true;
            }
        }
        board[r][c]=bkup;
        return false;
    }
    public boolean exist(char[][] board, String word) {
        int R=board.length,C=board[0].length;
        for(int r=0;r<R;r++)
            for(int c=0;c<C;c++)
            {
                if(board[r][c]==word.charAt(0))
                {
                    boolean found=dfs(R,C,r,c,board,word,0);
                    if(found)
                        return true;
                }
            }
        return false;
    }
}
