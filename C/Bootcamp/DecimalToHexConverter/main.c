#include <stdio.h>
#include <stdlib.h>
int main(void)
{
    printf("===^^===\n");
    printf("Welcome to the Deciaml to Hexadecimal converter\n");
    printf("Enter a Number:\n");

    int the_number; //declares an integer variable
    scanf("%d", &the_number); // acquires user input

    printf("Decimal representation:     %9d\n", the_number);
    printf("Converted to hexadecimal:   %9X\n", the_number);
    printf("===^^===\n");
    
    return EXIT_SUCCESS;
}