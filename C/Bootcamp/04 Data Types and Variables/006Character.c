#include <stdio.h>
#include <stdlib.h>

int main()
{
    char c = 'A';
    printf("char c = %d\n", c);
    printf("char c = %c\n", c);

    c = 66;
    printf("char c = %c\n", c);

    // Acquire user input
    printf("Input a character: ");
    c = getchar();
    printf("You entered: %c\n", c);
}