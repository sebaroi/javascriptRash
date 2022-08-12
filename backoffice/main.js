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


const categorias = ["placas de Video", "mother", "Notebooks", "monitores" ]
const nodoPrincipal = document.getElementById("contenedorProductos")
const contenedorCarrito = document.getElementById('carritoContenedor')
const botonVaciar = document.getElementById('vaciarCarrito')
const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')
const botonProd = document.getElementById('botonProd')


botonProd.addEventListener("click", ()=>{
    window.location.href="../backoffice/alta-producto/altaproducto.html"
})


let carrito = []


 /*
let contCarrito = 0
function numerarProductos(){
   let conttotalcarro = conttotalcarro + contCarrito
    contCarrito++
    document.getElementById('contadorCarrito').innerHTML = conttotalcarro
}

function numerarProductosAlBorrar(){
    /*let conttotalcarro = conttotalcarro - contCarrito
    contCarrito--
    document.getElementById('contadorCarrito').innerHTML = conttotalcarro
}
*/

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
    //    actualizarCarrito()
    }
})



botonVaciar.addEventListener('click', () => {
    carrito.length = 0
 //   conttotalcarro=0
  //  document.getElementById('contadorCarrito').innerHTML = conttotalcarro
    localStorage.clear()
    actualizarCarrito()
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
    //document.body.appendChild()
    let element= `agregar${producto.sku}`

    const boton = document.getElementById(element)
    boton.addEventListener('click', () => {
    agregarAlCarrito(producto.sku)
    })
})


const numeroUnidadesItem = carrito.reduce((total, itemId) => {
    // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
    return itemId === item ? total += 1 : total;
}, 0);
// Creamos el nodo del item del carrito
//miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divis


function agregarAlCarrito (prodId)  {
    alert("Producto agregado al carrito")

    
/*  const existe = carrito.some (producto => producto.sku === prodId) 
    if (existe){ //SI YA ESTÁ EN EL CARRITO, ACTUALIZAMOS LA CANTIDAD
        alert("EXISTE")
        const Nuevoproducto = carrito.map (prod => { //creamos un nuevo arreglo e iteramos sobre cada curso y cuando
            // map encuentre cual es el q igual al que está agregado, le suma la cantidad
            if (Nuevoproducto.sku === prodId){
                cant++
            }
        })
    } else {    
  //  numerarProductos()      */
    const item = productos.find((producto) => producto.sku === prodId)
    carrito.push(item)

}



localStorage.setItem('carrito', JSON.stringify(carrito))
//actualizarCarrito()

const carrLocalStorage=  JSON.parse(localStorage.getItem('productos'));
//aca en realidad tendira que recorrer con
const actualizarCarrito = () => {
    total=0
    precioPro=0
    contenedorCarrito.innerHTML=""
    carrito.forEach((producto) => {
        precioPro=producto.precio
        total+= precioPro

        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${producto.nombreProdu}</p>
        <p>Precio:$ ${producto.precio}</p>
        <p>Cantidad: <span id="cantidad">${numeroUnidadesItem} </span></p>
        <button onclick="eliminarDelCarrito(${producto.sku})"class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>

        `
        contenedorCarrito.appendChild(div)
    //    preciotot= preciotot + ${producto.precio} 
       localStorage.setItem('carrito', JSON.stringify(carrito))
    })

    //contCarrito = precioprod + 1 
   precioTotal.innerText = total
}

 //   preciotot= preciotot + ${producto.precio} 


const eliminarDelCarrito = (prodId) => { 

    const item = carrito.find((producto) => producto.sku === prodId)
    const indice = carrito.indexOf(item) 
    carrito.splice(indice, 1) 
  //  numerarProductosAlBorrar()
    localStorage.removeItem("carrito"); 
    localStorage.setItem('carrito', JSON.stringify(carrito))
    alert("Borrado")

}
