// Crie uma variável JavaScript e coloque nela o valor de sua idade.
// Mostre no html usando o document.write() o dado contido na
// variável junto da frase "Minha idade é x anos", sendo "x" o valor
// armazenado na sua variável.

const minhaIdade = 19
document.write("Minha idade é " + minhaIdade + " anos!<br/><br/>");

// Crie três variáveis JavaScript, em duas delas atribua os valores que
// você quiser e na outra atribua o valor da soma das duas primeiras
// variáveis. Apresente valor da soma no documento html junto da
// frase "A resultado da soma de x e y é z", sendo x o valor armazenado
// na primeira variável, y o valor armazenado segunda variável e z o
// valor armazenado na terceira variável

const num1 = 10
const num2 = 20
const sum = num1 + num2
document.write('O resultado da soma de ' + num1 + ' e ' + num2 + ' é ' + sum + '!<br/><br/>');

// Crie três variáveis, na primeira variável coloque o total de uma
// compra, por exemplo 149.90. Na segunda variável coloque a
// quantidade de parcelas, por exemplo 2. Na terceira variável coloque
// o valor da parcela. Apresente no documento html as seguintes
// informações:
// "O valor total da compra foi R$_,_"
// "Forma de pagamento: _x de R$_,_"

const total = 220.50;
const parcelas = 12
const valorParcela = total / parcelas

document.write('O valor total de ' + total + ' parcelado em 12x é igual a R$: ' + valorParcela.toFixed(2).replace(".", ",") + ' </br></br>');

// Crie duas variáveis. Na primeira coloque um total de minutos e
// defina um valor para ela (por exemplo, minutos = 120). Na segunda 
// coloque o total em segundos destes minutos armazenados na
// primeira variável. Apresente no documento html a seguinte
// informação: "_ minutos equivale à _ segundos!"

const totalMinutos = 120;
const totalSegundos = totalMinutos * 60;
document.write(`${totalMinutos} minutos equivale à ${totalSegundos} segundos! </br></br>`);

// Crie cinco variáveis. Na primeira armazene o nome de um aluno. Na
// segunda, terceira e quarta coloque 3 notas (valores de 0 à 10).
// Calcule a média das notas e armazene na quinta variável criada.
// Apresente no documento html a seguinte informação:
// "O aluno _____ ficou com média _,_"

const nomeA = 'Felipe';

const nota1 = 9;
const nota2 = 7;
const nota3 = 8;

const media = (nota1 + nota2 + nota3) / 3;
document.write(`O aluno ${nomeA} ficou com média ${media} <br/><br/>`);

// Desenvolva um algoritmo que armazene o valor 10 em uma variável
// A e o valor 20 em uma variável B. A seguir (utilizando apenas
// atribuições entre variáveis) troque os seus conteúdos fazendo com
// que o valor que está em A passe para B e vice-versa. Ao final,
// escrever os valores que ficaram armazenados nas variáveis.

let a = 10;
let b = 20;
let c = a;

a = b;
b = c;

document.write(`${a} e ${b} <br/><br/>`);

// Desenvolva um algoritmo para ler o número total de eleitores de um
// município, o número de votos brancos, nulos e válidos. Calcular e
// escrever o percentual que cada um representa em relação ao total
// de eleitores.

const totalE =  100
const vB = 20
const vN = 10

const porcentagemTotal = ((100 - 30) / totalE) * 100
const porcVB = (vB / totalE) * 100
const porcVN = (vN / totalE) * 100

document.write(`Pocentagem total dos votos ${porcentagemTotal}%, porcentagem de votos em branco ${vB}% porcentagem de votos nulos ${vN}% <br/><br/>`);

// Desenvolva um algoritmo para ler dois valores e imprimir uma das
// três mensagens a seguir:
// a. ‘Números iguais’, caso os números sejam iguais;
// b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// c. ‘Segundo maior’, caso o segundo seja maior que o primeiro.

let valor1 = 200;
let valor2 = 200;

if(valor1 === valor2){
    document.write("Os valores são iguais! <br/><br/>");
} if (valor1 > valor2) {
        document.write(`O primeiro número é maior!</br></br>`);
} else{
    document.write(`O segundo número é maior! </br></br>`);
}

// As maçãs desta estação custam R$0,30 se forem compradas
// menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
// doze. Desenvolva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra

let nMacas = 11
let precoM = 0

if(nMacas < 12){
        precoM = 0.30;
} else if(nMacas >= 12){
    precoM = 0.25
}

document.write(`O preço a pagar pelas maças será R$: ${nMacas * precoM} </br></br>`);

// Escreva um algoritmo que tenha como valores de entradas o nome
// e idade do usuário e imprima no terminal o nome, a idade e o ano
// de nascimento do usuário. Ex: “Nome: Pedro, Idade: 22 anos, nasceu
// em 2000”.
// OBS: Pegue o ano atual como base

const nU = 'Felipe'
let iU = 19;
let ano = 2023 - 19;
document.write(`Nome: ${nU}, Idade: ${iU} anos, nasceu em ${ano} </br></br>`);

// Crie um algoritmo que armazene um número inteiro positivo, e gere
// um alerta com as seguintes mensagens:
// a. “Número é par!”, se o valor armazenado for par;
// b. “Número é impar!”, se o valor armazenado for ímpar;

const numero = 10;

if(numero % 2 === 0){
    document.write(`O numero ${numero} é PAR!</br></br>`);
} else {
    document.write(`O numero ${numero} é IMPAR!</br></br>`);
}

// Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa. Escrever uma mensagem no console
// que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).

let anoA = 2023;
let anoN = 2004;
const anao = anoA - anoN;
if(anao >= 16){
    document.write(`Você poderá votar esse ano!</br></br>`);
}else{
    document.write(`Você não pode votar!</br></br>`);
}
