
var dinero = 5;

if (dinero > 10) {

    console.log("compra coca");
} else {
    console.log("compra boing");
}

//siempre pide variable el switch//

var dinero = 10;


switch (dinero) {
    case dinero > 10:
        console.log("compra coca");
        break;
    case dinero < 5:
        console.log("compra cerveza");
        break;
    default:
        console.log("no hay dinero");
        break;
}



var nombre = "pedro";
var edad = 15;
switch (nombre) {
    case "pedro":
        if (edad > 18) {
            console.log("pedro es mayor");
        } else {
            console.log("pedro es menor");
        }
        break;
    case juan:
        console.log("compra cerveza");
        break;
    default:
        console.log("no hay nombres");
        break;
}

//5if
//5swith//
//5 ifswiths//


var name1 = "Pedro";
var name2 = "macaco";

if (name2 == name1) {
    console.log("Que gusto de verte xd " + name2);
} else if (name1 == name1) {
    console.log("Entonces eres " + name1);
} else {
    console.log("No sé quién eres");
}



var mayonesa = 12;
var dinero = 10;
var cambio = 2;

if (mayonesa < dinero) {
    console.log("compra mayonesa");
} else {
    console.log("Te hacen falta " + cambio + (" pesos"));
}


var localidad = "san pedro";
var localidad2 = "tecamac";
var persona1 = "juan";
var persona2 = "pedro";

if (persona1 == persona1) {
    console.log(persona1 + " Ira a " + localidad2);

} else {
    console.log(persona2 + " Ira a " + localidad);
}


var personaje = "Monse";
var palabra = "si";

if (palabra == "si") {
    console.log(" Iras a la carcel " + personaje);
} else {
    console.log(" Iras a casa " + personaje);
}


var year = "2021";
var yearcualquiera = "2021";
var op = (yearcualquiera - year);

if (year <= yearcualquiera) {

    console.log("para llegar a esa fecha faltan " + op + " years");
} else { console.log("por favor ingresa un anio que sea mayor que la actualidad") }


var color = "amarillo";
switch (color) {
    case "negro":
        console.log("el color que estas solicitando esta agotado");
        break;
    case "amarillo":
        console.log("el color amarillo tenemos 4 exitenciales");
        break;
}

var perro = "pastor aleman";

switch (perro) {
    case "pastor aleman":
        console.log("Este perro vale 5200 pesos");
        break;
    case "pastor velga":
        console.log("Este perro vale 1000 pesos");
        break;
    case "labrador":
        console.log("Este perro vale 4200");
        break;
    default:
        console.log("No se encontro el perro ")

}
var bomba = "2"
switch (bomba) {
    case "1":
        console.log("esto es una bomba de agua");
        break;
    case "2":
        console.log("Eso es una bomba de gasolina");
        break;
    case "3":
        console.log("Esto es una bomba de aire");
        break;
    case "4":
        console.log("Es una bomba de pasta alimenticia");
        break;
    default:
        console.log("No se detecto el tipo de bomba para describirla, por favor ingrese un numero del 1 al 4");
}

var frutas = "peras";
switch (frutas) {
    case "manzanas": console.log("el kilo de manzanas esta a 15 pesos ");
        break;
    case "peras":
        console.log("el kilo de peras esta en  18 pesos");
        break;
    case "uvas":
        console.log("el kilo de uvas esta en 35 pesos");
        break;
    case "arandanos":
        console.log("el kilo de arandanos esta en 50 pesos");
        break;
    case "platanos":
        console.log("el kilo de platanos esta en 10 peso");
        break;
    default:
        console.log("la fruta que introduciste no esta disponible en la tienda");
}


var operacion = "resta";

switch (operacion) {
    case "suma":
        console.log("la operacion es suma")
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

var carrera = "Mercadotecnia";
switch (carrera) {
    case "Software":
        console.log("Felicidades, has entrado a la mejor carrera del mundo¡¡¡¡");
        break;
    case "Mercadotecnia":
        console.log(" En esta carrera te vamos a dar informacion a cerca de lo que se trabaja...");
        break;
    case "Quimico":
        console.log("En esta carrera se es muy demandada a los altos rango por lo cual al estudiar esta carrera se...");
        break;
    case "Mecatronica":
        console.log("en la mecatronica encontraras muchas forma de creacion y mantenimiento de maquinas industriales...");
        break;
    case "Robotica":
        console.log("en la robotica aprenderas a crear y mejorar la tecnologa para los movimientos de los robots y crear...");
        break;
    case "Turismo":
        console.log("El turismo es muy usada para los que son guias para los extranjeros y esta carrera te enseñara... ");
        break;
    default:
        console.log("Disculpe las molestias, no contamos con esa carrera");
}








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




var frutas = "arandanos";
var precioarandanos = "50"
var kilos = "10";
var op = (precioarandanos * kilos);
switch (frutas) {
    case "manzanas":
        console.log("el kilo de manzanas esta a 15 pesos ");
        break;
    case "peras":
        console.log("el kilo de peras esta en  18 pesos");
        break;
    case "uvas":
        console.log("el kilo de uvas esta en 35 pesos");
        break;
    case "arandanos":
        if (kilos <= 10) {
            console.log(" el precio de los " + kilos + " kilos es de " + op + " pesos.");
        } else {
            console.log("no te puedo vender mas de 10 kilos, disculpe la incoveniencia")
        }
        break;
    case "platanos":
        console.log("el kilo de platanos esta en 10 peso");
        break;
    default:
        console.log("la fruta que introduciste no esta disponible en la tienda");
}




var aceptapromocion = "si";
var perro = "pastor velga";
var precioaleman = "5200";
var preciovelga = "10000";
var preciolabrador = "4200";
var descuento = "920";
var op1 = (preciovelga - descuento);
switch (perro) {
    case "pastor aleman":
        console.log("Este perro vale 5200 pesos");
        break;
    case "pastor velga":
        if (aceptapromocion == "si") {
            console.log("en la compra del pastor velga te desconamos " + descuento);
            console.log("el precio del pastor velga es de " + op1 + " pesos");
        } else {
            console.log("el precio del perro es de " + preciovelga)
        }
        break;
    case "labrador":
        console.log("Este perro vale 4200");
        break;
    default:
        console.log("No se encontro el perro ");
}

var tipocarro = "fer";
var preciomustang = "526600";
var preciochevy = "250000";
var preciofer = "580000";
var preciobmw = "695000";
var anio = "2015";
var descuento = "65900"
var desc = (preciomustang - descuento);
switch (tipocarro) {
    case "mustang":

        if (anio >= 2010) {
            console.log("felicidades, tienes un desuento por adquirir un carro del anio " + anio + " el precio del carro que vas a adquirir es de  " + desc + " pesos");
            break;
        } else {
            console.log("el precio del mustang es de " + preciomustang + " lamentablemente no ubtiviste descuento por el año del auto");
        }
        break;
    case "chevy":
        console.log("el precio del chevi es de " + preciochevy);
        break;
    case "fer":
        console.log("el precio del ferrari es de " + preciofer);
        break;
    case "bmw":
        console.log("el precio del BMW es de " + preciobmw);
        break;
    default:
        console.log("no se identifico ningun carro ");
}