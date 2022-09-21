// exercicio 1

const a = 5;
const b = 10;

//programa 1
let sum = a + b;

//programa 2
let sub = a -b;

//programa 3
let mult = a * b;

//programa 4
let div = a / b

//programa 5
let mod = a % b;

//exercicio 2

if (a > b) {
    console.log(a);
} else if (a < b) {
    console.log(b);
} else {
    console.log("são iguais");
}

//exercicio 3
const c = 15;

if (a > b && a > c) {
    console.log(a);
} else if (b > a && b > c) {
    console.log(b);
} else {
    console.log(c);
}

//exercicio 4
if (a > 0) {
    console.log("Positive");
} else if (a < 0) {
    console.log("Negative");
} else {
    console.log("zero");
}

//exercicio 5
const ang_a = 45;
const ang_b = 45;
const ang_c = 90;
let ang_sum = ang_a + ang_b + ang_c;

if (ang_a < 0 || ang_b < 0 || ang_c < 0) {
    console.log("Todos os ângulos precisam ter um valor válido (maiores que 0");
} else if (ang_sum === 180) {
    console.log("True");
} else {
    console.log("False");
}

//exercicio 6
let peca = "Bispo"
peca = peca.toLowerCase()
switch (peca) {
    case "peão":
        console.log("1 casa à frente");
        break;
    case "torre":
        console.log("vertical ou horizontal");
        break;
    case "bispo":
        console.log("diagonal");
        break;
    case "cavalo":
        console.log("2 em uma direção + 1 perpendicular");
        break;
    case "rainha":
        console.log("qualquer direção");
        break;
    case "rei":
        console.log("1 casa qualquer direção");
        break;
    default:
        console.log("nome de peça inválida");
}

//exercicio 7

const nota = 70;

if (nota >= 90 && nota <= 100) {
    console.log("A");
} else if (nota >= 80) {
    console.log("B");
} else if (nota >= 70) {
    console.log("C");
} else if (nota >= 60) {
    console.log("D");
} else if (nota >= 50) {
    console.log("E");
} else if (nota < 50 && nota >= 0) {
    console.log("F");
} else {
    console.log("nota inválida");
}

//exercicio 8 - foguetinho
if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
    console.log("ao menos um é par");
} else {
    console.log("nenhum deles é par");
}

//exercicio 9
if (!(a % 2 === 0) || !(b % 2 === 0) || !(c % 2 === 0)) { //poderia utilizar a % 2 === 1
    console.log("ao menos um é impar");
} else {
    console.log("nenhum deles é impar");
}

//exercicio 10
const custo = 20;
const valor = 40;
let custoTotal = (custo * 1.20);
let lucro = 1000 * (valor - custoTotal);

if (custo < 0 || valor < 0) {
    console.log("Todos os valores precisam ser válidos");
} else {
    console.log(lucro);
}

//exercicio 11
const salarioBruto = 3000;
let inssAliquota = null;
let salarioBase = null
let irAliquota = null;
let irParcela = null;

if (salarioBruto <= 1556.94 && salarioBruto >= 0) {
    inssAliquota = 0.08;
} else if (salarioBruto <= 2594.92) {
    inssAliquota = 0.09;
} else if (salarioBruto <= 5189.82) {
    inssAliquota = 0.11;
} else if (salarioBruto > 5189.82) {
    inssAliquota = 570.88 / salarioBruto 
} else {
    console.log("Salário Bruto precisa ser maior do que 0");
}

salarioBase = salarioBruto - (salarioBruto * inssAliquota);

if (salarioBase <= 1903.98 && salarioBruto >= 0) {
    irAliquota = 0;
    irParcela = 0;
} else if (salarioBase<= 2826.65) {
    irAliquota = 0.075
    irParcela = 142.80;
} else if (salarioBase<= 3751.05) {
    irAliquota = 0.15
    irParcela = 354.80;
} else if (salarioBase<= 4664.68) {
    irAliquota = 0.225
    irParcela = 636.13;
} else if (salarioBase > 4664.68) {
    irAliquota = 0.275
    irParcela = 869.36;
} else {
    console.log("Salário Bruto precisa ser maior do que 0");
}

let salarioLiquido = salarioBase - ((salarioBase * irAliquota) - irParcela);
console.log(salarioLiquido);
