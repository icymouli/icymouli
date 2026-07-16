#include <stdio.h>

int main() {
    int t;
    scanf("%d", &t);

    while (t--) {
        int n;
        scanf("%d", &n);

        long long a[n];

        for (int i = 0; i < n; i++) {
            scanf("%lld", &a[i]);
        }

        int possible = 1;

        for (int i = 0; i < n - 1; i++) {
            if (a[i] < i + 1) {
                possible = 0;
                break;
            }

            a[i + 1] += a[i] - (i + 1);
        }

        if (possible)
            printf("YES\n");
        else
            printf("NO\n");
    }

    return 0;
}
