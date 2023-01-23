// ejercicio 1

// let ensaladaDeFrutas = ["manzana", "banana", "pera", "kiwi", "sandia"];

// for (let i = 0; i < 5; i++) {
//     console.log("Las frutas que hay en la ensalada son: " + ensaladaDeFrutas[i])
// }

// ejercicio 2 

// const edades = [84, 32, 12, 4, 10, 2]

// let suma = 0
// for (i = 0; i < edades.length; i++) {
//     suma = suma + edades[i]
// };
// console.log(suma / edades.length)

// ejercicio 3
// Haga un programa que filtre el arreglo con un for y devuelva uno nuevo con el nombre de
// sus amigos. Si un nombre tiene exactamente 4 letras, ¡puedes estar seguro que es amigo
// tuyo! De lo contrario, no lo son.
// const amigo = [“Ryan”, “Kieran”, “Mark”, “Miguel”]
// El resultado esperado es [“Ryan”, “Mark”]

// const amigo = ["Ryan", "Kieran", "Mark", "Miguel"]
// for (let i = 0; i < amigo.length; i++) {
//     if (amigo[i].length === 4) {
//         console.log(amigo[i])
//     }
// };

// ejercicio 4
// const listaDeSuper = ["jabon", "pasta", "azucar", "arroz", "tomates"];
// listaDeSuper.shift();
// listaDeSuper.push("shampoo");
// console.log(listaDeSuper);
// console.log(listaDeSuper.indexOf("shampoo"))

// ejercicio 5

// function saludo () {
//     alert("buenas noches")
//     console.log(saludo())
// }

// ejercicio 6
function calculoMayor(num1, num2) {
    if (num1 > num2) {
        alert(num1 + "es mayor" + num2);
    } else if (num2 < num1) {
        alert(num2 + "es mayor que" + num1);
    }
}