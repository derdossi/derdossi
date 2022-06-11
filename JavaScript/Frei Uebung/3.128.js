function printPersonInformation(firstName, lastName, age, ...restArgs) {
    if(firstName !== undefined) {
    console.log(`Vorname: ${firstName}`);
}
    if(lastName !== undefined) {
    console.log(`Nachname: ${lastName}`);
}
    if(age !== undefined){
    console.log(`Alter: ${age}`);
}
if(restArgs.length > 0) {
    console.log(`Größe: ${restArgs[0]}`);
}
if(restArgs.length > 1) {
    console.log(`Gewicht: ${restArgs[0]}`);
}
}
printPersonInformation('Max', 'Mustermann', 44)
printPersonInformation('Moritz', 'Mustermann', 55)
printPersonInformation('Lars', 'Mustermann')
printPersonInformation('Opa', 'Mustermann', 56, 1.88, 88)
