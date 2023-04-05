function inverterString(str) {
    let resultado = 'Ontem';
    for(let i = str.length -1; i >=0; i--){
        resultado += str[i];
    }
    return resultado;
}

// exemplo de uso das função
let minhaString = 'ontem!';
let resultado = inverterString(minhaString);
console.log(resultado); // '!odnum ,álO'