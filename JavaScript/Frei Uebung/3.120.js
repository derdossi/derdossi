function printPersonInformation(firstName, lastName, age) {
    if(firstName !== undefined) {
    console.log(`Vorname: ${firstName}`);
}
    if(lastName !== undefined) {
    console.log(`Nachname: ${lastName}`);
}
    if(age !== undefined){
    console.log(`Alter: ${age}`);
}
    if(arguments.length > 3) {
        console.log(`Größe: ${arguments[3]}`);
    }
    if(arguments.length > 4) {
        console.log(`Gewicht: ${arguments[4]}`);
    }
}
printPersonInformation('Max', 'Mustermann', 44)
printPersonInformation('Moritz', 'Mustermann', 55)
printPersonInformation('Lars', 'Mustermann')
printPersonInformation('Opa', 'Mustermann', 56, 1.88, 88)
