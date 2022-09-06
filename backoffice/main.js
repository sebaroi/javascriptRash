const productos = [
  {sku: 1, categoria: "placas de video", nombreProdu: " Placa de video GeForce GTX 1650 OC Edition 4GB", precio: 68857, descripcion: "placa de video", stock: 4, posicion: "primero", imagen:"https://http2.mlstatic.com/D_NQ_NP_748889-MLA33086323650_122019-O.webp" },
  {sku: 2, categoria: "Mothers", nombreProdu: "Mother Asrock Asrock Intel 1151 B150m-hds", precio: 24999, descripcion: "Mother para pc", stock: 7, posicion: "primero", imagen:"https://http2.mlstatic.com/D_NQ_NP_845897-MLA50283915954_062022-O.webp" },
  {sku: 3, categoria: "Mothers", nombreProdu: "Mother Asus Asus Prime B460m-a S1200", precio: 16975, descripcion: "Mother para pc", stock: 4, posicion: "primero", imagen:"https://http2.mlstatic.com/D_NQ_NP_799372-MLA48026435344_102021-O.webp" },
  {sku: 4, categoria: "Notebook", nombreProdu: "Notebook Asus E410MA 14 | Celeron N4020 | 4GB | SSD 128 GB", precio: 62319, descripcion: "Notebook super elegante", stock: 4, posicion: "primero", imagen:"https://http2.mlstatic.com/D_NQ_NP_666672-MLA46217453580_052021-O.webp" },
  {sku: 5, categoria: "placas de video", nombreProdu: "Placa de video GeForce RTX 30 Series RTX 3080 Ti 12G", precio: 348985, descripcion: "placa de video", stock: 4, posicion: "primero", imagen:"https://http2.mlstatic.com/D_NQ_NP_714103-MLA48789604551_012022-O.webp" },
  {sku: 6, categoria: "Mothers", nombreProdu: "Combo Actualizacion Pc Intel I5 10400 + 8gb + Mother H410", precio: 62488, descripcion: "combo pc", stock: 7, posicion: "primero", imagen:"https://http2.mlstatic.com/D_NQ_NP_668651-MLA48394675585_112021-O.webp" },
  {sku: 7, categoria: "Mothers", nombreProdu: "Motherboard B450 Aorus Pro Wifi Am4 Amd 3ra Gen Ryzen", precio: 45999, descripcion: "Mother para pc", stock: 4, posicion: "primero", imagen:"https://http2.mlstatic.com/D_NQ_NP_838061-MLA43272931777_082020-O.webp" },
  {sku: 8, categoria: "Notebook", nombreProdu: "Notebook Lenovo Ideapad 3 14iil05 | 8GB | SSD 128 GB", precio: 88369, descripcion: "Notebook super elegante", stock: 4, posicion: "primero", imagen:"https://http2.mlstatic.com/D_NQ_NP_975834-MLA51015201380_082022-O.webp" },
  {sku: 9, categoria: "Monitor", nombreProdu: "Monitor gamer curvo Samsung F390 Series C24F390FH led 24 ", precio: 88365, descripcion: "Notebook super elegante", stock: 4, posicion: "primero", imagen:"https://th.bing.com/th/id/OIP.NqyOwwdUhU7fsed6Ga0YfAHaGk?pid=ImgDet&rs=1" },
  {sku: 10, categoria: "Monitor", nombreProdu: "Monitor gamer Asus Eye Care VA27EHE led 27 ", precio: 58.999, descripcion: "El monior para vos", stock: 4, posicion: "primero", imagen:"https://http2.mlstatic.com/D_NQ_NP_665931-MLA45212708615_032021-O.webp" },
  {sku: 11, categoria: "sillaGamer", nombreProdu: "Silla gamer GCAMRN1 gamer ergonómica negra y roja", precio: 42333, descripcion: "Silla gamer super argonomica", stock: 4, posicion: "primero", imagen:"https://http2.mlstatic.com/D_NQ_NP_956059-MLA49010062832_022022-O.webp" },
  {sku: 12, categoria: "sillaGamer", nombreProdu: "Silla gamer pro basic negra y blanca", precio: 44525, descripcion: "Silla gamer super argonomica", stock: 4, posicion: "primero", imagen:"https://http2.mlstatic.com/D_NQ_NP_893396-MLA45978328032_052021-O.webp" },   
  {sku: 13, categoria: "Accesorios-Perifericos", nombreProdu: "Kit de teclado y mouse gamer Noga NKB-407 Español", precio: 2849, descripcion: "Kit de teclado y mouse gamer Noga NKB-407 Español", stock: 4, posicion: "segundo", imagen:"https://http2.mlstatic.com/D_NQ_NP_925137-MLA46481715370_062021-O.webp" },
  {sku: 14, categoria: "Accesorios-Perifericos", nombreProdu: "Mouse de juego Logitech G Series Lightsync G203 lila", precio: 3655, descripcion: "Mouse de juego Logitech G Series Lightsync G203 lila", stock: 4, posicion: "segundo", imagen:"https://http2.mlstatic.com/D_NQ_NP_746987-MLA45385615382_032021-O.webp" },
  {sku: 15, categoria: "Accesorios-Perifericos", nombreProdu: "Auriculares gamer inalámbricos HyperX Cloud Flight ", precio:18699, descripcion: "Super auriculares", stock: 4, posicion: "segundo", imagen:"https://http2.mlstatic.com/D_NQ_NP_675916-MLA40762447172_022020-O.webp" },
  {sku: 16, categoria: "Accesorios-Periferico", nombreProdu: "Cámara web Libercam WC801 Full HD color negro", precio: 2499, descripcion: "Exceletne calidad", stock: 4, posicion: "segundo", imagen:"https://http2.mlstatic.com/D_NQ_NP_768801-MLA49829797874_052022-O.webp" },
  {sku: 17, categoria: "Pc armadas", nombreProdu: "Pc Gamer Ryzen 3 4350g | 8gb |240 ssd| Radeon Vega", precio: 64499, descripcion: "Pc para aprovechar", stock: 4, posicion: "tercero", imagen:"https://http2.mlstatic.com/D_NQ_NP_764522-MLA49337134146_032022-O.webp" },
  {sku: 18, categoria: "Pc armadas", nombreProdu: "Pc Gamer Ryzen 3 4350g | 8gb |240 ssd con monitor 22´", precio: 74999, descripcion: "Pc para aprovechar", stock: 4, posicion: "tercero", imagen:"https://http2.mlstatic.com/D_NQ_NP_954583-MLA31512056604_072019-O.webp" },
  {sku: 19, categoria: "Monitor", nombreProdu: "Monitor curvo Samsung T55 C32T550 led 32´", precio: 81999, descripcion: "Exceletne calidad", stock: 4, posicion: "tercero", imagen:"https://http2.mlstatic.com/D_NQ_NP_768801-MLA49829797874_052022-O.webp" },
  {sku: 20, categoria: "Accesorios-Periferico", nombreProdu: "Auriculares gamer Redragon Lamia 2 lunar white", precio: 8795, descripcion: "Exceletne calidad", stock: 4, posicion: "tercero", imagen:"https://http2.mlstatic.com/D_NQ_NP_700257-MLA44366065265_122020-O.webp" },
]

const nodoPrincipal = document.getElementById("contenedorProductos")
const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')
const botonProd = document.getElementById('botonProd') 
const pantallaPrincipal = document.getElementById('pantallaPrincipal') 
const logout = document.getElementById('logout') 



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

/* -------------------------------para el logout------------------- */
logout.addEventListener("click",()=>{
  sessionStorage.removeItem('usuarioLog')
  localStorage.removeItem('carrito')
  localStorage.setItem('carrito',  JSON.stringify([]))
  window.location.href="../../frontoffice/principal.html"
  })

