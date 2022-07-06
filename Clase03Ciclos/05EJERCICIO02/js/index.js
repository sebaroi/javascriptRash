/*

 Usted ha sido contratado para hacer un programa de gestión 
 de precios de una bodega. 

 Escriba un programa que pida al usuario el número de paquetes 
 que ingresaron en el día. 

 Y el peso de cada uno de los paquetes.

 Y Calcule (mostrar en consola o en un alert)
 * El mayor peso
 * El menor peso
 * El peso promedio de los paquetes

*/

let numPaquetes = Number(prompt("Ingrese numero de paquetes"))
let contador=0
let mayorPeso=0
let menorPeso=0
let numeroPaquete=0
let i=0

do
{
    let pesoPaquete = Number(prompt(`Ingrese el peso del paquete ${contador+1}`))

    //console.log(pesoPaquete)

   let pesoTotal = pesoTotal + pesoPaquete

    i++;

    if (mayorPeso < pesoPaquete)
    {
        mayorPeso=pesoPaquete
        numeroPaquete=i
    }
    else if (menorPeso >= pesoPaquete)
    {
        menorPeso=pesoPaquete
        numeroPaquete=i
    }

}
while(i < numPaquetes)

console.log (`el mayor peso fue : ${mayorPeso} y fue el paquete nº ${i}
.El menor peso fue ${menorPeso} y fue el paquete nº ${contador}. El precio promedio es ${pesoTotal/numPaquetes}`)






/*
    1. Pedirle al usuario el número de paquetes.
    2. Hasta que el usuario NO haya ingresado el peso de 
        TODOS LOS PAQUETES: 
        Pedirle al usuario, el peso de los paquetes
    3. Calcular mayor, menor y promedio
*/
51