#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
int main()
{
    /// this program prints something on screen
    /***
    Comments in c
    */
    ///    int i1; declaration - Random? number
    int i1 = 0; /// initialization
    printf("i1=%d\n", i1);

    i1 = 5; /// assignment
    printf("i1=%d\n", i1);

    i1 = -3; /// good-bye 5
    printf("i1=%d\n", i1);

    i1 = 3.5; /// casting, 3.5 converted to an integer 3
    printf("i1=%d\n \n", i1);

    double d1 = 3.5; /** double: to show numbers with decimal points
    with greater accuracy. ALWAYS USE THIS.
    */
    printf("d1=%lf\n", d1);

    d1 = 0;
    printf("d1=%lf\n", d1);

    float f1 = 3.7;
    printf("f1=%f\n\n", f1);

    char c = 'A'; /// NOT "A", that is a string
    printf("%c\n", c);

    c = 65; /// Casting with ASCII table
    printf("%c\n", c);

    int code = 'A'; /// casting reverse from ASCII table
    printf("%d\n\n", code);

    _Bool b = 0; /// in Booleans 0 = false, 1 = true
    printf("b=%d\n", b);

    b = 1;
    printf("b=%d\n", b);

    b = 2;
    printf("b=%d\n", b);

    b = -1;
    printf("b=%d\n", b);
    /// #include <stdbool.h> to use "true" or "false
    b = false;
    printf("using keywords b=%d\n", b);

    b = true;
    printf("using keywords b=%d\n\n", b);

    char name[] = "Ali Badran"; /// group of characters
    printf("%s\n", name);

    /// how to know how much a variable can hold
}
