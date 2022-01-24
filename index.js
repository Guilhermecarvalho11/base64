function confirma (){
    var selectContent = document.getElementById("select").value;
    var textAreaContent = document.getElementById("textarea").value;
    var deslocamento = document.getElementById ("deslocation").value;
    var resultadoArea = document.getElementById("result");
    var radio = document.getElementById("codificador").checked; 
    
    
    if (selectContent == "base64"){
        if(radio == true){
            resultadoArea.innerHTML = codificadorBase64(textAreaContent);
        } else {
            var teste = decodificadorBase64(textAreaContent);
            console.log(teste)
            resultadoArea.innerHTML = teste;
        }
    }else if (selectContent == "cesar"){
        if (radio ==true){
            resultadoArea.innerHTML = codificadorCezar(textAreaContent.toLowerCase(), parseInt(deslocamento));
        } else {
            var teste = decodificadorCezar(textAreaContent.toLowerCase(), parseInt(deslocamento));
            resultadoArea.innerHTML = "";
            resultadoArea.innerHTML = teste;
        }
    }
}


function codificadorCezar(palavra, deslocamento){
    var letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'w', 'z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'w', 'z']
    var resultado = "";
    var contador = 0;
    for(let i = 0; i < letras.length; i++){

        if(letras[i] == palavra[contador]){

            contador++;
            resultado = resultado + letras[i+deslocamento];
            i = -1;
        }
    }
    return resultado;
}
function decodificadorCezar(palavra, deslocamento){
    var letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'w', 'z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'w', 'z']
    var resultado = "";
    var contador = 0;
    for(let i = 26; i < letras.length; i++){

        if(letras[i] == palavra[contador]){

            contador++;
            resultado = resultado + letras[i-deslocamento];
            i = 26;
        }
    } console.log(resultado);
    return resultado;

}

function codificadorBase64(palavra){
    var resultado = btoa(palavra)
    return resultado;
}

function decodificadorBase64(palavra){
    var resultado = atob(palavra)
    return resultado;
}