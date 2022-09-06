
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
            Swal.fire(
            'Ponte en contacto para retirar tus productos',
            'Te esperamos',
            'success',
            )
            precioTotal.innerText =`0`
            localStorage.setItem('carrito',  JSON.stringify([]))
        }
        Swal.fire(
            'Vuelve a la pagina principal',
            'Pronto te llegara un E-mail',
            'info',
        )
    })

        })

    regreso = document.getElementById("regreso")
    regreso.addEventListener('click', () => {
        window.location.href="../../frontoffice/principal.html"
    })
