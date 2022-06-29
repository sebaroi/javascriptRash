
/*
    Escriba un programa que le pida a un usuario 2 números y muestre:

    A. El resultado de la suma en la consola
    B. El resultado de la multiplicaión en un alert


    Debe indicarle al usuario la operación ejecutada. 

    Por ejemplo, si el usuario ingresa los números 8 y 10

    Debe mostrar un alert que diga: 
    "La multiplicación de los números ingresados es: 80"

    Y en la consola: 
    "La suma de los números ingresados es: 18

*/



let numero1 = Number (prompt ("Ingrese el primer numero: "))
let numero2 = Number (prompt ("Ingrese el segundo numero: "))
let suma = numero1 + numero2
let multi = numero1 * numero2
alert(`La multiplicacion de los numeros ingresados es:  ${multi}`)
//console.log ("La suma de los numeros ingresados es: ",suma)   Es lo mismo que el de abajo
 console.log (`La suma de los numeros ingresados es: ${suma}`)