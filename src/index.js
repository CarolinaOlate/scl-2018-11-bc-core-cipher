/* Acá va tu código */
function cifrar(){
    let capLetter= document.getElementById("mensaje").value;
    let displace= document.getElementById("numero").value;

    let result= window.cipher.encode(displace,capLetter);
    
    document.getElementById("resultado").innerHTML = result;

};

function descifrar(){
    let capLetter= document.getElementById("mensaje").value;
    let displace= document.getElementById("numero").value;
    
    let result= window.cipher.decode(displace,capLetter);

    document.getElementById("resultado").innerHTML = result;

};

