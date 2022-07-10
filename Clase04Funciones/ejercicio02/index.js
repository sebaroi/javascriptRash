

 /* 
 
    Escriba un programa que le pida al usuario su nombre y  
    muestre un menú de opciones:

    1. PEDIR CAFÉ  
    2. PEDIR MATE 
    3. FIN


    1. Si el usuario pide café o mate, debe mostrar un mensaje para 
    que el usuario ingrese un monto de dinero, 
    mostrando el precio del producto elegido
    La máquina solo recibe billetes de 1, 5 y 10 usd
    El precio del café es de 2 usd. 
    El precio del mate es de 3 usd. 

    2. Si el monto ingresado es inferior al costo del producto,
    se debe mostrar un mensaje solicitando más dinero. 

    3. Si el monto ingresado es superior al costo del producto, 
    debe imprimir las vueltas y dar las gracias

    4. Si el usuario no ingresa un monto aceptado, 
    debe mostrar un mensaje diciendo que devuelve el dinero. 

    *** DEBE USAR FUNCIONES PARA REALIZAR EL EJERCICIO ***

 */

    const  montoCafe = 2 
    const montoTe = 3
    let nombre = ""
    let elegir = null

nombreListado()
eleccion()

    //pido nombre y le doy las opciones a elegir
function nombreListado() 
{   
   nombre = prompt("Ingrese su nombre:")
   elegir = Number(prompt(nombre + "Que desea tomar: 1-CAFE / 2-MATE / 3-TERMINAR"))
}

function validarMonto(montoEscrito, montobebida)
{
   if (montoEscrito < montobebida)
               {
                  alert (`El monto del dinero es insuficiente, le falta abonar ${montoBebida-montoEscrito}`)
                  montoEscrito = Number (prompt("Ingrese el monto de la bebida selecionada"))
                  return montoEscrito
               }
}


function eleccion()
{
   switch (elegir)
   {
      case 1:
         {
            alert (`el precio del cafe es de ${montoCafe}`)
            montoEscrito = Number (prompt("Ingrese el monto de la bebida selecionada"))
            //comparo si el monto ingresado es menor a lo que vale y le pido mas plata en caso afirmativo
            while (montoEscrito < montoCafe)
            {
               montoEscrito = validarMonto(montoEscrito, montoCafe)
            }
         
            if (montoEscrito > montoCafe ) {
               alert (`${nombre} + Su vuelto es ${montoEscrito - montoCafe}`) 
            }
            
            alert(`${nombre} "Gracias por su compra`)
            
            elegir = Number(prompt(nombre + "Que desea tomar: 1-CAFE / 2-MATE / 3-TERMINAR"))
            eleccion()
         }
      break      

   case 2:
      {
         alert (`el precio del cafe es de ${montoTe}`)
         montoEscrito = Number (prompt("Ingrese el monto de la bebida selecionada"))
         //comparo si el monto ingresado es menor a lo que vale y le pido mas plata en caso afirmativo
         while (montoEscrito < montoTe)
         {
            montoEscrito = validarMonto(montoEscrito, montoTe)
         }
         // como hago para usar la misma variable 
         
      
         if (montoEscrito > montoTe ) {
            alert (`${nombre} + Su vuelto es ${montoEscrito - montoTe}`) 
         }
         
         alert(`${nombre} "Gracias por su compra`)
         
         elegir = Number(prompt(nombre + "Que desea tomar: 1-CAFE / 2-MATE / 3-TERMINAR"))
         eleccion()
      }
   break  

      case 3:      
      {

      }
      break
   }
}