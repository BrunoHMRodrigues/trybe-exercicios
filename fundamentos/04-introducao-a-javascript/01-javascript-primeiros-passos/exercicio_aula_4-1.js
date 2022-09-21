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