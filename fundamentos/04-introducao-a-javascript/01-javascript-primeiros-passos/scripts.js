//Exercicio foguetinho 01

// let myName = "Bruno";
// const birthCity = "Natal";
// let birthYear = 1990;

// Console.log(myName);
// console.log(birthCity);
// console.log(birthYear);

// birthYear = 2030
// console.log(birthYear);

// birthCity = Recife;
// console.log(birthCity); //Erro pois mudamos valor de uma constante!

// Exercício Assíncrono 01
// let patientId = '50';
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';

// console.log(typeof patientAge)
// console.log(typeof patientId)

//exercicio foguetinho 02

// let base = 5
// const height = 8
// area = base * height
// const perimeter = 2*base + 2*height

// console.log(base)
// console.log(height)
// console.log(area)
// console.log(perimeter)

//exercicio foguetinho 03

// let nota = 40;
// if (nota >= 80) {
//     console.log("Parabéns, você foi aprovada(o)!")
// } else if (nota <80 && nota >= 60) {
//     console.log("Você está na nossa lista de espera")
// } else {
//     console.log("Você foi reprovada(o)")
// }

// exercicio assíncrono 02 &&

// const currentHour = 7;

// if (currentHour >= 22) {
//     message = "Não deveríamos comer nada, é hora de dormir"
// } else if (currentHour >= 18 && currentHour <22){
//     message = "Rango da noite, vamos jantar :D"
// } else if (currentHour >= 14 && currentHour <18){
//     message = "Vamos fazer um bolo pro café da tarde?"
// } else if (currentHour >= 11 && currentHour<14){
//     message = "Hora do almoço!!!"
// } else if (currentHour >= 4 && currentHour < 11){
//     message = "Hmmm, cheiro de café recém-passado"
// }

// console.log(message)

//exercicio assíncrono 03 ||

// let weekDay = "quarta-feira";

// if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira"){
//     console.log("Oba, mais um dia de aprendizado na Trybe >:D")
// } else {
//     console.log("FINALMENTE, descanso merecido UwU")
// }

//exercicio assíncrono 04 switch/case

let status = "aprovada";

switch (status){
    case "aprovada":
        console.log("Parabéns, você foi aprovada(o)!");
        break;
    case "lista":
        console.log("Você está na nossa lista de espera");
        break;
    case "reprovada":
        console.log("Você foi reprovada(o)");
        break;
    default:
        console.log("Informação incorreta");
}

