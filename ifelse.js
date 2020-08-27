
/* CONDICIONALES */

/* Una sentencia condicional es una instrucción o grupo de instrucciones que se pueden ejecutar o no en función del valor de una condición*/
 

let color= prompt("Ingrese un color en Inglés");

if(color == "red"){
    document.write("<br><br><h1 style='color:red'> El color escogido es red </h1>")
} else {
    document.write("<h1 style=' color: " + color + " '>" +  "El color no es red, el color escogido fue" + " " + color + "</h1>")
}

/* OPERADORES DE COMPARACION
== IGUAL
=== ESTRICTAMENTE IGUAL- TIENEN QUE SER EL MISMO TIPO DE DATO
!= DISTINTO O DIFERENTE
!== NO IDENTICO
< MENOR QUE
<= MENOR O IGUAL QUE
> MAYOR QUE
>= MAYOR IGUAL QUE*/


/* != DISTINTO O DIFERENTE */

var año= prompt("Ingrese el año actual")

/* Si el año es diferente a 2020, se ejecutara el bloque de codigo.  */
if (año!=2020) {
    document.write("<br><br> Este es un año diferente a 2020, el año digitado fue: " + año + "<br>")
    
} else {
    document.write("Si este es el año 2020 <br>")
}

/* Si anidado MAYOR-MENOR QUE */

let nota= 3.7;

if (nota >= 4.5 && nota <= 5) {
    document.write("Felicidades has ganado la beca")
}else if (nota < 4.5 && nota >= 0) {
    document.write("Vuelve a intentarlo")
}else{
    document.write("Ingrese un número entre 0 y 5")
}

/* OPERADORES LOGICOS
&& AND Y
|| OR Ó
! NOT- Negacion, Que no se cumpla algo */

/* OR */

let pais= "Colombia"

if (pais== "Colombia" || pais=="Peru" || pais=="México") {
    document.write("<br><br> El país pertenece a Latino America")
} else {
    document.write("¿A dónde pertenece ese país?")
}

/* AND && */

var notaFinal= prompt("Ingrese su nota final")

notaFinal= parseFloat(notaFinal) /* Convertimos a decimal */
if (notaFinal<= 0 && notaFinal<=3.7) {

    document.write("<br> Pasaste la asignatura  :(")
} else if(notaFinal>=3 && notaFinal<=5) {

    document.write(" <br> Felicitaciones!. Ha aprobado la asignatura")
}else{

    alert("<br> Por favor ingrese un numero en el rango de 0 a 5")
}

/* ! NOT */


var login= true;

/* !true= false. Si no es true, debe ser false*/
if (login = !true) {
    document.write("<br>El usuario no esta conectado")
} else {
    document.write("<br>El usuario esta conectado")
}