#include <stdlib.h>
#include <stdio.h>

enum menu
{
    TEA = 10,    // 10
    COFFEE = 20, // 20
    JUICE = 30,  // 30
    BEER = 40,   // 40
};

int main()
{
    enum menu mario = COFFEE;
    enum menu andrea = BEER;

    printf("Mario ordered: %d\n", mario);
    printf("Andrea ordered: %d\n", andrea);
}