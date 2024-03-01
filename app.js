let inputText = document.querySelector('#texto-entrada');
let outText = document.querySelector('#texto-saida');

function criptografar() {
    let texto = inputText.value;

    let saidaCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('img-cript').style.display = "none";
    document.getElementById('texto').style.display = "none";

    document.getElementById('texto-saida').innerHTML = '<textarea class="textarea-saida" readonly id="texto-saida">' + saidaCripto +
    '</textarea>' + '<button class="button-copy" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar() {
    let texto = inputText.value;

    let saidaDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('texto-saida').innerHTML = '<textarea readonly class="textarea-saida" id="texto-entrada">' + saidaDescripto +
    '</textarea>' + '<button class="button-copy" id="copiar" onclick="copiar()">Copiar</button>'
}


function copiar() {
    let textoCopiar = document.getElementById('texto-entrada');

    textoCopiar.select();
    document.execCommand('copy');
    alert("Texto Copiado");
}
document.querySelector("#copiar").addEventListener("click", copiar);



