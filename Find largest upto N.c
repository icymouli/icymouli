#include <stdio.h>

int main()
{
    int N, maxv, curr;

    scanf("%d%d", &N, &maxv);

    for(int ctr = 2; ctr <= N; ctr++)
    {
        scanf("%d", &curr);

        if(curr > maxv)
            maxv = curr;
    }

    printf("%d", maxv);

    return 0;
}
