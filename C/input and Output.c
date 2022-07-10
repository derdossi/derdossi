#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
int main()
{
    int x = 3;
    double y = 3.589;
    float f = 5.6;
    char c = 'A';
    _Bool b = true;
    char name[] = "Ali Badran";

    printf("x=%d\ny=%.1lf\nf=%f\nc=%c\nb=%d\nname=%s\n", x, y, f, c, b, name);

    return 0;
}