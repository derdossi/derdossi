#include <stdio.h>
#include <stdlib.h>

enum month
{
    JAN = 1,
    FEB,
    MAR,
    APR,
    MAY,
    JUN,
    JUL,
    AUG,
    SEP,
    OCT,
    NOV,
    DEC,
};

int main()
{
    enum month myFavouriteMonth = JUL;
    enum month myWorstMonth = NOV;

    printf("Andrea's favourite month: %d\n", myFavouriteMonth);
    printf("Andrea's worst month: %d\n", myWorstMonth);

}