/*
   Pedir al usuario: 
   2 números 
   Una operación ("SUMA", "MUL")

   Y mostrar el resultado 

   
*/
 
let num1 = Number(prompt ("Ingrese el primer numero: "))
let num2 = Number(prompt ("Ingrese el segundo numero: "))
let operacion = prompt ("Ingrese SUMA o MULTI").toUpperCase() //pasa lo escrito a mayusculas

if (isNaN(num1) || isNaN(num2))
{
   alert("Los numeros son invalidos")
}
else if (operacion ==="SUMA")
{
   alert(`la suma de los numeros es: ${num1+num2}`)
}
else if (operacion ==="MULTI")
{
   alert(`La multiplicacion es: ${num1*num2}`)
}
else {
   alert("Operacion no valida")
}
