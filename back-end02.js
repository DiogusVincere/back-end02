//Exercicio 1
//var x= 10;
//var y= 25;
//var z=x+y;
//console.log("x + y = " + z);

//const minhaVar = 1;
//const MinhaVar = "texto";
//const minhavar = "3";
//const MINHAVAR = 2;

//Exercicio 2
//const primeiroNome = "João";
//const sobrenome = "Silva";
//const nomeCompletoComOperador = primeiroNome + " " + sobrenome;
//const nomeCompletoComTemplateStrings = `${primeiroNome} ${sobrenome}`;
//console.log("Nome completo com operador +:", nomeCompletoComOperador);
//console.log("Nome completo com template strings:", nomeCompletoComTemplateStrings);

//Exercicio 3
//const numero = 7;
//const escrito = 'sete';
//const VarsJunto =`${numero} é ${escrito}`;
//console.log(VarsJunto)

//Exercicio 4
//let minhaVariavel = 10;
//console.log("Valor inicial:", minhaVariavel);
//minhaVariavel = "Agora sou uma string!";
//console.log("Valor após reatribuição:", minhaVariavel);

//Exercicio 5
//const nome = "Diogo";
//function cumprimentar(){
//    console.log(`Olá, ${nome}!`);
//}
//cumprimentar();

//Exercicio 6
//const estaChovendo = true;
//if (estaChovendo) {
//    console.log("Está chovendo. Não se esqueça de levar um guarda-chuva!");
//} else {
//    console.log("Não está chovendo. Você pode sair sem guarda-chuva.");
//}

//Exercicio 7
//const n1 = 8;
//const n2 = 9;
//const n3 = 5.5;
//const media = (n1+n2+n3)/3;
//console.log("A média é", media);

//Exercicio 8
//const base = 10;
//const altura = 5;
//const area = 0.5 * base * altura;
//console.log("A área do triângulo é:", area);

//Exercicio 9
//var raio = 1.25,
//    area =0;
//area = Math.PI * raio * raio;
//console.log('area = ' + area);

//Exercicio 10
//const V = 135; 
//const I = 5; 
//const resistencia = V / I;
//console.log("A resistência do circuito é:", resistencia);

//Exercicio 11
//const salarioBruto = 1500; 
//const percentualImposto = 20; // 20%
//const impostoDeRenda = (percentualImposto / 100) * salarioBruto;
//const salarioLiquido = salarioBruto - impostoDeRenda;
//console.log("O salário líquido é:", salarioLiquido.toFixed(2));

//Execicio 12
//const precoPorLitro = 5.50;
//const quantidadeLitros = 40;
//const valorGasto = precoPorLitro * quantidadeLitros;
//console.log("O valor total gasto para abastecer é: R$", valorGasto.toFixed(2));

//Exercicio 13
//const potenciaEmWatts = 1750; 
//const horasPorDia = 8;
//const diasPorMes = 25; 
//const custoPorKWh = 0.75;
//const potenciaEmKWh = potenciaEmWatts / 1000;
//const consumoDiario = potenciaEmKWh * horasPorDia;
//const consumoMensal = consumoDiario * diasPorMes;
//const custoMensal = consumoMensal * custoPorKWh;
//console.log("O custo mensal da operação da máquina é: R$", custoMensal.toFixed(2));

//Exercicio 14
//const nota1 = 9;
//const nota2 = 8;
//const nota3 = 7;
//const media = (nota1 + nota2 + nota3) / 3;
//let situacao;
//if (media >= 6) {
//    situacao = "Aprovado";
//} else if (media > 4 && media < 6) {
//    situacao = "Exame";
//} else {
//    situacao = "Reprovado";
//}
//console.log("A média do aluno é:", media.toFixed(2));
//console.log("Situação do aluno:", situacao);

//Exercicio 15
const peso = 70; 
const altura = 1.75;

// Cálculo do IMC
const imc = peso / (altura * altura);
let classificacao;
if (imc < 18.5) {
    classificacao = "Abaixo do peso";
} else if (imc >= 18.5 && imc < 24.9) {
    classificacao = "Peso normal";
} else if (imc >= 25 && imc < 29.9) {
    classificacao = "Sobrepeso";
} else {
    classificacao = "Obesidade";
}

console.log("O IMC é:", imc.toFixed(2));
console.log("Classificação:", classificacao);

