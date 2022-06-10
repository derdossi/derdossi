const numbers = [2, 4, 56, 22, 65, 2, 54, 88, 29]
console.log('Vor der Schleife.')
for (let i = 0; i< numbers.length; i++) {
    const number = numbers[i];
    if (number % 2 === 1) {
        console.log('Ungerade Zahl gefunden.');
        break;
    }
    console.log(number);
}
console.log('Nach der Schleife.')