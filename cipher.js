window.cipher = {
encode: (displacement,capitalLetter) => {
  /* Acá va tu código */
  let result = '';
  for (let i=0; i<capitalLetter.length; i++){
    let asciiNumber = capitalLetter.charCodeAt(i);
    if (asciiNumber >= 65 && asciiNumber <= 90 ) {
      let convertedLetter=(asciiNumber-65+parseInt(displacement))%26+65;

      result += String.fromCharCode(convertedLetter);
    }
    else {
      result += String.fromCharCode(asciiNumber);
    }
  }
  return result;
},

decode: (displacement,capitalLetter) => {
  let result = '';
  for (let i=0; i<capitalLetter.length; i++){
    let asciiNumber = capitalLetter.charCodeAt(i);
    if (asciiNumber >= 65 && asciiNumber <= 90 ) {
      let convertedLetter=(asciiNumber-65-parseInt(displacement))%26+65;
      if (convertedLetter <65){
        convertedLetter +=26;
      }
      result += String.fromCharCode(convertedLetter);
    }else {
      result += String.fromCharCode(asciiNumber);
    }
  }
  return result;

  
}
};


