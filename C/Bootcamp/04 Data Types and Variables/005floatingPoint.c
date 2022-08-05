#include <stdio.h>
#include <stdlib.h>

int main()
{

double decimalDigits = 1.23456789;


double worldPopulation = 7.801E9;


double plankConstant = 6.626E-34;

printf("%12.1f | 1 decimal digit\n", decimalDigits);
printf("%12.3f | 3 decimal digits\n", decimalDigits);
printf("%12.1f | WorldPopulation, decimal, 1 digit of precistion\n", worldPopulation);
printf("%12.1e | WorldPopulation, scientific, 1 digit of precision\n", worldPopulation);
printf("%12.3e | WorldPopulation, scientific, 3 digit of precision\n", worldPopulation);
printf("%12.1E | Plankconstant, scientific, 1 digit of precision\n", plankConstant);
printf("%12.3E | Plankconstant, scientific, 3 digit of precision\n", plankConstant);
}