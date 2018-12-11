window.cipher = {
encode: (displacement,capitalLetter) => {
  /* Acá va tu código */
  let result = '';
  for (let i=0; i<capitalLetter.length; i++){ //para recorrer el string, i representa cada letra de la palabra y length para que se detenga y ++ para que vaya sumando 1 
    let asciiNumber = capitalLetter.charCodeAt(i); //charcodeat devuelve la posicion de cada letra
    if (asciiNumber >= 65 && asciiNumber <= 90 ) { //para saber si la letra mayúscula se encuentra en este rango
      let convertedLetter=(asciiNumber-65+parseInt(displacement))%26+65; //parse es para obtener el valor numerico del string

      result += String.fromCharCode(convertedLetter); //+=es para traerme la cadena completa
    
    }
        else if (asciiNumber >= 97 && asciiNumber <= 122 ) {
          let convertedLetter=(asciiNumber-97+parseInt(displacement))%26+97;

          result += String.fromCharCode(convertedLetter);
        }else{
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


