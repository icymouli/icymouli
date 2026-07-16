#include <stdio.h>

int main()
{
    int r,c;
    scanf("%d%d",&r,&c);
    int arr[r][c];
    for(int i = 0; i < r; i++)
    {
        for(int j = 0; j < c; j++)
        {
            scanf("%d", &arr[i][j]);
        }
    }
    int rr[]={-1,-1,-1,0,0,1,1,1};
    int cc[]={-1,0,1,-1,1,-1,0,1};
    for(int i = 0; i < r; i++)
    {
        for(int j = 0; j < c; j++)
        {   
            int sum=0;
            for(int k=0;k<8;k++)
            {
                int ar=r+rr[i],ac=c+cc[i];
                if(ar>=0&&ac>=0&&ar<r&ac<c)
                    sum+=arr[ar][ac];
            }
            printf("%d",sum);
        }
        printf("\n");
    }
    return 0;
}
