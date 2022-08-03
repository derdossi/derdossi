#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>

int main()
{
    unsigned students = 25U;
    unsigned long long worldPopulation = 7801235946U;

    printf("%12u | Students in this class\n", students);
    printf("%12llu | World Population now\n", worldPopulation);

    uint8_t count = UINT8_MAX;
    printf("%12u | count of something\n", count);

    count = count + 1;

    printf("%12u | count of something + 1 (Overflow)\n", count);

    printf("%12d | INT32_MIN\n", INT32_MIN);
    printf("%12d | INT32_MAX\n", INT32_MAX);
    printf("%12u | UINT32_MAX\n", UINT32_MAX);

    return EXIT_SUCCESS;
}