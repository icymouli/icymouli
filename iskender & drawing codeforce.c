#include <stdio.h>
int main() {
    int t,n;
    
    scanf("%d",&t);
    for(int i=0;i<t;i++){
        scanf("%d",&n);
        char str[n];
        scanf("%s",str);
        int mln=0;
        for(int i=0;str[i]!='\0';i++){
            
            int ln=0;
            while(str[i] == '#') {
                ln++;
                i++;
            }

            if(ln > mln)
                mln = ln;
            
        }
        printf("%d\n",(mln+1)/2);
    }
    
    return 0;
}
