//***********************MODAL********************************** */
const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]


botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', (event) =>{
    contenedorModal.classList.toggle('modal-active')

})
modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation() 
})

//************************MODAL****************************************** */


const nodoPrincipal = document.getElementById("contenedorProductos")


const contenedorCarrito = document.getElementById('carritoContenedor')

const botonVaciar = document.getElementById('vaciarCarrito')

const contadorCarrito = document.getElementById('contadorCarrito')

const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []


document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})


catalogoProdu.productos.forEach((producto)=>{
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
                        <div class="botonComprar" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <button id="agregar${producto.sku}" class="button" <i class="fas fa-shopping-cart"></i>COMPRAR</button><i class="fas fa-shopping-cart"></i>
                        </div>
                    </div>
                </div> `
    nodoPrincipal.appendChild(divProducto);
    //document.body.appendChild()
    let element= `agregar${producto.sku}`

    const botonAgregar = document.getElementById(element)
    botonAgregar.addEventListener('click', () => {
    agregarAlCarrito(producto.sku)
    })
})


function agregarAlCarrito (prodId)  {
    const Item = catalogoProdu.productos.find((producto) => producto.sku === prodId)
    carrito.push(item)
    actualizarCarrito()
    console.log(carrito)
}


const eliminarDelCarrito = (prodId) => {
    const Item = carrito.find((producto) => producto.sku === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice,1)
    actualizarCarrito()
}



const actualizarCarrito = () => {
    contenedorCarrito.innerHTML=""
    carrito.forEach((producto) => {
        const div = document.createElement('div')
        //aca iria el css del carrito div.className= ('el nombre de la clase del css')
        div.innerHTML = `
        <p>${producto.nombreProdu}</p>
        <p>${producto.imagen}</p>
        <p>Precio:$ ${producto.precio}</p>
        <p>cantidad: <span id="cantidad">${producto.stock}</span> </p>
        <button onclick = "eliminarDelCarrito((${producto.sku})" class="botonComprar"><i class="fas fa-trash-alt"></button>

        `
        contenedorCarrito.appendChild(div)
        localStorage.setItem('carrito', JSON.stringify(carrito))
    })
    contenedorCarrito.innerHTML = carrito.length
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
}

