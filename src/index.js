/* Acá va tu código */
//function cifrar(){
    document.getElementById("btnIngresar").addEventListener("click",() =>{
        //evento.preventDefault();
    let capitalLetter= document.getElementById("mensaje").value;
    let displacement= document.getElementById("numero").value;

    let result= window.cipher.encode(displacement,capitalLetter);
    
    document.getElementById("resultado").innerHTML = result;
    })

//function descifrar(){
    document.getElementById("btnIngresar2").addEventListener("click",() =>{
        //evento.preventDefault();
    let capitalLetter= document.getElementById("mensaje").value;
    let displacement= document.getElementById("numero").value;
    
    let result= window.cipher.decode(displacement,capitalLetter);

    document.getElementById("resultado").innerHTML = result;
    })

