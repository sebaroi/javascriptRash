
const precioMother = 20000
const precioTeclado = 4500
const precioMouse = 2300
const precioNotebook = 108000
const precioPc = 67000
precioEscrito = 0
producto =""
precio = 0

elegir()
eleccion()

function elegir()
{
    producto = prompt ("Elija el producto que desea comprar: MOTHER, TECLADO, MOUSE, NOTEBOOK, PC, SALIR").toUpperCase()
}


function validar(precioEscrito,precio)
{
    if (precioEscrito < precio)
    {
        alert (`El monto ingresado es insuficiente, Recuerde que el precio de su producto es $${precio}, le fataria abonar $${precio-precioEscrito}`)
        precioEscrito = Number (prompt (`Ingrese el monto del producto: `))
        return precioEscrito
    }
}


function valorProducto(producto, precio)
{
    alert (`El valor del ${producto} es $ ${precio} `)
    precioEscrito = Number (prompt (`Ingrese el monto del producto: `))
    return precioEscrito
}


function eleccion()
{
    switch (producto)
    {
        case `MOTHER`:
            {
                valorProducto()
            //alert (`El valor del ${producto} es $ ${precioMother} `)
            //precioEscrito = Number (prompt (`Ingrese el monto del producto: `))
            while (precioEscrito < precioMother)
            {
                precioEscrito = validar (precioEscrito, precioMother) 
            }
            if (precioEscrito > precioMother ) 
            {
                alert (`Su vuelto es ${precioEscrito - precioMother}`) 
            }
                alert(`"Gracias por su compra"`)
                elegir()
                eleccion()    
            }
            break
        
        case `TECLADO`:
            {
            alert (`El valor del ${producto} es $ ${precioTeclado} `)
            precioEscrito = Number (prompt (`Ingrese el monto del producto: `))
            while (precioEscrito < precioTeclado)
            {
                precioEscrito = validar (precioEscrito, precioTeclado) 
            }
            if (precioEscrito > precioTeclado ) 
            {
                alert (`Su vuelto es ${precioEscrito - precioTeclado}`) 
            }
                alert(`"Gracias por su compra"`)
                elegir()
                eleccion()    
            }
            break
        
        case `MOUSE`:
            {
            alert (`El valor del ${producto} es $ ${precioMouse} `)
            precioEscrito = Number (prompt (`Ingrese el monto del producto: `))
            while (precioEscrito < precioMouse)
            {
                precioEscrito = validar (precioEscrito, precioMouse) 
            }
            if (precioEscrito > precioMouse ) 
            {
                alert (`Su vuelto es ${precioEscrito - precioMouse}`) 
            }
                alert(`"Gracias por su compra"`)
                elegir()
                eleccion()    
            }
            break
        
        case `NOTEBOOK`:
            {
            alert (`El valor del ${producto} es $ ${precioNotebook} `)
            precioEscrito = Number (prompt (`Ingrese el monto del producto: `))
            while (precioEscrito < precioNotebook)
            {
                precioEscrito = validar (precioEscrito, precioNotebook) 
            }
            if (precioEscrito > precioNotebook ) 
            {
                alert (`Su vuelto es ${precioEscrito - precioNotebook}`) 
            }
                alert(`"Gracias por su compra"`)
                elegir()
                eleccion()    
            }
            break
        
        case `PC`:
            {
            alert (`El valor del ${producto} es $ ${precioPc} `)
            precioEscrito = Number (prompt (`Ingrese el monto del producto: `))
            while (precioEscrito < precioPc)
            {
                precioEscrito = validar (precioEscrito, precioPc) 
            }
            if (precioEscrito > precioPc ) 
            {
                alert (`Su vuelto es ${precioEscrito - precioPc}`) 
            }
                alert(`"Gracias por su compra"`)
                elegir()
                eleccion()    
            }
            break
        
        case `SALIR`:
            {
                    
            }
            break
    }
}