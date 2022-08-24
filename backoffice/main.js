const productos = [
    {sku: 1, categoria: "placas de video", nombreProdu: " pepito vidia Asus Dual GeForce GTX 1650 OC Edition 4GB", precio: 80200, descripcion: "placa de video", stock: 4, imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_770553-MLA44835817388_022021-F.webp" },
    {sku: 2, categoria: "Mothers", nombreProdu: "Asrock A68", precio: 5800, descripcion: "Mother para pc", stock: 7, imagen:"https://http2.mlstatic.com/D_NQ_NP_759323-MLA42590871149_072020-O.webp" },
    {sku: 3, categoria: "Mothers", nombreProdu: "Asus k56nb", precio: 1520, descripcion: "Mother para pc", stock: 4, imagen:"https://http2.mlstatic.com/D_NQ_NP_914646-MLA49335236971_032022-O.webp" },
    {sku: 4, categoria: "Notebook", nombreProdu: "Notebook Asus E410MA 14 | Celeron N4020 | 4GB | SSD 128 GB", precio: 104.500, descripcion: "Notebook super elegante", stock: 4, imagen:"https://http2.mlstatic.com/D_NQ_NP_666672-MLA46217453580_052021-O.webp" },
    {sku: 5, categoria: "placas de video", nombreProdu: "Nvidia Asus Dual GeForce GTX 1650 OC Edition 4GB", precio: 80200, descripcion: "placa de video", stock: 4, imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_770553-MLA44835817388_022021-F.webp" },
    {sku: 6, categoria: "Mothers", nombreProdu: "Asrock A68", precio: 5800, descripcion: "Mother para pc", stock: 7, imagen:"https://http2.mlstatic.com/D_NQ_NP_759323-MLA42590871149_072020-O.webp" },
    {sku: 7, categoria: "Mothers", nombreProdu: "Asus k56nb", precio: 1520, descripcion: "Mother para pc", stock: 4, imagen:"https://http2.mlstatic.com/D_NQ_NP_914646-MLA49335236971_032022-O.webp" },
    {sku: 8, categoria: "Notebook", nombreProdu: "Notebook Asus E410MA 14 | Celeron N4020 | 4GB | SSD 128 GB", precio: 104.500, descripcion: "Notebook super elegante", stock: 4, imagen:"https://http2.mlstatic.com/D_NQ_NP_666672-MLA46217453580_052021-O.webp" },
]


/* const categorias = ["placas de Video", "mother", "Notebooks", "monitores" ]
const nodoPrincipal = document.getElementById("contenedorProductos")
const contenedorCarrito = document.getElementById('carritoContenedor')
const botonVaciar = document.getElementById('vaciarCarrito')
const contadorCarrito = document.getElementById('contadorCarrito')
const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')
const botonProd = document.getElementById('botonProd') */


botonProd.addEventListener("click", ()=>{
    window.location.href="../backoffice/alta-producto/altaproducto.html"
})



const modificar = document.getElementById('modificar')
modificar.addEventListener('click', () => {
    window.location.href="../backoffice/alta-producto/modificarProducto.html"
    })


/* let carrito = []


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

 */

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
   /*  agregarAlCarrito(producto) */
    })
})


let productosEnCarrito=0
let existe
// let newcar= JSON.parse(localStorage.getItem('carrito'));
/* function agregarAlCarrito (producto)  {
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

 */

/* 
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
} */


const borrar = document.getElementById('borrar')
borrar.addEventListener('click', () => {
borrarProducto()
})

function borrarProducto(){
Swal.fire({
    title: "Eliminar un Producto",
    text: "Ingrese el ID del producto a Eliminar:",
    input: 'number',
    showCancelButton: true,
    cancelButtonText: "CANCELAR"
  }).then((result) => {
    let nuevoId = result.value
    if (nuevoId != undefined) {
      let eliminarProducto = productos.find(productos => productos.sku == nuevoId)
      const indice = productos.indexOf(eliminarProducto)

      if (eliminarProducto == undefined) {
        Swal.fire("Producto no encontrado", "El codigo ingresado no corresponde a ningun producto", "error")
      } else {
        Swal.fire({
          title: "Eliminar Producto",
          text: `¿Esta seguro ?`,
          icon: "warning",
          showCancelButton: true,
          cancelButtonText: "CANCELAR"
        }).then((result) => {
          if (result.value) {
            productos.splice(indice, 1)
            localStorage.removeItem("productos")
            localStorage.setItem('productos',  JSON.stringify(productos))
            window.location.href="../backoffice/index.html"                  }
        })
      }
    }
  })
}