
/* const usuarios = document.getElementById('usuarios')

usuarios.addEventListener('click', () => {
    window.location.href="../login/login.html"
    })
 */

 //   const nodoPrincipal = document.getElementById("contenedorPerifericos")



 const categorias = ["placas de Video", "mother", "Notebooks", "monitores" ]
 const nodoPrincipal = document.getElementById("contenedorProductos")
 const contenedorCarrito = document.getElementById('carritoContenedor')
 const botonVaciar = document.getElementById('vaciarCarrito')
 const contadorCarrito = document.getElementById('contadorCarrito')
 const cantidad = document.getElementById('cantidad')
 const precioTotal = document.getElementById('precioTotal')
 const cantidadTotal = document.getElementById('cantidadTotal')
 const botonProd = document.getElementById('botonProd')


 let carrito = []


if(localStorage.getItem('carrito') == null || localStorage.getItem('carrito') == 'null')
localStorage.setItem('carrito',  JSON.stringify(carrito))


botonVaciar.addEventListener('click', () => {
    Swal.fire({
        title: 'Desea vaciar el carrito?',
        icon: 'ATENCION',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'BORRAR CARRITO!'
      }).then((result) => {
        if (result.isConfirmed) {
            //localStorage.clear(carrito)
            //carrito = []
            precioTotal.innerText =`0`

            localStorage.setItem('carrito',  JSON.stringify([]))
            actualizarCarrito()
          Swal.fire(
            'BORRADO!',
            'EL CARRITO SE VACIO',
            'HECHO'
          )
        }
      })
})


if(localStorage.getItem('productos') == null || localStorage.getItem('productos') == 'null')
    localStorage.setItem('productos',  JSON.stringify(productos))

const prodLocalStorage=  JSON.parse(localStorage.getItem('productos'));
prodLocalStorage.forEach((producto)=>{
    const divProducto = document.createElement("div")
    divProducto.className=" col-lg-3 col-md-4 col-sm-6 "
    divProducto.innerHTML=`
                <div class="marcoProducto">
                    <div class="imagenProducto">
                        <img src=${producto.imagen}>
                    </div>
                    <div class="textoProducto">
                        <p>${producto.nombreProdu}</p>
                        <p>$${producto.precio}</p>
                        <hr>
                        <div class="botonComprar" class="btn btn-primary" >
                            <button id="agregar${producto.sku}" class="button" <i class="fas fa-shopping-cart"></i>COMPRAR</button>
                        </div>
                    </div>
                </div> `
    nodoPrincipal.appendChild(divProducto);
    let element= `agregar${producto.sku}`

    const boton = document.getElementById(element)
    boton.addEventListener('click', () => {
    agregarAlCarrito(producto)
    })
})


let productosEnCarrito=0
let existe
// let newcar= JSON.parse(localStorage.getItem('carrito'));
function agregarAlCarrito (producto)  {
const estaEnElCarrito = carrito.find(carrito => carrito.sku == producto.sku)
    if (!estaEnElCarrito) {
        carrito.push({nombre: producto.nombreProdu, precio: producto.precio, sku: producto.sku, cantidad: 1})
    } else {
        const index = carrito.indexOf(estaEnElCarrito)
        carrito[index].cantidad++
        productosEnCarrito++
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
    }
    console.log(carrito);
    localStorage.setItem('carrito',  JSON.stringify(carrito))
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se agrego un producto',
        showConfirmButton: false,
        timer: 1500
      })
    actualizarCarrito()
}




const actualizarCarrito = () => {
    const carrLocalStorage=  JSON.parse(localStorage.getItem('carrito'));
    contenedorCarrito.innerHTML=""
    carrLocalStorage.forEach((producto) => {

        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${producto.nombre}</p>
        <p>Precio:$ ${producto.precio}</p>
        <p>Cantidad: <span id="cantidad">${producto.cantidad} </span></p>
        <button onclick="eliminarDelCarrito(${producto.sku})"class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>

        `
        contenedorCarrito.appendChild(div)
        localStorage.setItem('carrito',  JSON.stringify(carrLocalStorage))
      // localStorage.setItem('carrito', JSON.stringify(carrito))
    })
    contadorCarrito.innerText = carrLocalStorage.length

    precioTotal.innerText = carrito.reduce((acc, producto) => acc+ producto.precio * producto.cantidad, 0)

}




const eliminarDelCarrito = (prodId) => { 
    Swal.fire({
        title: 'Desea eliminar el producto?',
        icon: 'ATENCION',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Borrarlo!'
      }).then((result) => {
        if (result.isConfirmed) {
            let newcar= JSON.parse(localStorage.getItem('carrito'));
            //  localStorage.setItem('carrito',  JSON.stringify(newcar))
            const item = newcar.find((producto) => producto.sku === prodId)
            const indice = newcar.indexOf(item) 
            newcar.splice(indice, 1) 
            localStorage.removeItem("carrito"); 
            localStorage.setItem('carrito',  JSON.stringify(newcar))
            Swal.fire(
            'Borrado!',
            'El producto se quito del carrito',
            'success'
            )
        }
        actualizarCarrito()
      })
}



