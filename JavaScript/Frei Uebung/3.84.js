const selectElement = document.getElementById('grade');
const options = [
    'Sehr gut',
    'Gut',
    'Befriedigend',
    'Ausreichend',
    'Mangelhaft',
    'Ungenügend'
];
for(let i=0; i<options.length; i++) {
    const optionElement = document.createElement('option');

    const optionText = document.createTextNode(options[i]);

    optionElement.appendChild(optionText);

    selectElement.appendChild(optionElement);
}