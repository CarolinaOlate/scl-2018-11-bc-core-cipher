window.cipher = {
encode: (displace,capLetter) => {
  /* Acá va tu código */
  let result = '';
  for (let i=0; i<capLetter.length; i++){
    let asciiNumber = capLetter.charCodeAt(i);
    if (asciiNumber >= 65 && asciiNumber <= 90 ) {
      let convertedLetter=(asciiNumber-65+parseInt(displace))%26+65;

      result += String.fromCharCode(convertedLetter);
    }
    else {
      result += String.fromCharCode(asciiNumber);
    }
  }
  return result;
},

decode: (displace,capLetter) => {
  let result = '';
  for (let i=0; i<capLetter.length; i++){
    let asciiNumber = capLetter.charCodeAt(i);
    if (asciiNumber >= 65 && asciiNumber <= 90 ) {
      let convertedLetter=(asciiNumber-65-parseInt (displace))%26+65;
      result += String.fromCharCode(convertedLetter);
    }
    else {
      result += String.fromCharCode(asciiNumber);
    }
  }
  return result;

}
};


