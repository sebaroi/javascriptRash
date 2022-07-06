/*
    Escriba un programa que pida al usuario:
    Una operacion: SUMA / MUL 
    2 números
    e imprima en consola, el resultado de la operación.
    
    Complete el ejercicio, con DIVISION y RESTA. 

    SI TRATA DE DIVIDIR POR 0; MUESTRE UN ERROR

*/

let operacion = prompt ("Ingrese una operacion SUMA / RESTA / MULTI / DIV").toUpperCase() //pasa lo escrito a mayusculas
let num1 = Number (prompt("Ingrese el primer numero: "))
let num2 = Number (prompt("Ingrese el segundo numero: "))

if (isNaN(num1) || isNaN(num2)) 
  {
    alert ("Numeros no validos")
  }
  
  else 
  {
    switch (operacion) {
        case `SUMA`:
            {
                let resultado = num1+num2
                alert (`La suma de los numeros es: ${resultado}`)
                break
            }
        case `RESTA`:
            {
                let resultado = num1-num2
                alert(`la resta de los numeros es: ${resultado}`)
                break
            }   
        case `MULTI`:
            {
                let resultado = num1*num2
                alert(`la multiplicacion de los numeros es: ${resultado}`)
                break
            }  
        case `DIV`:
            {
                if (num2 === 0 )
                {   
                    alert("ERROR, el numero no se puede dividir por CERO")
                }
                else 
                {
                let resultado = num1/num2
                alert(`la division de los numeros es: ${resultado}`) 
                }
            }       
    }

  } 


/*
  else if (operacion === `SUMA`)
  {
    let resultado = num1+num2
    alert (`La suma de los numeros es: ${resultado}`)
  }

  else if (operacion === `RESTA`)
  {
    let resultado = num1-num2
    alert(`la resta de los numeros es: ${resultado}`)
  }

  else if  (operacion === `MULTI`)
  {
    let resultado = num1*num2
    alert(`la multiplicacion de los numeros es: ${resultado}`)
  }

 else if (operacion === `DIV`)
 {
    if (num2 === 0 )
    {   
        alert("ERROR, el numero no se puede dividir por CERO")
    }
    else 
    {
        let resultado = num1/num2
        alert(`la division de los numeros es: ${resultado}`) 
    }
}   

 else {
    alert(`la operacion es invalida`)
 }

*/