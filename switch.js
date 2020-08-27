/* SWITCH */

/*Evalua una expresión, comparando el valor de esa expresión con una instancia, case, y  ejecuta declaraciones asociadas a ese case,
así como las declaraciones en los case que siguen. */

var operacion= prompt("Seleccione una operacion: suma, resta, multiplicacion o division");

let num1= parseFloat(prompt("Ingrese un número:"))
let num2= parseFloat(prompt("Ingrese otro número:"))

operacion= operacion.toLocaleLowerCase();

switch (operacion) {

    /* parseFloat - parseInt: son un método que me permite modificar la tipología de un dato.
    Convirtiéndolos a enteros o decimales */

    case "suma": /* Si es igual a suma */
        document.write("<br>" + "El resultado de la suma es: " + (num1+num2))
        break;

    case "resta":
        document.write("<br>" + "El resultado de la resta es: " + (num1-num2))
    break;

    case "multiplicacion":  
            document.write("<br>" + "El resultado de la multiplicacion es: " + (num1*num2))
    break;

    case "division":  
            document.write("<br>" + "El resultado de la division es: " + (num1/num2))
    break;

    default:
        alert("Error, no es una de las opciones esperadas")
        break;
}

/* Opciones numericas */

var dia= 7;

switch (dia) {
    case 1:
         console.log("<br>" + "El dia es Lunes")
        break;
    case 2:
         console.log("<br>" + "El dia es Martes")
        break;
    case 3:
         console.log("<br>" + "El dia es Miercoles")
        break;
    case 4:
         console.log("<br>" + "El dia es Jueves")
        break;
    case 5:
         console.log("<br>" + "El dia es Viernes")
        break;
    case 6 && 7:
         console.log("<br>" + "Es fin de semana")
        break;

        /* No siempre debe haber un default */
}
