
function encriptar(){
    
    var expRegNumeros = /[0-9]/;
    var caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    var texto = document.getElementById("textarea-principal").value.toLowerCase();
   
    if ((expRegNumeros.test(texto)) || (caracteres.test(texto))) {
        alert("No debe contener números ni caracteres especiales o acentos");
      }else{
        var txtCifrado = texto.replace(/e/igm,"enter");
        var txtCifrado = txtCifrado.replace(/o/igm,"ober");
        var txtCifrado = txtCifrado.replace(/i/igm,"imes");
        var txtCifrado = txtCifrado.replace(/a/igm,"ai");
        var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

        document.getElementById("joven").style.display = "none";
        document.getElementById("texto1").style.display = "none";
        document.getElementById("texto2").innerHTML = txtCifrado;
        document.getElementById("copiar").style.display ="show";
        document.getElementById("copiar").style.display = "inherit";
        document.getElementById("textarea-principal").value = ""; 
      }
    
}

function desencriptar(){
    var texto = document.getElementById("textarea-principal").value.toLowerCase();
    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

    document.getElementById("joven").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display ="show";
    document.getElementById("copiar").style.display = "inherit";
    document.getElementById("textarea-principal").value = "";
}

function copiar(){
    var contenido = document.getElementById("texto2");
    contenido.select();
    document.execCommand('copy');
    alert("El texto ha sido copiado.");

}








