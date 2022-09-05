
//armo el carrito final
 const contenedorCarrito = document.getElementById('carritoContenedor')

    const carrLocalStorage=  JSON.parse(localStorage.getItem('carrito'));
    contenedorCarrito.innerHTML=""
    carrLocalStorage.forEach((producto) => {

        const div = document.createElement('div')
        div.className = ('productoFinal')
        div.innerHTML = `
        <p>${producto.nombre}</p>
        <p>Precio:$ ${producto.precio}</p>
        <p>Cantidad: <span id="cantidad">${producto.cantidad} </span></p>
        <hr>
        `
        contenedorCarrito.appendChild(div)
        localStorage.setItem('carrito',  JSON.stringify(carrLocalStorage))
    })
    contadorCarrito.innerText = carrLocalStorage.length
   precioTotal.innerText = carrLocalStorage.reduce((acc, producto) => acc+ producto.precio * producto.cantidad, 0)
 
//boton reservar
const reservar= document.getElementById('reservar')
reservar.addEventListener('click', () => {
    Swal.fire({
        title: 'Desea terminar de pagar sus productos?',
        text: "Falta poco para que sean tuyos!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, quiero pagar!'
        }).then((result) => {
        if (result.isConfirmed) {
            precioTotal.innerText =`0`
            localStorage.setItem('carrito',  JSON.stringify([]))
            Swal.fire(
            'Ponte en contacto para retirar tus productos',
            'Te esperamos',
            'success',
            )
        }
    })
    Swal.fire(
        'The Internet?',
        'That thing is still around?',
        window.location.href='principal.html',
        'question'
      )
        })
/*         alert("esperar")
        window.location.href='principal.html' */

//pasa muy rapido no logro ver el mensaje

/* Swal.fire('Felicitaciones')
window.location.href='principal.html' */

