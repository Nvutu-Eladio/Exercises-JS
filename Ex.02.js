// Função que verifica se um número pertence à sequência de Fibonacci
function verificarFibonacci(num) {
    let a = 0;
    let b = 1;
    let fib = [0, 1];

    while (b <= num) {
        let temp = b;
        b = a + b;
        a = temp;
        fib.push(b);
    }

    if (fib.includes(num)) {
        console.log(num + " Pertence à sequência de Fibonacci");
    } else {
        console.log(num + " Não pertence à sequência de Fibonacci");
    }
}

// exemplo de uso da função
verificarFibonacci(8); // retorna "8 pertence à sequência de Fibonacci"
verificarFibonacci(10); // retorna "10 não pertence à sequência de Fibonacci."