function findDuplicates() {
  for (let i = 0; i < number.length; i++) {
    const numberATI = number[i];
    for (let j = i + 1; j < number.length; j++) {
      const numberATJ = number[j];
      if (numberATI === numberATJ) {
        console.log(`doppelte Zahl gefunden: ${numberATI}`);
      }
    }
  }
}

document.addEventListener(`DOMContentLoaded`, findDuplicates);
