// ejercicio 1

let ensaladaDeFrutas = ["manzana", "banana", "pera", "kiwi", "sandia"];

for (let i = 0; i < 5; i++) {
    console.log("Las frutas que hay en la ensalada son: " + ensaladaDeFrutas[i])
}

// ---------------------------------------------------------------------------------

// ejercicio 2 

const edades = [84, 32, 12, 4, 10, 2]

let suma = 0
for (i = 0; i < edades.length; i++) {
    suma = suma + edades[i]
};
console.log(suma / edades.length)

// ---------------------------------------------------------------------------------

// ejercicio 3
// Haga un programa que filtre el arreglo con un for y devuelva uno nuevo con el nombre de
// sus amigos. Si un nombre tiene exactamente 4 letras, ¡puedes estar seguro que es amigo
// tuyo! De lo contrario, no lo son.
// const amigo = [“Ryan”, “Kieran”, “Mark”, “Miguel”]
// El resultado esperado es [“Ryan”, “Mark”]

const amigo = ["Ryan", "Kieran", "Mark", "Miguel"]
for (let i = 0; i < amigo.length; i++) {
    if (amigo[i].length === 4) {
        console.log(amigo[i])
    }
};

// ---------------------------------------------------------------------------------

// ejercicio 4
const listaDeSuper = ["jabon", "pasta", "azucar", "arroz", "tomates"];
listaDeSuper.shift();
listaDeSuper.push("shampoo");
console.log(listaDeSuper);
console.log(listaDeSuper.indexOf("shampoo"))

// ejercicio 5

function saludo() {
    alert("buenas noches")

}

// ---------------------------------------------------------------------------------


// ejercicio 6
const calculoMayor = (num1, num2) => {
    if (num1 > num2) {
        alert(num1 + " Es mayor")
    } else if (num2 > num1) {
        alert(num2 + " Es mayor")
    } else {
        alert("Los numeros son iguales")
    }
}
console.log(calculoMayor(2, 5))

// ---------------------------------------------------------------------------------

// ejercicio 7

const amigo1 = ["Ryan", "Kieran", "Mark", "Miguel"]
const amigo2 = ["Ringo", "Jhon", "Paul", "George", "Ada", "Marie"]
let filtrarAmigos = (arr) => {
    const amigo = []
    for (let i = 0; i < arr.length; i++) {
        let numero = arr[i]
        if (numero.length === 4) {
            amigo.push(arr[i])
        }
    }
    if (amigo.length > 0) {
        console.log("Tus amigos son" + amigo)
    } else {
        console.log("No tené amigos");
    }
}
filtrarAmigos(amigo1)
filtrarAmigos(amigo2)

// ---------------------------------------------------------------------------------

// ejercicio 8

const dado = [1, 2, 3, 4, 5, 6];

function tirarDado() {
    console.log(dado[(Math.floor(Math.random() * 6))])
}

// ---------------------------------------------------------------------------------

// Ejercicio 9: Creando y consultando un objeto
// Crea un objeto con el nombre toDoList debería tener las siguientes propiedades y valores:
// ● tipo de tarea: un string que diga "Compras" (ojo con los espacios en el nombre de la
// propiedad, tienes que poner entre comillas si tiene espacios)
// ● dia: un string que indique el día a realizar la tarea.
// ● productos: un array con los nombres de los productos.
// ● cantidad de productos: un número que indica la cantidad de productos de las
// compras. (Recuerda los espacios en el nombre de la propiedad)
// ● estado: "pendiente"
// ● notificacion: un método(una función) que haga una alerta con el siguiente mensaje
// "Esta tarea tiene una prioridad urgente!".
// Ahora desde la consola extrae estos valores de las siguientes formas:
// 1. El día de la compra usando dot notation.
// 2. El tipo de tarea usando bracket notation.
// 3. Extrae la cantidad de productos usando bracket notation.
// 4. Ejecuta el método (función) de la propiedad notificación (tienes que extraerlo del objeto y
// recuerda que es una función).

let toDoList = {
    tipoDeTarea: "Compras",
    dia: "Martes",
    productos: ["huevo", "leche", "harina"],
    cantidadDeProductos: 3,
    estado: "pendiente",
    notification: alerta = () => {
        alert("Esta tarea tiene una prioridad urgente D:")
    }
};
console.log(toDoList.dia)
console.log(toDoList["tipoDeTarea"])
console.log(toDoList["cantidadDeProductos"])
console.log(toDoList.notification());;

// ------------------------------------------------------------------------------------

// ejercicio 10

const superHeroes = {
    "squadName": "Super Hero Squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [{
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
        },
        {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": ["Million tonne punch", "Damage resistance", "Superhuman reflexes"]
        }
    ]
}
console.log(superHeroes["squadName"]);
console.log(superHeroes.members[1].name)
console.log(superHeroes.members[1].powers[2])
console.log(superHeroes.members[1].age)

// ----------------------------------------------------------------------------------

// trabajos avanzados
// 1

const amigo = ["Ryan", "Kieran", "Mark", "Miguel"]
let result = amigo.filter(amigo => amigo.length === 4);
console.log(result)

// ---------------------------------------------------------------------------------

// 2

const frases = ["Labore sea dolor.", "Justo rebum dolor.", "Stet lorem amet."];
let exclama = frases.map(function(frasesExclamadas) {
    return frasesExclamadas + "!";
});
console.log(frases);
console.log(exclama);