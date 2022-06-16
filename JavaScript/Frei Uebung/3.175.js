function findDuplicates() {
  const number = [2, 4, 5, 2, 5, 8, 5, 4711];
  for (let i = 0; i < number.length; i++) {
    const numberATI = number[i];
    for (let j = 0; j < number.length; j++) {
      const numberATJ = number[j];
      if (numberATI === numberATJ) {
        console.log(`doppelte Zahl gefunden: ${numberATI}`);
      }
    }
  }
}

document.addEventListener(`DOMContentLoaded`, findDuplicates);
