#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

int main()
{
    int x = 0;
    double y = 0;

    scanf("%d", &x);
    fflush(stdin);
    scanf("%lf", &y);

    printf("x= %d, y= %lf\n", x, y);

    return 0;
}