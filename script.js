/* VARIABLES */

// ECMACScript(ES5) 


/* La declaración de variables con var, permite hacer modificaciones en los valores,
al igual que let, la diferencia en estas es el alcance de las variables.

En el caso de let, permite declarar variables limitando su alcance al bloque (scope), 
declaración o expresión donde se está usando*/

// VAR DEFINE UNA VARIABLE GLOBAL O LOCAL EN FUNCIÓN SIN IMPORTAR EL ÁMBITO DEL BLOQUE

var nombre5= "Paula Lopez";

nombre5= "Paula Andrea"; //Cambia su valor
console.log(nombre5);

//ES6 --  Estándar Javascript


let nombreLet= "Laura Martínez"; /* Me permite modificar su valor */
nombreLet= "Laura Perez"; // let puede mutar o ser cambiado
console.log(nombreLet);

// const vacio; //Esta variable va a lanzar un error, ya que una constante debe tener un valor asignado en su declaración

const nombre6= "Pedro Sanchez" /* Al declara su valor no puede ser modificado y el nav nos presentará error*/
/* nombre6= Pedro Perez */ //No se le puede asignar un nuevo valor a la const nombre6
console.log(nombre6);

/*Alcance global - Alcance local */


/* Global */

var global = 0;

function verGlobal() {

    for (var i = 0; i < 5; i ++) { //for loop oo
        global=i;

    }
}

verGlobal();
console.log(global); //al imprimir global, imprime 4

/* Local */ 

function varLocal() {
    var local= "Hola, mundo!" /* Esto ya es una variable local */
    console.log(local)
}

varLocal();
/* console.log(local) // Arroja un error, ya que es una variable local */

function varPrueba() {
    var x= 70;

    if (true) { /*Valida si se cumple la función */
        var x= 50;
        console.log(x) //AQUÍ IMPRIME 50
    }
    console.log(x) //50
}

function letPrueba() {
    let y= 30;

    if (true) {
        let y= 60; /* variable diferentes, solo se queda entre sus llaves*/ 
        console.log(y) //Imprime 60
    }
    console.log(y) //Imprime 30
}

/* LET: se limita al bloque (scope)*/

/* CONS: no permite cambios una vez asignado o declarado un valor */

/* VAR: modifica la variable sin importar su blque o alcance */


let variable= document.getElementById("variable")
function name(params) {
    
}


/* FUNCIONES */

/* Las funciones tradicioonales son aquellas que se definen por la palabra reservada function */

//  function() {}

/* Las funciones anónimas son las de tipo flecha porque no se les pone nombre*/

// ()=> {}

// La buena práctica es guardar esas funciones anónimas o tipo flecha en una variable para poder reutilizarlas

// const miFuncioncita = ()=>{}


// Función convencional

function soyUnaFuncion(num1, num2) {
    
    /*Retorna un valor o el resultado del proceso.
    Finaliza la ejecución del function*/

    return num1+num2;
}

// Función Anónima:

/* Las funciones anónimas o funciones lambda son un tipo de funciones que se declaran sin nombre de función y se alojan en el interior de una 
variable y haciendo referencia a ella cada vez que queramos utilizarla: */


let nombre= (num1, num2)=> num1 + num2; // ESTO ES UN FUNCIÓN ANÓNIMA
console.log(nombre(5,3))

/* VENTAJAS */

// Sintaxis limpia y simple
// La función es anónima, es decir, la estructura es como declarar una variable que nos permite reutilizarla las veces que quedamos

// Función anónima "saludo"

let hola= function() {
    return "Hola,cómo estás?"
}

// console.log(saludo); // me retorna la estructura
console.log(hola()); //Me retorna el "Hola, cómo estás?"




