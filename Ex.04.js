const faturamentoPorEstado = [
    { estado: "SP", valor: 67836.43 },
    { estado: "RJ", valor: 36678.66 },
    { estado: "MG", valor: 29229.88 },
    { estado: "ES", valor: 27165.48 },
    { estado: "Outros", valor: 19849.53 },
];

// função que calcula o valor total mensal da distribuidora

function calcularValorTotal(vetor) {
    const valores = vetor.map(item => item.valor);
    const total = valores.reduce((acumulador, valor) => acumulador + valor, 0);
    return total;
}

// função que calcula o percentual de representação de cada estado no valor total mensal da distribuidora
function calcularPercentual(vetor){
    const total = calcularValorTotal(vetor);
    const representacoes = vetor.map(item => {
        return {
            estado: item.estado,
            percentual: (item.valor / total) * 100
        };
    });
    return representacoes;
}

// exemplo de uso das funções
const percentuais = calcularPercentual(faturamentoPorEstado);

percentuais.forEach(item => {
  console.log(item.estado + ": " + item.percentual.toFixed(2) + "%");
});