// var n1 = 10;
// var n2 = 5;
// var operacion = "perro";
// var total = 0;

// if(operacion == "suma"){
//     total = n1 + n2;
// }

// if(operacion == "resta"){
//     total = n1 - n2;
// }

// if(operacion == "multiplicacion"){
//     total = n1 * n2;
// }

// if(operacion == "division"){
//     total = n1 / n2;
// }
// console.log(total);


// --------------------------------------------------
// var n1 = 10;
// var n2 = 5;
// var operacion1 = "resta";
// var operacion2 = "division";
// var total1 = 0;
// var total2 = 0;

// if(operacion1 == "suma"){
//     total1 = n1 + n2;
// }else{
//     total1 = n1 - n2;
// }

// if(operacion2 == "division"){
//     total2 = n1 / n2;
// }else{
//     total2 = n1 * n2;
// }

// console.log("El resultado de la operacion 1 = "+ total1);
// console.log("El resultado de la operacion 2 = "+ total2);


//----------------------------------------------------------------------------------------------------
// -- Constante
// const hola = "jeje";
// console.log(hola);
// hola = "jejeje";
// console.log(hola);

// -- Variable
// var ok = "HOla mundo";
// console.log(ok);
// ok = "Saludos desde otra linea de codigo";
// console.log(ok);


// -- Variable para caso
var operacion = "suma";
var n1 = 10;
var n2 = 5;
switch (operacion) {
    case "suma":
        if (n1 < n2) {
            console.log("Operacion es suma y n1 es menor a n2");
        } else {
            console.log("Operacion es suma y n2 es menor a n1");
        }
        break;
    case "resta":
        console.log("La operacion es resta");
        break;
    case "multiplicacion":
        console.log("La operacion es multiplicacion");
        break;
    case "division":
        console.log("La operacion es division");
        break;
    default:
        console.log("No se reconoce la operacion");
        break;
}











