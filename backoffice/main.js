const productos = [
  {sku: 1, categoria: "placas de video", nombreProdu: " pepito vidia Asus Dual GeForce GTX 1650 OC Edition 4GB", precio: 80200, descripcion: "placa de video", stock: 4, posicion: "primero", imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_770553-MLA44835817388_022021-F.webp" },
  {sku: 2, categoria: "Mothers", nombreProdu: "Asrock A68", precio: 5800, descripcion: "Mother para pc", stock: 7, posicion: "primero", imagen:"https://http2.mlstatic.com/D_NQ_NP_759323-MLA42590871149_072020-O.webp" },
  {sku: 3, categoria: "Mothers", nombreProdu: "Asus k56nb", precio: 1520, descripcion: "Mother para pc", stock: 4, posicion: "primero", imagen:"https://http2.mlstatic.com/D_NQ_NP_914646-MLA49335236971_032022-O.webp" },
  {sku: 4, categoria: "Notebook", nombreProdu: "Notebook Asus E410MA 14 | Celeron N4020 | 4GB | SSD 128 GB", precio: 104.500, descripcion: "Notebook super elegante", stock: 4, posicion: "primero", imagen:"https://http2.mlstatic.com/D_NQ_NP_666672-MLA46217453580_052021-O.webp" },
  {sku: 5, categoria: "placas de video", nombreProdu: "Nvidia Asus Dual GeForce GTX 1650 OC Edition 4GB", precio: 80200, descripcion: "placa de video", stock: 4, posicion: "primero", imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_770553-MLA44835817388_022021-F.webp" },
  {sku: 6, categoria: "Mothers", nombreProdu: "Asrock A68", precio: 5800, descripcion: "Mother para pc", stock: 7, posicion: "primero", imagen:"https://http2.mlstatic.com/D_NQ_NP_759323-MLA42590871149_072020-O.webp" },
  {sku: 7, categoria: "Mothers", nombreProdu: "Asus k56nb", precio: 1520, descripcion: "Mother para pc", stock: 4, posicion: "primero", imagen:"https://http2.mlstatic.com/D_NQ_NP_914646-MLA49335236971_032022-O.webp" },
  {sku: 8, categoria: "Notebook", nombreProdu: "Notebook Asus E410MA 14 | Celeron N4020 | 4GB | SSD 128 GB", precio: 104.500, descripcion: "Notebook super elegante", stock: 4, posicion: "primero", imagen:"https://http2.mlstatic.com/D_NQ_NP_666672-MLA46217453580_052021-O.webp" },
  {sku: 9, categoria: "teclado", nombreProdu: "Teclado gamer Redragon Dragonborn K630", precio: 7.500, descripcion: "Función antighosting incorporada Tipo de teclado: mecánico.", stock: 4, posicion: "segundo", imagen:"https://http2.mlstatic.com/D_NQ_NP_897779-MLA46504109530_062021-O.webp" },
]


const nodoPrincipal = document.getElementById("contenedorProductos")
const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')
const botonProd = document.getElementById('botonProd') 
const pantallaPrincipal = document.getElementById('pantallaPrincipal') 


pantallaPrincipal.addEventListener("click", () => {
  window.location.href="../../frontoffice/principal.html"
})

botonProd.addEventListener("click", ()=>{
    window.location.href="../backoffice/alta-producto/altaproducto.html"
})




const modificar = document.getElementById('modificar')
modificar.addEventListener('click', () => {
    window.location.href="../backoffice/alta-producto/modificarProducto.html"
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
                        <p>ID ${producto.sku}</p>
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
    })
})



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