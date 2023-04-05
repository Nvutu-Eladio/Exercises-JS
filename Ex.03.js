const faturamentoDiario = [1000, 2000, 1500, 3000, 800, 1200, 0, 0, 500, 2500, 1800, 900, 1700, 2200, 2100, 400, 600, 1000, 3000, 2800, 1500, 2000, 0, 0, 900, 1800, 2500, 3000, 2000, 1600];

//Função que calcula o menor valor de faturamento diário
function calcularMenorFaturamento(vetor) {
    return Math.min(...vetor);
}

//Função que calcula o maior valor de faturamento diário
function calcularMaiorFaturamento(vetor) {
    return Math.max(...vetor);
}

//Função que calcula á média mensal de faturamento diário
function calcularMediaFaturamento(vetor) {
    const diasUteis = vetor.filter(faturamento => faturamento > 0);
    const totalFaturamento = diasUteis.reduce((acumulador, faturamento) => acumulador + faturamento, 0);
    const mediaFaturamento = totalFaturamento / diasUteis.length;
    return mediaFaturamento;
}

// função que calcula o número de dias no mês em que o valor de faturamento diário foi superior à média mensal
function calcularDiaSuperioresMedia(vetor) {
    const media = calcularMediaFaturamento(vetor);
    const diasSuperiores = vetor.filter(faturamento => faturamento > media);
    return diasSuperiores.length;
}

//exemplo de uso das funções
const menorFaturamento = calcularMenorFaturamento(faturamentoDiario);
const maiorFaturamento = calcularMaiorFaturamento(faturamentoDiario)
const diasSuperioresMedia = calcularDiaSuperioresMedia(faturamentoDiario);
const mediaFaturamento = calcularMediaFaturamento(faturamentoDiario);

console.log("Menor faturamento diário: R$ " + menorFaturamento);
console.log("Maior faturamento diário: R$ " + maiorFaturamento);
console.log("Número de dias com faturamento diário superior à média mensal: " + diasSuperioresMedia);
console.log("Média mensal de faturamento diário: R$ " + mediaFaturamento.toFixed(2));