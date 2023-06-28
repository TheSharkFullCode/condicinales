// Crea la variable number y pídele al usuario que introduzca un número del 0 al 10.
// Ejercicio 1

// Escribe un condicional que evalúe si el número es mayor o igual a 5 o no: si lo es, debes mostrar por consola el string "El número es mayor o igual que 5"; si no, debes mostrar por consola el string "El número es menor que 5". Cambia el valor de number varias veces para comprobar que funciona.

/*
*
*
*
*/


//let number = prompt("introduce un numero del 0 al 10:");
// if(number >= 5){
//     // console.log("el numero "+ number + "es mayor o igual que 5");
//     console.log(`El numero introducido ${number},'es mayor que 5'`);

// }else{
//     console.log(`El numero ${number} no es mayor que 5`);
//     // console.log("el numero"+ number+"es menor que 5");

// }



/*
*
*
*
*/

// Ejercicio 2
// Igual que el ejercicio anterior, pero con una modificación:

// Si el número es mayor que 5, muestra por consola "El número es mayor que 5".
// Si, por el contrario, el número es menor que 5, muestra por consola "El número es menor que 5".
// Si no se cumple ninguna de los anteriores, muestra por consola "El número es igual a 5". Cambia el valor de number varias veces para comprobar que funciona.

/*
*
*
*
*/

// let number2 = prompt("introduce un numero del 0 al 10:");

// if(number2 > 5){
//     console.log(`El numero es mayor que 5`);

// }else if(number2 < 5){
//      console.log(`El numero es menor que 5`);
    
// }else{
//     console.log(`El numero es igual a 5`);

// }

/*
*
*
*
*/


// --------------------------------------------------------------------------------->
// Ejercicio 3
// Escribe un condicional que evalúe si number es par o no: si lo es, debes mostrar por consola el string "El número es par"; si no, debes mostrar por consola el string "El número es impar".

// let number = prompt("introduce un numero:");
// number = number %2;
// number = number.toFixed(2);

// if (number == 0){
//     console.log(`el numero es par`);
// }
// else if(number == 1){
//     console.log(`El numero es impar`);
// }else{
//     console.log(`El resto de num es:${number}`);
// }


/*
*
*
*
*/



// Ejercicio 4
// Crea dos variables: number1 y number2. Dale los valores que quieras (números). A continuación, crea los condicionales necesarios para que se muestre por consola qué número es el mayor o bien si son iguales.

// // let number1 = 170, number2 = 90;
// let number1 = "", number2 = "";
//  number1 = prompt("introduce un numero:");
//  number2 = prompt("introduce otro numero:");
// if(number1 == number2){
//     console.log(`los numeros introducidos son iguales`);
// }else if ((number1 > number2) && (number2 < number1)) {
//     console.log(`El numero mayor es:${number1}`);
    
// }else{
//     console.log(`El numero mayor es${number2}`);
// }

/*
*
*
*
*/


// Ejercicio 5
// Crea tres variables: lado1, lado2, lado3. Dale 3 valores numéricos. A continuación, crea los condicionales para que se muestre por consola si el triángulo es equilátero, isósceles o escaleno.

let lado1 =18,lado2 =11,lado3= 11;

if ( (lado1 == lado2) && (lado2 == lado3) ) {
    console.log(`El triangulo es Equilatero,'sus tres lados son iguales'`);
    
}else if ( (lado1 == lado2)  && (lado3 != lado1)) {
    console.log("Es triangulo es 'Isósceles'tiene dos lados iguales");

}else if((lado2 == lado3)||(lado3 == lado1)&&(lado1 != lado2)){
    console.log("tiene dos lados iguales");


}
else{
    console.log("todos son diferentes");
}



// Ejercicio 6
// Crea 3 variables: min, max y number3, y dale valores numéricos a cada uno. A continuación, escribe los condicionales necesarios para que se muestre por consola si el número se encuentra en el rango dado (si es mayor que min y menor que max).
// -------------------------------------------------------------------------------------------------->




// Ejercicio 7
// Crea la variable operation y reutiliza number1 y number2 del Ejercicio 4. Escribe condicionales para realizar las cuatro operaciones matemáticas básicas:
// ------------------------------------------------------------------------------------------------->
let operation =  number1 = 10, number2 = 190;
let add, sustract, multiply,divide, result = "";

if(number2 > number1){
    add = number1 + number2;
    result = add;
    console.log(result);

    sustract = number1 - number2;
    result = sustract;
    console.log(result);

    multiply = number1 * number2;
    result = multiply;
    console.log(result);

    divide = number1 / number2;
    result = divide;
    console.log(result);
}
else{
    console.log("invalide operation");
}









// Printa el resultado de number1 + number2 si la operation es “add”.
// Printa el resultado de number1 - number2 si la operation es “subtract”.
// Printa el resultado de number1 * number2 si la operation es “multiply”.
// Printa el resultado de number1 / number2 si la operation es “divide”.
// Si no se cumple ninguna de las anteriores, print Invalid operation.
// ---------------------------------------------------------------------------------------------->







// Ejercicio 8
// Crea la variable year y pídele al usuario que introduzca un año. A continuación, escribe condicionales para determinar si el año es bisiesto o no. El resultado debe ser un string que se le muestre al usuario en un pop-up.

// Bonus: repite el ejercicio usando el operador ternario.
// ------------------------------------------------------------------------------------------->


// año bisiesto 366 dias.
// no bisiesto 365
// 

//let year = prompt("introduce un año");
// year =  yea / 4;

// if(year ){

// }







// Ejercicio 9
// Usa switch para determinar el número de días que tiene un mes dado en la variable month. El valor de la variable se le pedirá al usuario (en forma de string, en inglés y en minúsculas: "january", "february", "march", etc.).

// Resultado esperado: "El mes tiene <<numero de días>> días", y debe mostrarse en un pop-up.
// ------------------------------------------------------------------------------------------------->
let january = 31;   let marz = 31;
let febrary = 28;   let april = 30;
let may = 31;       let jun = 30;
let july = 31;
let agust = 31;     let september = 30;
let octuber = 31;   let november = 30;
let dicember = 31;  

let month ="";

month = prompt("introduce un mes:'january','febrary''marz'..ect")

// function calendar(january) {
    
// }


 switch (month){

    case "january":
        console.log(january);
        break;

    case "febrary":
    console.log(febrary);

    break;

    case "marz":

        console.log(marz);
        break;

     case "april":
        console.log(april); 
        break;


    case "may":
    console.log(may);
    break;

    case "jun":
    console.log(jun);
    break;

    case "july":
    console.log(july);
    break;

    case "agust":
    console.log(agust);
    break;

    case "september":
    console.log(september);
    break;

    case "octuber":
    console.log(september);
    break;

    case "octuber":
    console.log(octuber);
    break;

    case "november":
    console.log(november);
    break;

    case "dicember":
    console.log(dicember);
    break;

 }
 alert(`El mes que has introducido es:`+month +`y tiene:${january}dias`);







// Ejercicio 10
// Usa la misma variable del ejercicio anterior (month), y escribe los condicionales necesarios para determinar la estación (primaver, verano, otoño, invierno). El resultado también debe mostrarse al usuario en un pop-up.


// ----------------------------------------------------------------->

//[... let number = 5;
// number > 0 ? console.log("Número mayor que 0") : console.log("Número menor que 0");este esta bn...]

// let number = 5;
// number >0 ? console.log("numero mayor que 0") : console.log("numero menor que 0");
//number > 0 ? console.log("numero mayor que 0"); este no funciona y me da error.

// --------------------------------------------------------------------------------->

// const age = 23;
// const ciudadano = age >= 18 ? true : false;
// console.log(ciudadano); // true

// const age = 23;
// const ciudadano = age >= 18 ? true : false;
// console.log(ciudadano);



