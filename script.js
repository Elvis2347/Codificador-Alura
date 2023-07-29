const textArea = document.querySelector(".msg-texto");
const resultado = document.querySelector(".resultado");

// As "chaves" de criptografia que utilizaremos são:
// `A letra "e" é convertida para "enter"`
// `A letra "i" é convertida para "imes"`
// `A letra "a" é convertida para "ai"`
// `A letra "o" é convertida para "ober"`
// `A letra "u" é convertida para "ufat"`
function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    resultado.innerHTML = `<div class="resultado-texto">${textoEncriptado}</div>
    <button class="btn resultado-btn-copiar" onclick="copiar()">Copiar</button>
    `;
    textArea.value = "";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0;i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replace(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada
}
function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    resultado.innerHTML = `
    <div class="resultado-texto">${textoDesencriptado}</div>
    <button class="btn resultado-btn-copiar" onclick="copiar()">Copiar</button>
    `;
    textArea.value = ""
}
function desencriptar(stringDesencriptada){
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0;i<matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replace(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringDesencriptada
}
function copiar() {
    const texto = document.querySelector(".resultado-texto").innerHTML
    navigator.clipboard.writeText(texto)
}