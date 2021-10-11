
var mujeres = ["Denise", "Paola", "Andrea", "Alma", "Daniela", "Fernanda", "Laura", "Galicia", "Estefania", "Ariana", "Miriam", "Azul", "Penelope"];
var hombres = ["Jose", "Alex", "Armando", "Harvey", "Cristofer", "Jorman", "Aldrich", "Emmanuel", "Mijares", "Cristian"];
var idM = ["1A", "2A", "3A", "4A", "5A", "6A", "7A", "8A", "9A", "10A", "11A", "12A", "13A"];
var idH = ["1B", "2B", "3B", "4B", "5B", "6B", "7B", "8B", "9B", "10B"];
var EdadM = ["20", "22", "21", "24", "25", "23", "26", "27", "28", "29", "30", "31", "32"];
var EdadH = ["18", "19", "20", "21", "22", "23", "24", "25", "26", "27"];
for (var x = 0; x < mujeres.length; x++) {
    console.log(mujeres[x]);
    
}
for (var y = 0; y < hombres.length; y++) {
    console.log(hombres[y])
}


var equipo1 = {
    "hombres": {
        "integrante1": {
            "nombre": "jorman",
            "no_registro": "0",
            "edad": 18,
            "sexo": "H",
            "telefono": "5500000000",
            "habilidades": {
                habilidad1: "astucia",
                habilidad2: "valentia",
                habilidad3: "velocidad",
                habilidad4: "honestidad",
                habilidad5: "lealtad",
            },
            "equipos": {
                equipo1: "america",
                equipo2: "chivas",
                equipo3: "pachuca",
                equipo4: "santos",
                equipo5: "cruz azul"
            }
        },
    },
    "mujeres": {

    }
}
var equipo2 = {
}
var equipo3 = {

}
console.log(equipo1, equipo2, equipo3);