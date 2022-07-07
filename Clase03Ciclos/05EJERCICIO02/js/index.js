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
let contador=1
let mayorPeso=0
let menorPeso=1000000
let numeroPaqueteMayor=0
let numeroPaqueteMenor=0
let pesoTotal=0

/*
do
{
    let pesoPaquete = Number(prompt(`Ingrese el peso del paquete ${contador+1}`))

    pesoTotal = pesoTotal + pesoPaquete

    contador++

    if (mayorPeso < pesoPaquete) 
    {
        mayorPeso=pesoPaquete
        numeroPaqueteMayor=contador
    }
    
    if (menorPeso > pesoPaquete)
    {
        menorPeso=pesoPaquete
        numeroPaqueteMenor=contador
    }
}
while(contador < numPaquetes)
let promedio = pesoTotal/numPaquetes
console.log (`el mayor peso fue : ${mayorPeso} y fue el paquete nº ${numeroPaqueteMayor}
.El menor peso fue ${menorPeso} y fue el paquete nº ${numeroPaqueteMenor}. El precio promedio es ${promedio}`)
*/




for (let i=0; i<numPaquetes; i++)
{
    let pesoPaquete = Number(prompt(`Ingrese el peso del paquete ${contador}`))

    pesoTotal = pesoTotal + pesoPaquete

    if (mayorPeso < pesoPaquete) 
    {
        mayorPeso=pesoPaquete
        numeroPaqueteMayor=i+1
    }

    if (menorPeso > pesoPaquete)
    {
        menorPeso=pesoPaquete
        numeroPaqueteMenor=i+1
    }
    contador++
}
let promedio = pesoTotal/numPaquetes
console.log (`El mayor peso fue : ${mayorPeso} y fue el paquete nº ${numeroPaqueteMayor}.
.El menor peso fue ${menorPeso} y fue el paquete nº ${numeroPaqueteMenor}. El precio promedio es ${promedio}`)
